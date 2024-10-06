import { TOption } from '@models/Generic/Option'
import { EPaymentMethods, TProductData } from '@models/index'

export type TDeliveryForm = {
    delivery: boolean
    names: string
    lastNames: string
    email: string
    address: string
    region: TOption
    city: TOption
    zipcode: string
    items: TProductData[]
    paymentMethod: EPaymentMethods
}

export type TProductItemProps = {
    item: TProductData
}