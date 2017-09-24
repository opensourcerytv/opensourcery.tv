import React, { PropTypes } from 'react';
import { Col as _Col } from 'react-bootstrap';

// Wrap react-bootstrap's Col component and add 'col' className.
function HoC(WrappedComponent) {
  return class Col extends React.Component {
    render() {
      	const className = this.props.className ? this.props.className + ' col' : 'col'
		//   const style = { border: '1px solid red' }
		const style = {}
		const _props = {...this.props, className, style};
    	return <WrappedComponent {..._props}/>
    }
  }
}

export const Col = HoC(_Col);