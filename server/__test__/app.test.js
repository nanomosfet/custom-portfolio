const request = require('supertest')
const app = require('../index.js')
const unAutherized = 401
const success = 200
const redirect = 302
const inititalState = require('../initial-state.json')
const path = require('path')

jest.mock('../../not-secrets.json', () => ({
  useAuth: true,
  username: 'test',
  password: 'test'
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

it('should save state', () => {
  return request(app)
    .post('/api/save')
    .send(inititalState)
    .expect(success)
})

it('should save state', () => {
  return request(app)
    .post('/api/save/files')
    .field('ids', JSON.stringify([1]))
    .attach('files', path.join(__dirname, 'fixtures/test.txt'))
    .type('form')
    .expect(success)
})

describe('login stuff', () => {
  const user = request.agent(app)

  it('should login and redirect to edit', () => {
    return user
      .post('/login')
      .send({ username: 'test', password: 'test' })
      .type('form')
      .then((response) => {
        expect(response.statusCode).toEqual(redirect)
        expect(response.header.location).toEqual('/edit')
      })
  })

  it('should be able to access edit after logging in', () => {
    return user
      .get('/edit/')
      .expect(success)
  })

  it('should be able to access edit after logging in', () => {
    return user
      .get('/edit/someother')
      .expect(success)
  })

  it('should be able to access edit after logging in', () => {
    return user
      .post('/login')
      .send({ username: 'test', password: 'wrong' })
      .type('form')
      .then((response) => {
        expect(response.statusCode).toEqual(redirect)
        expect(response.header.location).toEqual('/login')
      })
  })
})
