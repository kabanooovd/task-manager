import classNames from 'classnames'
import { TAppMode } from '../../../commonTypes'
import { naviConfig } from '../../../config'
import s from './Navi.module.scss'

export const Navi: React.FC<{
    appMode: TAppMode
    onSetMode: (appMode: TAppMode) => void
}> = (props) => {
    const { onSetMode, appMode } = props
    return (
        <nav className={s.container}>
            {naviConfig.map(({ id, mode }) => {
                const naviClassname = classNames(
                    s.navi,
                    appMode === mode ? s.activeNavi : s.regularNavi
                )
                return (
                    <div className={naviClassname} key={id} onClick={() => onSetMode(mode)}>
                        {mode}
                    </div>
                )
            })}
        </nav>
    )
}
