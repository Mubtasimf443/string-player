/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import { validate } from "../Validator.js";


export function makeLinkString(data) {
    if (typeof data !== 'string') throw 'Data not a string' + data;
    let limit = 9;
    for (let i = 10; i > limit; i++) {
        if (data.includes(' ')) {
            data = data.replace(' ', '-');
        }
        if (!data.includes(' ')) limit = i + 100;
    }
    return data
}

export function makeUrlWithParams(base = '', params = {}) {
    if (!validate.isString(base) || !validate.isEmty(base)) throw 'base is not a string';
    if (!validate.isObject(params) || validate.isArray(params)) throw new Error('Params Must be a object');
    base=base.trim(); 
    return (base + '?' + (new URLSearchParams(params)).toString());
}


export function MakePriceString(number) {
    return (parseInt(number)).toFixed(2);
}


export function MakePriceStringSync(number) {
    return (parseInt(number)).toFixed(2);
}