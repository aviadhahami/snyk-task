import styled from 'styled-components';

export const AppContainer = styled.section`
	background-color: #21252B;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	color: #fefefe;
	font-family: 'Open Sans', sans-serif;
	overflow: auto;
`;

export const ContentContainer = styled.section`
	background-color: #21252B;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	color: #fefefe;
	font-family: 'Open Sans', sans-serif;
	overflow: auto;
`;

export const TreeNode = styled.ul`
	list-style-type: none;
`;

export const TreeNodeInfo = styled.li`
		cursor: auto;
	${
	(props) => props.hasChildren && `
		cursor: pointer;
	`}
}
`;

export const AppHeader = styled.h2`
	text-align:center;
	color:red;
`;
