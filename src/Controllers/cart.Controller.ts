import { Request, Response } from "express";
import cartService from "../Service/cart-service";

export async function addProductToCart(req: Request, res: Response){

    const {id, name, price, image, amount, userId} = req.body

    try{
        await cartService.postProductToCart(id, name, price, image, amount, userId)
        res.sendStatus(201)
    }catch(err){
        res.status(500).send(err)
    }
}

export async function getProductsToCart(req: Request, res: Response){
    const {userId} = res.locals.user
    console.log(userId)
    try{
        const products = await cartService.getProductsToCart(userId.toString())
        res.status(200).send(products)
    }catch(err){
        res.status(500).send(err)
    }
}

export async function deleteProductToCart(req: Request, res: Response){

    const {id} = req.params

    try{
        await cartService.deleteProductToCart(id)
        res.sendStatus(200)
    }catch(err){
        res.status(500).send(err)
    }
}