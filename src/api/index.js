import findVersions from 'find-versions';
import { API } from './../config';

const LATEST = 'latest';
const generateURL = ({ name, version = LATEST }) => {
	const buffer = [];
	buffer.push(API);
	buffer.push(name);
	if (!name.includes('@')) {
		if (version !== LATEST) {
			buffer.concat(findVersions(version, { loose: true }));
		} else {
			buffer.push(version);
		}
	}
	return buffer.join('/');
};
const BASE_API = API;

export {
	generateURL,
	BASE_API
};
