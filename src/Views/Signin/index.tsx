import { Card } from '@components/index'
import { LoginForm } from './Components/LoginForm'
import { SignupView } from './Components/Signup'

export const Signin = () => {
    return (
        <div className="px-[8vw] flex flex-col gap-5">
            <h1 className="title-35-700 py-[3vw]">Inicio de sesión</h1>
            <Card className="flex justify-between p-10 gap-[5vw] mb-10">
                <LoginForm />
                <SignupView />
            </Card>
        </div>
    )
}
