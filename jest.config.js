module.exports = {
	testEnvironment: "node",
	coveragePathIgnorePatterns: [
		"/node_modules/"
	],
	coverageReporters: [
		'json-summary',
		'text',
		'lcov'
	]
};
