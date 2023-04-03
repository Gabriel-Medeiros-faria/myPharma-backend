import { Router } from "express";
import {
  addProductToCart,
  deleteProductToCart,
  getProductsToCart,
} from "../Controllers/cart.Controller";
import { AuthMiddleware } from "../Middleware/Auth.middleware";

const cartRouter = Router();

cartRouter
  .all("/*", AuthMiddleware)
  .post("/", addProductToCart)
  .get("/", getProductsToCart)
  .delete("/:id", deleteProductToCart);
export default cartRouter;
