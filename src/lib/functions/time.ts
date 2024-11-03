import type {ComponentParser} from "$lib";

const months = ['January','February','March','April','May','July','June','August','September','October','November','December'];

function getThing(n:string){
    if(n.endsWith('1')) return 'st';
    if(n.endsWith('2')) return 'nd';
    if(n.endsWith('3')) return 'rd';
    return 'th';
}

export const dateParser:ComponentParser = (n)=>{
    if(n.toString().length!==8)return Promise.resolve(null);
    const day = n.toString().substring(0,2);
    const month = n.toString().substring(2,4);
    const year = n.toString().substring(4);

    const monthI = parseInt(month);
    if(monthI>12) return Promise.resolve(null);

    return Promise.resolve({id:'time',text:`Represents ${day}${getThing(day)} of ${months[monthI-1]}, ${year}`});
}