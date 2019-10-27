import axios from 'axios';
import { generateURL } from '../../api';
import { Node } from '../../structs/Node';
import Cache from './../../cache';
import { packageNameForCache } from '../semver';

const fetchDepsTree = async ({ packageName, packageVersion = 'latest' }) => {
	const tree = new Node({ name: packageName, version: packageVersion });
	const cacheName = packageNameForCache(packageName, packageVersion);
	try {
		const entry = await Cache.get(cacheName);
		if (entry) {
			return entry;
		} else {
			const url = generateURL({ name: packageName, version: packageVersion });
			console.log(`Fetching ${url}`);
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
			const setReply = await Cache.set(cacheName, tree);
		}
	} catch (e) {
		if (e.response && e.response.status === 404) {
			throw new Error('NPM says nope. so nope.');
		}
	}
	return tree;
};

export {
	fetchDepsTree
};
