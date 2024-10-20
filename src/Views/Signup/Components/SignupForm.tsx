import { zodResolver } from '@hookform/resolvers/zod'
import { TSignupRequest } from '@models/Requests/SignupRequest'
import { useForm } from 'react-hook-form'
import { SignupSchema } from './SignupSchema'
import { Button, Input } from '@components/index'
import { useSignup } from 'src/Hooks/useUserService'
import { toast } from 'react-toastify'

export const SignupForm = () => {
    const { mutateAsync } = useSignup()
    const {
        control,
        handleSubmit,
        formState: { isLoading, isSubmitting, isValid },
    } = useForm<TSignupRequest>({
        defaultValues: undefined,
        resolver: zodResolver(SignupSchema),
        mode: 'all',
    })

    const submit = async (values: TSignupRequest) => {
        await mutateAsync(values, {
            onSuccess: () => {
                toast('Inicio de sesión exitoso', { type: 'success' })
            },
            onError: () => {
                console.log('Error')
                toast('Inicio de sesión fallido', { type: 'error' })
            },
        })
    }

    return (
        <div className="flex px-[8vw] py-12 bg-background justify-between gap-[5vw]">
            <div className="flex flex-col gap-5 w-full">
                <Input
                    control={control}
                    placeholder="Nombres"
                    label="Nombres"
                    name="names"
                    required
                />
                <Input
                    control={control}
                    placeholder="Apellidos"
                    label="Apellidos"
                    name="lastNames"
                    required
                />
            </div>
            <div className="flex flex-col gap-5 w-full">
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
                <Input
                    control={control}
                    placeholder="Contraseña"
                    label="Confirmar contraseña"
                    name="passwordConfirm"
                    type="password"
                    required
                />
                <Button
                    onClick={handleSubmit(submit)}
                    disabled={isLoading || !isValid || isSubmitting}
                    isLoading={isLoading || isSubmitting}
                >
                    CREAR CUENTA
                </Button>
            </div>
        </div>
    )
}
