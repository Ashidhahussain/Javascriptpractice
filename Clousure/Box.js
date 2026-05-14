
function Box()
{
    let prd="Bag"

    function getprd()
    {
        console.log(prd) //Bag
    }
    return getprd; //Bag
}

let MyBox=new Box();
MyBox();

//Clousure - It is function remeber its data even after its parent function has finished its execusion