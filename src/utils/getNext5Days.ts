const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
] as const;

export type ShortWeekday = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

export const getNext5Days = (): ShortWeekday[] => {
    const today = new Date().getDay(); // 0-6
    const daysArr: ShortWeekday[] = [];

    for (let i = 1; i <= 5; i++) {
        const nextDay = (today + i) % 7;
        const fullDayName = WEEKDAYS[nextDay];
        daysArr.push(fullDayName.slice(0, 3) as ShortWeekday);
    }

    return daysArr;
};
