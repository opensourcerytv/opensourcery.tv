import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Col } from './Col'; // Rewrapped Col component.

const Section3Col = (props) => {
	return (
		<Grid fluid={true} className='Section Section3Col'>
			<Row>
				<Col className='left' md={4} xs={12}>
					{props.col1}
				</Col>
				<Col className='middle' md={4} xs={12}>
					{props.col2}
				</Col>
				<Col className='right' md={4} xs={12}>
					{props.col3}
				</Col>
			</Row>
		</Grid>
	);
}

export default Section3Col;