const supertest = require('supertest')
const server = require('../api/server')

describe('test routes', () => {
  it('Welcome Route', async () => {
    const res = await supertest(server).get('/')

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('Welcome')
  })
})
