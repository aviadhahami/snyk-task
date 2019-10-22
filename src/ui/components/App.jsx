/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

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
				<Tree
					data={tree}
					height={700}
					width={1000}/>
			</div>
		);
	}
};
