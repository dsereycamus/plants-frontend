import { ToastContainer } from 'react-toastify'
import { CartProvider } from './Contexts/cart.context'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from '@contexts/session.context'
import { RouteList } from '@routes/index'

function App() {
    return (
        <SessionProvider>
            <CartProvider>
                <RouteList />
                <ToastContainer />
            </CartProvider>
        </SessionProvider>
    )
}

export default App
