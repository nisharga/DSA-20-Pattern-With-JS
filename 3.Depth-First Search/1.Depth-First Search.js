class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function dfsTree(root) {
    if (!root) return; // Base case

    console.log(root.value); // Process the current node
    dfsTree(root.left);  // Recursive call to left child
    dfsTree(root.right); // Recursive call to right child
}

// Example Tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

dfsTree(root); 
