## Recursion

### Factorial example

```js
const factorial = n =>
  n === 1 // base condition
    ? n
    : n * factorial(n - 1)

// Test

console.log(factorial(5)) // 120
```
 
### 1. Call stack during calling phase
<img
  src='https://github.com/russgooday/UDEMY_Learning-Data-Structures-from-Scratch/blob/master/images/factorial-stage-01.png'
  alt='factorial during calling stage'
  width='400'
/>
 
### 2. Call stack during return phase
<img
  src='https://github.com/russgooday/UDEMY_Learning-Data-Structures-from-Scratch/blob/master/images/factorial-stage-02.png'
  alt='factorial during return stage'
  width='400'
/>
