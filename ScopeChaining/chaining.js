
let a=15; //Global variable

function outerfunction()
{
    b=10; //local variable of outerfunction
    console.log("The value of b is " + b)

    function innerfunction()
    {
        c=5; // local variable of innerfunction
        console.log("The value of a is " + a); //access global variable
        console.log("The value of b is " + b); // access local variable of outerfunction
        console.log("The value of c is " + c); //access local variable of innerfunction
    }
    innerfunction()

}
outerfunction() // This function will call first then run the innerfunction

