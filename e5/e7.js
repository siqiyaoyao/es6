/*
module.exports = function average(...inputs){
    var mean = 0;
    var sum = 0;
    inputs.forEach(function(val){
        sum += val;
       
    })
    mean = sum/inputs.length;
    return mean;
};
*/
module.exports = (...inputs)=>{
    var sum = inputs.reduce((pre,next)=>pre+next,0);
    return sum/inputs.length;
}