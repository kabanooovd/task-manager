import React from 'react'
import { TAppMode } from './commonTypes'
import { Header, Month, Week, Year } from './components'
import moment, { Moment } from 'moment'
import { onGetDaysInMonth, onGetDaysInWeek, onGetOtherMonthDays } from './utils'

export const Root = () => {
    const [appMode, setAppMode] = React.useState<TAppMode>('Week')

    const currentDate = moment(new Date()).locale('ru')
    const initialMonth = currentDate.month()
    const initialYear = currentDate.year()
    const [currnetMonth, setCurrnetMonth] = React.useState<number>(initialMonth)
    const [currentYear, setCurrentYear] = React.useState<number>(initialYear)
    const [currentWeek, setCurrentWeek] = React.useState<Moment[]>(onGetDaysInWeek(currentDate))
    const currentDaysList = onGetDaysInMonth(currnetMonth, currentYear)
    const initWeekDayInMonth = currentDaysList[0].day()
    const endWeekDayInMonth = currentDaysList[currentDaysList.length - 1].day()
    const prevMonthDays = onGetOtherMonthDays(
        onGetDaysInMonth(currnetMonth - 1, currentYear),
        initWeekDayInMonth,
        'prev'
    )
    const nextMonthDays = onGetOtherMonthDays(
        onGetDaysInMonth(currnetMonth + 1, currentYear),
        endWeekDayInMonth,
        'next'
    )

    return (
        <>
            <Header appMode={appMode} setAppMode={setAppMode} />
            {appMode === 'Week' && <Week currentWeek={currentWeek} currentDate={currentDate} />}
            {appMode === 'Month' && (
                <Month
                    currentDate={currentDate}
                    monthsDays={currentDaysList}
                    prevMonthDays={prevMonthDays}
                    nextMonthDays={nextMonthDays}
                    currnetMonth={currnetMonth}
                    currentYear={currentYear}
                />
            )}
            {appMode === 'Year' && <Year currentYear={currentYear} />}
        </>
    )
}
