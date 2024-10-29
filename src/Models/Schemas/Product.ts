export type TProduct = {
    createdAt: Date
    description: string
    id: number
    image: string
    name: string
    ownerId: number
    price: number
    stock: number
    updatedAt: Date
}

export type TProductData = {
    amount: number
    product: TProduct
}
