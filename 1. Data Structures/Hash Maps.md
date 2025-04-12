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
|-----------|--------------|------------|
| Insert    | O(1)         | O(n)       |
| Search    | O(1)         | O(n)       |
| Delete    | O(1)         | O(n)       |

---

## ⚙️ Built-in Methods
- JS: Map(), Object
- Java: HashMap

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


