export type TProduct = {
    _id: string
    name: string
    price: number
    description: string
    image: string
    owner: string
    stock: number
}

export type TProductData = {
    amount: number
    product: TProduct
}
