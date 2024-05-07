import { Finder, Info } from '../types/index.js';

const numberSystem: Finder = {
    limit: false,
    find(n) {
        const list:Info[] = [];

        if(n===Math.round(n)){
            list.push({message:'An integer.',type:'status',value:'int'});
            if(n>=0) list.push({message:'A natural number.',type:'status',value:'nat'});
            if(n>0) list.push({message:'A counting number.',type:'status',value:'cnt'});
        }

        return list;
    }
};

export default numberSystem;