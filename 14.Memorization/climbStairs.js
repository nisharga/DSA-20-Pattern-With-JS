var climbStairs = function (n, memo = {}) {
  if (n <= 2) return n; // base cases: 1 → 1 way, 2 → 2 ways

  if (n in memo) return memo[n]; // check memo

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo); // calculate and store
  return memo[n];
};
