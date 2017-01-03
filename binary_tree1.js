/** Class to create a node for a binary tree. */
class Node {
	/**
	 * Create a node.
	 * @param {number} value - the value of the node.
	 *
	 */
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

/** Class to create a binary search tree. */
class BST {
	/**
	 * Creates a binary search tree.
	 *
	 */
	constructor() {
		this.root = null;
	}
	/** Add a node.
	 * @param {number} value - the number to add to the tree.
	 *
	 */
	insert(value) {
		if (value === null || value === undefined) {
			return;
		}
		if (this.root === null) {
			this.root = new Node(value);
			return;
		}
		let current = this.root;
		let newNode = new Node(value);
		while (true) {
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return;
				}
				current = current.right;
			}
		}
	}
	/** Add a node.
	 * @param {Object} current - the parent node being searched
	 * @param {number} value - the number to add to the tree
	 * @return {Object}
	 */
	removeNode(current, value) {
		if (value === null || value === undefined) {
			return;
		}
		if (value === current.data) {
			if (current.left === null && current.right === null) {
				return null;
			} else if (current.left === null) {
					return current.right;
			} else if (current.right === null) {
					return current.left;
			} else {
				let tempNode = kthSmallestNode(current.right);
				current.data = tempNode.data;
				current.right = removeNode(current.right, tempNode.data);
				return current;
			}
		} else if (value < current.data) {
			current.left = removeNode(current.left, value);
			return current;
		}	else {
			current.right = removeNode(current.right, value);
			return current;
		}
	}
	/** Find the kth smallest node.
	 * @param {Object} node - the node to look to the left of.
	 * @return {Object}
	 */
	kthSmallestNode(node) {
		while (!(node.left === null)) {
			node = node.left;
		}
		return node;
	}
}


// just to silence the linter for now
let newNode = new Node();
let newBST = new BST();

console.log(newNode, newBST);
