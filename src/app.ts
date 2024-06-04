import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductsRoutes } from './app/modules/products/products.routes'
import { OrdersRoutes } from './app/modules/orders/orders.routes'
const app:Application = express()
const port = 3000

// parser

app.use(express.json())
app.use(cors())

// application routes

app.use('/api/products', ProductsRoutes )

app.use('/api/orders',OrdersRoutes)

const getAController=(req:Request, res:Response) => {
  const a=30;
 res.send(a);

}

app.get('/', getAController)

export default app