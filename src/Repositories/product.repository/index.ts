import { ObjectId } from "mongodb";
import { productCollection } from "../../dataBase/db";

async function find(){
    return productCollection.find().toArray()
}

async function findOne(id: string){
    return productCollection.findOne({ _id: new ObjectId(id)})
}

const productRepository = {
    find,
    findOne
}

export default productRepository