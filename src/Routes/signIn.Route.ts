import { Router } from "express";
import { signIn, deleteSession } from "../Controllers/signIn.Controller";
import { AuthMiddleware } from "../Middleware/Auth.middleware";
import { SignInMiddleware } from "../Middleware/signInValidation.middleware";

const signInRouter = Router();

signInRouter.post("/", SignInMiddleware , signIn)
    .delete("/", AuthMiddleware, deleteSession);

export default signInRouter;
