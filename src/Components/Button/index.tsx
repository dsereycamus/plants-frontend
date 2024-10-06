import { FC } from 'react'
import { TButtonProps, Variants } from './types'
import { Spinner } from '@components/Spinner'

export const Button: FC<TButtonProps> = ({
    onClick,
    variant = 'primary',
    className,
    disabled = false,
    isLoading = false,
    children,
    ...rest
}) => {
    return (
        <button
            onClick={onClick}
            className={`${Variants[variant]} ${className}`}
            disabled={isLoading || disabled}
            {...rest}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                children
            )}
        </button>
    )
}
