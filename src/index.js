// @flow

const methods = require('./methods')

type options = {
  withStatusCode?: boolean;
  withStatusMessage?: boolean;
}

const responseEnhancer = (options?: options) => (req: any, res: any, next: () => void) => {
  _enhanceMethods(res, options)
  next()
}

const _enhanceMethods = (res, inputOptions) => {
  const defaultOptions = { withStatusCode: false, withStatusMessage: false }
  const options = inputOptions || defaultOptions
  let responseBody = {}

  methods.map(method => {
    const { name, code, message, status } = method

    res[name] = (data) => {
      if (status === 'success') {
        responseBody = _generateSuccessResponse({ code, message, data }, options)
      } else if (status === 'fail' || status === 'error') {
        responseBody = _generateErrorResponse({ status, code, message, detail: data })
      }

      res.status(code).json(responseBody)
    }
  })
}

type successResponse = {
  status?: string,
  code: string,
  message: string,
  data: any,
}

type errorResponse = {
  status: string,
  code: string,
  message: string,
  detail: any,
}

const _generateSuccessResponse = ({ status = 'success', code, message, data }: successResponse, { withStatusCode, withStatusMessage }: options) => ({
  status,
  code: withStatusCode ? code : undefined,
  message: withStatusMessage ? message: undefined,
  data,
})

const _generateErrorResponse = ({ status, code, message, detail }: errorResponse) => ({
  status,
  error: {
    code,
    message,
    detail,
  },
})

module.exports = responseEnhancer
