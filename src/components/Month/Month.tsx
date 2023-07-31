import { Moment } from 'moment'
import { ModeWrapper } from '../ModeWrapper/ModeWrapper'
import s from './Month.module.scss'
import { MONTHS_MAPPER, WEEK_DAYS_RUS_MAPPER } from '../../config'
import classNames from 'classnames'

export const Month: React.FC<{
    currentDate: Moment
    monthsDays: Moment[]
    prevMonthDays: Moment[]
    nextMonthDays: Moment[]
    currnetMonth: number
    currentYear: number
}> = (props) => {
    const { currentDate, monthsDays, prevMonthDays, nextMonthDays, currnetMonth, currentYear } = props
    const weekDays = Object.values(WEEK_DAYS_RUS_MAPPER)
    // console.log(monthsDays)
    return (
        <ModeWrapper>
            <div className={s.container}>
                <div className={s.yearsWrapper}>
                    <span>{MONTHS_MAPPER[currnetMonth]}</span>
                    <span>{currentYear}</span>
                </div>
                <div className={s.weekDaysWrapper}>
                    {weekDays.map((day) => {
                        return <div key={day}>{day.toUpperCase()}</div>
                    })}
                </div>
                <div className={s.daysWrapper}>
                    {prevMonthDays.map((day) => {
                        return (
                            <div key={day.format()} className={s.prevDay}>
                                {day.date()}
                            </div>
                        )
                    })}
                    {monthsDays.map((day) => {
                        const isToday = day.date() === currentDate.date()
                        const dayClass = classNames(s.currentDay, isToday && s.currentToday)
                        return (
                            <div key={day.format()} className={dayClass}>
                                {day.date()}
                            </div>
                        )
                    })}
                    {nextMonthDays.map((day) => {
                        return (
                            <div key={day.format()} className={s.nextDay}>
                                {day.date()}
                            </div>
                        )
                    })}
                </div>
            </div>
        </ModeWrapper>
    )
}
