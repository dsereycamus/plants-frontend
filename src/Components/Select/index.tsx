import { FC } from 'react'
import { TSelectProps } from './types'
import Select from 'react-select'
import { Controller } from 'react-hook-form'

export const CustomSelect: FC<TSelectProps> = ({
    containerClass,
    label,
    labelClass,
    placeholder,
    required,
    error,
    options,
    control,
    name,
}) => {
    return (
        <div className={`flex flex-col w-full ${containerClass}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`text-20-400 flex mb-4 ${labelClass}`}
                >
                    {label} {required && <p className="text-red">*</p>}
                </label>
            )}
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <>
                        <Select
                            options={options}
                            placeholder={placeholder}
                            defaultValue={options.find(
                                (opt) => opt.value === (value?.value ?? '')
                            )}
                            classNames={{
                                control: () => '!rounded-xl !bg-white !text-14-500 !border !border-gray !p-2',
                            }}
                            noOptionsMessage={() => <p>No hay opciones</p>}
                            onChange={onChange}
                        />
                        {(error ||
                            control?.getFieldState(name)?.error?.message) && (
                            <p className="text-14-400 !text-red py-2">
                                {error ||
                                    control.getFieldState(name)?.error?.message}
                            </p>
                        )}
                    </>
                )}
            />
        </div>
    )
}
