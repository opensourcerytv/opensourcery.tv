import React from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
// import { Row } from 'react-bootstrap'
// import { Col } from '../components/Col' // Rewrapped Col component.
import People from '../components/People'
import Subjects from '../components/Subjects'

// import Section1Col from '../components/Section1Col'
// import Section3Col from '../components/Section3Col'

// import ReactMarkdown from 'react-markdown';
// import JSONInspector from '../components/JSONInspector'

// import GithubContentProvider from '../utils/GithubContentProvider'
// const people = new GithubContentProvider('opensourcerytv', 'opensourcery-content', 'people');
// const events = new GithubContentProvider('opensourcerytv', 'opensourcery-content', 'events');
// const subjects = new GithubContentProvider('opensourcerytv', 'opensourcery-content', 'subjects');

// import { events, subjects, people } from '../content'
// console.log('events', events)

// This is our root "App" component. It is aut
export default class extends React.Component {
  
  constructor (props) {
		super(props)
		this.state = {
			loading: true,
		}
  }

  render () {
		return (
			<Layout>
				<Subjects/>
				<People/>
			</Layout>
		)
	}
}
