#### curry
pass in one of parameters
return a function that process the rest parameters

```javascript
let add = (x, y) => {
    return x + y;
}

let addEx = (x) => {
    return (y) => {
        return x + y;
    }
}

let addAdv = x => (y => x + y);

let add2 = addEx(2);
let add5 = addAdv(5);

```


```typescript
// traditional way
checkage(x: number, y: number): number {
    return x + y;
}

// usage case
let check18 = checkage(18);
let check25 = checkage(21);

// to achieve
checkage(min: number): Function {
    return (age: number): boolean => {
        return (age > min);
    }
}
```

https://zhuanlan.zhihu.com/p/21714695

事实上柯里化是一种“预加载”函数的方法，
通过传递较少的参数，得到一个已经记住了这些参数的新函数，
某种意义上讲，这是一种对参数的“缓存”，是一种非常高效的编写函数的方法：