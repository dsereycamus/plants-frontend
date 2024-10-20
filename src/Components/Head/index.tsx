import PlantsLogo from '@assets/PlantsIcon.png'
import { Button, Input } from '@components/index'
import { useForm } from 'react-hook-form'
import { FaCartShopping } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import { useCart } from '@contexts/cart.context'
import { useNavigate } from 'react-router-dom'

export const Head = () => {
    const navigate = useNavigate()
    const { items } = useCart()
    const { control, handleSubmit } = useForm<{ search: string }>({})

    const submit = (value: { search: string }) => {
        console.log('Búsqueda: ', value)
        toast.success('Búsqueda exitosa')
    }

    const goToCart = () => navigate('/cart')

    return (
        <div className="bg-green w-full py-7 px-[20%] flex justify-between items-center">
            <img src={PlantsLogo} />
            <div className="flex gap-4 w-full px-10">
                <Input
                    control={control}
                    placeholder="Buscar plantas"
                    className="w-full"
                    name={'search'}
                />
                <Button variant="secondary" onClick={handleSubmit(submit)}>
                    Buscar
                </Button>
            </div>
            <Button
                variant="secondary"
                className="flex gap-2 items-center "
                onClick={goToCart}
            >
                <FaCartShopping />
                <p>Carrito </p>
                {items.length > 0 && <p>({items.length})</p>}
            </Button>
        </div>
    )
}
