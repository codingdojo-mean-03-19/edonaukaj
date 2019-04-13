class Bike {
    price: number;
    max_speed: string;
    miles: number;


    constructor( price: number, max_speed: string){
            this.price=price;
            this.max_speed=max_speed;
            this.miles=0;
        }

displayInfo(){
    return `Total price: ${this.price} Max_Speed: ${this.max_speed} Miles: ${this.miles}`
}

ride(this,x) {
    for(var x of this){
    console.log("Riding");
    this.miles =+10;
    return this;
    }
}
reverse(this,x){
    for(var x of this){
    console.log("Reversing");
        if (this.miles >= 5 ){
            this.miles =-5;
            return this;
        }

        }
    }
}

var bike1= new Bike( 200,"25mph");
bike1.ride(3).reverse(1).displayInfo();

var bike2 =new Bike(250,"50mph");
bike2.ride(2).reverse(2).displayInfo();

var bike3 = new Bike(300,"60mph");
bike3.reverse(3).displayInfo();