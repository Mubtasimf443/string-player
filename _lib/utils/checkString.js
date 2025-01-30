/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import {log, validate} from '../../index.js'

export function checkTimeString(time) {
    if (typeof time != 'string') throw 'not a correct time ' + time
    if (!time.includes(':')) throw 'not a correct time ' + time
    if (time.length !== 5) throw 'not a correct time ' + time
    time = time.split(':')
    if (time.length !== 2) throw 'not a correct time array'
    if (Number(time[0]).toString().toLowerCase == 'nan') throw 'not a correct time[0] ' + time[0]
    if (Number(time[1]).toString().toLowerCase == 'nan') throw 'not a correct time[1] ' + time[1]
    if (time[0] < 0 || time[0] > 23) throw 'not a correct time[1] ' + time[0]
    if (time[1] < 0 || time[1] > 59) throw 'not a correct time[1] ' + time[1]
    // log( time[0] > 11 ? Number(time[0]) - 11 : time[0])
    let string = (time[0] > 12 ? Number(time[0]) - 12 : time[0]) + ':' + time[1] + ' ' + (time[0] > 11 ? 'PM' : 'AM');
    return string
}


export function isValidUrl(string = '') {
    if (!string || typeof string !== 'string') return false;
    string=string.trim();
    if (string.length < 10) return false
    let hasBadCharecters = validate.hasAll(string, ['<', '>', '{', "}", '(', ')', '[', ']', '$', '*', "'", '"', '^','!']);
    if (hasBadCharecters) return false;
    let array=['h','t','t','p'];
    for (let i = 0; i <= 3; i++) {
        if (string.at(i) !== array[i]) return false;
    }
    if (string.at(4) !== 's' && string.at(4) !== ':') return false;
    if (string.at(4) === 's') {
        if (string.substring(5, 8) !== '://') return false;
        if (!string.substring(8).includes('.')) return false;
    }
    if (string.at(4) === ':') {
        if (string.substring(5, 7) !== '//') return false;
    }
    return true;
}