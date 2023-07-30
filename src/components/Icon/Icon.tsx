import { EIconName } from '../../commonTypes'
import { Grid } from './svg/Grid'
import { Month } from './svg/Month'
import { Next } from './svg/Next'
import { Prev } from './svg/Prev'
import { Settings } from './svg/Settings'
import { Week } from './svg/Week'

export const Icon: React.FC<{
    iconName: EIconName
}> = (props) => {
    const { iconName } = props
    switch (iconName) {
        case EIconName.SETTINGS:
            return <Settings />
        case EIconName.GRID:
            return <Grid />
        case EIconName.WEEK:
            return <Week />
        case EIconName.MONTH:
            return <Month />
        case EIconName.NEXT:
            return <Next />
        case EIconName.PREV:
            return <Prev />
        default:
            return <>404</>
    }
}
