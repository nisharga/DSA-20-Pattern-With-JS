function findMin(arr, left, right) {
  // Base Case: Only one element
  if (left === right) {
    return arr[left];
  }

  // Divide
  const mid = Math.floor((left + right) / 2);

  // Conquer
  const minLeft = findMin(arr, left, mid);
  const minRight = findMin(arr, mid + 1, right);

  // Combine
  return Math.min(minLeft, minRight);
}
// Example usage:
const numbers = [7, 2, 5, 1, 9, 3];
console.log(findMin(numbers, 0, numbers.length - 1)); // Output: 1
