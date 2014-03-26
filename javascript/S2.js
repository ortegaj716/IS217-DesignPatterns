//Code re-use (Less work for me!)
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

function Robot(){
	//Robot has nothing!
}


var army = [new Robot(), new Robot(), new Robot()];
var myIterator = Iterator.getInstance();
myIterator.setItems(army);

//Give our robots weapons!
myIterator.each(function(item){
	item.fireGatlingGun = function(){
		document.getElementById("divBang").innerHTML += "BangBangBang!!!<br>";
	}
	
	item.fireGatlingGun(); 

});
