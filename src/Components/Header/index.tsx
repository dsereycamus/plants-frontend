import { useSession } from '@contexts/session.context'
import { CiLogin } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
    const { signout, session } = useSession()

    const sessionButton = () => {
        if (session) {
            signout()
        } else {
            navigate('/signin')
        }
    }

    return (
        <div className="flex bg-white w-full h-9 text-black px-[10%] py-6 justify-between items-center">
            <div className="select-none">
                <div className="select-none flex gap-2">
                    ¿Necesitas ayuda?{' '}
                    <p className="hover:cursor-pointer">+569 6152 3698</p>
                </div>
            </div>
            <div
                className="hover:cursor-pointer select-none flex gap-2 items-center"
                onClick={sessionButton}
            >
                <CiLogin />
                <p>{session ? 'Cerrar sesión' : 'Iniciar sesión'}</p>
            </div>
        </div>
    )
}
