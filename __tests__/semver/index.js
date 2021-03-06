import { packageInfo, packageNameForCache } from '../../src/logic/semver';

describe('semver test suite', () => {
	describe('packageInfo func', () => {
		it('should export funcs', () => {
			expect(typeof packageInfo).toEqual('function');
		});
		it('should return predicted object', async () => {
			expect(await packageInfo('a', '2')).toEqual({ name: 'a', version: '2.1.2' });
		});
		it('should trim semver notation', async () => {
			expect(await packageInfo('rimraf', '~2.2.1')).toEqual({ name: 'rimraf', version: '2.2.8' });
		});
		it('should fallback to "latest" for no version input', async () => {
			expect(await packageInfo('rimraf')).toEqual({ name: 'rimraf', version: '3.0.0' });
		});
	});

	describe('packageNameForCache func', () => {
		it('should export funcs', () => {
			expect(typeof packageNameForCache).toEqual('function');
		});
		it('should stringify version info for cache purposes', async () => {
			expect(await packageNameForCache('rimraf', '~2.2.1')).toEqual('rimraf@2.2.8');
		});
		it('should be able to handle "latest" as a version', async () => {
			expect(await packageNameForCache('rimraf', '2.x')).toEqual('rimraf@2.7.1');
		});
	});
});
