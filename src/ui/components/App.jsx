/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toUpperCase from 'lodash/toUpper'
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
			const { tree = {}, execTime } = props;
			console.log(tree);
			return (
				<>
					<AppHeader>
						{toUpperCase(`INFORMATION ABOUT ${tree.name}: ${tree.version}`)}
					</AppHeader>
					<ContentContainer>
						<div>
							Execution time: {Math.round(execTime / 1000)} seconds
							<br/>
							dependencies tree size: {parseInt(tree.subtreeSize).toLocaleString('en')}
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
