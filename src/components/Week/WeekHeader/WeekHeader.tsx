import { Moment } from 'moment'
import s from './WeekHeader.module.scss'
import { Day } from '../Day/Day'

export const WeekHeader: React.FC<{ list: Moment[]; currentDate: Moment }> = ({ list, currentDate }) => {
    const weekNumber = currentDate.format('WW')
    return (
        <div className={s.container}>
            <div className={s.date}>
                <span>Текущая дата: </span>
                <span>{currentDate.format('DD.MM.YYYY')},</span>
                <span> неделя - {weekNumber}</span>
            </div>
            <div className={s.wrapper}>
                <div className={s.div0} />
                {list.map((day, idx) => {
                    return (
                        <div key={idx} className={s[`div${idx + 1}`]}>
                            <Day day={day} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
