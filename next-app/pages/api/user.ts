import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../lib/models/user";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute((req: NextApiRequest, res: NextApiResponse<User>) => {
  if (req.session.user) {
    res.json({
      ...req.session.user,
      isLoggedIn: true
    })
  } else {
    res.json({
      isLoggedIn: false,
      username: null
    })
  }
}, sessionOptions)
