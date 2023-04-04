import { Response, Request } from "express";
import signInService from "../Service/signIn-service";
import { sessionsCollection } from "../dataBase/db";

export async function signIn(req: Request, res:Response){
    const {email, password} = req.body

    try{
        const userAndToken = await signInService.signIn(email, password)
        res.status(200). send(userAndToken)
    }catch(err){
        res.status(500).send(err)
    }
}

export async function deleteSession(req: Request, res:Response) {

    const {token} = res.locals.user 
    try{
        await signInService.deleteSession(token)
        res.sendStatus(200)
    }catch(err){
        res.status(500).send(err)
    }
}