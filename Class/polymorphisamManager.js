 /*creating a child class with polymorphisam methord, here we using "work" in employee file(Parent)
 and in child file(Manager)."same methord we can use in differnt files, but we should declaire with different 
 object 

 */

import { polymorphisamEmployee } from "./polymorphismEmployee.js";

 class polymorphisamManager extends polymorphisamEmployee
 {
    leave()
    {
        console.log("This is the manager leave")
    }

    work()
    {
         console.log("This is the manager work")
    }
 }

 let M= new polymorphisamManager()
 M.leave()
 M.work() // here the manager work methord will run 

 /* if we want to access the work in emplyee we have to create another obeject here, 
  because the parent class emplyee already connected here */

 let E= new polymorphisamEmployee()
 E.work()
 
