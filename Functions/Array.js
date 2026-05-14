//Array - Collection of data is called Array

        //   0 1 2 3 4    index of the array
let numbers=[1,2,4,5,6] // length / No.of element

console.log(numbers)  //Print the array
console.log(numbers[3]) //Print 4

numbers[2]= 3  //Update the value of index, here the 4 will update by 3
console.log(numbers)

console.log(numbers.length) // print the length of array that 5

let fruits=["apple","orange","grap"]

console.log(fruits) 
console.log(fruits[1])

fruits[2]="Banana"
console.log(fruits)

console.log(fruits.length)  //print the length of array that 3


console.log("****************Array using for Loop ************")

let digits=[1,2,4,5,6]
for(let i=0;i<digits.length;i++)
{
    console.log(digits[i])
    
    
}
digits[2]=3
console.log(digits)

let veg=["onion","chilli","gralic"]
for(let i=0;i<veg.length;i++)
{
    console.log(veg[i])
}


console.log("****************Array using for of Loop ************")

let date=[11,12,13,14,15]
for( n of date)
{
    console.log(n)
}
 date[4]=16
 console.log(date)

 let days=["Monday","Tuesday","Wednesday"]
for(m of days)
{
    console.log(m)
}


 