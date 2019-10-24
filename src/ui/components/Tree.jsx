/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';

const Tree = (props) => {
	const [windowExists, setWindowState] = useState(false);

	useEffect(() => {
		if (window !== undefined) {
			setWindowState(true);
		}
	});

	const [cursor, setCursor] = useState(false);

	const onToggle = (node, toggled) => {
		if (cursor) {
			cursor.active = false;
		}
		node.active = true;
		if (node.children) {
			node.toggled = toggled;
		}
		setCursor(node);
	};

	const { data } = props;
	if (windowExists) {
		const { Treebeard } = require(/* react-treebeard */'react-treebeard');
		return (
			<Treebeard
				data={data}
				onToggle={onToggle}/>
		);
	}

	return (
		<div>
			<p>Something is off</p>
		</div>
	);
};

export default Tree;
