/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const AppContainer = styled.section`
	background-color: #21252B;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	color: #fefefe;
`;

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
