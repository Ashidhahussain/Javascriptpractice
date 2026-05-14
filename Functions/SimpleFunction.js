//Mini Program

function sayHello()
{
    console.log("Hi All....")
}
sayHello()

//function with parameter

function sayName(name) //parameter
{
    console.log("Hai " + name)
}
sayName("Alice") //arguments


//function with multile parameter

function sayName(name, age) //parameter
{
    console.log("Hai " + name + "Your Age is " + age )
}
sayName("Alice" , 20) //arguments
sayName("Tom" , 23)



// Function return

function add(a,b)
{
    let sum=a+b;
    //console.log("Sum is  " + sum)
    return(sum)
}
let result = add(5, 10) // function call
console.log(" The sum is  " +result)


//Example of returning a string 

/*function fullName(fname,lname)
{
    return(fname + "" + lname)
}
let Name= fullName("Aju","Tom")
console.log(Name)*/


//Arrow functions

let sub=(c,d)=> {return (c-d);}
let mul=(e,f)=> e*f

console.log(" The Sub value is " + sub(10,5))
console.log("The multiplication value is  " + mul(2,4))


// Validate the Scope of variables (Let, var, const) var is function scope, able to access inside and outside the block
function scopeVar(){
    if(true)
    {
        var x=10;
        console.log(x + " Inside a Block") 
    }
    console.log(x + " Outside the Block")
}
scopeVar()

function scopeLet(){  
    if(true)
    {
        let y=10;
        console.log(y + " Inside a Block") 
    }
    //console.log(y + " Outside the Block") // let is block scope so we can't access ouside the block
}
scopeLet()

function scopeConst(){  
    if(true)
    {
        let y=10;
        console.log(y + " Inside a Block") 
    }
    //console.log(y + " Outside the Block") // let is block scope so we can't access ouside the block
}
scopeConst()


//Global Functions