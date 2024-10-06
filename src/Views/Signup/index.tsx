import { SignupForm } from './Components/SignupForm'

export const Signup = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="title-35-700 text-center py-10 bg-white">
                Crear una cuenta
            </h1>
            <SignupForm />
        </div>
    )
}
