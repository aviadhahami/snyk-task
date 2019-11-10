import axios from 'axios';
import { generateURL } from '../../api';
import { Node } from '../../structs/Node';
import Cache from './../../cache';
import { packageNameForCache, packageInfo } from '../semver';

const fetchDepsTree = async ({ packageName, packageVersion = 'latest' }) => {
	const resolvedPackage = await packageInfo(packageName, packageVersion);
	const tree = new Node({ name: resolvedPackage.name, version: resolvedPackage.version });
	const cacheName = await packageNameForCache(packageName, packageVersion);
	try {
		const entry = await Cache.get(cacheName);
		if (entry) {
			return entry;
		} else {
			const url = await generateURL({ name: packageName, version: packageVersion });
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
			await Cache.set(cacheName, tree);

			return tree;
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
