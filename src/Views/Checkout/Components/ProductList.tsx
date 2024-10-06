import { useCart } from '@contexts/cart.context'
import { ProductItem } from './ProductItem'
import { Input } from '@components/Input'
import { useForm } from 'react-hook-form'
import { BiSolidCoupon } from 'react-icons/bi'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { EPaymentMethods } from '@models/index'
import { PaymentMethod } from './PaymentMethod'
import { Button } from '@components/Button'
import { useNavigate } from 'react-router-dom'

export const ProductList = () => {
    const navigate = useNavigate()
    const [discount, setDiscount] = useState<number>(0)
    const [paymentMethod, setPaymentMethod] = useState<EPaymentMethods>()
    const { control, handleSubmit, reset } = useForm<{ coupon: string }>()
    const delivery = 5000
    const { items, total, clearCart } = useCart()

    const submit = (values: { coupon: string }) => {
        if (values.coupon === 'PLANTAS') {
            toast.success('¡Cupón aplicado con éxito!')
            setDiscount(total * 0.25)
            reset()
        } else {
            toast.error('No existe este cupón')
            reset()
        }
    }

    const handlePayment = () => {
        clearCart()
        toast.success('¡Pagado exitosamente!')
        navigate('/')
    }

    return (
        <div className="flex flex-col w-full gap-10">
            <div className="flex flex-col gap-4">
                {items.length === 0 && (
                    <h1 className="text-center text-25-600">
                        No tienes productos en el carrito
                    </h1>
                )}
                {items.map((item) => (
                    <ProductItem
                        item={item}
                        key={`cart-item-${item.product._id}`}
                    />
                ))}
            </div>
            <Input
                name="coupon"
                control={control}
                placeholder="Código de descuento"
                leftElement={<BiSolidCoupon size={24} />}
                rightElement={
                    <div
                        className="text-16-600 !text-purple cursor-pointer select-none"
                        onClick={handleSubmit(submit)}
                    >
                        Aplicar
                    </div>
                }
            />
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <p className="text-14-400 !text-[#818EA1]">Subtotal</p>
                    <p className="text-14-600">
                        {total.toLocaleString('es-CL', {
                            currency: 'CLP',
                            style: 'currency',
                        })}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-14-400 !text-[#818EA1]">Delivery</p>
                    <p className="text-14-600">
                        {delivery.toLocaleString('es-CL', {
                            currency: 'CLP',
                            style: 'currency',
                        })}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-14-400 !text-[#818EA1]">Descuento</p>
                    <p className="text-14-600">
                        {discount.toLocaleString('es-CL', {
                            currency: 'CLP',
                            style: 'currency',
                        })}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-16-600">Total</p>
                    <p className="text-16-600">
                        {(total + delivery - discount).toLocaleString('es-CL', {
                            currency: 'CLP',
                            style: 'currency',
                        })}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-20-600">Selecciona tu método de pago</h1>
                {Object.values(EPaymentMethods).map((val) => (
                    <PaymentMethod
                        paymentMethod={val}
                        isSelected={paymentMethod === val}
                        select={() => setPaymentMethod(val)}
                    />
                ))}

                <Button variant="primary" onClick={handlePayment}>
                    Pagar
                </Button>
            </div>
        </div>
    )
}
