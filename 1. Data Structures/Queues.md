# Queues

Queue is a FIFO structure.

**Why:** Used in scheduling, async tasks.
**When:** Items are processed in order.
**How:**

JavaScript:
```js
let queue = [];
queue.push(1);
queue.shift();
```

Java:
```java
Queue<Integer> q = new LinkedList<>();
q.add(1);
q.poll();
```

**Built-in Methods:**
- JS: push(), shift()
- Java: add(), poll(), peek()
