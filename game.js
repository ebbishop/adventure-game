var Node = require('./node');

var Game = function() {

	this.nodes = {};
	this.startingPoint = null;

};

Game.prototype.addNode = function(title, text){
	if(this.hasNode(title)){
		throw new Error("Node already exists");
	}else{
		var newNode = new Node(title, text);
		this.nodes[title] = newNode;
		
		if(!this.startingPoint){
			this.startingPoint = newNode;
		}
	}
	return newNode;
}

// not currently in use??
Game.prototype.getNode = function(title) {
	return this.nodes[title];
}

Game.prototype.connect = function(currentNodeTitle, nextNode, condition){
	var currentNode = this.getNode(currentNodeTitle);
	currentNode.connect(nextNode, condition);
}

Game.prototype.hasNode = function(title) {
	for(var node in this.nodes){
		if (node === title){
			return true;
		}
	}
	return false;
}


module.exports = Game;
