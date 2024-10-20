import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export type TButtonProps = {
    onClick: () => void
    isLoading?: boolean
    disabled?: boolean
    variant?: TVariants
    className?: string
} & PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement>

type TVariants = 'primary' | 'secondary' | 'tertiary'

export const Variants: Record<TVariants, string> = {
    ['primary']: 'btn-primary',
    ['secondary']: 'btn-secondary',
    ['tertiary']: 'btn-tertiary',
}
