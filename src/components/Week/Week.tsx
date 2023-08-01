import { Moment } from 'moment'
import { ModeWrapper } from '../ModeWrapper/ModeWrapper'
import s from './Week.module.scss'

export const Week: React.FC<{
    currentWeek: Moment[]
}> = (props) => {
    const { currentWeek } = props
    console.log('==> ', currentWeek)
    return (
        <ModeWrapper>
            <div className={s.container}>
                <div className={s.div0}>timing</div>
                {currentWeek.map((day, idx) => {
                    return (
                        <div key={idx} className={s[`div${idx + 1}`]}>
                            {day.format('DD.MM.YYYY')}
                        </div>
                    )
                })}
            </div>
        </ModeWrapper>
    )
}
