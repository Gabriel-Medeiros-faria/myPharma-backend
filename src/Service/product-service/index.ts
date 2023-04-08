import productRepository from "../../Repositories/product.repository"



async function findProducts(){
    const products = await productRepository.find()
    return products
}

async function findOneProduct(id: string){
    const product = await productRepository.findOne(id)
    if(!product) throw {name: 'Produto não encontrado!'}
    return product
}

const productService = {
    findProducts,
    findOneProduct
}

export default productService