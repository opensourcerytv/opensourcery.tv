import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Col } from './Col'; // Rewrapped Col component.

const People = ({props}) => {
	return (
		<Row className='People'>
			{props.people.map((person, i) => {
				return (
					<Col key={i} className='person' md={4} xs={12}>
						{person}
					</Col>
				)
			})}
		</Row>
	);
}

export default People;