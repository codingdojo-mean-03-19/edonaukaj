function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
    this.kick = function(ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        return this;
    }
}
Ninja.prototype.punch = function(ninja) {
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");

}
Ninja.prototype.sayName = function() {
    console.log("My ninja name is " + this.name);
    return this;
}
Ninja.prototype.drinkSake = function() {
    this.health += 10;
    console.log(this.health)
    return this;
}
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

blueNinja.showStats();
redNinja.showStats();