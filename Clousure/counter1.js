function counter()
{
    let count=100;

    function getcount()
    {
        for(count=100;count<=110;count++)
        console.log(count)
    }
    return getcount
}
let Mytimer=counter() // function call
Mytimer();