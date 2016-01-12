  //   1) adopts nextNode and condition from constructor parameters
  //   2) tests true when the connection has no condition
  //   3) tests true when the input matches the condition
  //   4) tests false when the input does not match the condition


var Connection = function(nextNode, condition) {
	this.nextNode = nextNode;
	this.condition = condition;
};


Connection.prototype.test = function(input) {
	if (!this.condition || this.condition === input) {
		return true;
	}else{
		return false;
	}
};

module.exports = Connection;
