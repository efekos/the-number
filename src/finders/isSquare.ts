import { Finder } from '../types/index.js';

const isSquare:Finder = {
    limit:false,
    find(n) {
        const root = Math.sqrt(n);

        if(root===Math.floor(root)) return [{message:'Is a square number.',detail:`Square root of ${n} is an integer.`,type:'square',value:root+''}];
        return [];
    }
};

export default isSquare;