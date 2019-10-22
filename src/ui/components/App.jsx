/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';

const App = (props) => {
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
				<Tree data={tree} />
			</div>
		);
	}
};

export default App;
