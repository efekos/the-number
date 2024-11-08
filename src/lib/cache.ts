import type {ComponentEntry, ParseComponentsResult} from "$lib/index";

export namespace cache {

    const cache:Record<string, ParseComponentsResult> = {};

    export function hasCache(input:string):boolean{
        return input in cache;
    }

    export function getCache(input:string):ParseComponentsResult{
        return hasCache(input)?cache[input]:[];
    }

    export function cacheValue(input:string,entries:ParseComponentsResult){
        cache[input]=entries;
    }

}