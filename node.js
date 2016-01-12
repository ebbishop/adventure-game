// Node
//     ✓ adopts title and text from constructor parameters
//     ✓ starts with an empty connections array
//     connections
//       13) "before all" hook for "starts with an empty connections array"
//     helpers
//       getConnectionStrings
//         ✓ returns an array of strings from the connection conditions
//       hasConnectionCondition
//         15) determines when the condition has been regestered


var Connection = require('./connection');

var Node = function(title, text) {
	// takes arguments: identifier/name, display/flavor text
	this.title = title;
	this.text = text;
	this.connections = [];
};

Node.prototype.hasConnectionCondition = function(condition) {
	for(var i in this.connections){
		if (this.connections[i].condition === condition){
			return this.connections[i];
		}
	}
	return false;
}

Node.prototype.connect = function(nextNode, condition) {
	if (this.hasConnectionCondition(condition)) {
		throw new Error("Condition exists");
	} else {
		var connection = new Connection(nextNode,condition);
		this.connections.push(connection);
	}
}

Node.prototype.route = function(input) {
	var connection = this.hasConnectionCondition(input);
	if(connection) {
		return connection.nextNode;
	}
	return undefined;
}

Node.prototype.getConnectionStrings = function() {
	// returns an array of strings from the connection conditions
	var arr = [];
	for (var i in this.connections){
		arr.push(this.connections[i].condition)
	}
	return arr;
}

module.exports = Node;
