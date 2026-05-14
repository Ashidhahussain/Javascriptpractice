
import { phoneBrand } from "./phoneBrand.js";
class phonename extends phoneBrand{

    phoneclr(clr)
    {
        console.log("the phone color is " +clr)
    }
}

let p1=new phonename();
p1.brandname("iPhone", "16pro");
p1.brandname("iPhone", "17pro");
p1.PhoneGb ("128");
p1.phoneclr("green");
