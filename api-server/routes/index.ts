import { Express } from "express";
import { ServiceContext } from "../services";
import { EntityContext } from "../entities";
import { SessionController, UserController } from "./controllers";
import { isAuthenticated, sessionMiddleware } from "./middlewares/sessionMiddleware";

export const addRoutes = (app: Express, serviceContext: ServiceContext, entityContext: EntityContext) => {
  app.use(sessionMiddleware(serviceContext.redisService))

  app.get('/', (req, res) => {
    return res.status(200).send('ok')
  })

  const sessionController = new SessionController(serviceContext, entityContext)
  app.post('/register', sessionController.registerUser.bind(sessionController))
  app.post('/login', sessionController.loginUser.bind(sessionController))
  app.post('/logout', sessionController.logoutUser.bind(sessionController))

  const userController = new UserController(serviceContext, entityContext)
  app.get('/user', isAuthenticated, userController.getUserInfo.bind(userController))
}
