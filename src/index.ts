import { Express, Request, Response, NextFunction } from 'express'
import methods, { Methods, Method } from './methods'

type ResponseFunction = { [key in Methods]: (data: any, meta?: any) => void }

declare global {
  namespace Express {
    interface Response {
      formatter: ResponseFunction
    }
  }
}

const responseEnhancer = (definedMeta?: any) => (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.formatter = _generateFormatters(res, definedMeta)
  next()
}

const _generateFormatters = (res: Response, definedMeta?: any) => {
  const formatter = {} as ResponseFunction
  let responseMeta = {}
  let responseBody = {}

  methods.map((method: Method) => {
    if (method.isSuccess) {
      formatter[method.name] = (data: any, meta: any) => {
        responseMeta = meta ? meta : definedMeta
        responseBody = _generateSuccessResponse({ data, meta: responseMeta })
        res.status(parseInt(method.code)).json(responseBody)
      }
    } else {
      formatter[method.name] = (error: any, meta: any) => {
        responseMeta = meta ? meta : definedMeta
        responseBody = _generateErrorResponse({ error, meta: responseMeta })
        res.status(parseInt(method.code)).json(responseBody)
      }
    }
  })

  return formatter
}

interface SuccessInput {
  data: any
  meta: any
}

const _generateSuccessResponse = ({ data, meta }: SuccessInput) => ({
  data,
  meta,
})

interface ErrorsInput {
  error: any
  meta: any
}

const _generateErrorResponse = ({ error, meta }: ErrorsInput) => ({
  error,
  meta,
})

export { responseEnhancer }
