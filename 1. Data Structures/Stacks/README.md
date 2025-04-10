# Stacks

Stack is a LIFO structure.

**Why:** Useful in parsing, recursion, undo.
**When:** Need to reverse or backtrack.
**How:**

JavaScript:
```js
let stack = [];
stack.push(1);
stack.pop();
```

Java:
```java
Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.pop();
```

**Built-in Methods:**
- JS: push(), pop()
- Java: push(), pop(), peek()
