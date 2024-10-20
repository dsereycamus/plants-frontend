import { TProductData } from './Product'

export type TPurchaseDeliveryData = {
    address: string
    region: string
    city: string
    zipcode: number
}

export type TPurchaseBuyerData = {
    names: string
    lastNames: string
    email: string
}

export type TPurchase = {
    _id: string
    products: TProductData[]
    intendedTotalPrice: number
    actualTotalPrice: number
    paymentMethod: EPaymentMethods
    deliveryData: TPurchaseDeliveryData
    buyerData: TPurchaseBuyerData
}
export enum EPaymentMethods {
    'CREDIT_CARD' = 'CREDIT_CARD',
    'DEBIT_CARD' = 'DEBIT_CARD',
    'BANK_TRANSFER' = 'BANK_TRANSFER',
}

export const PaymentMethodText = {
    CREDIT_CARD: 'Crédito',
    DEBIT_CARD: 'Débito',
    BANK_TRANSFER: 'Transferencia',
}
