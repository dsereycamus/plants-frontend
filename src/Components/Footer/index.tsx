import { Button, Input } from '@components/index'
import { useForm } from 'react-hook-form'
import {
    FaCopyright,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTiktok,
    FaTwitter,
} from 'react-icons/fa'
import { toast } from 'react-toastify'

export const Footer = () => {
    const { control, handleSubmit } = useForm<{ newsletter: string }>({})

    const submitSubscription = (values: { newsletter: string }) => {
        if (values.newsletter) toast.success('Suscripción exitosa')
    }

    return (
        <div className="bg-green px-[10%] !text-white flex gap-10 mt-auto py-4">
            <div className="gap-5 flex flex-col">
                <p className="text-2xl font-semibold">Plants</p>
                <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    porta, vestibulum lobortis natoque orci cursus posue
                </p>
                <p className="font-semibold flex gap-2 items-center text-white">
                    <FaCopyright />
                    Plants, 2024
                </p>
            </div>
            <div className="flex flex-col justify-between">
                <p className="font-semibold">Contáctanos</p>
                <div>
                    <p>plants@gmail.com</p>
                    <p>+977 9895465465</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-semibold">Únete a nuestro newsletter</p>
                <div className="gap-2 flex">
                    <Input
                        control={control}
                        name="newsletter"
                        placeholder="Ingresa tu correo"
                    />
                    <Button
                        onClick={handleSubmit(submitSubscription)}
                        variant="secondary"
                    >
                        Suscríbete
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-semibold">Síguenos</p>
                <div className="flex gap-5">
                    <FaFacebook size={20} />
                    <FaInstagram size={20} />
                    <FaTwitter size={20} />
                    <FaTiktok size={20} />
                    <FaLinkedin size={20} />
                </div>
            </div>
        </div>
    )
}
