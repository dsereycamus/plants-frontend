import { TBreadcrumb } from '@components/Breadcrumbs/types'
import { EFilterList } from './types'

export const StoreBreadcrumbs: TBreadcrumb[] = [
    {
        route: '/',
        name: 'Home',
    },
    {
        route: '/store',
        name: 'Plantas',
    },
]

export const FilterList: EFilterList[] = [
    EFilterList.MAS_VENDIDAS,
    EFilterList.INTERIOR,
    EFilterList.INVIERNO,
    EFilterList.FLORES,
    EFilterList.PURIFICADAS,
]
