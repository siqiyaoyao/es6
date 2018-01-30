
var inputs = process.argv.slice(2); //

var results = inputs.map(per =>per[0]).reduce((pre,cur)=>pre+cur)
console.log(`[${inputs}] becomes "${results}"`);


