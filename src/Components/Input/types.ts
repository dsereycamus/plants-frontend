/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, ReactNode } from 'react'
import { Control } from 'react-hook-form'

export type TInputProps = {
    name: string
    control: Control<any, any>
    leftElement?: ReactNode
    rightElement?: ReactNode
    required?: boolean
    label?: string
    className?: string
    containerClass?: string
    labelClass?: string
    error?: string
} & InputHTMLAttributes<HTMLInputElement>
