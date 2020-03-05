'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _methods = _interopRequireDefault(require('./methods'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * Express middleware for enhance response with stuff of response formatter.
 * @returns {Function} An express middleware for enhance an express response object.
 * @public
 */
const responseEnhancer = () => (req, res, next) => {
  res.formatter = _generateFormatters(res)
  next()
}
/**
 * Function to generate formatter object.
 * @param {Object} res An express response object.
 * @returns {Object} Formatter object that contain response formatter functions.
 * @private
 */

const _generateFormatters = res => {
  const formatter = {}
  let responseBody = {}

  _methods.default.map(method => {
    if (method.isSuccess) {
      formatter[method.name] = (data, meta) => {
        responseBody = _generateSuccessResponse({
          data,
          meta,
        })
        res.status(method.code).json(responseBody)
      }
    } else {
      formatter[method.name] = errors => {
        responseBody = _generateErrorResponse({
          errors,
        })
        res.status(method.code).json(responseBody)
      }
    }
  })

  return formatter
}
/**
 * Function to generate a success response format.
 * @param {Object} response Response input.
 * @param {*} response.data Meta field.
 * @param {Object=} response.meta Data field.
 * @returns {Object} Formatted response.
 * @private
 */

const _generateSuccessResponse = ({ data, meta }) => ({
  meta,
  data,
})
/**
 * Function to generate an errors response format.
 * @param {Object} response Response input.
 * @param {Array} response.errors Errors field.
 * @returns {Object} Formatted response.
 * @private
 */

const _generateErrorResponse = ({ errors }) => ({
  errors,
})

var _default = responseEnhancer
exports.default = _default
