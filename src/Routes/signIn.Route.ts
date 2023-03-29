import { Router } from "express";
import { signIn } from "../Controllers/signIn.Controller";

const signInRouter = Router()

signInRouter.post('/', signIn)

export default signInRouter