/*Memento design patterns have 3 classes:
 * Memento - The container of data that you wish to remember.
 * Originator - Setters and getters for the current Memento being worked on.
 * Caretaker - A storage for mementos.
 */

function Memento(hand){
	//Think of playing cards. What cards are in your hand right now?
	this.card1 = hand.card1 || "Nothing!";
	this.card2 = hand.card2 || "Nothing!";
	this.card3 = hand.card3 || "Nothing!";
	this.card4 = hand.card4 || "Nothing!";
	this.card5 = hand.card5 || "Nothing!";
}

function Caretaker(){
	var mementos = [];
	
	this.mementoPush = function(m){
		mementos.push(m);
	}
	
	this.mementoGet = function(i){
		return mementos[i];
	}
}

function Originator(){
	//Just for convenience, start off with a queen card.
	var currentMemento = new Memento({
		card1: "Queen"
	});
	
	var myCaretaker = new Caretaker();
	
	this.getHand = function(){
		return currentMemento;
	}
	
	this.setHand = function(hand){
		myCaretaker.mementoPush(currentMemento);
		currentMemento = new Memento(hand);
	}
	
	this.printHand = function(){
		return "In my hand, I hold...<br>" +
		this.getHand().card1 + "<br>" + 
		this.getHand().card2 + "<br>" +
		this.getHand().card3 + "<br>" +
		this.getHand().card4 + "<br>" +
		this.getHand().card5 + "<br>";
	}
	
	this.previousHand = function(i){
		return myCaretaker.mementoGet(i);
	}
	
}



var myHand = new Originator();
document.getElementById("divFirstHand").innerHTML = myHand.printHand()
 + "<br>Let's get some more cards...<br>";
 myHand.setHand({
 	card1: "Queen",
 	card2: "5",
 	card3: "8",
 	card4: "King"
 });

document.getElementById("divSecondHand").innerHTML = myHand.printHand()
 + "<br>Oh no, I dropped all my cards! What cards did I start off with again?<br>";
myHand.setHand(myHand.previousHand(0));

document.getElementById("divOops").innerHTML = myHand.printHand();
