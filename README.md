## 概念
### 模板字符串 Template String
是增强版的字符串，用反引号`标识，可以当成普通字符串，也可以用来定义多含字符串，或者在字符串中嵌入变量。

特性：
多行使用,所有空格、缩进和换行都会被保留在输出中，模板内可以嵌套，如果需要表示`符号则需要反斜杠\转义

```javascript
var a =`In JavaScript this is
        not legal.`
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);
```
可以嵌入变量，将变量名写在${}之中，大括号内可以放入任意的JavaScript表达式运算以及引入对象属性，以及调用函数.如果大括号内的值不是字符串，则默认按一般规则转换为字符串。变量如果没有申明，会报错。
```javascript
var name = "Bob", time = "today";
var a = `Hello ${name}, how are you ${time}?`// Hello Bob, how are you today?

function foo(){
    return 'hello';
}
`${foo()} world`// hello world
```
### 箭头函数 Arrow Function
永远是匿名函数，This指向其生成的对象
语法：
（输入对象）=>{函数内容}
如果函数内容只有return 语句，可以省略{}
省略function 和return 
注意： 
```javascript
// 普通函数
var foo= function (a,b){
    return a+b ;
}
var foo = (a,b) => a+b; 
// 立即调用函数IIFE
(function(a,b){
    var sum = a+b;
    console.log(this); // global 调用该函数的对象
    return console.log('es5'+ sum);
})(1,2);

((a,b)=> {
    var sum = a+b;
    console.log(this); //object this生成所在的对象
    console.log('es6'+ sum)
})(3,4);
```

## 复习
### process.argv 返回的数组对象

### arr的常用函数
- .slice(start,end) 从已有的数组中返回选定的元素
start 必须，开始选取，如果是负数，则是从尾部开始算起。-1为倒数第一个开始
end 可选，结束选取，如果没有，则到数组结束，如果负数，则是尾部开始。

- .map() 为数组中的每一个元素一次执行回调函数，返回一个新数组，新数组中的每一个元素为原始数组元素调用函数处理后的值，不可对空数组进行检测，不会改变原始数组

```javascript
var inputs = ['a1','b2','c3'];
var results = inputs.map(per =>per[0]);
console.log(results); //array ['a','b','c']
```
- .reduce() 为数组中的每一个元素一次执行回调函数，不包括数组中被删除，或从未被赋值的元素， 函数累加器
回调函数里的4个参数
  previousValue：上一次调用回调返回的值，或者是提供的初始值（initialValue）
  currentValue：数组中当前被处理的元素
  index ：当前元素在数组中的索引
  array ：调用 reduce 的数组
```javascript
var inputs = ['a1','b2','c3'];
var results = inputs.reduce((pre,cur)=>pre+cur)
console.log(results);// string 'a1b2c3'
```
