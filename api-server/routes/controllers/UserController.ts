import { Request, Response } from "express";
import httpResponse from "../util/http-response";
import { EntityContext } from "../../entities";
import { UserInteractor } from "../../interactors";
import { ServiceContext } from "../../services";

export class UserController {
  private readonly userInteractor

  constructor(private readonly serviceContext: ServiceContext, private readonly entityContext: EntityContext) {
    this.userInteractor = UserInteractor.factory(serviceContext, entityContext)
  }

  public async getUserInfo(req: Request, res: Response) {
    let userInfo
    try {
      userInfo = await this.userInteractor.getUserInfo((req.session as any).username)
    } catch (e) {
      httpResponse(res).internal('Error while getting user info: ' + e.message)
      return
    }
    httpResponse(res).ok('success', { userInfo })
  }
}
