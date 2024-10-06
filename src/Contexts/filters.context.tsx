import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useMemo,
    useState,
} from 'react'
import { EFilterList, TFilters } from '@views/Store/Components/types'

type FiltersContextData = {
    filters: TFilters
    setFilters: Dispatch<SetStateAction<TFilters>>
}

export const FiltersContext = createContext<FiltersContextData>({
    filters: {
        type: EFilterList.MAS_VENDIDAS,
    },
    setFilters: () => {},
})

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
    const [filters, setFilters] = useState<TFilters>({
        type: EFilterList.MAS_VENDIDAS,
    })

    const values = useMemo(
        () => ({
            filters,
            setFilters,
        }),
        [filters]
    )

    return (
        <FiltersContext.Provider value={values}>
            {children}
        </FiltersContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFilters = () => useContext(FiltersContext)
