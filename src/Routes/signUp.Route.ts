import { Router } from "express";
import { signUp } from "../Controllers/signUp.Controller";
import {SignUpMiddleware}  from "../Middleware/signUpValidation.middleware"

const signUpRouter = Router()

signUpRouter.post('/', SignUpMiddleware, signUp)

export default signUpRouter