import { Response, Request } from "express";
import productService from "../Service/product-service";

export async function findProducts(req: Request, res: Response) {
  try {
    const products = await productService.findProducts();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function findOneProduct(req: Request, res: Response) {
  const {id} = req.params
  try {
    const product = await productService.findOneProduct(id)
    res.send(product)
  } catch (err) {
    res.status(500).send(err);
  }
}
