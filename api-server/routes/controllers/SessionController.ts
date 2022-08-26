import { EntityContext } from "../../entities";
import { UserInteractor, UsernameAlreadyExistsError } from "../../interactors";
import { ServiceContext } from "../../services";
import { NextFunction, Request, Response } from "express";
import httpResponse from "../util/http-response";

export class SessionController {
  private readonly userInteractor: UserInteractor

  constructor(private readonly serviceContext: ServiceContext, private readonly entityContext: EntityContext) {
    this.userInteractor = UserInteractor.factory(serviceContext, entityContext)
  }

  public async registerUser(req: Request, res: Response) {
    const { username, password, email } = req.body
    if (!username) {
      httpResponse(res).unprocessable('Mussing username parameter')
      return
    }
    if (!password) {
      httpResponse(res).unprocessable('Mussing password parameter')
      return
    }
    if (!email) {
      httpResponse(res).unprocessable('Mussing email parameter')
      return
    }

    try {
      await this.userInteractor.createUser(username, password, email)
    } catch (e) {
      if (e instanceof UsernameAlreadyExistsError) {
        httpResponse(res).badRequest(e.message)
        return
      }
      httpResponse(res).internal(e.message)
      return
    }

    httpResponse(res).ok()
  }

  public async loginUser(req: Request, res: Response) {
    const { username, password } = req.body
    if (!username) {
      httpResponse(res).badRequest('Mussing username parameter')
      return
    }
    if (!password) {
      httpResponse(res).badRequest('Mussing password parameter')
      return
    }

    try {
      await this.userInteractor.loginUser(username, password)
    } catch (e) {
      httpResponse(res).internal(e.message)
      return
    }

    req.session.regenerate((err) => {
      if (err) httpResponse(res).internal(err.message)

      req.session.username = username
      req.session.save((err) => {
        if (err) httpResponse(res).internal(err.message)
        httpResponse(res).ok()
      })
    })
  }

  public async logoutUser(req: Request, res: Response, next: NextFunction) {
    req.session.username = null
    req.session.save((err) => {
      if (err) httpResponse(res).internal(err.message)

      req.session.regenerate((err) => {
        if (err) httpResponse(res).internal(err.message)
        httpResponse(res).ok()
      })
    })
  }
}
