import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import signInRouter from './Routes/signIn.Route'
import signUpRouter from './Routes/signUp.Route'

dotenv.config()
const app = express()
app
    .use(express.json())
    .use(cors())
    .use("/auth", signInRouter)
    .use("/user", signUpRouter)


const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Servidor está rodando na porta ${port}`))