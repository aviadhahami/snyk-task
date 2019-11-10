import { API } from './../config';
import { packageInfo } from '../logic/semver';

const generateURL = ({ name, version, fetchPackageInfo = false } = {}) => {
	if (!name) { throw new Error('No name supplied'); }

	const buffer = [];
	buffer.push(API);
	buffer.push(name);
	if (!fetchPackageInfo) {
		if (!name.includes('@')) {
			const info = packageInfo(name, version);
			buffer.push((info.version));
		}
	}
	return buffer.join('/');
};

const BASE_API = API;

export {
	generateURL,
	BASE_API
};
