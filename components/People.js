import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import { Col } from '../components/Col'
import ReactMarkdown from 'react-markdown'
import GithubContentProvider from '../utils/GithubContentProvider'
const db = new GithubContentProvider('opensourcerytv', 'opensourcery-content', 'people')

export default class extends React.Component {
  
  	constructor (props) {
		super(props)
		this.state = {
			loading: true,
			items: []
		}
  	}

  	componentDidMount () {
		db.init().then(() => {
			this.setState({ 
				loading: false,
				items: db.items(),
			})
		});
	}

  	render () {
		return (
			<Grid fluid={true} className='section section-people'>
				<Row className='header'>
					{this._makeAdminButtons()}
					<Col md={12}>
						<h1>mentors</h1>
					</Col>
				</Row>
				<Row className='body'>
					{this._makeCols()}
				</Row>
			</Grid>
		)
	}

	_makeCols() {
		if (this.state.loading) {
			return (
				<Col className='person' md={4} xs={12}>
					<h1>Loading...</h1>
				</Col>
			)
		} else {
			return this.state.items
				.filter((file) => file.name.includes('.md'))
				.map((item, i) => {
					return (
						<Col key={i} className='person' md={4} xs={12}>
							<ReactMarkdown source={item.content} />
						</Col>
					)
				})
		}  
	}

	_makeAdminButtons() {
		if (this.state.loading) {
			return null;
		}
		// localStorage.setItem('isAdmin', true)
		if (!localStorage.getItem('isAdmin')) {
			return null
		}
		return (
			<div className='admin-buttons' md={12}>
				<button onClick={db.clearCache}>Clear Cache</button>
			</div>
		)
	}
}
