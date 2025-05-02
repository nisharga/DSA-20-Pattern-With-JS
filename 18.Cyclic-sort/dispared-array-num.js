function findDisappearedNumbers(nums) {
  let i = 0;

  // Cyclic sort
  while (i < nums.length) {
    const correctIndex = nums[i] - 1;

    if (nums[i] !== nums[correctIndex]) {
      // Swap the numbers
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  // Find all missing numbers
  const result = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      result.push(j + 1);
    }
  }

  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// Output: [5, 6]
