
let a=15; //Global variable

function outerfunction()
{
    b=10; //local variable of outerfunction

    function innerfunction()
    {
        a=3 // local variable of innerfunction
        c=5; // local variable of innerfunction
        console.log("The value of a is " + a); //access global variable - here the value "a" will 
       // be 3 , because this will search  inside the function first then only go outside, if the value of is not available in inside the function
       // that will check outside
        console.log("The value of b is " + b); // access local variable of outerfunction
        console.log("The value of c is " + c); //access local variable of innerfunction
    }
    innerfunction()

}
outerfunction()