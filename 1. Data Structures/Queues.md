# 🥞 Queue

## 🔍 What Is a Queue?

A **Queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. The first element added to the queue will be the first one to be removed. Queues are used when you need to manage objects in the order they were added, such as in task scheduling, print job handling, and data buffering.

---

## 🧠 Queue Characteristics

- **FIFO Order**: The first element inserted is the first one to be removed.
- **Two Ends**: 
  - **Enqueue (rear)**: Insert elements at the end.
  - **Dequeue (front)**: Remove elements from the front.
- **Dynamic Size**: The size of the queue can grow and shrink dynamically.
- **Fixed/Variable Size**: Can be implemented as a fixed-size (circular queue) or a dynamic-size queue.

---

## ⏱️ Time Complexity

| Operation    | Time Complexity |
| ------------ | --------------- |
| Enqueue      | O(1)            |
| Dequeue      | O(1)            |
| Peek         | O(1)            |
| IsEmpty      | O(1)            |

---

## 🔪 JavaScript Queue Implementation Using `Array`

In JavaScript, the **Queue** can be implemented using the native `Array` object. However, be mindful that `Array.shift()` (for dequeue) has O(n) complexity, which can be inefficient for large queues. For better performance, consider using other data structures or libraries.

```js
class Queue {
  constructor() {
    this.items = [];
  }

  // ✅ Enqueue: Add an item to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // ✅ Dequeue: Remove an item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift(); // Removes the front element
  }

  // ✅ Peek: View the front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // ✅ IsEmpty: Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // ✅ Size: Get the size of the queue
  size() {
    return this.items.length;
  }

  // ✅ Clear: Remove all elements
  clear() {
    this.items = [];
  }
}

const queue = new Queue();

// ✅ Enqueue elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// ✅ Dequeue elements
console.log(queue.dequeue()); // 10

// ✅ Peek the front element
console.log(queue.peek()); // 20

// ✅ Size of the queue
console.log(queue.size()); // 2

// ✅ Check if the queue is empty
console.log(queue.isEmpty()); // false
```
---

## Java Queue Implementation Using LinkedList

In Java, a queue can be implemented using the **LinkedList** class, which supports both `enqueue` and `dequeue` operations in constant time (O(1)).

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
  public static void main(String[] args) {
    Queue<Integer> queue = new LinkedList<>();

    // ✅ Enqueue elements
    queue.add(10);
    queue.add(20);
    queue.add(30);

    // ✅ Dequeue elements
    System.out.println(queue.poll()); // 10

    // ✅ Peek the front element
    System.out.println(queue.peek()); // 20

    // ✅ Size of the queue
    System.out.println(queue.size()); // 2

    // ✅ Check if the queue is empty
    System.out.println(queue.isEmpty()); // false
  }
}

