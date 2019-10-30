import { packageInfo, packageNameForCache } from '../../src/logic/semver';

describe('semver test suite', () => {
	describe('packageInfo func', () => {
		it('should export funcs', () => {
			expect(typeof packageInfo).toEqual('function');
		});
		it('should return predicted object', () => {
			expect(packageInfo('a', '2')).toEqual({ name: 'a', version: '2' });
		});
		it('should trim semver notation', () => {
			expect(packageInfo('rimraf', '~2.2.1')).toEqual({ name: 'rimraf', version: '2.2.1' });
		});
	});

	describe('packageNameForCache func', () => {
		it('should export funcs', () => {
			expect(typeof packageNameForCache).toEqual('function');
		});
		it('should stringify version info for cache purposes', () => {
			expect(packageNameForCache('rimraf', '~2.2.1')).toEqual('rimraf@2.2.1');
		});
		it('should be able to handle "latest" as a version', () => {
			expect(packageNameForCache('rimraf', 'latest')).toEqual('rimraf@latest');
		});
	});
});
