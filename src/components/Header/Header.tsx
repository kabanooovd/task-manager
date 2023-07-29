import React from 'react'
import s from './Header.module.scss'
import { Navi } from './Navi/Navi'
import { TAppMode } from '../../commonTypes'

export const Header: React.FC<{
    setAppMode: (appMode: TAppMode) => void
}> = (props) => {
    const { setAppMode } = props
    return (
        <header className={s.container}>
            <div>111</div>
            <Navi onSetMode={setAppMode} />
            <div>333</div>
        </header>
    )
}
