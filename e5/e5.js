var o = {a:1,b:2};
var {a,b} = o;
console.log(a,b); // 变量名需要对应，a, b 需要对应o里的a,b

({a,b} = {a:3,b:4}); //无声明赋值 没有（）则是无效的语法，在（）前需要有;否则会被当成上一行的函数
console.log(a,b) 

var o ={e:1,f:true};
var {e:foo,f:bar} =o;
console.log(foo,bar) // 给新的变量名赋值

console.log(e);