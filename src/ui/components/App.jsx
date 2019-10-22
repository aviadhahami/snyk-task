/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default (props) => {
	const [ssrDone, setSsrState] = useState(false);
	useEffect(() => {
		setSsrState(tree);
	});
	const { tree = {} } = props;

	if (!ssrDone) {
		return (
			<div>
				<h2>Loading.....</h2>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Hi there...{Object.keys(tree).length.toString()}</h2>
			</div>
		);
	}
};
