//Absraction - showing only essential features and hiding internal implementation details

class Drive
{
    start()
    {
        this.#enginstart(); //Private methord -this accessible only within the class , 
        // so this will go to the #enginestart method and print "Engin started"
        console.log("The Drive started")
    }

    #enginstart()
    {
        //logic to start the methord
        console.log("Engine started.............")
    }
}

let D=new Drive()
D.start()
D.#enginstart()// this will show error, because the private method 
// can not be accessed outside the class
