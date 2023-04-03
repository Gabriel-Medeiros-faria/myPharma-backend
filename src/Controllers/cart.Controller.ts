import { Request, Response } from "express";
import cartService from "../Service/cart-service";

export async function addProductToCart(req: Request, res: Response){

    const {id, name, price, image, amount} = req.body

    try{
        await cartService.postProductToCart(id, name, price, image, amount)
        res.sendStatus(201)
    }catch(err){
        res.status(500).send(err)
    }
}

export async function getProductsToCart(req: Request, res: Response){
    try{
        const products = await cartService.getProductsToCart()
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