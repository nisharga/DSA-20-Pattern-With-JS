var isValid = function (s) {
  let stack = [];
  let map = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (char in map) {
      // Closing bracket
      if (stack.length === 0 || stack.pop() !== map[char]) return false;
    } else {
      stack.push(char); // Opening bracket
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("{[]}")); // true
