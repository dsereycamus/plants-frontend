import { Outlet } from 'react-router-dom'
import { Navbar, Header, Head, Footer } from '@components/index'

export const Layout = () => {
    return (
        <div className="bg-white min-h-[100vh] flex flex-col">
            <Header />
            <Head />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
