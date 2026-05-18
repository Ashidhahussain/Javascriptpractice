
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
    Callback() //call callback function
}

function greetbye()
{
    console.log("Good Bye !!!!!!!!!!!")
}

greetHai("Jerry" ,greetbye) // first run the normal function greetme
//then go to greetHai function
// then go to callback function