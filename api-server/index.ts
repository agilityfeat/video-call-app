import express, { Express } from 'express';
import dotenv from 'dotenv';
import { addRoutes } from "./routes";
import { createServiceContext } from "./services";
import { createEntityContext } from "./entities";
import bodyParser from "body-parser";

(async () => {
  dotenv.config();

  const app: Express = express()
  app.use(bodyParser.json())

  const serviceContext = createServiceContext()
  const entityContext = createEntityContext()
  addRoutes(app, serviceContext, entityContext)

  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
  })
})()
