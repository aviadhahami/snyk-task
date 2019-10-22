/* eslint-disable no-unused-vars */
import React from 'react';

export default (props) => {
	const { tree } = props;
	debugger
	return (
		<div>
			<h2>Hi there {tree.children.map(n => n.name).map(v => v.toString()).toString()}</h2>
		</div>
	);
};
