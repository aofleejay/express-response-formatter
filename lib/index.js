'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var methods_1 = __importDefault(require('./methods'))
var responseEnhancer = function() {
  return function(req, res, next) {
    res.formatter = _generateFormatters(res)
    next()
  }
}
exports.responseEnhancer = responseEnhancer
var _generateFormatters = function(res) {
  var formatter = {}
  var responseBody = {}
  methods_1.default.map(function(method) {
    if (method.isSuccess) {
      formatter[method.name] = function(data, meta) {
        responseBody = _generateSuccessResponse({ data: data, meta: meta })
        res.status(parseInt(method.code)).json(responseBody)
      }
    } else {
      formatter[method.name] = function(errors) {
        responseBody = _generateErrorResponse({ errors: errors })
        res.status(parseInt(method.code)).json(responseBody)
      }
    }
  })
  return formatter
}
var _generateSuccessResponse = function(_a) {
  var data = _a.data,
    meta = _a.meta
  return {
    meta: meta,
    data: data,
  }
}
var _generateErrorResponse = function(_a) {
  var errors = _a.errors
  return {
    errors: errors,
  }
}
