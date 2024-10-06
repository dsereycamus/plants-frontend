import { FC } from 'react'
import { TInputProps } from './types'
import { Controller } from 'react-hook-form'

export const Input: FC<TInputProps> = ({
    label,
    control,
    required = false,
    labelClass,
    containerClass,
    leftElement,
    rightElement,
    name,
    className,
    error,
    ...rest
}) => {
    return (
        <div className={`flex flex-col w-full relative ${containerClass}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`text-20-400 flex ${labelClass}`}
                >
                    {label} {required && <p className="text-red">*</p>}
                </label>
            )}
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <div
                        className={`input flex w-full items-center ${label ? 'mt-5' : ''} ${className} focus-within:border-black`}
                    >
                        {leftElement && (
                            <div className="flex items-center justify-center pr-4">
                                {leftElement}
                            </div>
                        )}
                        <input
                            name={name}
                            className="w-full p-1 rounded-md focus:outline-none"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            {...rest}
                        />
                        {rightElement && (
                            <div className="flex items-center justify-center pl-4">
                                {rightElement}
                            </div>
                        )}
                    </div>
                )}
            />
            {(error || control?.getFieldState(name)?.error?.message) && (
                <p className="text-14-400 !text-red py-2">
                    {error || control.getFieldState(name)?.error?.message}
                </p>
            )}
        </div>
    )
}
