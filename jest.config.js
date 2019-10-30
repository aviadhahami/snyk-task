module.exports = {
	testEnvironment: 'node',
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/src/ui/'
	],
	coverageReporters: [
		'json-summary',
		'text',
		'lcov'
	]
};
