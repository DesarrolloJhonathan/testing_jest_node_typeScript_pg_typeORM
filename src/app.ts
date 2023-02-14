import "reflect-metadata"
import express  from "express";
import { routerApi } from "./config/router/router";
import serverless from 'serverless-http'


const app = express()

// app.get('/test', (_req, res) => {
//     res.send('Express se ha inicializado correctamente!').json()
// })
routerApi(app)

module.exports.handler = serverless(app)

