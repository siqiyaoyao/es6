/*
let userArray = process.argv.slice(2);

let [,a,b] =userArray;
let o = {username:a,email:b} 

console.log(o);
*/
let input = process.argv.slice(2);

let results = {};

[,results.username,results.email] =input;
console.log(results);
