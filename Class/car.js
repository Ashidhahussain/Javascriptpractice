import { vehicle } from "./vehicle.js"; //To use the vehicle file here 
class car extends vehicle{ // extends using to connet parent file with child file // extends using for inherit the class

    musicon()
    {
        console.log("Music is on")
    }

}
let K= new car();
K.musicon(); //Own Methord
K.start(); //Methord mentioned in Vehicle file 

//Vehicle ------------> Parent , base , Super class
//car -------------> Chile/derived Class