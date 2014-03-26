//Let's create the singleton iterator
var Iterator = (function(){
	
	//The single instance
	var instance;
	
	//The init function. Called when using getInstance for the 1st time
	function init(){
		this.index = 0;
		this.items = null;
		return {
			
			setItems: function(items){
				this.items = items;
			},
			
			first: function() {
				this.reset();
				return this.items[this.index++];
			},
			
			next: function(){
				return this.items[this.index++];
			},
			
			hasNext: function(){
				return this.index <= this.items.length;
			},
			
			reset: function(){
				this.index = 0;
			},
			
			each: function(callback) {
				for(var item = this.first(); this.hasNext(); item = this.next()){
					callback(item);
				}
			}
		};
	};
	
	//Returning functions! Very interesting...
	return { 
		//Get the singleton instance or create a new one
		getInstance: function(){
			if(!instance){
				instance = init();
			}
			
			return instance;
		}
	};
})();

//Let's set up our iterator singleton
var fruits = ["Apple","Banana","Grapes","Peaches","Strawberries"];
var myIterator = Iterator.getInstance();
myIterator.setItems(fruits);
myIterator.each(function(item) {
	document.getElementById("divList1").innerHTML += item;
});
//PROOF that it's a singleton
//No fruits were added, so if this was REALLY the same
//instance, all the same fruits would print out, right?
var myOtherIterator = Iterator.getInstance();
myIterator.each(function(item) {
	document.getElementById("divList2").innerHTML += item;
});
