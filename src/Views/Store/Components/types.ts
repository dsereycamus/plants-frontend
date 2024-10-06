import { TProduct } from '@models/index'

export type TProductListProps = {
    items: TProduct[]
}

export type TProductItemProps = {
    item: TProduct
}

export enum EFilterList {
    MAS_VENDIDAS = 'Más vendidas',
    INTERIOR = 'Plantas de Interior',
    INVIERNO = 'Plantas de Invierno',
    FLORES = 'Flores',
    PURIFICADAS = 'Plantas purificadas',
}

export type TFilters = {
    type: EFilterList
    min?: number
    max?: number
}
