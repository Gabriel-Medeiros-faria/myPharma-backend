import { Router } from "express";
import {
  createProduct,
  findProducts,
  findOneProduct,
} from "../Controllers/product.Controller";
import { AuthMiddleware } from "../Middleware/Auth.middleware";

const productRouter = Router();

productRouter
  .all('/*', AuthMiddleware)
  .post("/" , createProduct)
  .get("/", findProducts)
  .get("/:id", findOneProduct);
export default productRouter;
