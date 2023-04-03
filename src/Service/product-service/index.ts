import productRepository from "../../Repositories/product.repository"

async function createProduct(name: string, description: string, category: string, price: number, image: string){
        await productRepository.create(name, description, category, price, image)
}

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
    createProduct,
    findProducts,
    findOneProduct
}

export default productService