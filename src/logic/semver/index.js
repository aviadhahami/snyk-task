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

/**
 *
 * @param p
 * @param v
 * @returns "latest" satisfying version for a given package
 */
export const packageInfo = async (p, v) => {

	// Danger!
	const url = await generateURL({ name: p, fetchPackageInfo: true });
	const {
		data: {
			versions
		}
	} = await axios.get(url);
	return semver.maxSatisfying(Object.keys(versions), v);
};

export const packageNameForCache = (p, v) => {
	const { name, version } = packageInfo(p, v);
	return `${name}@${version}`;
};
