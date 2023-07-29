import React from 'react'
import { TAppMode } from './commonTypes'
import { Header, Month, Week, Year } from './components'

export const Root = () => {
    const [appMode, setAppMode] = React.useState<TAppMode>('week')
    return (
        <>
            <Header setAppMode={setAppMode} />
            {appMode === 'week' && <Week />}
            {appMode === 'month' && <Month />}
            {appMode === 'year' && <Year />}
        </>
    )
}
