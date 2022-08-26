import { Response } from "express";

const httpResponse = (res: Response) => {
  const badRequest = (message: string) => res.status(400).json({
    ok: false,
    message
  })

  const unauthorized = (message: string) => res.status(401).json({
    ok: false,
    message
  })

  const unprocessable = (message: string) => res.status(422).json({
    ok: false,
    message
  })

  const internal = (message: string) => res.status(500).json({
    ok: false,
    message
  })

  const ok = (message: string = 'success', data?: object) => res.status(200).json({
    ok: true,
    message,
    data
  })

  return {
    unauthorized,
    unprocessable,
    badRequest,
    internal,
    ok
  }
}

export default httpResponse
