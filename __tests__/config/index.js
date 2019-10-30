import config from './../../src/config';

describe('Config test suite', () => {
	it('should export port and API keys', () => {
		const keys = Object.keys(config);
		expect(keys.sort()).toEqual(['API', 'PORT'].sort());
	});
});
