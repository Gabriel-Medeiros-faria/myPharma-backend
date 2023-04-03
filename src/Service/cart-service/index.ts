import cartRepository from "../../Repositories/cart-repository"

async function postProductToCart(id: string, name: string, price: number, image: string, amount: number){
        await cartRepository.create(id, name, price, image, amount)
}

async function getProductsToCart(){
    const products = await cartRepository.getProduct()
    return products
}

async function deleteProductToCart(id: string){
    await cartRepository.deleteProduct(id)
}


const cartService = {
    postProductToCart,
    getProductsToCart,
    deleteProductToCart
}

export default cartService