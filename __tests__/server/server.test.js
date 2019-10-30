import supertest from 'supertest'
import app from './../../src/'

describe('Server mounting tests', () => {
	afterAll(()=>{
		app.close()
	})
	it('should mount the server and respond w/ 200 for healthcheck', async() => {
		const res = await supertest(app)
			.get('/healthcheck')
			.send();

		expect(res.statusCode).toEqual(200);
	});
});
