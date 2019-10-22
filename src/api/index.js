import findVersions from 'find-versions';
import { API } from './../config';

const generateURL = ({ name, version = 'latest' }) => {
	const buffer = [];
	buffer.push(API);
	buffer.push(name);
	if (!name.includes('@')) {
		buffer.concat(findVersions(version, { loose: true }));
	}
	return buffer.join('/');
};
const BASE_API = API;

export {
	generateURL,
	BASE_API
};
