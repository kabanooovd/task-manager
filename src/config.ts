import { EIconName, INavi } from './commonTypes'
import * as uuid from 'uuid'

export const naviConfig: INavi[] = [
    {
        id: uuid.v4(),
        mode: 'Week',
        iconName: EIconName.WEEK
    },
    {
        id: uuid.v4(),
        mode: 'Month',
        iconName: EIconName.MONTH
    },
    {
        id: uuid.v4(),
        mode: 'Year',
        iconName: EIconName.GRID
    }
]

export const WEEK_DAYS_RUS_MAPPER: Record<number, string> = {
    0: 'Пн',
    1: 'Вт',
    2: 'Ср',
    3: 'Чт',
    4: 'Пт',
    5: 'Сб',
    6: 'Вс'
}

export const MONTHS_MAPPER: Record<number, string> = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
}
