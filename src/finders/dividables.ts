import { Finder, Info } from '../types/index.js';

const memoization:Record<number,Info[]> = {};

const dividables:Finder = {
    limit:false,
    find(n) {
        if(memoization[n]) return memoization[n];

        const lowers = [];
        const list:Info[] = [];

        for (let i = 2; i < n; i++) lowers.push(i);

        for (const i of lowers) {
            if(n%i===0) list.push({message:`Is dividable by ${i}.`,type:'dividable',value:i+''});
        }

        memoization[n] = list;
        return list;
    }
};

export default dividables;