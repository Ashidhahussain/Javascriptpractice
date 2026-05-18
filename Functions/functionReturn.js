//"return" in JavaScript is used to send a value back from a function.

//When a function reaches return, the function stops executing and gives back the specified value.

// Function return

function add(a,b)
{
    //let sum=a+b;
    //console.log("Sum is  " + sum)
    return(a+b)
   
}
let result = add(5, 10) // function call
console.log(" The sum is  " +result)


//Example of returning a string 

function fullName(fname,lname)
{
    return(fname + " " + lname)
}
let Name= fullName("Aju","Tom")
console.log(Name) 
