import axios from 'axios';
import { generateURL } from '../../api';
import { Node } from '../../structs/Node';

const fetchDepsTree = async ({ packageName, packageVersion = 'latest', firstInvoke = false }) => {
	const url = generateURL({ name: packageName, version: packageVersion });
	const tree = new Node({ name: packageName, version: packageVersion, isRoot: firstInvoke });
	try {
		const {
			data: {
				dependencies = {}
			}
		} = await axios.get(url);

		if (Object.keys(dependencies).length) {
			tree.children = await Promise.all(
				Object.entries(dependencies)
					.map(async ([name, version]) => fetchDepsTree({ packageName: name, packageVersion: version }))
			);
		}
		return tree;
	} catch (e) {
		if (e.response && e.response.status === 404) {
			throw new Error('NPM says nope. so nope.');
		}
		return tree;
	}
};
export {
	fetchDepsTree
};
