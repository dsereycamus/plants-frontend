import { Button, Input } from '@components/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { TLoginRequest } from '@models/index'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { LoginSchema } from './LoginSchema'
import { useSession } from '@contexts/session.context'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
    const navigate = useNavigate()
    const { signin } = useSession()

    const { control, handleSubmit } = useForm<TLoginRequest>({
        defaultValues: undefined,
        resolver: zodResolver(LoginSchema),
        mode: 'all',
    })

    const submit = (values: TLoginRequest) => {
        if (values.email && values.password) {
            toast('Inicio de sesión exitoso', { type: 'success' })
            signin()
            navigate('/')
        } else toast('Inicio de sesión fallido', { type: 'error' })
    }

    return (
        <div className="flex flex-col gap-5 w-full">
            <h1 className="title-35-600">Usuario registrado</h1>
            <p>Si tienes una cuenta ingresa con tu correo y contraseña</p>
            <Input
                control={control}
                placeholder="Correo"
                label="Correo"
                name="email"
                type="email"
                required
            />
            <Input
                control={control}
                placeholder="Contraseña"
                label="Contraseña"
                name="password"
                type="password"
                required
            />
            <Button onClick={handleSubmit(submit)}>Inicio de sesión</Button>
        </div>
    )
}
