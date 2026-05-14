//Encapsulation - To set data as private, here we using example of Banking account

class EncapsulationBanking{

    #balance=3000 //this # represent the encapsulation

    deposite(addmoney)
    {
        this.#balance=this.#balance+addmoney
        console.log("inside the deposit process") // just to know that - when we perform deposite this will print 
    }

    withdraw(money)
    {
        this.#balance-=money // this.#balance=this.#balance-money - used operator in different type
        console.log("inside the withdrawal process") //// just to know that - when we perform withdrawal this will print 
    }
    

    actbalance(checkbalance)
    {
        console.log("the account balance is " + this.#balance)
    }
}

let bankdetails= new EncapsulationBanking()
bankdetails.deposite(1000)
bankdetails.actbalance()
bankdetails.withdraw(2000)
bankdetails.actbalance()