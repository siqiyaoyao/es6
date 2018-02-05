// 默认值 default
/*
module.exports = (up=0,low =1)=>{
    return (up+low)/2
}

*/

module.exports = (val,len=val.length) =>{
    /*
    
   for (var i = 0; i < len; i++ ){
       val = val + '!';
   }
   */
  val = val + "!".repeat(len);
   return val;
}

