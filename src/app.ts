import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductsRoutes } from './app/modules/products/products.routes'
const app:Application = express()
const port = 3000

// parser

app.use(express.json())
app.use(cors())

// application routes

app.use('/api/v1/products', ProductsRoutes )

const getAController=(req:Request, res:Response) => {
  const a=30;
 res.send(a);

}

app.get('/', getAController)

export default app