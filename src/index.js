module.exports = (options) => (req, res, next) => {
  enhanceMethods(res, options)
  next()
}

const enhanceMethods = (res, inputOptions) => {
  const defaultOptions = { withStatusCode: false }
  const options = inputOptions || defaultOptions

  methods.map(method => {
    const { name, code, response } = method
    res[name] = (data) => {
      const body = response({ data })
      
      if (options.withStatusCode) {
        body.code = code
      }

      res.status(code).json(body)
    }
  })
}

const methods = [
  {
    name: 'ok',
    code: 200,
    response: ({ data }) => ({
      status: 'success',
      data,
    })
  },
  {
    name: 'created',
    code: 201,
    response: ({ data }) => ({
      status: 'success',
      data,
    })
  },
  {
    name: 'noContent',
    code: 204,
    response: ({ data }) => ({
      status: 'success',
      data,
    })
  },
  {
    name: 'badRequest',
    code: 400,
    response: ({ data }) => ({
      status: 'fail',
      message: 'Bad Request',
      data,
    })
  },
  {
    name: 'unauthorized',
    code: 401,
    response: ({ data }) => ({
      status: 'fail',
      message: 'Unauthorized',
      data,
    })
  },
  {
    name: 'notFound',
    code: 404,
    response: ({ data }) => ({
      status: 'fail',
      message: 'Not Found',
      data,
    })
  },
  {
    name: 'methodNotAllowed',
    code: 404,
    response: ({ data }) => ({
      status: 'fail',
      message: 'Method Not Allowed',
      data,
    })
  },
  {
    name: 'unprocessableEntity',
    code: 422,
    response: ({ data }) => ({
      status: 'fail',
      message: 'Unprocessable Entity',
      data,
    })
  },
  {
    name: 'internalServerError',
    code: 500,
    response: ({ data }) => ({
      status: 'error',
      message: 'Internal Server Error',
      data,
    })
  },
  {
    name: 'badGateway',
    code: 502,
    response: ({ data }) => ({
      status: 'error',
      message: 'Bad Gateway',
      data,
    })
  },
  {
    name: 'serviceUnavailable',
    code: 503,
    response: ({ data }) => ({
      status: 'error',
      message: 'Service Unavailable',
      data,
    })
  },
  {
    name: 'gatewayTimeout',
    code: 504,
    response: ({ data }) => ({
      status: 'error',
      message: 'Gateway Timeout',
      data,
    })
  }
]