let pen={
    brand:"ABC",
    clr:"Yellow",
    Price:15,

    ink: function() // we can declaire functions inside the object
    {
        console.log("My ink is " + this.clr)
    }



}

//for in loop is used to loop the Objects
for(let key in pen){     //Key is the variable to represent the data inside the pen
   if(typeof pen[key]=="function")
   {
    pen[key]();
   }
   else
    {
        console.log(key +":" + pen[key])

   }
}

