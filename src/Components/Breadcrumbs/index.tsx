import { FC, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TBreadcrumbsProps } from './types'
import { FaChevronRight } from 'react-icons/fa'

export const Breadcrumbs: FC<TBreadcrumbsProps> = ({
    breadcrumbs,
    className,
}) => {
    const location = useLocation()

    const current = useMemo(() => location.pathname, [location.pathname])

    return (
        <div className={`flex gap-2 items-center ${className}`}>
            {breadcrumbs.map((crumb, idx) => (
                <>
                    <Link
                        to={crumb.route}
                        className={`text-20-400 ${current === crumb.route ? '' : '!text-red'}`}
                    >
                        {crumb.name}
                    </Link>
                    {idx !== breadcrumbs.length - 1 && <FaChevronRight />}
                </>
            ))}
        </div>
    )
}
