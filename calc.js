const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');

	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	switch (mathSymbol) {
		case "+":
			console.log(num1 + num2)
			break;
		case "-":
			console.log(num1 - num2)
			break;
		case "*":
			console.log(num1 * num2)
			break;
		case "/":
			console.log(num1 / num2)
			break;
		case "√":
			if(!num2){
				//find square root of a number
				console.log(Math.sqrt(num1))
			}else{
				//find hypotenuse
				console.log( Math.sqrt( (num1 * num1) + ( num2 * num2 ) ) )
			}
			break;
	
		default:
			console.log("Sorry unknonw Symbol if you meant a + b do + a b")
			break;
	}
	
	// This line closes the connection to the command line interface.
	reader.close()

});
