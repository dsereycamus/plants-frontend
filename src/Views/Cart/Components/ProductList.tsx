import { useCart } from '@contexts/cart.context'
import { ProductItem } from './ProductItem'

export const ProductList = () => {
    const { items } = useCart()
    return (
        <div className='flex flex-col w-full gap-4'>
            {items.length === 0 && <h1 className='text-center text-25-600'>No tienes productos en el carrito</h1>}
            {items.map((item) => (
                <ProductItem
                    item={item}
                    key={`cart-item-${item.product.id}`}
                />
            ))}
        </div>
    )
}
