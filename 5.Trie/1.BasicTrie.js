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

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  // Function to get suggestions for a given prefix
  suggestWords(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return []; // If prefix is not found
      node = node.children[char];
    }

    let results = [];
    this._dfs(node, prefix, results);
    return results;
  }

  // Depth-First Search (DFS) to collect words
  _dfs(node, prefix, results) {
    if (node.isEndOfWord) {
      console.log("Found word:", prefix);
      results.push(prefix);
    }

    for (let char in node.children) {
      console.log("Traversing:", prefix + char);
      this._dfs(node.children[char], prefix + char, results);
    }
  }
}

// Test Cases
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apex");
trie.insert("bat");

console.log(trie.suggestWords("ap")); // ["apple", "app", "apex"]
console.log(trie.suggestWords("b")); // ["bat"]
console.log(trie.suggestWords("z")); // []
