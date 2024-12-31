/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import Validator from "./_lib/Validator.js";

let isEmail = val => (new Validator()).isEmail(val);
console.log(isEmail('mubtasim@gmail.com'));
//prints true;

console.log(isEmail('$mubtasim@gmail.com'));
//prints false;

console.log(isEmail('mubtasim@gmail..com'));
//prints false;

console.log(isEmail('mubtasim@@gmail.com'));
//prints false;

console.log(isEmail('mubtasim@gmail.c'));
//prints false;


console.log(isEmail('mubtasim@gmail.cm'));
//prints true;

console.log(isEmail('mubtasim@gmai,l.com'));
//prints false;

console.log(isEmail('[mubtasim@gmail.com]'));
//prints false;

console.log(isEmail('1mubtasim@gmail.com'));
//prints false;