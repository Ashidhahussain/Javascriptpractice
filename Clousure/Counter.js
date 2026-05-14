
function counter()
{
    let countvalue=100;

    function getcount()
    {
        countvalue++;
        console.log(countvalue)
    }
    return getcount
}
let Mytimer=counter() // function call
Mytimer();
Mytimer();
Mytimer();
