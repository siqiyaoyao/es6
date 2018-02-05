var inputs = process.argv.slice(2);
//console.log(inputs)
var min = Math.min(...inputs);

console.log("The minimum of ["+inputs+"] is " +min);