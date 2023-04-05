import { signUpSchema } from "../Models/signUp.model";
import { NextFunction, Request, Response } from "express";

export async function SignUpMiddleware(req: Request, res: Response, next: NextFunction){

    try{
        const validation = signUpSchema.validate(req.body, {abortEarly: false})
        if (validation.error) {
            const erros = validation.error.details.map((detail) => detail.message)
            res.status(400).send(erros)
            return
        }
        next()
    }catch(err){
        res.status(500).send(err)
    }
}