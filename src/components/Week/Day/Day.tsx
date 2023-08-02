import moment, { Moment } from 'moment'
import s from './Day.module.scss'

export const Day: React.FC<{ day: Moment }> = ({ day }) => {
    const _f = 'DD/MM/YYYY'
    const now = moment(new Date())
    const isToday = day.format(_f) === now.format(_f)

    const cnDay = isToday ? s.currentDay : s.day
    const cnDate = isToday ? s.currentDate : s.date

    return (
        <div className={s.container}>
            <div className={cnDay}>{day.format('dddd').toUpperCase()}</div>
            <div className={cnDate}>{day.date()}</div>
        </div>
    )
}
