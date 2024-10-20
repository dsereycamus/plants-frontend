/* eslint-disable react-hooks/exhaustive-deps */
import { ProductList } from './Components/ProductList'
import { useCart } from '@contexts/cart.context'
import { DeliveryForm } from './Components/DeliveryForm'
import { TDeliveryForm } from './Components/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from '@contexts/session.context'
import { DeliveryFormSchema } from './Components/formValidation'
import { useEffect } from 'react'

export const Checkout = () => {
    const { items } = useCart()
    const { user } = useSession()
    const form = useForm<TDeliveryForm>({
        defaultValues: user
            ? {
                  email: user.email,
                  names: user.names,
                  lastNames: user.lastNames,
              }
            : {},
        resolver: zodResolver(DeliveryFormSchema),
        mode: 'all',
    })

    useEffect(() => {
        if (user) {
            form.setValue('names', user.names)
            form.setValue('lastNames', user.lastNames)
            form.setValue('email', user.email)
        }
    }, [user])

    if (items.length === 0)
        return (
            <h1 className="text-center text-25-600 mt-8">
                No tienes productos en el carrito para continuar este proceso
            </h1>
        )

    return (
        <div className="px-[10vw] py-4 flex gap-10">
            <DeliveryForm form={form} />
            <div className="w-[1px] border-r-2 border-gray" />
            <ProductList form={form} />
        </div>
    )
}
