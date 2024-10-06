import React, { FC } from 'react'
import { TCardProps } from './types'

export const Card: FC<TCardProps> = ({ className, children }) => {
    return <div className={`card ${className}`}>{children}</div>
}
