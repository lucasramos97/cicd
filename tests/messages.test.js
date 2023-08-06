const request = require('supertest');
const app = require('../src/app');

describe('GET messages endpoints', () => {
  it('should receive a message response', async () => {
    const res = await request(app).get('/messages');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Hello Friend!');
  });
});
