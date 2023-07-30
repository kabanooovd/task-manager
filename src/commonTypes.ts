export type ToperationOption = 'prev' | 'next'
export type TAppMode = 'Week' | 'Month' | 'Year'

export interface INavi {
    id: string
    mode: TAppMode
    iconName: EIconName
}

export enum EIconName {
    SETTINGS = 'settings',
    GRID = 'grid',
    WEEK = 'week',
    MONTH = 'month',
    NEXT = 'next',
    PREV = 'prev'
}
