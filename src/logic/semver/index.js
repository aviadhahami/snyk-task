import parseSemver from 'parse-semver';
import semver from 'semver';
import axios from 'axios';
import { generateURL } from '../../api';

// lodash@2.* ==> lodash@2.5.6 (latest of 2)
// ^ --> Latest minor
// ~ -->
// lodash @ *
// lodash @ 2.1.x || *

// TODO: Cache resolved

export const packageInfo = async (p, v) => {
	const url = generateURL({ name: p, fetchPackageInfo: true });
	const {
		data: {
			versions
		}
	} = await axios.get(url);
	const latest = semver.maxSatisfying(Object.keys(versions));
	console.log(latest);
};

export const packageNameForCache = (p, v) => {
	const { name, version } = packageInfo(p, v);
	return `${name}@${version}`;
};
