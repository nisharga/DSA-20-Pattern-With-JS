function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    const correctIndex = arr[i] - 1; // The correct index for arr[i]

    // If arr[i] is not at the correct index, swap it with the correct index
    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]; // Swap
    } else {
      i++; // Move to the next element if it's in the correct position
    }
  }
  return arr;
}

// Example
const arr = [3, 1, 5, 4, 2];
console.log(cyclicSort(arr)); // Output: [1, 2, 3, 4, 5]
