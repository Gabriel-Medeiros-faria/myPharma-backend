import { Router } from "express";
import { createProduct, findProducts } from "../Controllers/product.Controller";

const productRouter = Router()

productRouter.post('/', createProduct)
productRouter.get('/', findProducts)

export default productRouter