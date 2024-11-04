import type {ComponentParser} from "$lib";
import {util} from "$lib/functions/util";

export namespace code {

    export function createIsIntegerFunction(type:string,language:string = 'JavaScript',start?:number,end?:number):ComponentParser{
        return (n)=>Promise.resolve(Math.floor(n)===n&&(start==undefined||n>=start)&&(end==undefined||n<=end)?{text:`Is ${util.aNa(type)} \`${type}\` in ${language}`,id:'code'}:null);
    }

    export function createIsDoubleFunction(type:string,language:string = 'JavaScript'):ComponentParser{
        return (n)=>Promise.resolve(Math.floor(n)!==n?{text:`Is ${util.aNa(type)} \`${type}\` in ${language}`,id:'code'}:null);
    }

    export const allFunctions = [
        code.createIsIntegerFunction('number'),code.createIsDoubleFunction('number'),
        code.createIsIntegerFunction('byte','Java',-128,127),
        code.createIsIntegerFunction('short','Java',-32768,32767),
        code.createIsIntegerFunction('int','Java & Python'),
        code.createIsIntegerFunction('long','Java'),
        code.createIsDoubleFunction('double','Java'),
        code.createIsDoubleFunction('float','Java & Python'),
    ]

}