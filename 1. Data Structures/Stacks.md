# 🥞 Stacks

## 🔍 What Is a Stack?

A **Stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. The last element added to the stack is the first one to be removed. 
**Why:** Useful in parsing, recursion, undo. 
**When:** Need to reverse or backtrack.

---

## 🧠 Stack Characteristics

- **LIFO Order**
- **Push**: Add item to top
- **Pop**: Remove item from top
- **Peek/Top**: View the top item without removing it
- **isEmpty**: Check if the stack is empty

---

## ⏱️ Time Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | O(1)            |
| Pop       | O(1)            |
| Peek      | O(1)            |
| isEmpty   | O(1)            |

---

## 🔪 JavaScript Stack Implementation Using Array

```js
const stack = [];

// ✅ Push
stack.push(10);
stack.push(20);

// ✅ Pop
stack.pop(); // 20

// ✅ Peek
console.log(stack[stack.length - 1]); // 10

// ✅ isEmpty
console.log(stack.length === 0); // false

// ✅ Size
console.log(stack.length); // 1
```

---

## 🔪 Java Stack Examples Using `Stack` Class

```java
import java.util.Stack;

public class Main {
  public static void main(String[] args) {
    Stack<Integer> stack = new Stack<>();

    // ✅ Push
    stack.push(10);
    stack.push(20);

    // ✅ Pop
    System.out.println(stack.pop()); // 20

    // ✅ Peek
    System.out.println(stack.peek()); // 10

    // ✅ isEmpty
    System.out.println(stack.isEmpty()); // false

    // ✅ Size
    System.out.println(stack.size()); // 1
  }
}
```

---

## 📜 Common Methods

### JavaScript: Array as Stack

| Method         | Description             | Example            |
| -------------- | ----------------------- | ------------------ |
| push(val)      | Add to top              | stack.push(10)     |
| pop()          | Remove from top         | stack.pop()        |
| stack[length-1]| Peek at top             | stack[stack.length - 1] |
| length         | Get stack size          | stack.length       |

### Java: Stack Class

| Method      | Description         | Example             |
| ----------- | ------------------- | ------------------- |
| push(val)   | Add item to top     | stack.push(10)      |
| pop()       | Remove item from top| stack.pop()         |
| peek()      | Get item on top     | stack.peek()        |
| isEmpty()   | Check if empty      | stack.isEmpty()     |
| size()      | Get size of stack   | stack.size()        |

---

## 💡 Real-World Use Cases of Stacks

1. **Undo/Redo Functionality** in editors
2. **Backtracking Algorithms** (e.g., maze, recursion)
3. **Browser History** navigation
4. **Expression Evaluation** (e.g., infix to postfix)
5. **Function Call Stack** in programming
6. **Syntax Parsing** (e.g., HTML, parentheses matching)
7. **DFS in Graph Traversal**
8. **Balanced Parentheses Check**

---

## 🧠 Stack Interview Tips

1. Clarify if you need to implement a **custom stack** or use built-ins.
2. Watch out for **stack overflow** (usually in recursion).
3. Practice with classic problems like:
   - Valid Parentheses
   - Min Stack
   - Evaluate Reverse Polish Notation
   - Next Greater Element
4. Consider when to use **Deque** for more efficient two-end operations.
5. In Java, `Stack` is synchronized. For better performance in single-threaded contexts, consider using `Deque` as a stack.
6. Understand stack behavior in **recursive calls**.

---

## 🔄 Stack vs Queue

| Feature        | Stack (LIFO)        | Queue (FIFO)        |
|----------------|---------------------|---------------------|
| Insertion      | Top                 | Rear                |
| Deletion       | Top                 | Front               |
| Use Case       | Undo, recursion     | Task scheduling     |
| Built-in (JS)  | Array               | Array               |
| Built-in (Java)| Stack               | Queue / LinkedList  |

