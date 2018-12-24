const request = require('supertest')
const app = require('../index.js')
const unAutherized = 401
const success = 200

jest.mock('../../not-secrets.json', () => ({
  useAuth: true
}))

it('shoudl return 200', () => {
  return request(app).get('/')
    .then((response) => {
      expect(response.statusCode).toBe(success)
    })
})
it('shoudl return 200', () => {
  return request(app).get('/edit/')
    .then((response) => {
      expect(response.statusCode).toBe(unAutherized)
    })
})
