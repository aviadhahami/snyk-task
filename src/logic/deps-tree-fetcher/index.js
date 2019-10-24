import axios from 'axios';
import { generateURL } from '../../api';
import { Node } from '../../structs/Node';

const fetchDepsTree = async ({ packageName, packageVersion = 'latest' }) => {
	const url = generateURL({ name: packageName, version: packageVersion });
	console.log(url);
	try {
		const {
			data: {
				dependencies = {}
			}
		} = await axios.get(url);

		const tree = new Node({ name: `${packageName}: ${packageVersion}`, version: packageVersion });

		if (Object.keys(dependencies).length) {
			tree.children = await Promise.all(
				Object.entries(dependencies)
					.map(async ([name, version]) => fetchDepsTree({ packageName: name, packageVersion: version }))
			);
		}
		return tree;
	} catch (e) {
		return new Node({ name: packageName, version: packageVersion });
	}
};
export {
	fetchDepsTree
};
