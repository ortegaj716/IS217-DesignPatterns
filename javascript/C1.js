//Create the Player class.
function Player(args){ //As demonstrated on the factory example
	this.name = args.name || "Unknown";
	this.level = args.level || 1;
	this.role = args.role || "Novice";
}

//Create the Factory
function PlayerFactory() {}

//Prototype stuff
PlayerFactory.prototype.newPlayer = function(args){
	
	var return_player = new Player(args);
	
	//Decorators!
	if(args.role === "Warrior"){
		return_player.raiseShield = function(){
			document.getElementById("divWarrior").innerHTML = this.name + " the warrior raises his shield!";
		}
	}
	
	if(args.role === "Wizard"){
		return_player.castSpell = function(){
			document.getElementById("divWizard").innerHTML = this.name + " the wizard casts a mighty spell!";
		}
	}
	
	return return_player;
}

//Create the factory + our 2 players
var factory = new PlayerFactory();
var conan = factory.newPlayer({
	name: "Conan",
	level: "24",
	role: "Warrior"
});

var merlin = factory.newPlayer({
	name: "Merlin",
	level: "22",
	role: "Wizard"
});

//Show off decorated functions!
conan.raiseShield();
merlin.castSpell();
