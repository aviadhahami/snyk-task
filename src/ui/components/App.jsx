/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Tree from './Tree';

const styles = {
	container: {
		backgroundColor: '#21252B',
		width: '100%',
		height: '100%',
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center'
	}
};
const App = (props) => {
	const [ssrDone, setSsrState] = useState(false);

	useEffect(() => {
		setSsrState(true);
	});

	const getContent = () => {
		const { tree = {} } = props;

		if (!ssrDone) {
			return (
				<h2>Loading packages.....</h2>
			);
		} else {
			return (<Tree data={tree}/>);
		}
	};

	return (
		<div style={styles.container}>
			{getContent()}
		</div>
	);
};

export default App;
