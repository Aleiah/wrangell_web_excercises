// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement
// to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output
// all the odd numbers
// between 1 and 50, except for the number the user enter


var input = prompt("Here is an odd number: ");

for(var i = 1; i <= 50; i+=3) {
    console.log(i);
}

