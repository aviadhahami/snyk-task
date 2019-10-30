
import Cache from './../../src/cache';

describe('Cache test suite', () => {
	const KEY = 'k';
	const VALUE = 'v';

	it('test normal cache behaviour', async () => {
		await Cache.set(KEY, VALUE);

		expect(await Cache.get(KEY)).toEqual(VALUE);
	});

	it('test mutex locking', async () => {
		const release = await Cache.mutex.acquire();
		setTimeout(() => {
			expect(Cache.cache['a']).toBeFalsy();
			release();
		}, 500);
		await Cache.set('a', 'b');
	});
});
