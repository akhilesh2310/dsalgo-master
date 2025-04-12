# 📦 Hash Maps

## 🔍 What Is a Hash Map?

A **Hash Map** is a data structure that stores data in **key-value pairs** for fast retrieval. Internally, it uses a **hash function** to convert keys into array indices.

---

## ⚙️ How Does a Hash Map Work?

1. **Hash Function**: Converts the key to an index using a hash algorithm.
2. **Buckets**: An array where each index can store multiple values (in case of collision).
3. **Collision Handling**:
   - **Chaining**: Use a linked list or dynamic array at each bucket.
   - **Open Addressing**: Find another open spot based on a probing sequence.
4. **Load Factor**: When the number of entries exceeds a threshold, the table resizes to maintain performance.

---

## ⏱️ Time Complexity

| Operation | Average Case | Worst Case |
| --------- | ------------ | ---------- |
| Insert    | O(1)         | O(n)       |
| Search    | O(1)         | O(n)       |
| Delete    | O(1)         | O(n)       |

---

## 🔪 JavaScript Examples Using `Map`

```js
const map = new Map();

// ✅ Add key-value pairs
map.set("name", "John");
map.set("age", 30);

// ✅ Get values
console.log(map.get("name")); // John

// ✅ Check key existence
console.log(map.has("age")); // true

// ✅ Delete a key
map.delete("age");

// ✅ Size of the map
console.log(map.size); // 1

// ✅ Iterate
for (let [key, value] of map) {
  console.log(`${key} => ${value}`);
}

// ✅ Clear map
map.clear();
```

---
## 🧩 Using Object as a Hash Map in JavaScript

While `Map` is more feature-rich and predictable, JavaScript's plain **Object** can also be used as a simple hash map:

```js
const obj = {};

// ✅ Add key-value pairs
obj["name"] = "Alice";
obj["age"] = 25;

// ✅ Get values
console.log(obj["name"]); // Alice

// ✅ Check key existence
console.log("age" in obj); // true

// ✅ Delete a key
delete obj["age"];

// ✅ Iterate over keys and values
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key} => ${obj[key]}`);
  }
}
```
---

### ⚠️ When to Use:
**Object works well for string-only keys.**

**Prefer Map when:**

- You need non-string keys (like objects or functions).
- You need reliable key ordering.
- You want better performance in insertion and deletion.
- You want to avoid key collision with object prototype methods.
---

## 🔪 Java Examples Using `HashMap`

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
  public static void main(String[] args) {
    // ✅ Create a new HashMap
    Map<String, Integer> map = new HashMap<>();

    // ✅ Add key-value pairs
    map.put("apple", 3);
    map.put("banana", 5);

    // ✅ Get value by key
    System.out.println("apple => " + map.get("apple")); // apple => 3

    // ✅ Check if a key exists
    System.out.println("Contains banana? " + map.containsKey("banana")); // true

    // ✅ Remove a key
    map.remove("banana");

    // ✅ Iterate over keys and values
    for (String key : map.keySet()) {
      System.out.println(key + " => " + map.get(key));
    }

    // ✅ Iterate using entrySet
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      System.out.println("Entry: " + entry.getKey() + " = " + entry.getValue());
    }

    // ✅ Size of the map
    System.out.println("Size: " + map.size());

    // ✅ Clear the map
    map.clear();
  }
}
```

---

## 📜 Common Methods

### ⚙️ Built-in Methods
- JS: Map(), Object
- Java: HashMap

### JavaScript: Map

| Method        | Description          | Example                    |
| ------------- | -------------------- | -------------------------- |
| set(key, val) | Add/Update key-value | map.set("a", 10)           |
| get(key)      | Get value by key     | map.get("a")               |
| has(key)      | Check if key exists  | map.has("a")               |
| delete(key)   | Remove key           | map.delete("a")            |
| size          | Number of elements   | map.size                   |
| clear()       | Remove all entries   | map.clear()                |
| forEach()     | Iterate over entries | map.forEach((v, k) => ...) |

### Java: HashMap

| Method           | Description          | Example                                  |
| ---------------- | -------------------- | ---------------------------------------- |
| put(key, val)    | Add/Update key-value | map.put("a", 10)                         |
| get(key)         | Get value by key     | map.get("a")                             |
| containsKey(key) | Check if key exists  | map.containsKey("a")                     |
| remove(key)      | Remove key           | map.remove("a")                          |
| size()           | Number of elements   | map.size()                               |
| clear()          | Remove all entries   | map.clear()                              |
| keySet()         | Get all keys         | for (String key : map.keySet())          |
| values()         | Get all values       | for (String val : map.values())          |
| entrySet()       | Get key-value pairs  | for (Map.Entry<String, String> e : ...)  |

---

## 💡 Real-World Use Cases of Hash Maps

1. **Caching**: Store recently accessed data (e.g., in-memory caching).
2. **Databases**: Underlying implementation for indexes.
3. **Counting Frequencies**: Word counts in a text.
4. **Lookups**: User ID to user data mappings.
5. **Configurations**: Store settings and configurations.
6. **Symbol Tables**: Used in compilers and interpreters.
7. **Routing Tables**: IP address to route mapping.
8. **Autocompletion**: Fast key-based text suggestions.
9. **Session Management**: Storing session data for users.
10. **Graph Representations**: Adjacency list for graphs.

---

## 🧠 Hash Map Interview Tips

1. Understand how **hash functions** affect performance.
2. Be ready to handle **collisions** — explain chaining and open addressing.
3. Practice using **custom objects as keys** (and how to override `equals` and `hashCode` in Java).
4. Analyze **space vs. time trade-offs**, especially when dealing with large data.
5. Be familiar with **rehashing** and **load factor impact** on performance.
6. Practice problems like:
   - Two Sum
   - Group Anagrams
   - LRU Cache
   - Longest Substring Without Repeating Characters
7. Always clarify **key type**, possible **duplicate values**, and **expected operations** before coding.
8. Prefer `Map` (JS) or `HashMap` (Java) over arrays when key-based access is needed.
9. Understand when to use **LinkedHashMap** (Java) for maintaining insertion order.
10. Know limitations — **not thread-safe** (use `ConcurrentHashMap` if needed).

---

## 🧩 HashMap vs TreeMap vs LinkedHashMap (Java)

| Feature               | HashMap         | TreeMap           | LinkedHashMap     |
|----------------------|------------------|-------------------|-------------------|
| Order                | No ordering      | Sorted by key     | Insertion order   |
| Performance (get/put)| O(1)             | O(log n)          | O(1)              |
| Null Keys Allowed    | Yes (1 key)      | No                | Yes (1 key)       |
| Thread Safety        | Not thread-safe  | Not thread-safe   | Not thread-safe   |
| Use Case             | Fast access      | Sorted access     | Predictable order |

Use **TreeMap** when you need natural key ordering. Use **LinkedHashMap** when you need predictable iteration order. Stick with **HashMap** when speed is your top priority and ordering doesn't matter.

