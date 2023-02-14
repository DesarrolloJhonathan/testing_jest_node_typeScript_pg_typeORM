import { middleware as connDatabase } from '../middlewares/connectionDatabase.middleware'
import { middleware as errorHandler } from '../middlewares/errorHandler.middleware'
import { router as userRouter } from '../router/users/users.router'
import * as express from 'express'

export function routerApi(app: any) {
    console.log(`\n function routerApi\n`)
    app.use('/user', userRouter)
    addGeneralMiddlewares(app)
    app.use(errorHandler)
}

function addGeneralMiddlewares(app: any) {
    app.use(express.json())
    app.use(connDatabase)
}
