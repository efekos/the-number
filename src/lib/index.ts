import {
    isMemberOfCountingNumbers, isMemberOfIntegers,
    isMemberOfNaturalNumbers, isMemberOfRationals, isMemberOfRealNumbers,
    isOddFunction,
    isPrimeFunction,
    powerOfFunction
} from "$lib/functions/math";
import {dateParser} from "$lib/functions/time";

export type ComponentParser = (n:number)=>Promise<ComponentParserResponse|null>;

interface LocalComponentCategory extends ComponentCategory{
    parsers:ComponentParser[];
}

export interface ComponentCategory {
    colorClass: string;
    name: string;
    id: string;
}

export interface ComponentParserResponse {
    id: string;
    text: string;
}

export interface ComponentEntry extends ComponentParserResponse {
    category:ComponentCategory;
}

const categories:LocalComponentCategory[] = [
    {
        colorClass:'bg-blue-600 text-blue-950',
        name:'MATH',
        id: 'math',
        parsers: [
            isOddFunction,
            isPrimeFunction,
            isMemberOfCountingNumbers,
            isMemberOfNaturalNumbers,
            isMemberOfIntegers,
            isMemberOfRationals,
            isMemberOfRealNumbers,
            ...Array.from({length:10000},(a,_i)=>powerOfFunction(_i+1))
        ]
    },
    {
        colorClass: 'bg-purple-600 text-purple-950',
        name: 'TIME',
        id:'time',
        parsers: [
            (n)=>Promise.resolve(n!==0&&new Date().getFullYear()===n?{text:'Is the current year.',id:'time'}:null),
            (n)=>Promise.resolve(n!==0&&new Date().getFullYear()-10===n?{text:'Is a decade ago from the current year.',id:'time'}:null),
            (n)=>Promise.resolve(n!==0&&n%4===0?{text:'Is a leap year, where February is 29 days',id:'time'}:null),
            dateParser
        ]
    }
]

function createEntry(category:LocalComponentCategory,text:string):ComponentEntry {
    return {id:category.id,category,text}
}

const staticComponentEntries:Record<number, ComponentEntry[]> = {
    365: [{id:'time',text:'Is the length of a year in days.',category:categories[1]}],
    366: [{id:'time',text:'Is the length of a leap year, where February is 29 days, in days.',category:categories[1]}],
    60: [{id:'time',text:'Is the length of a minute in seconds.',category:categories[1]},{id:'time',text:'Is length of an hour in minutes.',category:categories[1]}],
    24: [{id:'time',text:'Is the length of a day in hours.',category:categories[1]}],
    7: [{id:'time',text:'Is the length of a week in days.',category:categories[1]}],
    3.141592: [{id:'math',text:'Is PI.',category:categories[0]}],
    3.14: [{id:'math',text:'Is first three and most known digits of PI.',category:categories[0]}],
    31: [
        createEntry(categories[1],'Is the length of January in days.'),createEntry(categories[1],'Is the length of March in days.'),createEntry(categories[1],'Is the length of May in days.'),
        createEntry(categories[1],'Is the length of July in days.'),createEntry(categories[1],'Is the length of August in days.'),createEntry(categories[1],'Is the length of October in days.'),
        createEntry(categories[1],'Is the length of December in days.')
    ],
    30: [
        createEntry(categories[1],'Is the length of April in days.'),createEntry(categories[0],'Is the length of June in days.'),createEntry(categories[1],'Is the length of September in days.'),
        createEntry(categories[1],'Is the length of November in days.')
    ],
    29: [createEntry(categories[1],'Is the day length of February in leap years.')],
    28: [createEntry(categories[1],'Is the normal length of February in days.')]
}

export type ParseComponentsResult = ComponentEntry[][];

export async function parseComponents(n:number):Promise<ParseComponentsResult> {
    const result:ParseComponentsResult = [];

    for(let i=0; i<categories.length; i++){
        const cate = categories[i];
        const entryList:ComponentEntry[] = [];

        for (let j = 0; j < cate.parsers.length; j++) {
            const res = await categories[i].parsers[j](n);
            if(res!==null) entryList.push({...res,category:cate})
        }

        if(n in staticComponentEntries) staticComponentEntries[n].filter(value => value.id === cate.id).forEach(value => entryList.push(value));
        result.push(entryList);
    }

    return Promise.resolve(result);
}