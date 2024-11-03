export const isOddFunction:ComponentParser = (n:number)=>Promise.resolve(n%2===0?{id:'math',text:'Is even.'}: {id:'math',text:'Is odd.'});
export const isMemberOfCountingNumbers:ComponentParser = (n)=>Promise.resolve(Math.floor(n)===n&&n>=1?{id:'math',text:'Is a Counting Number.'}:null);
export const isMemberOfNaturalNumbers:ComponentParser = (n)=>Promise.resolve(Math.floor(n)===n&&n>=0?{id:'math',text:'Is a Natural Number.'}:null);
export const isMemberOfIntegers:ComponentParser = (n)=>Promise.resolve(Math.floor(n)===n?{id:'math',text:'Is an Integer.'}:null);
export const isMemberOfRationals:ComponentParser = (n)=>Promise.resolve(n.toString().split(".").length>1&&n.toString().split(".")[1].length<6?{id:'math',text:'Is an Rational Number.'}:null);
export const isMemberOfRealNumbers:ComponentParser = (n)=>Promise.resolve(n.toString().split(".").length>1?{id:'math',text:'Is an Real Number.'}:null);

import type {ComponentParser} from "$lib";

async function isPrime(num: number): Promise<boolean> {
    for (let i = 2; i < (num/2); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

export const isPrimeFunction:ComponentParser = async (n:number)=>{
    if(Math.floor(n)!==n||n<2)return null;
    const b = await isPrime(n);
    return b?{text:'Is a prime number.',id:'math'}:null;
};

export function powerOfFunction(j:number):ComponentParser{

    return (n)=>{
        if(n<=j)return Promise.resolve(null);
        for (let i = 0; i < 31; i++) {
            const ans = Math.pow(j, i);
            if (ans === n) return Promise.resolve({text:`Is power of ${j}`,id:'math'});
        }
        return Promise.resolve(null);

    }

}