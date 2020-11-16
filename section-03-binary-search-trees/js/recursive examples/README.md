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
<br>
### 1. Call stack during calling phase
<img
  src='../../../images/factorial-stage-01.png'
  alt='factorial during calling stage'
  width='400'
/>
<br>
### 2. Call stack during return phase
<img
  src='../../../images/factorial-stage-02.png'
  alt='factorial during return stage'
  width='400'
/>
