import { NextApiRequest, NextApiResponse } from "next";
import User from "lib/models/user";
import withSession from "lib/session";

const loginRoute = async (req: NextApiRequest, res: NextApiResponse<User|Error>) => {
  let username, password
  try {
    const body = await req.body
    username = body.username
    password = body.password
  } catch (e) {
    res.status(400).json({ message: (e as Error).message, name: 'Missing Login Credentials' })
    return
  }

  console.log(`log in with ${username} ${password}`)

  const user: User = { username, isLoggedIn: true }
  req.session.user = user
  await req.session.save()
  res.json(user)
}

export default withSession(loginRoute)
