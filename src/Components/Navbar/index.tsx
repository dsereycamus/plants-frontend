import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation()

    const current = useMemo(() => location.pathname, [location.pathname])

    return (
        <div className="flex w-full items-center justify-center gap-6 bg-background text-20-400">
            <Link
                to={'/'}
                className={`p-4 ${current === '/' ? 'border-b-2 border-green rounded-sm' : ''}`}
            >
                Home
            </Link>
            <Link
                to={'/about'}
                className={`p-4 ${current === '/about' ? 'border-b-2 border-green rounded-sm' : ''}`}
            >
                Acerca de
            </Link>
            <Link
                to={'/store'}
                className={`p-4 ${current === '/store' ? 'border-b-2 border-green rounded-sm' : ''}`}
            >
                Plantas
            </Link>
        </div>
    )
}
