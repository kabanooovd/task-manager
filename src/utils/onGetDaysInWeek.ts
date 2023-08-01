import moment, { Moment } from 'moment'

export const onGetDaysInWeek = (date: Moment): Moment[] => {
    const weekStart = date.clone().startOf('week')

    const days = []
    for (let i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days'))
    }
    return days
}
