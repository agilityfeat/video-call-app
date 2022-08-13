import { IronSessionOptions } from "iron-session";
import User from "./models/user";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'video-call-app/session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}
