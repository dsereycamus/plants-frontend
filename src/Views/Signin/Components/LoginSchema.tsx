import { z } from 'zod'

export const LoginSchema = z.object({
    email: z
        .string({
            required_error: '* El correo es requerido',
            invalid_type_error: '* El correo debe ser un texto',
        })
        .min(1, { message: '* El correo es requerido' })
        .email('* El correo no es válido'),

    password: z
        .string({
            required_error: '* La contraseña es requerida',
            invalid_type_error: '* La contraseña es requerida',
        })
        .min(6, { message: '* Debe ser mayor a 6 caracteres' })
        .max(20, { message: '* Debe ser menor a 20 caracteres' }),
})
