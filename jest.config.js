module.exports = {
	testEnvironment: 'node',
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/ui',
		'/config'
	],
	coverageReporters: [
		'json-summary',
		'text',
		'lcov'
	]
};
