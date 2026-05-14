
//hoisting - js prepare variable and function before before running the code

console.log(a) // this will show undefined , 
// Varibale will not store before run the data, but it does not shows the error
var a=12; 

sayHi()    // function call before function declaration
                //functions are fully stored in memory brfore run the code , so we will get the data
function sayHi()
{
    console.log("Say Hi")
}

/*console.log(b) // reference error - let is not hoisted 
let b=10;

console.log(c) // reference error - const is not hoisted 
const c=5; */