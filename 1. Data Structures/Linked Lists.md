# Linked Lists

Linked lists are linear data structures with nodes pointing to the next.

**Why:** Efficient insertions/deletions.
**When:** Frequent add/remove operations.
**How:**

JavaScript:
```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

Java:
```java
class Node {
  int val;
  Node next;
  Node(int val) { this.val = val; }
}
```

**Built-in Methods:**
- JS: Manual
- Java: LinkedList<E>
