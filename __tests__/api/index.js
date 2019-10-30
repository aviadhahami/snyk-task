import { generateURL, BASE_API } from '../../src/api';

const ACTUAL_BASE_API = 'https://registry.npmjs.org';

describe('API test suite', () => {
	it('should match base api for npm registry', () => {
		expect(BASE_API).toEqual(ACTUAL_BASE_API);
	});
	describe('should test url generator for packages', () => {
		it('should throw error for no name supplied', () => {
			try {
				generateURL();
			} catch (e) {
				expect(e.message).toEqual('No name supplied');
			}
		});

		it('should return no-version as latest', () => {
			const u = generateURL({ name: 'test' });
			expect(u).toEqual(`${ACTUAL_BASE_API}/test/latest`);
		});

		it('should return valid url for a given package and version', () => {
			const u = generateURL({ name: 'test', version: '2' });
			expect(u).toEqual(`${ACTUAL_BASE_API}/test/2`);
		});
	});
});
