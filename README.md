JavaScript ES7 "async/await" Demo
=================================

ES7原来和ES2016是一个规范。

在这个规范里，增加了`async/await`关键字，从语法层面上增强了`promise`，让我们不再需要写那么多的`then`，让Promise更好用，从而更大程度的解决了JavaScript的回调地狱问题。

使用`async`和`await`这两个关键字，在语法层面上，把“异步代码”变成了“同步代码”。

```
npm install
npm run demo
```

It will print:

```
will calculate: 1 + 2
result: 3
```

注意：`result: 3`这一行是在前一行显示3秒后才显示的。