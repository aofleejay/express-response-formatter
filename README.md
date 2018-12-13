# express-response-formatter [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/aofleejay/express-response-formatter/blob/master/LICENSE.md) [![npm](https://img.shields.io/npm/v/express-response-formatter.svg)](https://www.npmjs.com/package/express-response-formatter)

Better way to format Express response

## Installation ##
```
npm install express-response-formatter --save
```

## Quick Start ##
Example usage
```js
const app = require('express')()
const responseEnhancer = require('express-response-formatter')

// Add formatter functions to "res" object via "responseEnhancer()"
app.use(responseEnhancer())

app.get('/success', (req, res) => {
  const users = [
    { name: 'Dana Kennedy' },
    { name: 'Warren Young' },
  ]

  // It's enhance "res" with "formatter" which contain formatter functions
  res.formatter.ok(users)
})

app.listen(3000, () => console.log('Start at http://localhost:3000'))
```
Result
```json
HTTP/1.1 200 Ok
{
  "data": [
    {
      "name": "Dana Kennedy"
    },
    {
      "name": "Warren Young"
    }
  ]
}
```

## More usages ##
200 OK with "meta field"
```js
app.get('/success-with-meta', (req, res) => {
  const users = [
    { name: 'Dana Kennedy' },
    { name: 'Warren Young' },
  ]

  const meta = {
    total: 2,
    limit: 10,
    offset: 0,
  }

  res.formatter.ok(users, meta)
})
```
```json
HTTP/1.1 200 Ok
{
  "meta": {
    "total": 2,
    "limit": 10,
    "offset": 0,
  },
  "data": [
    {
      "name": "Dana Kennedy"
    },
    {
      "name": "Warren Young"
    }
  ]
}
```
400 Bad Request with "multiple errors"
```js
app.get('/bad-request', (req, res) => {
  const errors = [
    { detail: 'Field id is required.' },
    { detail: 'Field foo is required.' },
  ]

  res.formatter.badRequest(errors)
})
```
```json
HTTP/1.1 400 Bad Request
{
  "errors": [
    {
      "detail": "Field id is required."
    },
    {
      "detail": "Field foo is required."
    }
  ]
}
```


## APIs ##
|                   METHOD                   | STATUS CODE |
|--------------------------------------------|-------------|
| res.formatter.ok(data, meta?)              |     200     |
| res.formatter.created(data, meta?)         |     201     |
| res.formatter.noContent(data, meta?)       |     204     |
| res.formatter.badRequest(errors)           |     400     |
| res.formatter.unauthorized(errors)         |     401     |
| res.formatter.forbidden(errors)            |     403     |
| res.formatter.notFound(errors)             |     404     |
| res.formatter.methodNotAllowed(errors)     |     405     |
| res.formatter.unprocess(errors)            |     422     |
| res.formatter.serverError(errors)          |     500     |
| res.formatter.badGateway(errors)           |     502     |
| res.formatter.serviceUnavailable(errors)   |     503     |
| res.formatter.gatewayTimeout(errors)       |     504     |
