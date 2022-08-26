import { NextApiRequest, NextApiResponse } from "next";
import User from "../../lib/models/user";
import withSession from "../../lib/session";

export default withSession((req: NextApiRequest, res: NextApiResponse<User>) => {
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
})
