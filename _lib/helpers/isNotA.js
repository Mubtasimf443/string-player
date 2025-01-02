
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

export default  class isNotA {
    constructor() {}
    string = value => (typeof value !== 'string');
    array = array => (Array.isArray(array) === false);
    boolean = (bool) => (typeof bool !== 'boolean');
    num = number => (typeof number !== 'number');
    emty = val => (!val ? true : false);
    nul = data=> (data !== null);
    object=obj=> (typeof obj !== 'object');
    func= f => (typeof f !== 'function');
}
