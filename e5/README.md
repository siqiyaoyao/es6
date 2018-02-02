## 概念

### 结构赋值 destructing
结构数组
用例：
``` javascript

var [a,b,c] =[1,2,3];
console.log(a,b,c); // 1 2 3 

var [a=7,b=8] =[1];
console.log(a,b); // 1 8 默认值，防止undefined

var [a,,c]=[1,2,3];
console.log(a,c); // 1 3  忽略某些返回值

var [a,...b]=[1,2,3];
console.log(a,b); // 1 [2,3] 将剩余数组赋值给一个变量

var e = 1, s= 5; 
[e,s]=[s,e];
console.log(e,s); // 5 1 交换变量

function foo(){
    return [3,4];
}
[a,b]= foo();
console.log(a,b); // 3 4  解析从函数返回的数组

// exec()正则表达式方法
var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"
```