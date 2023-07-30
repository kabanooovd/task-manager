import React from 'react'
import s from "./ModeWrapper.module.scss"

export const ModeWrapper: React.FC<{
    children: React.ReactNode
}> = (props) => {
    const { children } = props
    return <div className={s.container}>{children}</div>
}
