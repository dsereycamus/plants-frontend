import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/products`

export const productService = {
    getProducts: async () => {
        const url = `${baseUrl}/`
        const result = await axios.get(url)
        return result.data
    },
}
