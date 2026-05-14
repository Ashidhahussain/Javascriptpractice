
/*console.log("Hi all 1")
console.log("Hi all 2")
console.log("Hi all 3") */
//These are Synchorunous - Step by step execusion

//Promise - Used to handle Asynchorunous code 

/*Syntax of Promise

let promise= new promise((resolve,reject) => {
    
    //code
    })
         New Promise = A promise object
         resolve = success
         reject = failure

Handling Promises

Promise.then(() =>{
    
    // code to handle success
    })
.catch(() =>{
    
    // code to handle failure
    })

            then()= used to handle success
            catch()=used to handle failure
*/

//Program to identify the given number is odd or even using Promise 

let number=10;

let checkNum= new Promise((resolve,reject) =>{

if(number% 2== 0)
{
    resolve("The number is Even")
}
else{
    reject("The number is Odd")
}
})

checkNum.then((SuccessMsg) =>{   // SuccessMsg - Here we can give any variable and
                                    //  that take the msg from resolve part, here the number=10 , so we will get Even number
    console.log(SuccessMsg)
})

.catch((ErrorMsg) => {

    console.log(ErrorMsg) // ErrorMsg - Here we can give any variable and
                            //  that take the msg from reject part
})

