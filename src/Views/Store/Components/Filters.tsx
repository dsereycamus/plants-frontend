import { Input } from '@components/index'
import { FilterItem } from './FilterItem'
import { FilterList } from './constants'
import { useForm } from 'react-hook-form'
import { EFilterList, TFilters } from './types'
import { useEffect } from 'react'
import { useFilters } from 'src/Contexts/filters.context'

export const Filters = () => {
    const { setFilters } = useFilters()
    const { control, setValue, watch } = useForm<TFilters>({
        defaultValues: {
            type: EFilterList.MAS_VENDIDAS,
        },
    })

    const typeWatch = watch('type')

    useEffect(() => {
        const { unsubscribe } = watch(({ type, min, max }) =>
            setFilters((filt) => ({
                ...filt,
                ...(type && { type }),
                min: min?.toString() !== '' ? min : undefined,
                max: max?.toString() !== '' ? max : undefined,
            }))
        )
        return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch])

    return (
        <div>
            <h1 className="text-25-700 mb-7">Plantas</h1>
            <div className="flex gap-5 flex-col">
                {FilterList.map((filter) => (
                    <FilterItem
                        selected={typeWatch === filter}
                        name={filter}
                        key={`plant-filter-${filter}`}
                        onClick={() => setValue('type', filter)}
                    />
                ))}
            </div>
            <hr className='my-10'/>
            <div className='flex flex-col gap-5'>
                <h1 className="text-25-700 mb-7">Precio</h1>

                <Input
                    control={control}
                    name="min"
                    type="number"
                    placeholder="Desde"
                />
                <Input
                    control={control}
                    name="max"
                    type="number"
                    placeholder="Hasta"
                />
            </div>
        </div>
    )
}
