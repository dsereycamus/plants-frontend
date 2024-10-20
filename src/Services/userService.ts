import { TLoginRequest, TSignupRequest } from '@models/index'
import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/user`

export const userService = {
    signup: async (data: TSignupRequest) => {
        const { names, lastNames, email, password } = data
        const url = `${baseUrl}/signup`
        const result = await axios.post(url, {
            names,
            lastNames,
            email,
            password,
        })
        window.localStorage.setItem('token', result.data.token)
        return result.data
    },
    signin: async (data: TLoginRequest) => {
        const url = `${baseUrl}/signin`
        const result = await axios.post(url, data)
        window.localStorage.setItem('token', result.data.token)
        return result.data
    },
    getUserData: async () => {
        const url = `${baseUrl}/`
        const token = window.localStorage.getItem('token')
        const result = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        window.localStorage.setItem('user', JSON.stringify(result.data.data))
        return result.data
    },
}
