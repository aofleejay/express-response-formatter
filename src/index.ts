import { Express, Request, Response, NextFunction } from 'express'
import methods, { Method } from './methods'

interface LooseObject {
  [key: string]: any
}

declare global {
  namespace Express {
    interface Response {
      formatter: LooseObject
    }
  }
}

const responseEnhancer = () => (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.formatter = _generateFormatters(res)
  next()
}

const _generateFormatters = (res: Response) => {
  const formatter: LooseObject = {}
  let responseBody = {}

  methods.map((method: Method) => {
    if (method.isSuccess) {
      formatter[method.name] = (data: any, meta: any) => {
        responseBody = _generateSuccessResponse({ data, meta })
        res.status(parseInt(method.code)).json(responseBody)
      }
    } else {
      formatter[method.name] = (error: any, meta: any) => {
        responseBody = _generateErrorResponse({ error, meta })
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
