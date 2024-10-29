import { z } from 'zod'

export const SignupSchema = z
    .object({
        names: z
            .string({
                required_error: '* El nombre es requerido',
                invalid_type_error: '* El nombre debe ser un texto',
            })
            .min(1, { message: '* El nombre es requerido' }),
        lastNames: z
            .string({
                required_error: '* Los apellidos son requeridos',
                invalid_type_error: '* Los apellidos deben ser texto',
            })
            .min(1, { message: '* Los apellidos son requeridos' }),
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
        passwordConfirm: z
            .string({
                required_error: '* La contraseña es requerida',
                invalid_type_error: '* La contraseña es requerida',
            })
            .min(6, { message: '* Debe ser mayor a 6 caracteres' })
            .max(20, { message: '* Debe ser menor a 20 caracteres' }),
    })
    .refine((val) => val.password === val.passwordConfirm, {
        path: ['passwordConfirm'],
        message: '* Las contraseñas deben ser las mismas.',
    })
