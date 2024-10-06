import { Breadcrumbs } from '@components/Breadcrumbs'
import { CartBreadcrumbs } from './Components/constants'
import { ProductList } from './Components/ProductList'
import { useCart } from '@contexts/cart.context'
import { BsBagFill } from 'react-icons/bs'
import { Button } from '@components/Button'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const navigate = useNavigate()
    const { total } = useCart()
    return (
        <div className="px-[5vw] py-4">
            <Breadcrumbs breadcrumbs={CartBreadcrumbs} />
            <h1>Tu carrito</h1>
            <div className="flex flex-col gap-8 mt-8">
                <ProductList />
                {total > 0 && (
                    <>
                        <hr />
                        <div className="px-7 flex justify-between">
                            <h2>Subtotal</h2>
                            <h2>
                                {total.toLocaleString('es-CL', {
                                    currency: 'CLP',
                                    style: 'currency',
                                })}
                            </h2>
                        </div>
                        <hr />
                        <Button
                            onClick={() => navigate('/checkout')}
                            variant="tertiary"
                            className="flex gap-2 items-center justify-center !p-4"
                        >
                            <BsBagFill /> Confirmar compra
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}
