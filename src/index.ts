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
      formatter[method.name] = (errors: any[]) => {
        responseBody = _generateErrorResponse({ errors })
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
  meta,
  data,
})

interface ErrorsInput {
  errors: any[]
}

const _generateErrorResponse = ({ errors }: ErrorsInput) => ({
  errors,
})

export { responseEnhancer }
