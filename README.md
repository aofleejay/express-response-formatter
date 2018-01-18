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
}))

// example usage
app.get('/success', (req, res) => res.ok({ name: 'John Doe' }))
app.get('/badrequest', (req, res) => res.badRequest())
app.get('/badgateway', (req, res) => res.badGateway())

app.listen(3000, () => console.log('Start at http://localhost:3000'))
```

## Example Response ##
#### 200 ####
```js
res.ok({ name: 'John Doe' })
```
```json
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
{
    "status": "fail",
    "message": "Bad Request"
}
```
#### 502 ####
```js
res.badGateway()
```
```json
{
    "status": "error",
    "message": "Bad Gateway"
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
| res.internalServerError()     | 500  |               -                |
| res.badGateway()              | 502  |               -                |
| res.serviceUnavailable()      | 503  |               -                |
| res.gatewayTimeout()          | 504  |               -                |
