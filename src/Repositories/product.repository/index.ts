import { productCollection } from "../../dataBase/db";

async function create(name: string, description: string, category: string, price: number, image: string){
    return productCollection.insertOne({name, description, category, price, image})
}

async function find(){
    return productCollection.find().toArray()
}

const productRepository = {
    create,
    find
}

export default productRepository