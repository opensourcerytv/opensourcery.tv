import Head from 'next/head'
import { Grid, Row } from 'react-bootstrap';
import { Col } from './Col'; // Rewrapped Col component.

const Layout = (props) => (
  <div>
    <Head>
      <title>Open Sourcery TV</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
			<link href="https://fonts.googleapis.com/css?family=Quattrocento|Quattrocento+Sans" rel="stylesheet" />
    </Head>
		<Grid>
			<Row className='Header'>
				<Col md={12}>
					<div className='brand'>
						<img src="/static/cartman.png" width='250' />
						<div className='brand-name'>
							<h1>open<span>sourcery</span></h1>
							{/* <h4>level-up your dev powers!</h4> */}
							<h4>level-up developer!</h4>
						</div>
					</div>
				</Col>
			</Row>
			</Grid>
		<Grid>
			{props.children}
			</Grid>
		<Grid>
			<Row className='Footer'>
				<Col md={12}>
					<span>Footer</span>
				</Col>
			</Row>
    </Grid>
		<style jsx>{`
			:global(.row) {
				position: relative;
				margin-bottom: 20px;
				padding-top: 20px;
				padding-bottom: 20px;
			}
			:global(.col) {
				padding-left: 25px;
				padding-right: 25px;
			}
			:global(.col img) {
				max-width: 100%;
			}
			:global(.row .admin-buttons) {
				max-width: 100%;
				position: absolute;
				top: 20px;
				right: 20px;
				z-index: 1;
			}
			:global(.row .admin-buttons button) {
				cursor: pointer;
			}
			:global(.brand img) {
				width: 170px;
				display: inline-block;
				margin-top: -20px;
			}
			:global(.brand .brand-name) {
				display: inline-block;
			}
			:global(.brand-name h1) {
				color: #30AABF;
				font-family: 'Quattrocento', serif;
				font-size: 4em;
				font-weight: bold;
			}
			:global(.brand-name h1 span) {
				color: #00698F;
			}
			:global(.brand-name h4) {
				font-family: 'Quattrocento Sans', sans-serif;
				margin-top: -10px;
				text-align: right;
				color: #888;
			}
			:global(.Header) {
				background-color: white;	
			}
			:global(.Header .brand) {
				margin: 0 auto;
				width: 60%;
				margin-left: 20%;
			}
			:global(.section) {
				background-color: #eee;
			}
			:global(.section .header) {
				margin-bottom: 0;
				padding-bottom: 0;
				border-bottom: 4px solid #ddd;
				color: #888;
			}
			:global(.section .body) {
				background-color: #eee;
			}
			:global(.section-people .body h3),
			:global(.section-people .body h5) {
				{/* text-align: center; */}
			}
			:global(.section-people img) {
				max-width: 80%;
				{/* margin-left: 10%; */}
			}

		`}</style>
  </div>
)

export default Layout