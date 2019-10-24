/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TreeNode } from './styled-components';

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

	function getChildren (node) {
		if (toggled[node.id]) {
			return node.children.map(d => {
				console.log({ d });
				return generateTree(d);
			});
		}
		return (<></>);
	}

	function generateTree (node) {
		const { id, name, version, children } = node;

		return (
			<TreeNode
				key={id}>
				<li>
					<p onClick={() => toggleNode(node)}>
						{name}: {version}
					</p>
					<div>
						{getChildren(node)}
					</div>
				</li>
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
