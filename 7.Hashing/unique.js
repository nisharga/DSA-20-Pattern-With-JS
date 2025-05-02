function firstUniqueChar(str) {
  let charCount = new Map(); // Hash map to store character frequency

  // Step 1: Count occurrences of each character
  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Step 2: Find the first unique character
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null; // If no unique character found
}

// Test Cases
console.log(firstUniqueChar("leetcode")); // Output: "l"
console.log(firstUniqueChar("loveleetcode")); // Output: "v"
console.log(firstUniqueChar("aabbcc")); // Output: null
