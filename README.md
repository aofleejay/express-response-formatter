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
app.use(responseEnhancer())

// example usage
app.get('/success', (req, res) => res.ok(
  { name: 'John Doe' }
))
app.get('/badrequest', (req, res) => res.badRequest())
app.get('/unauthorized', (req, res) => res.unauthorized())

app.listen(3000, () => console.log('Start at http://localhost:3000'))
```

## Example Response ##
#### 2xx ####
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
#### 4xx ####
```js
res.badRequest()
```
```json
{
    "status": "fail",
    "message": "Bad Request"
}
```
#### 5xx ####
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
|         METHOD                | CODE |  PARAMS  |
|-------------------------------|------|----------|
| res.ok()                      | 200  | ok(data) |
| res.created()                 | 201  | ok(data) |
| res.noContent()               | 204  |    -     |
| res.badRequest()              | 400  |    -     |
| res.unauthorized()            | 401  |    -     |
| res.notFound()                | 404  |    -     |
| res.methodNotAllowed()        | 405  |    -     |
| res.unprocessableEntity()     | 422  |    -     |
| res.internalServerError()     | 500  |    -     |
| res.badGateway()              | 502  |    -     |
| res.serviceUnavailable()      | 503  |    -     |
| res.gatewayTimeout()          | 504  |    -     |
