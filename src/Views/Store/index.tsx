import { Breadcrumbs, Spinner } from '@components/index'
import { StoreBreadcrumbs } from './Components/constants'
import { useEffect, useState } from 'react'
import { TProduct } from '@models/index'
import { ProductList } from './Components/ProductList'
import { Filters } from './Components/Filters'
import { FiltersProvider } from 'src/Contexts/filters.context'
import { useGetProducts } from 'src/Hooks/useProductService'

export const Store = () => {
    const {
        data,
        isLoading: isLoadingData,
        isFetching,
        isRefetching,
    } = useGetProducts()
    const [items, setItems] = useState<TProduct[]>([])

    useEffect(() => {
        if (data) setItems(data)
    }, [data])

    const isLoading = isLoadingData || isFetching || isRefetching

    return (
        <FiltersProvider>
            <div className="px-[5vw] py-4">
                <Breadcrumbs breadcrumbs={StoreBreadcrumbs} />
                <p className="pl-2 pt-3">
                    Resultados: {items.length} productos
                </p>
                <div className="flex gap-8 mt-8">
                    <Filters />
                    {isLoading ? (
                        <div className="flex w-full items-center justify-center">
                            <Spinner size={100} />
                        </div>
                    ) : (
                        <ProductList items={items} />
                    )}
                </div>
            </div>
        </FiltersProvider>
    )
}
