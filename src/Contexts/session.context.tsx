import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useMemo,
    useState,
} from 'react'
import { TUser } from '@models/index'

type SessionContextData = {
    session: boolean
    token: string
    user?: TUser
    setUser: Dispatch<SetStateAction<TUser | undefined>>
    signin: () => void
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
    // const navigate = useNavigate()
    const [user, setUser] = useState<TUser>()
    const [token, setToken] = useState<string>('')

    const signin = () => {
        setUser({
            _id: '1',
            names: 'Daniela',
            lastNames: 'Serey',
            email: 'dsereycamus@gmail.com',
        })
        setToken('asd')
    }

    const signout = () => {
        setUser(undefined)
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

    return (
        <SessionContext.Provider value={values}>
            {children}
        </SessionContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext)
