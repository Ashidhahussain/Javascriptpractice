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
    ispassed:true,  //Boolean - just check the boolean

    fullName:function()
    {
        return this.name
    }
}

for(let key in student)  //key - all data inside the student
{
    if (typeof student[key]==="function")
    {
        console.log(key + ": " + student[key]())
    }
    else if(Array.isArray(student[key]))
    {
        console.log(key + ":" + student[key])
    }
    else if(typeof student[key]==="object")
    {
        console.log(key + ":" ); //Mark

        for(let subkey in student[key])
        {
            console.log( " " + subkey + ":" + student[key][subkey])
        }
    }

    else
        {
        console.log(key + ":" + student[key])

        }
}

