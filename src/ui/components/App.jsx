/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import Tree from './Tree';

const App = (props) => {
	const [ssrDone, setSsrState] = useState(false);

	useEffect(() => {
		setSsrState(true);
	});

	const getContent = () => {
		const { tree = {}, execTime } = props;

		if (!ssrDone) {
			return (
				<h2>Loading packages.....</h2>
			);
		} else {
			return (
				<>
					<div>
						data here
					</div>
					<div style={styles.treeContainer}>
						<Tree data={tree}/>
					</div>
				</>
			);
		}
	};

	return (
		<div style={styles.container}>
			{getContent()}
		</div>
	);
};

export default App;
