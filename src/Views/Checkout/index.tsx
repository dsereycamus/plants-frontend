import { ProductList } from './Components/ProductList'
import { useCart } from '@contexts/cart.context'
import { DeliveryForm } from './Components/DeliveryForm'

export const Checkout = () => {
    const { items } = useCart()
    if (items.length === 0)
        return (
            <h1 className="text-center text-25-600 mt-8">
                No tienes productos en el carrito para continuar este proceso
            </h1>
        )

    return (
        <div className="px-[10vw] py-4 flex gap-10">
            <DeliveryForm />
            <div className="w-[1px] border-r-2 border-gray" />
            <ProductList />
        </div>
    )
}
