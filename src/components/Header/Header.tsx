import React from 'react'
import s from './Header.module.scss'
import { Navi } from './Navi/Navi'
import { EIconName, TAppMode } from '../../commonTypes'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'

export const Header: React.FC<{
    appMode: TAppMode
    setAppMode: (appMode: TAppMode) => void
}> = (props) => {
    const { setAppMode, appMode } = props
    return (
        <header className={s.container}>
            <div className={s.leftStideWrapper}>
                <Button onClick={() => alert('today')}>Today</Button>
                <div className={s.nextPrev}>
                    <div onClick={() => alert('prev')}>
                        <Icon iconName={EIconName.PREV} />
                    </div>
                    <div onClick={() => alert('next')}>
                        <Icon iconName={EIconName.NEXT} />
                    </div>
                </div>
            </div>
            <Navi onSetMode={setAppMode} appMode={appMode} />
            <div className={s.rightStideWrapper} onClick={() => alert('today')}>
                <Icon iconName={EIconName.SETTINGS} />
            </div>
        </header>
    )
}
