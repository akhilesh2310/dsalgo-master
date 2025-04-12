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
```
---

## 📜 Common Heap Methods

### JavaScript: Max Heap Implementation

| Method         | Description                            | Example                      |
|----------------|----------------------------------------|------------------------------|
| insert(value)  | Add value to the heap                  | heap.insert(10)              |
| extractMax()   | Remove and return the max value        | heap.extractMax()            |
| peek()         | Return the max value without removing  | heap.peek()                  |

### Java: `PriorityQueue` Class

| Method          | Description                             | Example                          |
|-----------------|-----------------------------------------|----------------------------------|
| add(value)      | Insert value into the heap              | maxHeap.add(10)                 |
| offer(value)    | Insert value into the heap (returns false if the element cannot be added) | maxHeap.offer(10) |
| peek()          | Return the root (min or max) value      | maxHeap.peek()                  |
| poll()          | Remove and return the root value        | maxHeap.poll()                  |
| isEmpty()       | Check if the queue is empty             | maxHeap.isEmpty()               |


## 💡 Real-World Use Cases of Heaps

1. **Priority Queues**: Scheduling tasks based on priority (used in OS schedulers).
2. **Heap Sort**: Sorting algorithm that uses the heap property to sort elements.
3. **Dijkstra's Shortest Path Algorithm**: Efficiently find the shortest path in a graph.
4. **Huffman Coding**: Data compression algorithm that uses a heap to build the Huffman tree.
5. **Median Finding**: Maintaining a dynamic list of numbers and finding the median efficiently.

## 🧠 Heap Interview Tips

1. Understand how to efficiently implement heap operations (insert, extract, peek).
2. Practice problems involving **Heap Sort**, **Priority Queues**, and **Dijkstra’s Algorithm**.
3. Be aware of the differences between Max Heap and Min Heap.
4. Know when heaps are better than other data structures like arrays or balanced trees.
5. Consider edge cases like **empty heap**, **duplicate values**, and **large heaps**.

## 🔄 Heap vs Binary Search Tree (BST)

| Feature                 | Heap                      | Binary Search Tree (BST)     |
|-------------------------|---------------------------|------------------------------|
| Structure               | Complete binary tree      | Binary tree (not necessarily complete) |
| Element Ordering        | Max or Min at root        | Left < Parent < Right         |
| Search Complexity       | O(n) (for arbitrary element) | O(log n) for balanced BST    |
| Insertion/Deletion      | O(log n)                  | O(log n) for balanced BST    |
| Use Case                | Priority Queues, Sorting  | Searching, In-order Traversal |

## How to Use Comparator in PriorityQueue

In Java, a `PriorityQueue` uses a comparator to determine the order of the elements in the queue. By default, `PriorityQueue` orders elements according to their natural ordering (for comparable objects), but you can customize the ordering by passing a `Comparator` to the queue.

### When to Use a Comparator
- **Custom ordering**: When you need to change the default ordering of elements, like if you want a max-heap instead of a min-heap.
- **Non-comparable objects**: If the objects you are storing in the queue don't implement `Comparable`, or you want to define a custom ordering that is different from the natural ordering.

### Example of Using a Comparator in a `PriorityQueue`

Here’s how you can use a comparator to create a custom ordering in a `PriorityQueue`. Let's use the **max-heap** example for illustration:

```java
import java.util.PriorityQueue;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        // Creating a max-heap using a custom comparator
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());

        // Adding elements
        maxHeap.add(10);
        maxHeap.add(20);
        maxHeap.add(15);

        // Polling elements - they will be removed in descending order
        System.out.println(maxHeap.poll()); // 20
        System.out.println(maxHeap.poll()); // 15
        System.out.println(maxHeap.poll()); // 10
    }
}
```
---

## 💡 Key Points (Using Comparator in PriorityQueue)

- **Comparator.reverseOrder()**: Built-in comparator to reverse the natural order. Often used to implement a max-heap.
- **Custom Comparator**: Define your own logic when natural ordering isn't suitable or for complex object comparisons.
- **Default Behavior**: `PriorityQueue` is a min-heap by default. Use a comparator for a max-heap or custom order.

## 🧩 Key Points: Custom Comparator Use Cases
- Use custom comparator for sorting based on specific fields or rules.
- Enables sorting of non-Comparable objects.
- Can be defined inline using lambdas or as separate classes.
---

## 📦 Example of Using a Custom Comparator

Let’s say you have a list of `Person` objects, and you want to prioritize them by age in descending order:

```java
import java.util.PriorityQueue;
import java.util.Comparator;

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + ": " + age;
    }
}

public class Main {
    public static void main(String[] args) {
        // Custom comparator to order persons by age in descending order
        Comparator<Person> ageComparator = (p1, p2) -> Integer.compare(p2.age, p1.age);

        // Creating a priority queue with the custom comparator
        PriorityQueue<Person> pq = new PriorityQueue<>(ageComparator);

        // Adding elements
        pq.add(new Person("Alice", 30));
        pq.add(new Person("Bob", 25));
        pq.add(new Person("Charlie", 35));

        // Polling elements - they will be removed in order of age (highest first)
        while (!pq.isEmpty()) {
            System.out.println(pq.poll()); // Charlie: 35, Alice: 30, Bob: 25
        }
    }
}
```
---

## 📝 Summary
### PriorityQueue orders elements by natural ordering or using a provided comparator.

- Use Comparator.reverseOrder() for max-heap behavior.
- Use custom comparator when:
- Objects don’t implement Comparable.
- You need a different sort order than natural.
- You’re dealing with complex data types.



