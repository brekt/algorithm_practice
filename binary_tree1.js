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
	/** Add a node.
	 * @param {number} value - the number to add to the tree.
	 *
	 */
	add(value) {
		if (!this.root) {
			this.root = new Node(value);
			return;
		}
		let current = this.root;
		let newNode = new Node(value);
		while (true) {
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return;
				}
				current = current.right;
			}
		}
	}
}

let myNode = new Node();

console.log(myNode);
