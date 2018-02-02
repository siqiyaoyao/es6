## 概念
### 箭头函数的的 this

### Js里的this 
实例化的对象中，this指的是对象本身；未实例化中，this指的是实际调用者的对象
无法在函数定义里确定，只有在执行是才能明确，最终指向的是调用它的对象。简单的说，如果函数之前没有. 直接执行 例如foo(),默认是window.foo(),那么this指向的是windows.如果foo()有指定调用对象，例如a.foo()那么this 指向的是a;
没有被赋值的情况下，this 指向的是最近的.的对象，即最近的上一级对象，
```javascript
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            this.a = 1;
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j =  o.b.fn(); // 12, b 
var b = o.b.fn;
b(); // undefined windows

var n = new o.b.fn(); // undefined fn{}
var m = new o.b.fn; // undefined fn{}
//m();

```
this指向的是window.因为它永远指向最后调用它的对象。
如果用new，则会指向实例。

改变this 指向的方法
bind() call() apply() call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加.
```javascript
var foot = {
     kick:function(){
         this.yelp = "Ouch!";
         setImmediate(function(){
            console.log(this);// Immediate{}
             console.log(this.yelp); // undefined
         },1)
         
         setImmediate(function(){
            console.log(this); //object{}
             console.log(this.yelp);
         }.bind(this),2); //  Ouch!
         
         var that = this;
         setImmediate(function(){
             console.log(that.yelp); // Ouch!
         },3)
                
       
     },


 } 
foot.kick();

```
### 箭头函数里的this 
this是继承而来，默认指向在定义它时所处的对象，而不是执行对象
箭头函数内部的this是词法作用域，由上下文确定。this总是指向词法作用域，也就是外层调用者obj：

```javascript
 var foot ={
     size:40,
     getSize:function(){
         var a = this.size;
         console.log(a); // 40
         var foo =function(){
            console.log(this); // global window
             console.log(this.size); // undefined
             console.log(this.a); // undefined
             return this.size;
         }
         return foo();
     }
 }
foot.getSize();

var footAr ={
    size:40,
    getSize:function(){
        var a = this.size;
        console.log(a); // 40
        var foo = ()=>{
            console.log(this); // object footAr
            console.log(this.size); //40 
            console.log(this.a); // undefined
            return this.size;
        }
        return foo();
    }
}
footAr.getSize();
```
用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：
## 复习
### 定时器
Js
主要有一次性执行的setTimeout()，和反复执行的setInterval()
产生原因
主线程运行的时候产生堆（heap）和栈（stack）,栈里的代码执行后会将回调函数放入任务队列。
执行栈（同步任务）先执行然后，再执行任务队列（异步任务）的回调函数。定时事件也放置在任务队列中，指定某些代码在一定时间后执行，叫做定时器（timer）。

setTimeout(callback(),time) 回调函数，毫秒数，如果time为0的话，执行栈清空以后立即执行。 是在任务队列的尾部添加事件
```javascript
    setTimeout(console.log(1),0);
    console.log(2);

    //2
    //1

```
结果是2,1 因为执行栈里的任务完成后才会去执行setTimeout();
一般时间不会等于time的值，因为等待执行栈的任务完成，才会开始计算time，因此会和指定的时间不同。

node
process.nextTick(),在执行栈尾部触发函数，发生在任务队列里的异步任务之前。
```javascript
    process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B(){console.log(2);});
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0)
// 1
// 2
// TIMEOUT FIRED

```
setImmediate()，在当前任务队列的尾部添加事件，类似setTimeout()