function fib(n, memo = {}) {
  if (n <= 1) return n; // Base case
  if (n in memo) return memo[n]; // Return memoized value

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // Store result
  return memo[n];
}

console.log(fib(10)); // Output: 55
