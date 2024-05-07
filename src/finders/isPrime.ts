import { Finder } from '../types/index.js';

const isPrime:Finder = {
    limit:false,
    find(n) {
        if(n <= 1) return [];

        const lowers = [];

        for (let i = 2; i < n; i++) lowers.push(i);

        if(lowers.every(v=>n%v!==0)) return [{message:'Is a prime number.',detail:`${n} can't be divided by any other number.`,type:'prime',value:n+''}];
        return [];
    }
};

export default isPrime;