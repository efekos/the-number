import type {ComponentParser} from "$lib";
import {util} from "$lib/functions/util";


export namespace math {

    export const isPrimeFunction: ComponentParser = async (n: number) => {
        if (Math.floor(n) !== n || n < 2) return null;
        const b = await util.isPrime(n);
        return b ? {text: 'Is a prime number.', id: 'math'} : null;
    };

    export const staticFunctions: ComponentParser[] = [
        (n: number) => Promise.resolve(n % 2 === 0 ? {id: 'math', text: 'Is even.'} : {id: 'math', text: 'Is odd.'}),
        (n) => Promise.resolve(Math.floor(n) === n && n >= 1 ? {id: 'math', text: 'Is a Counting Number.'} : null),
        (n) => Promise.resolve(Math.floor(n) === n && n >= 0 ? {id: 'math', text: 'Is a Natural Number.'} : null),
        (n) => Promise.resolve(Math.floor(n) === n ? {id: 'math', text: 'Is an Integer.'} : null),
        (n) => Promise.resolve(n.toString().split(".").length > 1 && n.toString().split(".")[1].length < 6 ? {id: 'math', text: 'Is an Rational Number.'} : null),
        (n) => Promise.resolve(n.toString().split(".").length > 1 ? {id: 'math', text: 'Is an Real Number.'} : null),
        isPrimeFunction
    ]

    export function powerOfFunction(j: number): ComponentParser {

        return (n) => {
            if (n <= j) return Promise.resolve(null);
            for (let i = 0; i < 31; i++) {
                const ans = Math.pow(j, i);
                if (ans === n) return Promise.resolve({text: `Is power of ${j}`, id: 'math'});
            }
            return Promise.resolve(null);

        }

    }

}