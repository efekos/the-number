import { Finder } from '../types/index.js';

const isEven:Finder = {
    limit:false,
    find(n) {
        if(!(n&1)) return [{message:'Even.',type:'even',value:n+''}];
        return [];
    }
};

export default isEven;