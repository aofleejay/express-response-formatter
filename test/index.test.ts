import express from 'express'
import request from 'supertest'
import { responseEnhancer } from '../src/index'

const app = express()

describe('Test avaliable methods.', () => {
  beforeAll(() => {
    app.use(responseEnhancer())

    app.get('/success-with-meta', function(req, res) {
      const users = [{ name: 'John' }, { name: 'Jane' }]
      const metadata = { total: 2 }

      res.formatter.ok(users, metadata)
    })

    app.get('/not-found', function(req, res) {
      const meta = { trackId: '12345' }
      const errors = [{ message: 'NOT_FOUND', detail: 'User not found.' }]

      res.formatter.notFound(errors, meta)
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
          meta: { trackId: '12345' },
          error: [{ detail: 'User not found.', message: 'NOT_FOUND' }],
        })
        done()
      })
  })
})
