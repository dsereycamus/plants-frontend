import { TProduct } from '@models/index'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { productService } from 'src/Services/productService'

export const useGetProducts = (): UseQueryResult<TProduct[], Error> =>
    useQuery({
        queryKey: ['get-product-list'],
        queryFn: async () => {
            const request = await productService.getProducts()
            const products = (request.data as TProduct[]).map((prod) => ({
                ...prod,
                image: `data:image/png;base64,${prod.image}`,
            }))
            return products
        },
    })
