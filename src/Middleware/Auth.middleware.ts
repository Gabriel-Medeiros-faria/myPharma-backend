import * as jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { sessionsCollection } from '../dataBase/db';

export async function AuthMiddleware(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).send("Campo authorization obrigatório")
    }
    const token = authorization.replace('Bearer ', '')
    if(!token) return res.status(401).send('não tem token')

    try{
        const session = await sessionsCollection.findOne({token})
        if(!session) return res.status(401).send('não tem sessão')
        res.locals.user = session
        return next()
    }catch(err){
        res.status(500).send(err)
    }
}