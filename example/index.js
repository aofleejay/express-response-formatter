const express = require('express')
const responseEnhancer = require('../lib')

const app = express()

// use in express middleware
app.use(responseEnhancer({
  withStatusCode: true, // Include status code in response body (optional).
  withStatusMessage: true, // Include status message in response body (optional).
}))

// example usage
app.get('/success', (req, res) => res.ok({ name: 'John Doe' }))
app.get('/badrequest', (req, res) => res.badRequest('Invalid parameter.'))
app.get('/badgateway', (req, res) => res.badGateway())

app.listen(3000, () => console.log('Start at http://localhost:3000'))
