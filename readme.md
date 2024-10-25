# String Player App 


#### functionality of repleCaracter 
```
import { log, repleCaracter } from "string-player"



let a =`function() {
    return "Website is hack by us '
}`

a =await repleCaracter(a);
log(a)

```


returns 
```
function&#40;&#41; &#123;
    return &#34;Website is hack by us &#39;
&#125;
```



#### functionality of MakePriceString

```
import { log,  MakePriceString} from "string-player"

let a = 500;
a=await MakePriceString(a);
log(a)

//returns  500.00
```

#### functionality of mekeLinkString

```
import { log, mekeLinkString } from "string-player"

let a = 'https://www.your-website.com/a b c d f g e l k p n m o k j l i p q r s';

log(mekeLinkString(a))
//prints https://www.your-website.com/a-b-c-d-f-g-e-l-k-p-n-m-o-k-j-l-i-p-q-r-s

```
