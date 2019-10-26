import { API } from './../config';
import { cleanVersion } from '../logic/version-cleaner';

const LATEST = 'latest';
const generateURL = ({ name, version = LATEST }) => {
	const buffer = [];
	buffer.push(API);
	buffer.push(name);
	if (!name.includes('@')) {
		if (version !== LATEST) {
			buffer.push(cleanVersion(version));
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
