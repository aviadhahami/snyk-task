import axios from 'axios';
import { generateURL } from '../../api';
import { Node } from '../../structs/Node';
import Cache, { packageToCache } from './../../cache';

const cacheOrFetch = async (name, version) => {
	const cacheName = packageToCache(name, version);
	const entry = await Cache.get(cacheName)
	if(entry){
		return entry;
	}else{
		const url = generateURL({ name: packageName, version: packageVersion });
		
		const {
			data: {
				dependencies = {}
			}
		} = await axios.get(url);
	}
};

const fetchDepsTree = async ({ packageName, packageVersion = 'latest', firstInvoke = false }) => {
	const tree = new Node({ name: packageName, version: packageVersion });
	try {
		

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
