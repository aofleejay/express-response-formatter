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
    getResponse: () => {}
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
    getResponse: () => ({
      message: 'Internal Server Error',
    })
  },
  {
    name: 'badGateway',
    code: 502,
    getResponse: () => ({
      message: 'Bad Gateway',
    })
  },
  {
    name: 'serviceUnavailable',
    code: 503,
    getResponse: () => ({
      message: 'Service Unavailable',
    })
  },
  {
    name: 'gatewayTimeout',
    code: 504,
    getResponse: () => ({
      message: 'Gateway Timeout',
    })
  }
]

module.exports = methods
