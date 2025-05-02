class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let level = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // Remove first node
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// Creating the example tree
let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

console.log(levelOrderTraversal(root));
