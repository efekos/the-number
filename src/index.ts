import { Info, isFinderLimited } from './types/index.js';
import { DefaultTheNumberFinders } from './finders/index.js';

/**
 * Collects various kinds of information about the given number.
 * @param {number} n a number.
 */
export function findInformationOf(n:number):Info[]{
    const finalList:Info[] = [];


    for (const finder of DefaultTheNumberFinders.all()) {
        
        if(isFinderLimited(finder)&&(n>finder.max||n<finder.min)) continue;
        finalList.push(...finder.find(n));

    }

    return finalList;
}