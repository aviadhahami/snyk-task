/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { styles } from '../styles';

const Tree = (props) => {
	const [windowExists, setWindowState] = useState(false);

	useEffect(() => {
		if (window !== undefined) {
			setWindowState(true);
		}
	});

	const { data } = props;

	function generateTree ({ name, version, children }) {
		// const [toggle, setToggle] = useState(false);

		function getChildren () {
			return children.map(generateTree);
		}

		return (
			<ul
				key={name + version + Date.now()}
				style={styles.list}>
				<li>
					<div>
						<p>
							{name}: {version}
						</p>
						{getChildren(children)}
					</div>
				</li>
			</ul>
		);
	}

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
