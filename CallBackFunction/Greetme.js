
//Normal function
//-------------------------
function greetme(name)
{
    console.log("Good Morning " + name)
}
//greetme("Tom")


function greetHai(name, Callback) // this "callback" will consider as function
{
    console.log("Good Morning " + name)
    Callback("AA") //call callback function
}

function greetbye()
{
    console.log("Good Bye !!!!!!!!!!!")
}

greetHai("Ashidha" ,greetme) // first run the normal function greetme
//then go to greetHai function
// then go to callback function