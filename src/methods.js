const methods = [
  {
    name: 'ok',
    code: 200,
    getResponse: ({ data }) => ({
      data,
    })
  },
  {
    name: 'created',
    code: 201,
    getResponse: ({ data }) => ({
      data,
    })
  },
  {
    name: 'noContent',
    code: 204,
    getResponse: ({ data }) => ({
      data,
    })
  },
  {
    name: 'badRequest',
    code: 400,
    getResponse: ({ data }) => ({
      message: 'Bad Request',
      error: data,
    })
  },
  {
    name: 'unauthorized',
    code: 401,
    getResponse: ({ data }) => ({
      message: 'Unauthorized',
      error: data,
    })
  },
  {
    name: 'notFound',
    code: 404,
    getResponse: ({ data }) => ({
      message: 'Not Found',
      error: data,
    })
  },
  {
    name: 'methodNotAllowed',
    code: 404,
    getResponse: ({ data }) => ({
      message: 'Method Not Allowed',
      error: data,
    })
  },
  {
    name: 'unprocessableEntity',
    code: 422,
    getResponse: ({ data }) => ({
      message: 'Unprocessable Entity',
      error: data,
    })
  },
  {
    name: 'internalServerError',
    code: 500,
    getResponse: ({ data }) => ({
      message: 'Internal Server Error',
      error: data,
    })
  },
  {
    name: 'badGateway',
    code: 502,
    getResponse: ({ data }) => ({
      message: 'Bad Gateway',
      error: data,
    })
  },
  {
    name: 'serviceUnavailable',
    code: 503,
    getResponse: ({ data }) => ({
      message: 'Service Unavailable',
      error: data,
    })
  },
  {
    name: 'gatewayTimeout',
    code: 504,
    getResponse: ({ data }) => ({
      message: 'Gateway Timeout',
      error: data,
    })
  }
]

module.exports = methods
