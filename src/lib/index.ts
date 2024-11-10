import {code, math, time} from "$lib/functions";
import {cache} from "$lib/cache";

export type ComponentParser = (n: number) => Promise<ComponentParserResponse | null>;

interface LocalComponentCategory extends ComponentCategory {
    parsers?: ComponentParser[];
    fullParser?: (n: number) => Promise<ComponentParserResponse[] | null>;
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
    category: ComponentCategory;
}

const categories: LocalComponentCategory[] = [
    {
        colorClass: 'bg-blue-600 text-blue-950',
        name: 'MATH',
        id: 'math',
        parsers: [
            ...math.staticFunctions, ...Array.from({length: 1000}, (_a, i) => math.powerOfFunction(i + 1))
        ]
    },
    {
        colorClass: 'bg-purple-600 text-purple-950',
        name: 'TIME',
        id: 'time',
        parsers: time.allFunctions
    },
    {
        colorClass: 'bg-violet-600 text-violet-950',
        name: 'CODE',
        id: 'code',
        parsers: code.allFunctions
    },
    {
        colorClass: 'bg-green-600 text-green-950',
        name: 'HISTORY',
        id: 'history',
        fullParser: async (n) => {
            if (n > 99999) return [];
            try {
                const val = await fetch(`http://localhost:8080/api/v1/the-number/history/${n}`);
                if (val.status !== 200) return [];
                const res = await val.json();
                return (res as string[]).map(text => {
                    return {id: 'history', text}
                })
            } catch (_ignored) {
                return [];
            }
        }
    }
]

function createEntry(category: LocalComponentCategory, text: string): ComponentEntry {
    return {id: category.id, category, text}
}

const staticComponentEntries: Record<number, ComponentEntry[]> = {
    365: [{id: 'time', text: 'Is the length of a year in days.', category: categories[1]}],
    366: [{
        id: 'time',
        text: 'Is the length of a leap year, where February is 29 days, in days.',
        category: categories[1]
    }],
    60: [
        {id: 'time', text: 'Is the length of a minute in seconds.', category: categories[1]},
        {id: 'time', text: 'Is length of an hour in minutes.', category: categories[1]}
    ],
    24: [{id: 'time', text: 'Is the length of a day in hours.', category: categories[1]}],
    7: [{id: 'time', text: 'Is the length of a week in days.', category: categories[1]}],
    3.141592: [{id: 'math', text: 'Is PI.', category: categories[0]}],
    3.14: [{id: 'math', text: 'Is first three and most known digits of PI.', category: categories[0]}],
    31: [
        createEntry(categories[1], 'Is the length of January in days.'), createEntry(categories[1], 'Is the length of March in days.'), createEntry(categories[1], 'Is the length of May in days.'),
        createEntry(categories[1], 'Is the length of July in days.'), createEntry(categories[1], 'Is the length of August in days.'), createEntry(categories[1], 'Is the length of October in days.'),
        createEntry(categories[1], 'Is the length of December in days.')
    ],
    30: [
        createEntry(categories[1], 'Is the length of April in days.'), createEntry(categories[0], 'Is the length of June in days.'), createEntry(categories[1], 'Is the length of September in days.'),
        createEntry(categories[1], 'Is the length of November in days.')
    ],
    29: [createEntry(categories[1], 'Is the day length of February in leap years.')],
    28: [createEntry(categories[1], 'Is the normal length of February in days.')],
    0: [createEntry(categories[2], 'Can be considered `false`.')],
    1: [createEntry(categories[2], 'Can be considered `true`.')],
}

export type ParseComponentsResult = ComponentEntry[][];

export async function parseComponents(n: number): Promise<ParseComponentsResult> {
    if (cache.hasCache(n + '')) return Promise.resolve(cache.getCache(n + ''));
    if (n === Infinity || n === -Infinity) return Promise.resolve([[createEntry(categories[2], 'Is considered `Infinity` in JavaScript, therefore this website cannot comprehend this number.')]]);
    const result: ParseComponentsResult = [];

    for (let i = 0; i < categories.length; i++) {
        const cate = categories[i];
        const entryList: ComponentEntry[] = [];

        if ('parsers' in cate && cate.parsers) for (let j = 0; j < cate.parsers.length; j++) {
            // @ts-ignore because it is guaranteed that categories[i] does have parsers
            const res = await categories[i].parsers[j](n);
            if (res) entryList.push({...res, category: cate})
        } else if ('fullParser' in cate && cate.fullParser) {
            const res = await cate.fullParser(n);
            if (res) res.map(o => {
                return {...o, category: cate}
            }).forEach(o => entryList.push(o))
        }

        if (n in staticComponentEntries) staticComponentEntries[n].filter(value => value.id === cate.id).forEach(value => entryList.push(value));
        result.push(entryList);
    }

    cache.cacheValue(n + '', result);
    return Promise.resolve(result);
}