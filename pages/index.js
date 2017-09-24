import React from 'react'
import Layout from '../components/Layout'
import People from '../components/People'
import Subjects from '../components/Subjects'

// This is our root "App" component.
export default class extends React.Component {
  render () {
		return (
			<Layout>
				<Subjects/>
				<People/>
			</Layout>
		)
	}
}
