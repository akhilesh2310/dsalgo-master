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
```
---

Common Queue Methods
JavaScript Queue Methods
Method	Description	Example
enqueue(element)	Add element to the queue	queue.enqueue(10)
dequeue()	Remove and return the front element	queue.dequeue()
peek()	View the front element	queue.peek()
isEmpty()	Check if the queue is empty	queue.isEmpty()
size()	Get the size of the queue	queue.size()
clear()	Remove all elements	queue.clear()
Java Queue Methods
Method	Description	Example
add(element)	Add element to the queue	queue.add(10)
poll()	Remove and return the front element	queue.poll()
peek()	View the front element	queue.peek()
isEmpty()	Check if the queue is empty	queue.isEmpty()
size()	Get the size of the queue	queue.size()
Real-World Use Cases of Queues
Task Scheduling: Executing tasks in the order they arrive (e.g., print jobs, process scheduling).

Data Buffering: Buffers like network streams, video/audio streaming use queues to manage data.

Breadth-First Search (BFS): Used in graph traversal to explore nodes level by level.

Simulation Systems: Queueing systems for customers in service-based industries (banks, restaurants).

Event Handling: Managing events in GUI or game loops, such as processing user input in order.

Types of Queues
1. Circular Queue
A Circular Queue is a queue where the last element is connected to the first one. This is useful for managing a fixed-size buffer, preventing the queue from becoming too full. The rear and front pointers wrap around to the beginning when they reach the end.

2. Priority Queue
In a Priority Queue, elements are dequeued based on priority, not on the order they were enqueued. Higher priority elements are dequeued before lower priority ones. This is often implemented using a heap data structure.

3. Double-Ended Queue (Deque)
A Deque allows insertion and removal of elements from both ends, making it more flexible than a standard queue. Operations like enqueue and dequeue can happen at both the front and rear ends.

When to Use a Queue?
Task Scheduling: When tasks need to be processed in the order they were received.

Data Processing Pipelines: To handle data elements in a stream-like fashion, e.g., network data.

Buffer Management: For managing resources that can be used by one process at a time.

BFS Traversal: For exploring nodes level by level in graphs or trees.

Queue vs Stack vs HashMap
Feature	Queue	Stack	HashMap
Order	FIFO	LIFO	Unordered
Operations	Enqueue, Dequeue, Peek, IsEmpty	Push, Pop, Peek, IsEmpty	Set, Get, ContainsKey, Delete
Use Case	Task scheduling, buffering, BFS	Undo operations, backtracking	Fast key-value lookups, caching
Time Complexity	O(1) for Enqueue and Dequeue	O(1) for Push and Pop	O(1) for Get, Put, Remove



