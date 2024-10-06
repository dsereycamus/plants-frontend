/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react'
import { Control, Controller } from 'react-hook-form'
import { FaRegCircle, FaRegCircleDot } from 'react-icons/fa6'

type TCheckboxProps = {
    name: string
    control: Control<any, any>
} & PropsWithChildren

export const Checkbox: FC<TCheckboxProps> = ({ name, control, children }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
                <div
                    className={`select-none checkbox flex items-center cursor-pointer gap-3 ${value ? 'bg-lightBlue border-blue text-blue font-semibold' : ''}`}
                    onClick={() => onChange(!value)}
                >
                    {value ? <FaRegCircleDot /> : <FaRegCircle />}
                    {children}
                </div>
            )}
        />
    )
}
