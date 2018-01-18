// @flow

const methods = require('./methods')
const { getStatusByCode } = require('./helpers')

const responseEnhancer = (options: { withStatusCode?: boolean }) => (req: any, res: any, next: () => void) => {
  _enhanceMethods(res, options)
  next()
}

const _enhanceMethods = (res, inputOptions) => {
  const defaultOptions = { withStatusCode: false }
  const options = inputOptions || defaultOptions

  methods.map(method => {
    const { name, code, getResponse } = method
    const { withStatusCode } = options
    const responseBody = {}

    res[name] = (data) => {
      const status = { status: getStatusByCode(code) }
      const statusCode = withStatusCode ? { code } : {}
      const responseData = getResponse({ data })

      Object.assign(responseBody, status, statusCode, responseData)

      res.status(code).json(responseBody)
    }
  })
}

module.exports = responseEnhancer
