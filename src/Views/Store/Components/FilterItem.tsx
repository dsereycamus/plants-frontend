import { FC } from 'react'
import { PiCaretRightFill } from 'react-icons/pi'

type TFilterItemProps = {
    selected: boolean
    onClick: () => void
    name: string
}

export const FilterItem: FC<TFilterItemProps> = ({
    selected,
    name,
    onClick,
}) => {
    return (
        <div
            className={`flex gap-2 items-center select-none hover:cursor-pointer ${selected ? 'text-red' : ''}`}
            onClick={onClick}
        >
            <PiCaretRightFill />
            <p>{name}</p>
        </div>
    )
}
