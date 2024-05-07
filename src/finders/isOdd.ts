import { Finder } from '../types/index.js';

const isOdd:Finder = {
    limit:false,
    find(n) {
        if(n&1) return [{message:'Odd.',type:'odd'}];
        return [];
    }
};

export default isOdd;