import { TAppMode } from '../../../commonTypes'
import { naviConfig } from '../../../config'
import s from './Navi.module.scss'

export const Navi: React.FC<{
    onSetMode: (appMode: TAppMode) => void
}> = (props) => {
    const { onSetMode } = props
    return (
        <nav className={s.container}>
            {naviConfig.map(({ id, mode }) => {
                return (
                    <div key={id} onClick={() => onSetMode(mode)}>
                        {mode}
                    </div>
                )
            })}
        </nav>
    )
}
