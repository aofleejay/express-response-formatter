const methods = [
  {
    name: 'ok',
    code: '200',
    message: 'OK',
    isSuccess: true,
  },
  {
    name: 'created',
    code: '201',
    message: 'Created',
    isSuccess: true,
  },
  {
    name: 'accepted',
    code: '202',
    message: 'Accepted',
    isSuccess: true,
  },
  {
    name: 'noContent',
    code: '204',
    message: 'No Content',
    isSuccess: true,
  },
  {
    name: 'badRequest',
    code: '400',
    message: 'Bad Request',
    isSuccess: false,
  },
  {
    name: 'unauthorized',
    code: '401',
    message: 'Unauthorized',
    isSuccess: false,
  },
  {
    name: 'forbidden',
    code: '403',
    message: 'Forbidden',
    isSuccess: false,
  },
  {
    name: 'notFound',
    code: '404',
    message: 'Not Found',
    isSuccess: false,
  },
  {
    name: 'methodNotAllowed',
    code: '405',
    message: 'Method Not Allowed',
    isSuccess: false,
  },
  {
    name: 'timeout',
    code: '408',
    message: 'Request Timeout',
    isSuccess: false,
  },
  {
    name: 'conflict',
    code: '409',
    message: 'Conflict',
    isSuccess: false,
  },
  {
    name: 'unprocess',
    code: '422',
    message: 'Unprocessable Entity',
    isSuccess: false,
  },
  {
    name: 'tooManyRequests',
    code: '429',
    message: 'Too Many Requests',
    isSuccess: false,
  },
  {
    name: 'serverError',
    code: '500',
    message: 'Internal Server Error',
    isSuccess: false,
  },
  {
    name: 'badGateway',
    code: '502',
    message: 'Bad Gateway',
    isSuccess: false,
  },
  {
    name: 'serviceUnavailable',
    code: '503',
    message: 'Service Unavailable',
    isSuccess: false,
  },
  {
    name: 'gatewayTimeout',
    code: '504',
    message: 'Gateway Timeout',
    isSuccess: false,
  },
]

module.exports = methods
