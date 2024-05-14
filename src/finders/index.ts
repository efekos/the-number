import { Finder } from '../types/index.js';
import dividables from './dividables.js';
import funi from './funi.js';
import isEven from './isEven.js';
import isOdd from './isOdd.js';
import isPrime from './isPrime.js';
import isSquare from './isSquare.js';
import numberSystem from './numberSystem.js';

export namespace DefaultTheNumberFinders {

    export const Dividables = dividables;
    export const IsEven = isEven;
    export const IsOdd = isOdd;
    export const IsPrime = isPrime;
    export const IsSquare = isSquare;
    export const NumberSystem = numberSystem;
    export const Funny = funi;

    /**
     * Returns every default finder in an array.
     * @returns All default finders.
     */
    export function all():Finder[]{
        return [Dividables,IsEven,IsPrime,IsSquare,IsOdd,NumberSystem,Funny];
    }
}