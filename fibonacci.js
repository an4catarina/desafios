function isNumFibonacci(num) {
  let a = 0, b = 1, temp;
  while (b <= num) {
      if (b === num) {
          console.log(`${num} pertence à sequência de Fibonacci.`);
          return;
      }
      temp = a + b;
      a = b;
      b = temp;
  }
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}

isNumFibonacci(13);