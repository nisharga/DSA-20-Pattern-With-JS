function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]); // Save current subset

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // Make choice
      backtrack(i + 1, path); // Explore
      path.pop(); // Undo choice (backtrack)
    }
  }
  backtrack(0, []);
  return result;
}
console.log(subsets([1, 2, 3]));
[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]];
