/* eslint-disable react-hooks/exhaustive-deps */
import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { TUser } from '@models/index'

type SessionContextData = {
    session: boolean
    token: string
    user?: TUser
    setUser: Dispatch<SetStateAction<TUser | undefined>>
    signin: (user: TUser, token: string) => void
    signout: () => void
}

export const SessionContext = createContext<SessionContextData>({
    session: false,
    token: '',
    signin: () => {},
    signout: () => {},
    setUser: () => {},
})

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<TUser>()
    const [token, setToken] = useState<string>('')

    const signin = (usr: TUser, tokn: string) => {
        setUser(usr)
        setToken(tokn)
    }

    const signout = () => {
        setUser(undefined)
        setToken('')
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
    }

    const values = useMemo(
        () => ({
            session: user !== undefined,
            user,
            setUser,
            signin,
            signout,
            token,
        }),
        [user, token]
    )

    useEffect(() => {
        if (!token) {
            const localToken = window.localStorage.getItem('token')
            setToken(localToken ?? '')
        }
        if (!user) {
            const localUser = window.localStorage.getItem('user')
            setUser(localUser ? JSON.parse(localUser) : undefined)
        }
    }, [])

    return (
        <SessionContext.Provider value={values}>
            {children}
        </SessionContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext)
