import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import signInRouter from './Routes/signIn.Route'
import signUpRouter from './Routes/signUp.Route'
import productRouter from './Routes/product.Route'
import cartRouter from './Routes/cart.Route'

dotenv.config()
const app = express()
app
    .use(express.json())
    .use(cors())
    .use("/auth", signInRouter)
    .use("/user", signUpRouter)
    .use("/products" , productRouter)
    .use("/cart", cartRouter)
//const port = process.env.PORT || 5000
const port = 5001
app.listen(port, ()=> console.log(`Servidor está rodando na porta ${port}`))