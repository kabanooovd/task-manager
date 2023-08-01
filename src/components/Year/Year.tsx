import moment from 'moment'
import { MONTHS_MAPPER } from '../../config'
import { onGetDaysInMonth, onGetOtherMonthDays } from '../../utils'
import { ModeWrapper } from '../ModeWrapper/ModeWrapper'
import s from './Year.module.scss'
import classNames from 'classnames'

export const Year: React.FC<{
    currentYear: number
}> = (props) => {
    const { currentYear } = props
    const monthsInYear = Array(12)
        .fill(null)
        .map((_, idx) => idx)
    const _format = 'DD-MM-YYYY'
    return (
        <ModeWrapper>
            <div className={s.container}>
                <div className={s.months}>
                    {monthsInYear.map((month) => {
                        const daysList = onGetDaysInMonth(month, currentYear)

                        const initWeekDayInMonth = daysList[0].day()

                        const prevDaysList = onGetOtherMonthDays(
                            onGetDaysInMonth(Math.abs(month - 1), currentYear),
                            initWeekDayInMonth,
                            'prev'
                        )
                        return (
                            <div key={month} className={s.calendar__wrapper}>
                                <div className={s.calendar}>
                                    <div className={s.calendar__header}>
                                        <span>{MONTHS_MAPPER[month]}</span>
                                    </div>
                                    <div className={s.calendar_days__wrapper}>
                                        {prevDaysList.map((_, idx) => (
                                            <div key={idx} />
                                        ))}
                                        {daysList.map((day) => {
                                            const onSetDayStyle = () => {
                                                switch (true) {
                                                    case day.format(_format) === moment(new Date()).format(_format):
                                                        return classNames(s.day, s.dayTd)
                                                    case day.day() === 0 || day.day() === 6:
                                                        return classNames(s.day, s.dayWe)
                                                    default:
                                                        return s.day
                                                }
                                            }
                                            return (
                                                <div key={day.date()} className={s.day_grid__wrapper}>
                                                    <div className={onSetDayStyle()}>{day.date()}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={s.sideBar}>
                    <span>No tasks yet</span>
                </div>
            </div>
        </ModeWrapper>
    )
}
