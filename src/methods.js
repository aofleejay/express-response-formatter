// @flow

const methods = [
  {
    name: 'ok',
    code: 200,
    getResponse: ({ data }: { data: any }) => ({
      data,
    })
  },
  {
    name: 'created',
    code: 201,
    getResponse: ({ data }: { data: any }) => ({
      data,
    })
  },
  {
    name: 'noContent',
    code: 204,
    getResponse: ({ data }: { data?: any }) => {}
  },
  {
    name: 'badRequest',
    code: 400,
    getResponse: ({ data }: { data: any }) => ({
      message: 'Bad Request',
      error: data,
    })
  },
  {
    name: 'unauthorized',
    code: 401,
    getResponse: ({ data }: { data: any }) => ({
      message: 'Unauthorized',
      error: data,
    })
  },
  {
    name: 'forbidden',
    code: 403,
    getResponse: ({ data }: { data: any }) => ({
      message: 'Forbidden',
      error: data,
    })
  },
  {
    name: 'notFound',
    code: 404,
    getResponse: ({ data }: { data: any }) => ({
      message: 'Not Found',
      error: data,
    })
  },
  {
    name: 'methodNotAllowed',
    code: 404,
    getResponse: ({ data }: { data: any }) => ({
      message: 'Method Not Allowed',
      error: data,
    })
  },
  {
    name: 'unprocessableEntity',
    code: 422,
    getResponse: ({ data }: { data: any }) => ({
      message: 'Unprocessable Entity',
      error: data,
    })
  },
  {
    name: 'internalServerError',
    code: 500,
    getResponse: ({ data }: { data?: any }) => ({
      message: 'Internal Server Error',
    })
  },
  {
    name: 'badGateway',
    code: 502,
    getResponse: ({ data }: { data?: any }) => ({
      message: 'Bad Gateway',
    })
  },
  {
    name: 'serviceUnavailable',
    code: 503,
    getResponse: ({ data }: { data?: any }) => ({
      message: 'Service Unavailable',
    })
  },
  {
    name: 'gatewayTimeout',
    code: 504,
    getResponse: ({ data }: { data?: any }) => ({
      message: 'Gateway Timeout',
    })
  }
]

module.exports = methods
