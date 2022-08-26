import session, { SessionData, SessionOptions, Store } from "express-session";
import { Environment, getEnvironment, RedisService } from "../../services";
import { NextFunction, Request, Response } from "express";
import httpResponse from "../util/http-response";

const SESSION_TTL_SECONDS = 24 * 60 * 60

class SessionStore extends Store {
  constructor(private readonly redisService: RedisService) {
    super()
  }

  destroy(sid: string, callback?: (err?: any) => void): void {
    this.redisService.deleteUserSession(sid)
      .then(callback)
      .catch(callback)
  }

  get(sid: string, callback: (err: any, session?: (session.SessionData | null)) => void): void {
    this.redisService.getUserSession(sid)
      .then((session) => callback(null, session))
      .catch(callback)
  }

  set(sid: string, session: session.SessionData, callback?: (err?: any) => void): void {
    this.redisService.saveUserSession(sid, session, SESSION_TTL_SECONDS)
      .then(callback)
      .catch(callback)
  }

  touch(sid: string, sess: SessionData, cb?: () => void) {
    this.redisService.setUserSessionTtl(sid, SESSION_TTL_SECONDS)
      .then(cb)
      .catch(cb)
  }

  clear(cb?: () => void) {
    this.redisService.clearAllSessions()
      .then(cb)
      .catch(cb)
  }

  length(callback: (err: any, length: number) => void) {
    this.redisService.getAllSessionKeys()
      .then(keys => callback(null, keys.length))
      .catch(e => callback(e, 0))
  }
}

export const sessionMiddleware = (redisService: RedisService) => {
  const sessionSecret = process.env.SESSION_SECRET;
  if (!sessionSecret) {
    throw new Error('Auth: Unable to get SESSION_SECRET env')
  }
  const sessionOptions: SessionOptions = {
    secret: sessionSecret,
    resave: true,
    saveUninitialized: false,
    store: new SessionStore(redisService)
  }
  if (getEnvironment() === Environment.PRODUCTION) {
    sessionOptions.cookie = {}
  }

  return session(sessionOptions)
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.username) next()
  else httpResponse(res).unauthorized('Not logged in')
}
