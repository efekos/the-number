import type {ComponentParser} from "$lib";

const vowels = ['a','e','i','o','u'];
function aNa(input:string):string{
    return vowels.includes(input[0])?'an':'a';
}

export function createIsIntegerFunction(type:string,language:string = 'JavaScript',start?:number,end?:number):ComponentParser{
    return (n)=>Promise.resolve(Math.floor(n)===n&&(start==undefined||n>=start)&&(end==undefined||n<=end)?{text:`Is ${aNa(type)} ${type} in ${language}`,id:'code'}:null);
}

export function createIsDoubleFunction(type:string,language:string = 'JavaScript'):ComponentParser{
    return (n)=>Promise.resolve(Math.floor(n)!==n?{text:`Is ${aNa(type)} ${type} in ${language}`,id:'code'}:null);
}