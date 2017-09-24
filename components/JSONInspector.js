import React from 'react'
import Inspector from 'react-json-inspector'

export default ({ data, children }) => (
	<div className='JSONInspector'>
		<Inspector data={data}/>
		<style jsx>{`
			:global(.json-inspector),
			:global(.json-inspector__selection) {
				font: 14px/1.4 Consolas, monospace;
			}
			
			:global(.json-inspector__leaf) {
				padding-left: 10px;
			}
			
			:global(.json-inspector__line) {
				display: block;
				position: relative;
			
				cursor: default;
			}
			
			:global(.json-inspector__line:after) {
				content: '';
			
				position: absolute;
				top: 0;
				left: -200px;
				right: -50px;
				bottom: 0;
				z-index: -1;
			
				pointer-events: none;
			}
			
			:global(.json-inspector__line:hover:after) {
				background: rgba(0, 0, 0, 0.06);
			}
			
			:global(.json-inspector__leaf_composite > .json-inspector__line) {
				cursor: pointer;
			}
			
			:global(.json-inspector__radio),
			:global(.json-inspector__flatpath) {
				display: none;
			}
			
			:global(.json-inspector__value) {
				margin-left: 5px;
			}
			
			:global(.json-inspector__search) {
				min-width: 300px;
				margin: 0 10px 10px 0;
				padding: 2px;
			}
			
			:global(.json-inspector__key) {
				color: #505050;
			}
			
			:global(.json-inspector__value_helper),
			:global(.json-inspector__value_null),
			:global(.json-inspector__not-found) {
				color: #b0b0b0;
			}
			
			:global(.json-inspector__value_string) {
				color: #798953;
			}
			
			:global(.json-inspector__value_boolean) {
				color: #75b5aa;
			}
			
			:global(.json-inspector__value_number) {
				color: #d28445;
			}
			
			:global(.json-inspector__hl) {
				background: #ff0;
				box-shadow: 0 -1px 0 2px #ff0;
				border-radius: 2px;
			}
			
			:global(.json-inspector__show-original) {
				display: inline-block;
				padding: 0 6px;
			
				color: #666;
				cursor: pointer;
			}
			
			:global(.json-inspector__show-original:hover) {
				color: #111;
			}
			
			:global(.json-inspector__show-original:before) {
				content: '⥂';
			}
			
			:global(.json-inspector__show-original:hover:after) {
				content: ' expand'
			}	
		`}</style>
	</div>
)
