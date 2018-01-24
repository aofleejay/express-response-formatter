// @flow

const methods = require('./methods')

type options = {
  withStatusCode?: boolean;
  withStatusMessage?: number;
}

const responseEnhancer = (options?: options) => (req, res, next) => {
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

const _generateSuccessResponse = ({ status = 'success', code, message, data }, { withStatusCode, withStatusMessage }) => ({
  status,
  code: withStatusCode ? code : undefined,
  message: withStatusMessage ? message: undefined,
  data,
})

const _generateErrorResponse = ({ status, code, message, detail }) => ({
  status,
  error: {
    code,
    message,
    detail,
  },
})

module.exports = responseEnhancer
