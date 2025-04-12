# 🛠️ Heaps

## 🔍 What is a Heap?

A **Heap** is a special tree-based data structure that satisfies the **heap property**. There are two main types of heaps:

- **Max Heap**: The key at the root is greater than or equal to the keys of its children, and the same property must be recursively true for all nodes in the binary tree.
- **Min Heap**: The key at the root is less than or equal to the keys of its children, and the same property must be recursively true for all nodes in the binary tree.

---

## 🧠 Heap Characteristics

- **Binary Tree Structure**
- **Complete Binary Tree**: Every level is fully filled, except possibly the last level, which is filled from left to right.
- **Max Heap**: Parent nodes are greater than or equal to child nodes.
- **Min Heap**: Parent nodes are less than or equal to child nodes.
- **Efficient Access to Max/Min**: Max or Min is always at the root of the heap.
- **Not a Sorted Tree**: Heap is not sorted like binary search trees, but it maintains the heap property.

---

## ⏱️ Time Complexity

| Operation       | Time Complexity   |
|-----------------|-------------------|
| Insert          | O(log n)          |
| Extract Min/Max | O(log n)          |
| Peek            | O(1)              |
| Delete          | O(log n)          |
| Search          | O(n)              |

---

## 🔪 JavaScript Heap Implementation Using `Array`

In JavaScript, we typically use a dynamic array to implement a heap.

### Max Heap Example:

```js
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // ✅ Insert a value into the heap
  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  // ✅ Extract the max value from the heap
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return max;
  }

  // ✅ Peek at the max value without removing it
  peek() {
    return this.heap[0];
  }

  // ✅ Private method to maintain the heap property while inserting
  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;

      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  // ✅ Private method to maintain the heap property while removing
  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}

// Example Usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
console.log(maxHeap.peek()); // 20
console.log(maxHeap.extractMax()); // 20
console.log(maxHeap.peek()); // 10
```
---

## 🔪 Java Heap Implementation Using `PriorityQueue`

In Java, the `PriorityQueue` class can be used to implement a heap. The `PriorityQueue` in Java is a Min Heap by default, but you can implement a Max Heap by using a comparator.

### Max Heap Example in Java:

```java
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        // Max Heap using a comparator
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        // ✅ Insert values into the heap
        maxHeap.add(10);
        maxHeap.add(20);
        maxHeap.add(5);

        // ✅ Peek at the max value
        System.out.println("Max value: " + maxHeap.peek()); // 20

        // ✅ Extract the max value
        System.out.println("Extracted max: " + maxHeap.poll()); // 20

        // ✅ Peek again after extraction
        System.out.println("Max value: " + maxHeap.peek()); // 10
    }
}


