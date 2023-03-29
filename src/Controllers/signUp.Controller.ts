import { Request, Response } from "express";
import signUpService from "../Service/signUp-service";

export async function signUp(req: Request, res: Response) {
  const { password, email, name } = req.body;
  try {
    await signUpService.signUp(password, email, name);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(403).send(error);
  }
}
