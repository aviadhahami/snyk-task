module.exports = {
	testEnvironment: 'node',
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/src/ui/',
		'/config'
	],
	coverageReporters: [
		'json-summary',
		'text',
		'lcov'
	]
};
