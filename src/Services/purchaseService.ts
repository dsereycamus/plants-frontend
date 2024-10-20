import {} from '@models/index'
import { TPurchaseRequest } from '@models/Requests/PurchaseRequest'
import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/purchase`

export const purchaseService = {
    makeNewPurchase: async (data: TPurchaseRequest) => {
        const url = `${baseUrl}/`
        const result = await axios.post(url, data)
        window.localStorage.setItem('token', result.data.token)
        return result.data
    },
}
