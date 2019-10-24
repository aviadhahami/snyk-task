/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';

const Tree = (props) => {
	const [windowExists, setWindowState] = useState(false);
	const [translate, setTranslate] = useState({ x: 0, y: 0 });
	const treeContainer = useRef(null);

	const containerStyles = {
		width: '100%',
		height: '100vh'
	};

	useEffect(() => {
		if (window !== undefined) {
			setWindowState(true);
		}

		if (treeContainer.current) {
			const dimensions = treeContainer.current.getBoundingClientRect();

			setTranslate({
				x: dimensions.width / 2,
				y: dimensions.height / 2
			});
		}
	});

	const { data } = props;
	if (windowExists) {
		const { Tree: D3Tree } = require('react-d3-tree');
		return (
			<div style={containerStyles} ref={treeContainer}>
				<D3Tree
					data={data}
					translate={translate}
					zoomable={true}
					zoom={0.5}
					orientation={'vertical'}
				/>
			</div>
		);
	} else {
		return (
			<div>
				<p>Something is off</p>
			</div>
		);
	}
};

export default Tree;
