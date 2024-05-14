import { Finder } from '../types/Finder.js';

const funi: Finder = {
    limit:true,
    min: 30,
    max: 421,
    find(n) {      
        if([31,62,69,420,34].includes(n)) return [{type:'funny',message:'A funny number.',value:n+'',detail:'This number is either considered funny or associated with a kind of sexual relationship in at least one country.'}];
        return [];
    }
};

export default funi;