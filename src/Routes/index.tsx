import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from '@components/index'
import { Signin, Home, About, Store, Signup } from '@views/index'
import { Cart } from '@views/Cart'
import { Checkout } from '@views/Checkout'

export const RouteList = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </Router>
    )
}
