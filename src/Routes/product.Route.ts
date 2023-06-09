import { Router } from "express";
import {
  findProducts,
  findOneProduct,
} from "../Controllers/product.Controller";
import { AuthMiddleware } from "../Middleware/Auth.middleware";

const productRouter = Router();

productRouter
  .all('/*', AuthMiddleware)
  .get("/", findProducts)
  .get("/:id", findOneProduct);
export default productRouter;
