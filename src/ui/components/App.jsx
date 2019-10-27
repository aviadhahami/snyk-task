/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toUpperCase from 'lodash/toUpper';
import { AppContainer, AppHeader, ContentContainer } from './styled-components';
import Tree from './Tree';

const App = (props) => {
	const [ssrDone, setSsrState] = useState(false);

	useEffect(() => {
		setSsrState(true);
	});

	const getContent = () => {
		if (!ssrDone) {
			return (
				<h2>Loading packages.....</h2>
			);
		} else {
			const { tree = {}, execTime, size } = props;
			return (
				<>
					<AppHeader>
						{toUpperCase(`INFORMATION ABOUT ${tree.name}: ${tree.version}`)}
					</AppHeader>
					<ContentContainer>
						<div>
							Execution time: {execTime} ms
							<br/>
							# of nodes in tree: {parseInt(tree.subtreeSize).toLocaleString('en')}
							<br/>
							Size of tree in memory: ${(size / 1e-6).toString().substring(0, 7)}MB
						</div>
						<div>
							<Tree data={tree}/>
						</div>
					</ContentContainer>
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
