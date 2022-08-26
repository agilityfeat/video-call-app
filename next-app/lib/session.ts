import { IronSessionOptions } from "iron-session";
import User from "./models/user";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'video-call-app/session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

export default function withSession(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions)
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}
