import parseSemver from 'parse-semver';
import semver from 'semver';

// lodash@2.* ==> lodash@2.5.6 (latest of 2)
// ^ --> Latest minor
// ~ -->
// lodash @ *
// lodash @ 2.1.x || *


// TODO: Cache resolved

export const packageInfo = async (p, v) => {


};

export const packageNameForCache = (p, v) => {
	const { name, version } = packageInfo(p, v);
	return `${name}@${version}`;
};
