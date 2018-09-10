TypeScript NodeJS "fs" Async/Await Demo
=======================================

如何对NodeJS的`fs`中的方法使用`async/await`关键字。

关键在于需要手动把它们包装成`promisify`函数把相关的方法进行转换，还有点麻烦。

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