import { Moment } from "moment";
import { ToperationOption } from "../commonTypes";

// Метод принимает список дней в месяце, номер дня недели по ЖС и опцию (последняя неделя предыдущего месяца или 1я неделя следующего месяца)
export const onGetOtherMonthDays = (
    otherMonthDaysList: Moment[],
    weekDayOfCurrentMonth: number,
    opt: ToperationOption
): Moment[] => {
    const MAPPER: Record<ToperationOption, Moment[]> = {
        prev: [],
        next: otherMonthDaysList.slice(0, 6),
    };
    const day = (weekDayOfCurrentMonth === 0 ? 7 : weekDayOfCurrentMonth) - 1;
    if (day > 0) {
        if (opt === "prev") return otherMonthDaysList.slice(-day);
        if (opt === "next") return otherMonthDaysList.slice(0, 6 - day);
    }
    return MAPPER[opt];
};