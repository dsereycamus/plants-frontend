import { EPaymentMethods } from '@models/index'
import { FC } from 'react'
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

export type TPaymentMethodProps = {
    paymentMethod: EPaymentMethods
    isSelected: boolean
    select: () => void
}

export const PaymentMethod: FC<TPaymentMethodProps> = ({
    paymentMethod,
    isSelected,
    select,
}) => {
    return (
        <div
            onClick={select}
            className={`flex items-center gap-4 p-2 px-10 rounded-xl shadow-sm select-none hover:cursor-pointer hover:bg-black hover:text-white transition-all ${isSelected ? 'bg-green !text-white' : 'bg-gray'}`}
        >
            <p className="text-base font-bold italic">{paymentMethod}</p>
            {paymentMethod !== EPaymentMethods.BANK_TRANSFER ? (
                <>
                    <FaCcMastercard size={36} />
                    <FaCcVisa size={36} />
                    <SiAmericanexpress size={36} />
                </>
            ) : (
                <></>
            )}
        </div>
    )
}
