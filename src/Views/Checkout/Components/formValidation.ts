import { z } from 'zod'

export const DeliveryFormSchema = z.object({
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

    address: z
        .string({
            required_error: '* La dirección es requerida',
            invalid_type_error: '* La dirección es requerida',
        })
        .min(4, { message: '* Debe ser mayor a 4 caracteres' })
        .max(100, { message: '* Debe ser menor a 100 caracteres' }),
    region: z.object({
        value: z.string({
            required_error: '* La región es requerida',
            invalid_type_error: '* La región es requerida',
        }),
        label: z.string({
            required_error: '* La región es requerida',
            invalid_type_error: '* La región es requerida',
        }),
    }),
    city: z.object({
        value: z.string({
            required_error: '* La región es requerida',
            invalid_type_error: '* La región es requerida',
        }),
        label: z.string({
            required_error: '* La región es requerida',
            invalid_type_error: '* La región es requerida',
        }),
    }),
    zipcode: z
        .string({
            required_error: '* El zipcode es requerido',
            invalid_type_error: '* El zipcode es requerido',
        })
        .min(4, { message: '* Debe ser mayor a 4 caracteres' })
        .max(9, { message: '* Debe ser menor a 9 caracteres' }),
})
