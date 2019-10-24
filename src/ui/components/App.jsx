/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const App = (props) => {
	const [ssrDone, setSsrState] = useState(false);
	const [windowExists, setWindowState] = useState(false);

	useEffect(() => {
		setSsrState(true);
		if (window !== undefined) {
			setWindowState(true);
		}
	});

	const { tree = {} } = props;

	if (!ssrDone) {
		return (
			<div>
				<h2>Loading.....</h2>
			</div>
		);
	} else {
		if (windowExists) {
			const { Tree } = require('react-d3-tree');
			return (
				<div>
					<Tree data={tree} />
				</div>
			);
		} else {
			return (
				<div>
					<p>Something is off</p>
				</div>
			);
		}
	}
};

export default App;
