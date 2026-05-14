/* if statement  
if(condition) - Simple if statement
{
    code to be executed if condition is true
} 
else
    {
    code to be executed if condition is false
}    
*/
//Simple if
    var age=25 //23>=18
    if(age>=18)
    {
console.log("You are an adult")
    }


    //if else statement

    var age=3
    if(age>=18)
    {
        console.log("You are adult")
    }
    else{
        console.log("YOu are miner")
    }


    //if else if statement

    var mark=60
    if(mark>=90)
    {
        console.log("Grade A")
    }
    else if(mark>=75)
    {
         console.log("Grade B")
    }
    else if(mark>=60)
    {
         console.log("Grade C")
    }
    else
    {
        console.log("Grade D")
    }

    //Switch statemnet - break stops the switch immediately.

    let clr="yellow"
    switch(clr)
    {
        case "red":
            console.log("Stop")
            break;
        case "green":
            console.log("Start")
            break;

        case "yellow":
            console.log("Ready")
            break;

        default:
        console.log("Wait for the signal")

}

// Fall-through - continue executing next cases until break is found.
// Here case "e" matching , so this will go to console and the break is there.
let alphabets = "e" 
switch(alphabets)
{
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("The alphabel e is Vowel")
        break;
    default:
        console.log("This is consonant")
     
}

//Ternary Operators
// condition ? value_if_true : value_if_false

let age1=25
let result= age1>=18 ? "you are an adult" : "You are minor" //ifelse statement in one line
 //age1>=18 ? console .log("Adult") : console.log("Minor") - We can write like this without variables
console.log(result )