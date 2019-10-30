import supertest from 'supertest';
import app from './../../../src';

describe('package-fetcher test suite', () => {
	afterAll(async () => {
		app.close();
	});
	it('test full package path', async () => {
		jest.setTimeout(10000);
		await supertest(app)
			.get('/package/rimraf/latest')
			.expect(200);
	});
	it('test redirection for package path', async () => {
		jest.setTimeout(10000);

		await supertest(app)
			.get('/package/rimraf')
			.expect(302, 'Found. Redirecting to /package/rimraf/latest');
	});
});
