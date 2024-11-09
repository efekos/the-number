import type {PageLoad} from './$types';

export const load: PageLoad = ({params}) => {
    return {n:'n' in params ? params.n : '1'};
};