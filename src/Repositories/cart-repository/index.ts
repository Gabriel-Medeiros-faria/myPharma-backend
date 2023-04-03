import { ObjectId } from "mongodb";
import { cartCollection } from "../../dataBase/db";

async function create(
  id: string,
  name: string,
  price: number,
  image: string,
  amount: number,
  userId: ObjectId
) {
  return cartCollection.insertOne({
    productId: new ObjectId(id),
    name,
    price,
    image,
    amount,
    userId
  });
}

async function getProduct(userId: string) {
  return cartCollection.find({userId}).toArray();
}

async function deleteProduct(id: string){
    return cartCollection.deleteOne({productId: new ObjectId(id)})
}

const cartRepository = {
  create,
  getProduct,
  deleteProduct
};

export default cartRepository;
