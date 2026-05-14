
function SD1(name,age)
{
    console.log("The name is " + name)
    age() // callback function
   
}
function stdAge(Place)
{
    console.log("The age is 20 ")
    Place()
}
//SD1("Jerry", stdAge,)
function SD2(course, division)
{
    console.log("The course is " + course)
    division() // callback function
}
//SD2("Playwright",StdDiv)

function StdDiv(Job){
    console.log("The division is B")
    console.log("Job")
}


function SD3(Day)
{
    console.log("The Day is Wednesday")
    Day()
}


SD1("Jerry",function(){
   stdAge(function(){
    SD2("Playwright",function(){
        StdDiv("job Is Testing" )
        SD3(function(){
            console.log("The Student details printed successfully")
        })
    })

})
})


