export namespace util {

    export const months = ['January','February','March','April','May','July','June','August','September','October','November','December'];
    const vowels = ['a','e','i','o','u'];

    export type thing = 'st'|'nd'|'rd'|'th';
    export type an = 'an';
    export type a = 'a';

    export function getThing(n:string):thing {
        if(n.endsWith('1')) return 'st';
        if(n.endsWith('2')) return 'nd';
        if(n.endsWith('3')) return 'rd';
        return 'th';
    }

    export async function isPrime(num: number): Promise<boolean> {
        for (let i = 2; i < (num/2); i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    export function aNa(input:string): an | a {
        return vowels.includes(input[0])?'an':'a';
    }

}