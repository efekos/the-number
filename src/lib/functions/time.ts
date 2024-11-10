import type {ComponentParser} from "$lib";
import {util} from "$lib/functions/util";


export namespace time {

    export const dateParser: ComponentParser = (n) => {
        if (n.toString().length !== 8) return Promise.resolve(null);
        const day = n.toString().substring(0, 2);
        const month = n.toString().substring(2, 4);
        const year = n.toString().substring(4);

        const monthI = parseInt(month);
        if (monthI > 12) return Promise.resolve(null);

        return Promise.resolve({
            id: 'time',
            text: `Represents ${day}${util.getThing(day)} of ${util.months[monthI - 1]}, ${year}`
        });
    }

    export const currentYear: ComponentParser = (n) => Promise.resolve(n > 0 && new Date().getFullYear() === n ? {
        text: 'Is the current year.',
        id: 'time'
    } : null);
    export const decadeAgo: ComponentParser = (n) => Promise.resolve(n > 0 && new Date().getFullYear() - 10 === n ? {
        text: 'Is a decade ago from the current year.',
        id: 'time'
    } : null);
    export const leapYear: ComponentParser = (n) => Promise.resolve(n > 0 && n % 4 === 0 ? {
        text: 'Is a leap year, where February is 29 days',
        id: 'time'
    } : null);

    export const allFunctions: ComponentParser[] = [
        dateParser, currentYear, decadeAgo, leapYear
    ]

}