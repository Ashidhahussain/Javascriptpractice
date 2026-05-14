//Global Variables - we can call this global variables in anywhere (inside the function, Outside the function etc.)

let a=5
var b=10
const c=3

function test()
{
    console.log("The value is a is " +a) //5
    console.log("The value is b is " +b)  //10
    console.log("The value isca is " +c)  //3
    console.log(a+5) //5+5 =10
}
test() //Function call

function test2()
{
    console.log("The value is a is " +a) //5
    console.log("The value is b is " +b) //10
    console.log("The value is c is " + c) //3
    console.log(b+10) //10+10=20
}
test2() //Function Call

console.log("The value is a is " +a) //5
console.log("The value is b is " +b) //10
console.log("The value is c is " + c) //3

