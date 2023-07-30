import React from 'react'
import s from './Button.module.scss'

export const Button: React.FC<{
    children: React.ReactNode
    onClick?: () => void
}> = (props) => {
    const { children, onClick } = props
    return (
        <button className={s.btn} onClick={onClick}>
            {children}
        </button>
    )
}
