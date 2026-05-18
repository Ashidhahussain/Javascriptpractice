console.log("****************Array Methords ************")
let arr=[1,2]
console.log(arr) //1,2

arr.push(3)  //Add element at the end of the array
console.log(arr) //1,2,3

arr.pop() //Remove element from the end of the array
console.log(arr)  //1,2
 
arr.unshift(11) //Add element at the beginning of the array
console.log(arr)  //11,1,2

arr.shift()   //Remove element from the beginning of the array
console.log(arr)  //1,2

let a=[1,2,4,5,6]
 console.log(a) //Print the values in array
 console.log(a.indexOf(2)) //IndexOf is used to find the value of mentioned index - it return index -finds the position (index) of a value in an array.
 console.log(a.includes(5)) // Checking the value 5 is present in the array - It return true /false basd on the elements present in the array or not
 console.log(a.includes(9))

 let subArray=a.slice(2,5) //to print array value based on given index, start index include and end index excluded 
 console.log("The array values after Slice applied :" + subArray)  //slice() is used to extract a part of an array without changing the original array.
 let remove =a.splice(2,2,10)
 console.log("The removed values: " + remove)// indexofthevalue need to start update, how many values need to remove, ramining given values are the value need to add to the array
 console.log("after splicing " +a)

 //Slice() - Copy part of array
 //splice() - Add/remove elements

  // Map() - used to create new array without change the existing array - Returns a new array

  let doubleArray=a.map((x) => x * 2) //x indicate the values in array a
  console.log(doubleArray)

  let nums=[10,20,30]
  let doubleArray1=nums.map((y) => y + 5) //y indicate the values in array nums
  console.log(doubleArray1)


  //filter() Method - Keep only the values satisfying the conditions - print only the values matches with given conditions
  let numbs=[10,20,30,4,6,8,11,9]
  let filterArray=numbs.filter((z)=> z>10) //z indicate the values in array numbs
  console.log(filterArray)

  let filterArray1=numbs.filter((q)=> q%2===0)  // To filter even numbers in the given array -q indicate the values in array numbs
  console.log("The even numbers in the given array is " + ' " ' + filterArray1 + ' " ') // To print values in quots give " inside a ''


  // To find the sum of values in array

  let values=[10,20,25,8,9,3]
  let sum=0;
  for(let i=0;i<values.length;i++)
  {
        sum=sum+values[i]
  }
  console.log("The sum of values in Array is " + '"' + sum + '"')

  // Reduce method - To find the sum of array with out use the for loop

  let red=[1,2,4,5]
  let sum1=red.reduce((sum1,r)=> sum1+r ,0) 
  // r is the values in array red
  // here this 0 indicates the initial values of sum, this is an another way of sum=0
  console.log("The sum of array using reduce method is " +  sum1)
  let sum2=red.reduce((sum2,s)=> sum2*s, 1)
  console.log("The multiplication of values in array using reduce method is " + sum2)

