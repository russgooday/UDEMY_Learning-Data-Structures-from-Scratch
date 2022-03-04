const factorial = n =>
    n === 1 // base condition
        ? n
        : n * factorial(n - 1)

// Test

console.log(factorial(5)) // 120
