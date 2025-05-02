function fib(n, memo = {}) {
  if (n <= 1) return n;

  if (n in memo) return memo[n]; // 🔥 Return cached answer

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // 🔥 Save and compute
  return memo[n];
}
console.log(fib(10)); // 55
