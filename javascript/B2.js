function SeasonalGift(de){
	this.description = de;
	console.log(this.description);
}

function GiftGiver(){
	this.SEASON = "spring"; //spring,summer,fall,winter
}

GiftGiver.prototype.changeSeason = function(s){
	this.SEASON = s;
}

GiftGiver.prototype.springGift = function(){
	return new SeasonalGift("Umbrella");
}

GiftGiver.prototype.summerGift = function(){
	return new SeasonalGift("Shorts");
}

GiftGiver.prototype.fallGift = function(){
	return new SeasonalGift("Coat");
}

GiftGiver.prototype.winterGift = function(){
	return new SeasonalGift("Boots");
}

GiftGiver.prototype.giveGift = function(){
	var dynamic = this.SEASON + "Gift";
	return this[dynamic]();
}

var santa = new GiftGiver();
var gift1 = santa.giveGift();
santa.changeSeason("summer");
var gift2 = santa.giveGift();
santa.changeSeason("fall");
var gift3 = santa.giveGift();
santa.changeSeason("winter");
var gift4 = santa.giveGift();

document.getElementById("divSpring").innerHTML = gift1.description;
document.getElementById("divSummer").innerHTML = gift2.description;
document.getElementById("divFall").innerHTML = gift3.description;
document.getElementById("divWinter").innerHTML = gift4.description;