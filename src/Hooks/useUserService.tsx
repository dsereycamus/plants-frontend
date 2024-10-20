import { TLoginRequest, TSignupRequest, TUser } from '@models/index'
import { TLoginResponse } from '@models/Responses/LoginResponse'
import {
    useMutation,
    UseMutationResult,
    useQuery,
    UseQueryResult,
} from '@tanstack/react-query'
import { userService } from 'src/Services/userService'

export const useSignup = (): UseMutationResult<
    TLoginResponse,
    Error,
    TSignupRequest
> =>
    useMutation({
        mutationFn: async (data: TSignupRequest) => {
            const request = await userService.signup(data)
            return request
        },
    })
export const useSignin = (): UseMutationResult<
    TLoginResponse,
    Error,
    TLoginRequest
> =>
    useMutation({
        mutationFn: async (data: TLoginRequest) => {
            const request = await userService.signin(data)
            return request
        },
    })

export const useGetUserData = (): UseQueryResult<TUser, Error> =>
    useQuery({
        queryKey: ['get-user-data'],
        queryFn: async () => {
            const request = await userService.getUserData()
            return request
        },
        enabled: false,
    })
