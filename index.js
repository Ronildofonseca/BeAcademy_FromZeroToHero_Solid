class WeightAdviser {
    constructor(user, weight) {
        this.user = user,
            this.weight = weight
    }

    adviser(expectedWeight) {
        if (this.weight >= expectedWeight) {
            //this.weightAlert()
            weightAlert(this.user)
        }
    }

    /* weightAlert(){
         console.log("Acima do peso!")
     }*/
}


function weightAlert(user) {
    console.log(`${user} está acima do peso!`)
}
const marcelo = new WeightAdviser('Marcelo', 91)
//marcelo.adviser(90)



/* Open/Closed Principle 
   Se mudar alguma coisa fora, não precisa ter que mudar dentrto! */


   class Tax1{
    constructor(product, price){
        this.product = product,
        this.price = price
    }
    totalPrice(tax){
        console.log(`O valor total é ${this.price + tax},00`)
    }
   }

   class Tax2{
    constructor(product, price){
        this.product = product,
        this.price = price
    }
    totalPrice(tax){
        console.log(`O valor total é ${this.price + tax},00`)
    }
   }

   class Tax3{
    constructor(product, price){
        this.product = product,
        this.price = price
    }
    totalPrice(tax){
        console.log(`O valor total é ${this.price + tax},00`)
    }
   }

   const taxes = [
    new Tax1('snes', 10),
    new Tax2('Xbox', 20),
    new Tax3('PlayStation', 30)

   ]

   function calculate(taxes){
    taxes.forEach(tax => console.log(tax.totalPrice(2)) )
}

//calculate(taxes)



/*Liskov Substitution Principle*/

class FlyingBirds{
    fly(){
        console.log('Eu posso voar!')
    }
}

class SwimmingBird{
    swim(){
        console.log('Eu posso nadar!')
    }
}

class Penguin extends SwimmingBird{}
class Duck extends FlyingBirds{}


function makeFlyingBirdFly(bird) {
    bird.fly()
}

function makeSwimmingbirdSwim(bird){
    bird.swim()
}

const pato  = new Duck()
const pinguim = new Penguin()

//makeFlyingBirdFly(pato)
//makeSwimmingbirdSwim(pinguim)


/* Interface Segregation Principle */

class ProductesEntitty {
    constructor(name,dept){
        this.name = name
        this.dept = dept
    }
}

class TecProducts extends ProductesEntitty{
    constructor(name, dept){
        super(name, dept)
    }
}

class FoodProducts extends ProductesEntitty{
    constructor(name, dept, validDate){
        super(name, dept)
        this.validDate = validDate
    }
}   


const xbox = new TecProducts('XBox','Tecnolgia')
const pipoca = new FoodProducts('Pippoca', 'Alimentícios','Nov/2023')

//console.log(xbox)
//console.log(pipoca)



/*Dependency Inversion Principle */ 
//Código desacoplado

class Store {
    /*constructor(){
        //this.creditCard = new Visa()
    }*/

    constructor (brand){
        this.paymentProcess = new PaymentProcess(brand)
    }
}

class PaymentProcess{
    constructor (brand){
        this.brand = brand  
    }


payment(){
    console.log(`Pagou com ${this.brand}`)
}

}

/*class Visa {
    constructor(){
        this.brand = 'Visa'
    }
}*/

const bike = new Store(new PaymentProcess('Mastercard').payment())