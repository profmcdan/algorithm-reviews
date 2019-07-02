// fibonacci
const fibN = (n, memo) => {
  memo = memo || {};
  if (n < 2) return n;
  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibN(n - 1, memo) + fibN(n - 2, memo);
    return memo[n];
  }
};

const fib = n => {
  if (n < 2) return n;
  else {
    return fib(n - 1) + fib(n - 2);
  }
};
//
// console.log(fibN(100));

// GCD
const gcd = (a, b) => {
  let r;
  while (a % b > 0) {
    r = a % b;
    [a, b] = [b, r];
  }
  return b;
};

const gcdRecursion = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdRecursion(b, a % b);
};

// console.log(gcdRecursion(1220, 15));

// Sieve of Eratosthesnes (Prime number list)
const sieveOfEratosthenes = N => {
  const isPrime = Array(N + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];
  for (let num = 2; num <= N; num++) {
    if (isPrime[num] === true) {
      primes.push(num);
    }
    let nextNumber = num * num;
    while (nextNumber <= N) {
      isPrime[nextNumber] = false;
      nextNumber += num;
    }
  }
  return primes;
};

// console.log(sieveOfEratosthenes(50));

// Generate nth row of pascal triangle
const pascal = n => {
  const generateNextRow = lastRow => {
    let nextRow = [1];
    for (let i = 0; i < lastRow.length - 1; i++) {
      nextRow.push(lastRow[i] + lastRow[i + 1]);
    }
    nextRow.push(1);
    return nextRow;
  };
  if (n === 0) {
    return [1];
  }
  return generateNextRow(pascal(n - 1));
};

console.log(pascal(5));
