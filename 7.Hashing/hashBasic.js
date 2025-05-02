class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    const hash = this._hash(key);
    if (!this.map[hash]) {
      this.map[hash] = {};
    }
    this.map[hash][key] = value;
  }

  get(key) {
    const hash = this._hash(key);
    return this.map[hash] ? this.map[hash][key] : undefined;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0; // Convert to 32-bit integer
    }
    return hash;
  }
}

// Example usage:
const hashMap = new HashMap();
hashMap.put("foo", 1);
hashMap.put("bar", 2);

console.log(hashMap.get("foo")); // Output: 1
console.log(hashMap.get("bar")); // Output: 2
console.log(hashMap.get("baz")); // Output: undefined
