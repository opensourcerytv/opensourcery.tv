import axios from 'axios'
import { Base64 } from 'js-base64'
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

export default class GithubContentProvider {
	username
	reponame
	baseurl
	dir
	db

	constructor(username, reponame, dir) {
		this.username = username
		this.reponame = reponame
		this.baseurl = `https://api.github.com/repos/${username}/${reponame}/contents`
		this.dir = dir
	}

	init() {
		const adapter = new LocalStorage('db')
		this.db = low(adapter)
		this.db.defaults({ [this.dir]: [] }).write()
		if (this.db.get(this.dir).value().length > 0) {
			console.log('from cache');
			return Promise.resolve()
		} else {
			console.log('crawl');
			return this.crawl()
		}
	}

	crawl() {
		const url = `${this.baseurl}/${this.dir}`
		console.log('url', url);
		return axios.get(url)
			.then(res => res.data.filter(file => file.type === 'file'))
			.then(files => Promise.all(files.map(file => this.fetchFile(file.path))))
			.catch(err => console.log('err', err))
	}

	fetchFile(path) {
		if (this.db.get(this.dir).find({ path: path }).value()) {
			return Promise.resolve(file);
		} else {
			console.log('fetchFile axios', path);
			return axios.get(`${this.baseurl}/${path}`)
				.then(res => res.data)
				.then(file => ({ ...file, content: Base64.decode(file.content)}))
				.then(file => {
					this.db.get(this.dir).remove({ path: file.path })
					this.db.get(this.dir).push(file).write()
					return file
				})
				.catch(err => console.log('err', err))
		}
	}

	items() {
		return this.db.get(this.dir).value()
	}

	// content(path) {
	// 	return this.db.get(this.dir).find({ path }).value().content
	// }

	clearCache = () => {
		this.db.setState({ [this.dir]: []}).write()
		window.location.reload()
	}
}