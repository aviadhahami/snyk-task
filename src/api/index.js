import { API } from './../config';
import { packageInfo } from '../logic/semver';

const LATEST = 'latest';
const generateURL = ({ name, version = LATEST }) => {
	const buffer = [];
	buffer.push(API);
	buffer.push(name);
	if (!name.includes('@')) {
		if (version !== LATEST) {
			const info = packageInfo(name, version);
			buffer.push((info.version));
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
