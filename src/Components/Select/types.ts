/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form'

export type TSelectProps = {
    options: { value: string; label: string }[]
    name: string
    control: Control<any, any>
    placeholder?: string
    label?: string
    containerClass?: string
    labelClass?: string
    required?: boolean
    error?: string
}
