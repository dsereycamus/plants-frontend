import { Button } from '@components/index'
import { useNavigate } from 'react-router-dom'

export const SignupView = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-5 w-full">
            <h1 className="title-35-600">Nuevos usuarios</h1>
            <p>Si tienes una cuenta ingresa con tu correo y contraseña</p>
            <p>
                Crea una cuenta y empieza a vender o a comprar con la plataforma
            </p>
            <Button onClick={() => navigate('/signup')}>Registro</Button>
        </div>
    )
}
