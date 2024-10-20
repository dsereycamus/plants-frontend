import { EPaymentMethods } from '@models/Schemas/Purchase'

type TProductIdAmount = {
    productId: number
    amount: number
}

type TDeliveryData = {
    address: string
    region: string
    city: string
    zipCode: string
}
type TBuyerData = {
    names: string
    lastNames: string
    email: string
}

export type TPurchaseRequest = {
    products: TProductIdAmount[]
    totalPrice: number
    intendedPrice: number
    paymentMethod: EPaymentMethods
    deliveryData: TDeliveryData
    buyerData: TBuyerData
}
