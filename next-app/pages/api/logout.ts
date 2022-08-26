import { NextApiRequest, NextApiResponse } from "next";
import withSession from "../../lib/session";

const logoutHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  req.session.destroy();
  res.send({ ok: true });
}

export default withSession(logoutHandler)
