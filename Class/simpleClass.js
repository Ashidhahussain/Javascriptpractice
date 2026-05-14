//Modern concept of Object is class
// class name should be the file name

class simpleClass{

    //constructor - We can pass data 

    constructor(name,age)
    {
        this.name=name // To access this data outside the constructor
        this.age=age //To access this data outside the constructor
        console.log(name);
        console.log(age)

    }
    showDetails()  // function used
    {
        console.log("The student name is = " + this.name)
        console.log("The student age is = " + this.age)
    }

}
//Object creation
let std1=new simpleClass("Tom", "20"); // here print the data inside the constructor , what to set for name & age
std1.showDetails(); // Print the data mentioned in the function

let std2= new simpleClass("Jerry" , 10);
std2.showDetails();




