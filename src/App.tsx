import { ToastContainer } from 'react-toastify'
import { CartProvider } from './Contexts/cart.context'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from '@contexts/session.context'
import { RouteList } from '@routes/index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                <CartProvider>
                    <RouteList />
                    <ToastContainer />
                </CartProvider>
            </SessionProvider>
        </QueryClientProvider>
    )
}

export default App
