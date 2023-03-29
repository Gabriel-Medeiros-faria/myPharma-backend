import { Router } from "express";
import { signUp } from "../Controllers/signUp.Controller";

const signUpRouter = Router()

signUpRouter.post('/', signUp)

export default signUpRouter