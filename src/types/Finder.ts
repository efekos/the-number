import { Info } from './index.js';

/**
 * Represents a basic configuration for an information finder.
 */
export interface BaseFinder {
    find: (n:number)=>Info[]
    limit: boolean;
}

/**
 * Represents configuration for finding an information. This kind of information finders are only usable if the given number is between the specified range.
 */
export interface LimitedFinder extends BaseFinder {
    limit: true;
    min: number;
    max: number;
}

/**
 * Represents a configuration for an information finder.
 */
export type Finder = BaseFinder | LimitedFinder;

/**
 * Type-guard function for limited finders.
 * @param {Finder} f Any finders 
 * @returns Whether is it a limited finder or not.
 */
export function isFinderLimited(f:Finder): f is LimitedFinder {
    return f.limit;
}