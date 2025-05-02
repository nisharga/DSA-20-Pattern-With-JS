var sortArray = function (arr) {
  // Base case: If array has 0 or 1 elements, its already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide: Find the middle index
  const mid = Math.floor(arr.length / 2);

  // Split the array into two halves
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Conquer: Recursively sort each half
  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  // Combine: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
};

// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and add the smaller one to the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from the left or right array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Example usage:
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // Output: [1, 2, 3, 5]
