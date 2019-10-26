import parseSemver from 'parse-semver';

export const packageInfo = (p, v = 'latest') => {
	try {
		const { name, version } = parseSemver(`${p}@${v}`);
		return { name, version };
	} catch (e) {
		console.log(e.message);
		return { name: p, version: v };
	}
};

export const packageNameForCache = (p, v) => {
	const { name, version } = packageInfo(p, v);
	return `${name}@${version}`;
};
