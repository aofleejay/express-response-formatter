import { Request, Response, NextFunction } from 'express'
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
declare const responseEnhancer: () => (
  req: Request<import('express-serve-static-core').ParamsDictionary>,
  res: Response<any>,
  next: NextFunction,
) => void
export { responseEnhancer }
