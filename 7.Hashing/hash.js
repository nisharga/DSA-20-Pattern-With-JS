function containsDuplicate(nums) {
  let hashSet = new Set(); // Hashing using Set

  for (let num of nums) {
    if (hashSet.has(num)) return true;
    hashSet.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
