import { FC } from 'react'
import { TProductItemProps } from './types'

export const ProductItem: FC<TProductItemProps> = ({ item }) => {
    return (
        <div className="flex items-center gap-2 ">
            <img src={item.product.image} className="w-[100px] rounded-xl" />
            <div>
                <p>{item.product.name}</p>
                <p>x{item.amount}</p>
                <p className="font-semibold">
                    {item.product.price.toLocaleString('es-cl', {
                        currency: 'CLP',
                        style: 'currency',
                    })}
                </p>
            </div>
        </div>
    )
}
