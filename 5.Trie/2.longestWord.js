class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  isBuiltFromOtherWords(word) {
    let node = this.root;
    for (let char of word) {
      node = node.children[char];
      if (!node.isEndOfWord) return false;
    }
    return true;
  }
}

function longestWord(words) {
  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  let longest = "";
  for (let word of words) {
    if (trie.isBuiltFromOtherWords(word)) {
      if (
        word.length > longest.length ||
        (word.length === longest.length && word < longest)
      ) {
        longest = word;
      }
    }
  }
  return longest;
}

// Test Cases
console.log(longestWord(["w", "wo", "wor", "word", "world", "war", "was"])); // Output: "world"
console.log(longestWord(["a", "banana", "app", "ap", "apply", "apple"])); // Output: "apple"
