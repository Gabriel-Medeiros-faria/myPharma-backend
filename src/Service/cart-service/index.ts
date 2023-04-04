import { ObjectId } from "mongodb";
import cartRepository from "../../Repositories/cart-repository";

async function postProductToCart(
  id: string,
  name: string,
  price: number,
  image: string,
  amount: number,
  userId: ObjectId
) {
  const productsToCart = await cartRepository.getProduct(userId.toString());
  const product = productsToCart.find((prod) => prod.name === name);
  if (product) {
    await cartRepository.updateProduct(product.productId, amount + product.amount);
  } else {
    await cartRepository.create(id, name, price, image, amount, userId);
  }
  
}

async function getProductsToCart(userId: string) {
  const products = await cartRepository.getProduct(userId);
  return products;
}

async function deleteProductToCart(id: string) {
  await cartRepository.deleteProduct(id);
}

const cartService = {
  postProductToCart,
  getProductsToCart,
  deleteProductToCart,
};

export default cartService;
