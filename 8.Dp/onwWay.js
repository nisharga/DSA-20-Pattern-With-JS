// function climbStairs(n, memo = {}) {
//   if (n <= 2) return n;
//   if (n in memo) return memo[n];

//   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   return memo[n];
// }

// console.log(climbStairs(5)); // Output: 8

function climbStairs(n) {
  if (n <= 2) return n;

  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairs(5)); // Output: 8
