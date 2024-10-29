import { FC } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type TSpinnerProps = {
    size?: number
}

export const Spinner: FC<TSpinnerProps> = ({ size = 20 }) => {
    return <AiOutlineLoading3Quarters className="animate-spin" size={size} />
}
