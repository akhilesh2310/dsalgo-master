# Trees

Hierarchical structure.

**Why:** Organize hierarchical data.
**When:** Parent-child relationships.
**How:**

JavaScript:
```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

Java:
```java
class TreeNode {
  int val;
  TreeNode left, right;
  TreeNode(int x) { val = x; }
}
```

**Built-in Methods:** Manual
