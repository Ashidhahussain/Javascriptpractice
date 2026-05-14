let student={
    name: "Tom",
    age: "23",
    course: "Playwright",

    marks:{ //nested 
        java:20,
        js:30,
        c:45,
    },
    sub:["Java","js","c"],
    ispassed:true
}
console.log("The mark of Java", student.marks.java)
console.log("Student details" , student)
console.log(student.name) // print like in different
console.log(student["age"]) //print like in different
console.log(student.sub[1]) // print the index 1 subject that is js
console.log(student.sub.slice(0,2))


 student.gender="Female"; //To add data to the object
 console.log("Student details after add the gender" ,student) 

 student.course="Javascript" //To update data inside the obect
 console.log("Student details after add the gender",student) 
 
 delete student.courese
 console.log("Student details after delete the course",student)
