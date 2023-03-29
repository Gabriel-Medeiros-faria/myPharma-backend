import { Response, Request } from "express";
import signInService from "../Service/signIn-service";

export async function signIn(req: Request, res:Response){
    const {email} = req.body

    try{
        await signInService.signIn(email)
        res.sendStatus(200)
    }catch(err){
        res.status(500).send(err)
    }
}