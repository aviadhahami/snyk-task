/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TreeNode, TreeNodeInfo } from './styled-components';

const Tree = (props) => {
	const [windowExists, setWindowState] = useState(false);
	const [toggled, setToggled] = useState({});

	useEffect(() => {
		if (window !== undefined) {
			setWindowState(true);
		}
	});

	function toggleNode (node) {
		setToggled({ ...toggled, [node.id]: !toggled[node.id] });
	}

	function getChildren (n) {
		return toggled[n.id] ? n.children.map(generateTree) : (<></>);
	}

	function generateTree (node) {
		const { id, name, version, children } = node;

		return (
			<TreeNode
				key={id}>
				<TreeNodeInfo hasChildren={children.length}>
					<p onClick={() => toggleNode(node)}>
						[{node.subtreeSize - 1}] {name}: {version}
					</p>
					<div>
						{getChildren(node)}
					</div>
				</TreeNodeInfo>
			</TreeNode>
		);
	}

	const { data } = props;
	if (windowExists) {
		return (
			<>
				{generateTree(data)}
			</>
		);
	}

	return (
		<div>
			<p>Something is off</p>
		</div>
	);
};

export default Tree;
