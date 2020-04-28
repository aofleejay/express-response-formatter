const app = require('express')()
const { responseEnhancer } = require('express-response-formatter')

// Add formatter functions to "res" object via "responseEnhancer()"
app.use(responseEnhancer())

// Example usage: 200 OK
app.get('/success', (req, res) => {
  const users = [{ name: 'Dana Kennedy' }, { name: 'Warren Young' }]

  res.formatter.ok(users)
})

// Example usage: 200 OK with "meta field"
app.get('/success-with-meta', (req, res) => {
  const users = [{ name: 'Dana Kennedy' }, { name: 'Warren Young' }]

  const meta = {
    total: 2,
    limit: 10,
    offset: 0,
  }

  res.formatter.ok(users, meta)
})

// Example usage: 400 Bad Request with "error"
app.get('/bad-request', (req, res) => {
  const errors = [
    { detail: 'Field id is required.' },
    { detail: 'Field foo is required.' },
  ]

  res.formatter.badRequest(errors)
})

// Example usage: 400 Bad Request with "error" and "meta"
app.get('/bad-request-with-meta', (req, res) => {
  const errors = [
    { detail: 'Field id is required.' },
    { detail: 'Field foo is required.' },
  ]

  const meta = { trackId: '12345' }

  res.formatter.badRequest(errors, meta)
})

app.listen(3000, () => console.log('Start at http://localhost:3000'))
