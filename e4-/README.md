## 概念
### 箭头函数的的 this

### 



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