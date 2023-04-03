import { ObjectId } from "mongodb";
import { productCollection } from "../../dataBase/db";

async function create(name: string, description: string, category: string, price: number, image: string){
    return productCollection.insertOne({name, description, category, price, image})
}

async function find(){
    return productCollection.find().toArray()
}

async function findOne(id: string){
    return productCollection.findOne({ _id: new ObjectId(id)})
}

const productRepository = {
    create,
    find,
    findOne
}

export default productRepository