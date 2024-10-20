import { FC, useMemo } from 'react'
import { TProductItemProps } from './types'
import Select from 'react-select'
import { FaCircleXmark } from 'react-icons/fa6'
import { useCart } from '@contexts/cart.context'

export const ProductItem: FC<TProductItemProps> = ({ item }) => {
    const { modifyAmount, removeItem } = useCart()

    const options = useMemo(
        () =>
            Array.from({ length: item.product.stock }, (_, k) => ({
                label: `${k + 1}`,
                value: k + 1,
            })),
        [item.product.stock]
    )

    return (
        <div className="flex rounded-xl border border-black p-7 items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={item.product.image} />
                <div>
                    <p>{item.product.name}</p>
                    <p className="text-lightRed text-xl">
                        {item.product.price.toLocaleString('es-cl', {
                            currency: 'CLP',
                            style: 'currency',
                        })}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <label>Cantidad:</label>
                <Select
                    options={options}
                    placeholder="Cantidad"
                    defaultValue={options.find(
                        (opt) => opt.value === item.amount
                    )}
                    onChange={(val) => {
                        modifyAmount(item.product, val?.value ?? item.amount)
                    }}
                />
                <p>
                    {(item.amount * item.product.price).toLocaleString(
                        'es-CL',
                        { currency: 'CLP', style: 'currency' }
                    )}
                </p>
                <FaCircleXmark
                    size={24}
                    color="#ACACAC"
                    onClick={() => removeItem(item.product)}
                    className="hover:cursor-pointer bg-black rounded-full"
                />
            </div>
        </div>
    )
}
