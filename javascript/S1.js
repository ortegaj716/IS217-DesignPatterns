function Car(){
	this.STATE = "off"; //off / on / damaged
}

Car.prototype.switchState = function(state){
	this.STATE = state;
}

Car.prototype.offAccelerate = function(){
	document.getElementById("divOff").innerHTML = "You can\'t accelerate, the car is off!";
}

Car.prototype.onAccelerate = function(){
	document.getElementById("divOn").innerHTML = "You drive away!";
}

Car.prototype.damagedAccelerate = function(){
	document.getElementById("divDamaged").innerHTML = "Uh-oh, the car isn\'t working. I hope you have the money to see a mechanic...";
}

Car.prototype.accelerate = function(){
	//Fancy dynamic programming!
	var dynamic = this.STATE + "Accelerate";
	this[dynamic]();
}

var myCar = new Car();
myCar.accelerate();
myCar.switchState("on");
myCar.accelerate();
myCar.switchState("damaged");
myCar.accelerate();
