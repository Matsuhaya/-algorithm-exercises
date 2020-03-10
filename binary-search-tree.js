class Node {
  constructor(left, data, right) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}

const binarySearch = (root, key) => {
  let cur = root;
  while (cur !== -1 && key !== tree[cur].data) {
    if (tree[cur].data > key) {
      cur = tree[cur].left;
    } else {
      cur = tree[cur].right;
    }
  }

  if (cur === -1) {
    return 0;
  } else {
    return 1;
  }
};

const tree = [];
tree.push(new Node(1, 15, 3));
tree.push(new Node(2, 7, -1));
tree.push(new Node(-1, 5, -1));
tree.push(new Node(5, 25, 4));
tree.push(new Node(-1, 28, -1));
tree.push(new Node(-1, 17, -1));

console.log(binarySearch(0, 17));
