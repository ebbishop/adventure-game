var inquirer = require('inquirer');

var game = require('./game.source');

var questions = [];

function createQuestions () {
	for( var nodeName in game.nodes){
		questions.push({
					type: 'list',
					name: game.nodes[nodeName].title,
					message: game.nodes[nodeName].text,
					choices: game.nodes[nodeName].getConnectionStrings()
				});
		
	}
}

createQuestions();
// console.log(questions);
inquirer.prompt(questions, function(answers){
	// if(answers.name)
	console.log('These are some answers', answers);
});


/*

This file has no test specs. It might be a tricky one. You need to look at 
the docs for the inquirer npm package, and see if you can figure out how 
to make the game run!

If you're running out of time, check out our solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/
