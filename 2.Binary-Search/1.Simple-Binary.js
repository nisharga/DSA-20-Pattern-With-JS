function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3 (index of 7)
console.log(binarySearch([1, 3, 5, 7, 9, 11], 11)); // Output: 5 (index of 11)
console.log(binarySearch([1, 3, 5, 7, 9, 11], 6)); // Output: -1 (6 is not in the array)
