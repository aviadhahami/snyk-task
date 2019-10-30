import supertest from 'supertest'
import app from './../../src/'

describe('Server mounting tests', () => {
	it('should mount the server and respond w/ 200 for healthcheck', async() => {
		const res = await supertest(app)
			.get('/healthcheck')
			.send();

		expect(res.statusCode).toEqual(200);
	});
});
