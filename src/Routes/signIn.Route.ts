import { Router } from "express";
import { signIn, deleteSession } from "../Controllers/signIn.Controller";

const signInRouter = Router()

signInRouter.post('/', signIn)
signInRouter.delete('/', deleteSession)

export default signInRouter