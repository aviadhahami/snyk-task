/* eslint-disable no-unused-vars */
import set from '@babel/runtime/helpers/esm/set';
import React, { useEffect, useState } from 'react';
import { styles } from '../styles';

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
			<ul
				key={id}
				style={styles.list}>
				<li style={{ backgroundColor: 'blue' }}>
					<p onClick={() => toggleNode(node)}>
						{name}: {version}
					</p>
					<div>
						{getChildren(node)}
					</div>
				</li>
			</ul>
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
