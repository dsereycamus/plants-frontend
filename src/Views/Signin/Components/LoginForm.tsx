import { Button, Input } from '@components/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { TLoginRequest } from '@models/index'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { LoginSchema } from './LoginSchema'
import { useSession } from '@contexts/session.context'
import { useNavigate } from 'react-router-dom'
import { useGetUserData, useSignin } from 'src/Hooks/useUserService'

export const LoginForm = () => {
    const navigate = useNavigate()
    const { mutateAsync } = useSignin()
    const { refetch } = useGetUserData()
    const { signin } = useSession()

    const {
        control,
        handleSubmit,
        formState: { isLoading, isValid, isSubmitting },
    } = useForm<TLoginRequest>({
        defaultValues: undefined,
        resolver: zodResolver(LoginSchema),
        mode: 'all',
    })

    const submit = async (values: TLoginRequest) => {
        await mutateAsync(values, {
            onSuccess: async (data) => {
                const userData = await refetch()
                toast('Inicio de sesión exitoso', { type: 'success' })
                signin(userData.data!, data.token)
                navigate('/')
            },
            onError: () => {
                toast('Inicio de sesión fallido', { type: 'error' })
            },
        })
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
            <Button
                onClick={handleSubmit(submit)}
                disabled={isLoading || isSubmitting || !isValid}
                isLoading={isLoading || isSubmitting}
            >
                Inicio de sesión
            </Button>
        </div>
    )
}
