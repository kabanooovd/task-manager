import moment, { Moment } from 'moment'

// метод формерует список дней из месяца
export const onGetDaysInMonth = (month: number, year: number): Moment[] =>
    new Array(31)
        .fill('')
        .map((_, idx) => moment(new Date(year, month, idx + 1)))
        .filter((v) => v.month() === month)
