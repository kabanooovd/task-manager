import { MONTHS_MAPPER } from '../../config'
import { onGetDaysInMonth, onGetOtherMonthDays } from '../../utils'
import { ModeWrapper } from '../ModeWrapper/ModeWrapper'
import s from './Year.module.scss'

export const Year: React.FC<{
    currentYear: number
}> = (props) => {
    const { currentYear } = props
    const monthsInYear = Array(12)
        .fill(null)
        .map((_, idx) => idx)

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

                        console.log('==> ', month)
                        return (
                            <div key={month} className={s.calendar__wrapper}>
                                <div className={s.calendar}>
                                    <div className={s.calendar__header}>
                                        <span>{MONTHS_MAPPER[month]}</span>
                                    </div>
                                    <div className={s.calendar_days__wrapper}>
                                        {/* fake days in the month */}
                                        {prevDaysList.map((_, idx) => (
                                            <div key={idx} />
                                        ))}
                                        {daysList.map((day) => {
                                            return (
                                                <div key={day.date()} className={s.day_grid__wrapper}>
                                                    <div className={s.day}>{day.date()}</div>
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
