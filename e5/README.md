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


// objects
var o = {a:1,b:2};
var {a,b} = o;
console.log(a,b); // 变量名需要对应，a, b 需要对应o里的a,b

({a,b} = {a:3,b:4}); //无声明赋值 没有（）则是无效的语法，在（）前需要有;否则会被当成上一行的函数
console.log(a,b) 

var o ={e:1,f:true};
var {e:foo,f:bar} =o;
console.log(foo,bar) // 给新的变量名赋值

console.log(e); // error 未定义，应为e: foo被赋值，
```

### 扩展（spread）与剩余（rest）

spread 是将数组里的元素展开成多个独立变量，
```javascript
//将数组展开成函数的多个参数

var foo =function (a,b,c){
    console.log(a+b+c);
}

var arr =[1,2,3];
foo(...arr); // 6
// 合并数组
let o1 = {a:1,b:2};
let o2 ={a:3,c:{e:4,f:5}};
let o3 = {...o1,...o2};

console.log(o3);// a:3 b:4 c:object 相同变量名，值会被后来的替代
``` 
类数组对象，其property名为正整数，且其length属性会随着数组成员的增减而发生变化，同时又从array构造函数中继承了一些用于进行数组操作的方法。例如doucument.getElementsByTagName()、document.querySelectorAll('div')语句返回的就是一个类数组对象
```javascript
//类数组对象转数组
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];

var str = 'imastring'
var arr = [...str];
console.log(arr);// Array(9) ["i", "m", "a", "s", "t", "r", "i","n","g"]
```
剩余rest 

```javascript
const [x,...y] = ['a', 'b', 'c']; // x='a' y=['b','c']

function sum(...inputs){
    var results = 0;
    inputs.forEach(function (value){
        results += value;
    })

    return results;
}

console.log(sum(1,2,3));// 6

```
数组深拷贝
``` javascript
    // shallow copy
    var arr = [2,3,4];
    var arr2 = arr;
    console.log(arr===arr2); // true
    console.log(arr,arr2);// arr = 2 3 4 arr2 = 2 3 4
    arr2[0] = 0;
    console.log(arr,arr2);// arr = 0 3 4 arr2 = 0 3 4 
    // deep copy
    var arr3= [...arr];
    console.log(arr===arr3);// false
    console.log(arr,arr3); // arr = 0 3 4 arr3 = 0 3 4 
    arr3[0] = 1;
    console.log(arr,arr3); // arr = 0 3 4 arr2 = 1 3 4 
```

rest 剩余


## 复习
### 深拷贝（deep copy)和浅拷贝(shallow copy)
深拷贝：创建一个新的地址，将原对象的所有属性复制放入新的地址中，改变新对象属性并不会影响到原对象。内容拷贝

浅拷贝：复制地址，改变拷贝对象的属性会影响到原对象。指针拷贝