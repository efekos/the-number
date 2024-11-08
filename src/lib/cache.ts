import type {ComponentEntry} from "$lib/index";

export namespace cache {

    const cache:Record<string, ComponentEntry[]> = {};

    export function hasCache(input:string):boolean{
        return input in cache;
    }

    export function getCache(input:string):ComponentEntry[]{
        return hasCache(input)?cache[input]:[];
    }

    export function cacheValue(input:string,entries:ComponentEntry[]){
        cache[input]=entries;
    }

}