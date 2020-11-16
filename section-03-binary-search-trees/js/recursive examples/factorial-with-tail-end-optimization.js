// With tail-end optimization

const factorial = (n, result = 1) => {
  console.log(`n=${n}, result=${result}`)

  return (n === 1)
    ? result
    : factorial(n - 1, n * result)
}

factorial(5)

/*
  Output:
  n=5, result=1
  n=4, result=5
  n=3, result=20
  n=2, result=60
  n=1, result=120
*/
