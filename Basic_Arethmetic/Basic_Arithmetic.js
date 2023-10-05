// Create a formula to provide the age of a dog into a humans relative age
// Allow for a prompt and use the given formula ((dogAge - 2) * 4 + 21)

var dogAge = prompt("How Old Is Your Dog?")
var humanAge = ((dogAge - 2) * 4) + 21;

alert(humanAge);