import { Breadcrumbs } from '@components/index'
import { StoreBreadcrumbs } from './Components/constants'
import { useEffect, useState } from 'react'
import { TProduct } from '@models/index'
import { ProductList } from './Components/ProductList'
import { Filters } from './Components/Filters'
import { FiltersProvider } from 'src/Contexts/filters.context'
import { useGetProducts } from 'src/Hooks/useProductService'

export const Store = () => {
    const { data } = useGetProducts()
    const [items, setItems] = useState<TProduct[]>([])

    useEffect(() => {
        if (data) setItems(data)
    }, [data])

    return (
        <FiltersProvider>
            <div className="px-[5vw] py-4">
                <Breadcrumbs breadcrumbs={StoreBreadcrumbs} />
                <p className="pl-2 pt-3">
                    Resultados: {items.length} productos
                </p>
                <div className="flex gap-8 mt-8">
                    <Filters />
                    <ProductList items={items} />
                </div>
            </div>
        </FiltersProvider>
    )
}
