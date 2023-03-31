import productRepository from "../../Repositories/product.repository"

async function createProduct(name: string, description: string, category: string, price: number, image: string){
        await productRepository.create(name, description, category, price, image)
}

async function findProducts(){
    const products = await productRepository.find()
    return products
}

const productService = {
    createProduct,
    findProducts
}

export default productService