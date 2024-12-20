import { breakJsonData, log } from "./index.js"
import {createRequire} from 'module'
const require=createRequire(import.meta.url);

let data=JSON.stringify({
    A:'A',
    B:'B',
    C:'C',
    D:'D',
    bol:true,
    fool:false,
    arr:["alert","WebTransport","wet"],
    e:"we"
})

log(data);
data= breakJsonData(data)
log(data);
