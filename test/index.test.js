const app = require('express')()
const request = require('supertest')
const responseEnhancer = require('../src/index')

describe('Test avaliable methods.', () => {
  beforeAll(() => {
    app.use(responseEnhancer())

    app.get('/success-with-meta', function(req, res) {
      const users = [{ name: 'John' }, { name: 'Jane' }]
      const metadata = { total: 2 }

      res.formatter.ok(users, metadata)
    })

    app.get('/not-found', function(req, res) {
      const errors = [{ message: 'NOT_FOUND', detail: 'User not found.' }]

      res.formatter.notFound(errors)
    })
  })

  it('"formatter.ok" should return status code "200" and correct payload', done => {
    request(app)
      .get('/success-with-meta')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toEqual({
          data: [{ name: 'John' }, { name: 'Jane' }],
          meta: { total: 2 },
        })
        done()
      })
  })

  it('"formatter.notFound" should return status code "404" and correct payload', done => {
    request(app)
      .get('/not-found')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toEqual({
          errors: [{ detail: 'User not found.', message: 'NOT_FOUND' }],
        })
        done()
      })
  })
})
