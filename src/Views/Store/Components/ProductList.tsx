import { FC } from 'react'
import { ProductItem } from './ProductItem'
import { TProductListProps } from './types'
import { useFilters } from '@contexts/filters.context'

export const ProductList: FC<TProductListProps> = ({ items }) => {
    const { filters } = useFilters()

    return (
        <div className="w-full px-[5vw]">
            <h1 className="text-[30px] mb-7">{filters?.type}</h1>
            <div className="grid grid-cols-4 gap-4 self-start">
                {items.filter(
                    (item) =>
                        item.price >= (filters?.min ?? 0) &&
                        item.price <= (filters?.max ?? 1000000000)
                ).length === 0 && (
                    <h1>No se encuentran productos con esos filtros</h1>
                )}
                {items
                    .filter(
                        (item) =>
                            item.price >= (filters?.min ?? 0) &&
                            item.price <= (filters?.max ?? 1000000000)
                    )
                    .map((item) => (
                        <ProductItem key={item._id} item={item} />
                    ))}
            </div>
        </div>
    )
}
