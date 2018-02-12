# Expressjs Response #
Express middleware to generate JSON response

## Installation ##
```
npm install expressjs-response --save
```

## Quick Start ##
Use as Express middleware
```js
import express from 'express'
import responseEnhancer from 'exressjs-response'

const app = express()

// use in express middleware
app.use(responseEnhancer({
  withStatusCode: true, // Include status code in response body.
  withStatusMessage: true, // Include status message in response body.
}))

// example usage
app.get('/success', (req, res) => res.ok({ name: 'John Doe' }))
app.get('/badrequest', (req, res) => res.badRequest('Invalid parameter.'))
app.get('/badgateway', (req, res) => res.badGateway())

app.listen(3000, () => console.log('Start at http://localhost:3000'))
```

## Example Response ##
#### 200 ####
```js
res.ok({ name: 'John Doe' })
```
```json
HTTP/1.1 200 Ok
{
    "status": "success",
    "data": {
        "name": "John Doe"
    }
}
```
#### 400 ####
```js
res.badRequest()
```
```json
HTTP/1.1 400 Bad Request
{
    "status": "fail",
    "error": {
        "code": "400",
        "message": "Bad Request"
    }
}
```

#### 400 With Parameter ####
```js
res.badRequest('Invalid parameter.')
```
```json
HTTP/1.1 400 Bad Request
{
    "status": "fail",
    "error": {
        "code": "400",
        "message": "Bad Request",
        "detail": "Invalid parameter."
    }
}
```
#### 502 ####
```js
res.badGateway()
```
```json
HTTP/1.1 502 Bad Gateway
{
    "status": "error",
    "error": {
        "code": "502",
        "message": "Bad Gateway"
    }
}
```

## API ##
|         METHOD                | CODE |       PARAMS                   |
|-------------------------------|------|--------------------------------|
| res.ok()                      | 200  | res.ok(data)                   |
| res.created()                 | 201  | res.created(data)              |
| res.noContent()               | 204  |               -                |
| res.badRequest()              | 400  | res.badRequest(error)          |
| res.unauthorized()            | 401  | res.unauthorized(error)        |
| res.forbidden()               | 403  | res.forbidden(error)           |
| res.notFound()                | 404  | res.notFound(error)            |
| res.methodNotAllowed()        | 405  | res.methodNotAllowed(error)    |
| res.unprocessableEntity()     | 422  | res.unprocessableEntity(error) |
| res.internalServerError()     | 500  | res.internalServerError(error) |
| res.badGateway()              | 502  | res.badGateway(error)          |
| res.serviceUnavailable()      | 503  | res.serviceUnavailable(error)  |
| res.gatewayTimeout()          | 504  | res.gatewayTimeout(error)      |

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/aofleejay/expressjs-response/badge.svg?style=beer-square)](https://beerpay.io/aofleejay/expressjs-response)  [![Beerpay](https://beerpay.io/aofleejay/expressjs-response/make-wish.svg?style=flat-square)](https://beerpay.io/aofleejay/expressjs-response?focus=wish)