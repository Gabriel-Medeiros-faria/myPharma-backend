import { Response, Request } from "express";
import productService from "../Service/product-service";

export async function createProduct(req: Request, res: Response) {
  const { name, description, category, price, image } = req.body;
  try {
    await productService.createProduct(name, description, category, price, image)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function findProducts(req: Request, res: Response) {
  try {
    const products = await productService.findProducts()
    res.status(200).send(products)
  } catch (err) {
    res.status(500).send(err);
  }
}
