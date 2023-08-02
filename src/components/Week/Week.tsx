import { Moment } from 'moment'
import { ModeWrapper } from '../ModeWrapper/ModeWrapper'
import s from './Week.module.scss'
import { Timing } from './Timing/Timing'
import { WeekHeader } from './WeekHeader/WeekHeader'

export const Week: React.FC<{
    currentWeek: Moment[]
    currentDate: Moment
}> = (props) => {
    const { currentWeek, currentDate } = props
    return (
        <ModeWrapper>
            <WeekHeader list={currentWeek} currentDate={currentDate}/>
            <>
                <div className={s.container}>
                    <div className={s.div0}>
                        <Timing />
                    </div>
                    {currentWeek.map((_, idx) => {
                        return (
                            <div key={idx} className={s[`div${idx + 1}`]}>
                                <Timing />
                            </div>
                        )
                    })}
                </div>
            </>
        </ModeWrapper>
    )
}
