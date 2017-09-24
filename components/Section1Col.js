import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Col } from './Col'; // Rewrapped Col component.

const Section1Col = (props) => {
	return (
		<Grid fluid={true} className='Section Section1Col'>
			<Row>
				<Col className='middle' md={12} xs={12}>
					{props.col1}
				</Col>
			</Row>
		</Grid>
	);
}

export default Section1Col;