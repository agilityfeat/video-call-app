import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(async (req: NextApiRequest, res: NextApiResponse) => {
    req.session.destroy();
    res.send({ ok: true });
  },
  sessionOptions,
);
