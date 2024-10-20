import { Button } from '@components/index'
import { useCart } from '@contexts/cart.context'
import { FC } from 'react'
import { TProductItemProps } from './types'

export const ProductItem: FC<TProductItemProps> = ({ item }) => {
    const { addItem } = useCart()

    return (
        <div className="p-4 border border-black rounded-xl flex flex-col gap-1">
            <img src={item.image} />
            <p className="text-lightRed text-xl">
                {item.price.toLocaleString('es-cl', {
                    currency: 'CLP',
                    style: 'currency',
                })}
            </p>
            <p>{item.name}</p>
            <Button onClick={() => addItem(item)} variant="tertiary">
                Agregar
            </Button>
        </div>
    )
}
