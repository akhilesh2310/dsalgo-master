# Arrays in Java and JavaScript

Arrays are one of the core data structures in both Java and JavaScript, used to store a sequence of elements.

---

## 🔍 What is an Array?

An **Array** is an ordered collection of items where each item can be accessed using its index. 

### Java:
- Fixed-size collection of elements of the same type.

### JavaScript:
- Dynamic, resizable, and can hold mixed types.

---

## 📌 When to Use Arrays?

- When you need fast access to elements via index.
- When elements are ordered.
- When the number of elements is fixed (Java) or dynamic (JavaScript).

---

## 💪 How Arrays Work

### Java:
```java
int[] arr = new int[3];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
System.out.println(arr[1]); // Output: 2
```

### JavaScript:
```js
const arr = [1, 2, 3];
console.log(arr[1]); // Output: 2
```

---

## ⏱️ Time Complexity

| Operation       | Java Array | JavaScript Array |
|----------------|------------|------------------|
| Access         | O(1)       | O(1)             |
| Search         | O(n)       | O(n)             |
| Insert at End  | O(1)       | O(1)*            |
| Insert at Index| O(n)       | O(n)             |
| Delete         | O(n)       | O(n)             |

> `*` Amortized constant time for JavaScript arrays

---

## ☕ Java Examples Using Arrays

### 1D Array:
```java
int[] numbers = {1, 2, 3};
System.out.println(numbers[2]);
```

### 2D Array:
```java
int[][] matrix = {
    {1, 2},
    {3, 4}
};
System.out.println(matrix[1][1]);
```

### For-each Loop:
```java
for (int num : numbers) {
    System.out.println(num);
}
```

---

## ☕ Java Examples Using ArrayList

```java
import java.util.ArrayList;
ArrayList<String> colors = new ArrayList<>();
colors.add("Red");
colors.add("Green");
System.out.println(colors.get(0));
colors.set(1, "Blue");
colors.remove("Blue");
```

---

## 📜 JavaScript Examples Using Arrays

### Basic Operations:
```js
const fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // ["Apple", "Banana", "Cherry"]
fruits.pop(); // Removes "Cherry"
```

### Iteration:
```js
fruits.forEach(fruit => console.log(fruit));
```

### Higher-order Methods:
```js
const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]
```

---

## 🛠️ Common Methods

| Category           | Method                          | Description                                       |
|-------------------|----------------------------------|---------------------------------------------------|
| **Java Arrays**   | Arrays.sort(arr)                 | Sorts the array in ascending order               |
|                   | Arrays.copyOf(arr, newLength)    | Copies array into a new array with new length    |
|                   | Arrays.equals(arr1, arr2)        | Checks if two arrays are equal                   |
|                   | Arrays.fill(arr, value)          | Fills the array with a specific value            |
| **Java ArrayList**| add(value)                       | Appends an element to the end of the list        |
|                   | remove(index)                    | Removes the element at the given index           |
|                   | get(index)                       | Retrieves element at the index                   |
|                   | set(index, value)                | Replaces the element at the given index          |
|                   | contains(value)                  | Checks if list contains the value                |
|                   | size()                           | Returns the number of elements                   |
| **JavaScript**    | push()                           | Adds element(s) to the end of the array          |
|                   | pop()                            | Removes the last element                         |
|                   | shift()                          | Removes the first element                        |
|                   | unshift()                        | Adds element(s) to the beginning                 |
|                   | splice()                         | Adds/removes at specific index                   |
|                   | slice()                          | Returns a portion of the array                   |
|                   | map()                            | Creates new array by applying function to each element |
|                   | filter()                         | Filters elements based on a condition            |
|                   | reduce()                         | Reduces to a single value using an accumulator   |
|                   | indexOf()                        | Returns index of the first occurrence            |
|                   | includes()                       | Checks if array contains a specified value       |

---

## 🌍 Real-World Use Cases

- Storing a list of users or items.
- Managing data in queues or stacks.
- Matrix representations.
- Processing JSON data.

---

## 💡 Array Interview Tips

- Know the difference between fixed-size (Java) and dynamic (JavaScript) arrays.
- Understand in-place operations like reverse, rotate, and sort.
- Practice array-related algorithms like sliding window, two-pointer, binary search.
- Be familiar with higher-order methods in JavaScript.

---

## 🧠 Pro Tips

- Use `ArrayList` in Java for dynamic behavior.
- Prefer `const` for arrays in JavaScript to avoid accidental reassignments.
- Use `List` interface in Java for flexible method arguments.
- Use chaining with methods like `map().filter().reduce()` in JavaScript.

---

## 💡 Java vs JavaScript Summary Table

| Feature                     | Java Arrays                       | JavaScript Arrays              |
|-----------------------------|-----------------------------------|--------------------------------|
| **Size**                   | Fixed                             | Dynamic                        |
| **Type of Elements**       | Same data type                    | Mixed types allowed            |
| **Resizability**           | Not resizable (use ArrayList)     | Resizable                      |
| **Built-in Methods**       | Fewer built-in methods            | Rich set of array methods      |
| **Indexing**               | Zero-based                        | Zero-based                     |
| **Multidimensional Support** | Supported                         | Supported (nested arrays)      |
| **Performance**            | Generally faster & memory-efficient | Slower but flexible           |
| **Higher-order Functions** | Not available in Arrays (use Streams) | Fully supported (e.g., map, filter, reduce) |
| **Dynamic Behavior**       | Use `ArrayList` or other collections | Built-in                       |
| **Syntax Simplicity**      | Verbose                           | Concise                        |

---
## 📚 Related Data Structures

| Java Structure      | Example                                                                 | JavaScript Structure  | Example                                                                                           |
|---------------------|-------------------------------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------------|
| `LinkedList`        | `LinkedList<String> list = new LinkedList<>(); list.add("A");`          | `Set`                  | `const s = new Set([1, 2, 2, 3]); // Set(3) {1, 2, 3}`                                            |
| `Vector`            | `Vector<Integer> v = new Vector<>(); v.add(10);`                        | `Map`                  | `const m = new Map(); m.set('key', 'value'); // Map(1) {'key' => 'value'}`                         |
| `Stack`             | `Stack<Integer> stack = new Stack<>(); stack.push(5);`                  | `Array (as Stack)`     | `const stack = []; stack.push(5); stack.pop(); // []`                                              |
| `Queue`             | `Queue<String> q = new LinkedList<>(); q.offer("Hi");`                  | `Array (as Queue)`     | `const queue = []; queue.push("Hi"); queue.shift(); // []`                                         |
|                     |                                                                         | `Deque` (double-ended) | `const dq = []; dq.unshift("start"); dq.push("end"); // ["start", "end"]`                        |
| `PriorityQueue`     | `PriorityQueue<Integer> pq = new PriorityQueue<>(); pq.add(1);`         | `Custom Heap/Library`  | `const heap = require('heap'); const pq = new heap.MinHeap(); pq.push(1); // Custom priority queue` |


---

## 🔍 Practice Problems

- Java & JS: Reverse array, find duplicates, merge sorted arrays.
- Java: Rotate by K, find missing element, Kadane’s Algorithm.
- JS: Flatten array, deduplicate, chunking, max sum subarray.

---

Happy coding! 💻

