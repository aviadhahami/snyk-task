/* eslint-disable no-unused-vars */
import React from 'react';

export default (props) => {
	const { tree = {} } = props;
	debugger
	return (
		<div>
			<h2>Hi there...{Object.keys(tree).length.toString()}</h2>
		</div>
	);
};
