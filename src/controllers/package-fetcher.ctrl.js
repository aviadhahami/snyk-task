import axios from 'axios';
import { fetchDepsTree } from '../logic/deps-tree-fetcher';
import { printTree } from '../logic/tree-printer';
import { Node } from './../structs/Node';
import { generateURL } from '../api';

const fetch = async ({ packageName, packageVersion = 'latest' }) => {
	const url = generateURL({ name: packageName, version: packageVersion });
	try {
		const {
			data: {
				dependencies = {}
			}
		} = await axios.get(url);

		const tree = new Node({ name: packageName, version: packageVersion });

		if (Object.keys(dependencies).length) {
			const children = await Promise.all(
				Object.entries(dependencies)
					.map(async ([name, version]) => fetch({ packageName: name, packageVersion: version }))
			);
			tree.children = children;
		}
		return tree;
	} catch (e) {
		const tree = new Node({ name: packageName, version: packageVersion });
		return tree;
	}
};

async function packageFetcher (req, res) {
	const { packageName } = req.params;
	try {
		const tree = await fetchDepsTree({ packageName });
		printTree(tree);
		return res.status(200).send(tree);
	} catch (e) {
		return res.status(500).send(e.message);
	}
}

// Named exports for easier auto-importing by the IDE
export {
	packageFetcher
};
