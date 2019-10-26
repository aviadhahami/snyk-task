import parseSemver from 'parse-semver';

export const packageInfo = (p, v) => {
	const { name, version } = parseSemver(`${p}@${v}`);
	return { name, version };
};

export const packageNameForCache = (p, v) => {
	const { name, version } = packageInfo(p, v);
	return `${name}@${version}`;
};
