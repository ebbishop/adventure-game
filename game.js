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

Game.prototype.getNode = function(title) {
	return this.nodes[title];
}

Game.prototype.connect = function(nextNode, condition){
	this.startingPoint.connect(nextNode, condition)
	//this.startingPoint
	//<some node>>.connect()
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
