
//loop control statements(jump statement)
        //break
        //continue
 console.log("Break Statement")

        for(let i=5;i<=10;i++)
        {
            if(i==8)
            {
                break; // Immediately exit the loop
            }
            console.log("The values of i using break  " + i)
        }

console.log("Continue Statement")  
        for(let i=5;i<=10;i++)
        {
            if(i==8) // here we will check the value of i for every increment
            {
                continue; // skip the matching code(here 8==8 "8 will not print") and move to the next iteration
            }
            console.log("The values of i using continue " + i)
        }


console.log("Print th Odd numbers using continue statement")
for(i=1;i<=10;i++)
{
    if(i%2===0)
    {   
       continue;

    }
     console.log("the odd numbers are  " + i)
}

console.log("Print th even numbers using continue statement")
for(i=1;i<=10;i++)
{
    if(i%2===1)
    {   
       continue;

    }
     console.log("the odd numbers are  " + i)
}
