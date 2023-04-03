import { Router } from "express";
import { signIn, deleteSession } from "../Controllers/signIn.Controller";
import { AuthMiddleware } from "../Middleware/Auth.middleware";

const signInRouter = Router();

signInRouter.post("/", signIn).delete("/", AuthMiddleware, deleteSession);

export default signInRouter;
