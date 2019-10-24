/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AppContainer } from './styled-components';
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
						Execution time: {Math.round(execTime / 1000)} seconds
						<br/>
						# of deps in this package: {tree.subtreeSize}
					</div>
					<div>
						<Tree data={tree}/>
					</div>
				</>
			);
		}
	};

	return (
		<AppContainer>
			{getContent()}
		</AppContainer>
	);
};

export default App;
