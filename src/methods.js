const methods = [
  {
    name: 'ok',
    code: '200',
    message: 'OK',
    status: 'success',
  },
  {
    name: 'created',
    code: '201',
    message: 'Created',
    status: 'success',
  },
  {
    name: 'noContent',
    code: '204',
    message: 'No Content',
    status: 'success',
  },
  {
    name: 'badRequest',
    code: '400',
    message: 'Bad Request',
    status: 'fail',
  },
  {
    name: 'unauthorized',
    code: '401',
    message: 'Unauthorized',
    status: 'fail',
  },
  {
    name: 'forbidden',
    code: '403',
    message: 'Forbidden',
    status: 'fail',
  },
  {
    name: 'notFound',
    code: '404',
    message: 'Not Found',
    status: 'fail',
  },
  {
    name: 'methodNotAllowed',
    code: '405',
    message: 'Method Not Allowed',
    status: 'fail',
  },
  {
    name: 'unprocessableEntity',
    code: '422',
    message: 'Unprocessable Entity',
    status: 'fail',
  },
  {
    name: 'internalServerError',
    code: '500',
    message: 'Internal Server Error',
    status: 'error',
  },
  {
    name: 'badGateway',
    code: '502',
    message: 'Bad Gateway',
    status: 'error',
  },
  {
    name: 'serviceUnavailable',
    code: '503',
    message: 'Service Unavailable',
    status: 'error',
  },
  {
    name: 'gatewayTimeout',
    code: '504',
    message: 'Gateway Timeout',
    status: 'error',
  },
]

module.exports = methods
