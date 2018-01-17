const express = require('express')
const responseEnhancer = require('../src')

const app = express()

// use in express middleware
app.use(responseEnhancer({
  withStatusCode: true, // Include status code in response body.
}))

// example usage
app.get('/success', (req, res) => res.ok({ name: 'John Doe' }))
app.get('/badrequest', (req, res) => res.badRequest())
app.get('/badgateway', (req, res) => res.badGateway())

app.listen(3000, () => console.log('Start at http://localhost:3000'))
