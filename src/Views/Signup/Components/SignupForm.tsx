import { zodResolver } from '@hookform/resolvers/zod'
import { TSignupRequest } from '@models/Requests/SignupRequest'
import { useForm } from 'react-hook-form'
import { SignupSchema } from './SignupSchema'
import { Button, Input } from '@components/index'

export const SignupForm = () => {
    const { control } = useForm<TSignupRequest>({
        defaultValues: undefined,
        resolver: zodResolver(SignupSchema),
        mode: 'all',
    })

    // const submit = (values: TSignupRequest) => {
    //     if (values.email && values.password) {
    //         toast('Inicio de sesión exitoso', { type: 'success' })
    //     } else toast('Inicio de sesión fallido', { type: 'error' })
    // }

    return (
        <div className="flex px-[8vw] py-12 bg-background justify-between gap-[5vw]">
            <div className="flex flex-col gap-5 w-full">
                <Input
                    control={control}
                    placeholder="Nombres"
                    label="Nombres"
                    name="name"
                    required
                />
                <Input
                    control={control}
                    placeholder="Apellidos"
                    label="Apellidos"
                    name="lastName"
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
                <Button onClick={() => {}}>CREAR CUENTA</Button>
            </div>
        </div>
    )
}
