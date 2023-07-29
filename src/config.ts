import { INavi } from "./commonTypes";
import * as uuid from "uuid"

export const naviConfig: INavi[] = [
    {
        id: uuid.v4(),
        mode: "week"
    },
    {
        id: uuid.v4(),
        mode: "month"
    },
    {
        id: uuid.v4(),
        mode: "year"
    }
]