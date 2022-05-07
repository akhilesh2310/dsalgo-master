// Implement classes Node and Linked List
// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end
	// of list
	add(element) {
		// creates a new node
		var node = new Node(element);

		// to store current node
		var current;

		// if list is Empty add the
		// element and make it head
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next;
			}

			// add node
			current.next = node;
		}
		this.size++;
	}

	// insert element at the position index
	// of the list
	insertAt(element, index) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			// creates a new node
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// add the element to the
			// first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				// iterate over the list to find
				// the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the
	// specified location
	removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the
				// position to removce an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element
			return curr.element;
		}
	}

	// removes a given element from the
	// list
	removeElement(element) {
		var current = this.head;
		var prev = null;

		// iterate over the list
		while (current != null) {
			// comparing element with current
			// element if found then remove the
			// and return true
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	// finds the index of element
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterate over the list
		while (current != null) {
			// compare each element of the list
			// with given element
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// not found
		return -1;
	}

	// checks the list for empty
	isEmpty() {
		return this.size == 0;
	}

	// gives the size of the list
	size_of_list() {
		console.log(this.size);
	}


	// prints the list items
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();


// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/

mocha.setup('bdd');
const { assert } = chai;

describe('A Node', () => {
	it("has properties 'data' and 'next'", () => {
		const node = new Node(1, 2);
		assert.equal(node.data, 1);
		assert.equal(node.next, 2);
	});
});

describe.skip('unshift(data)', () => {
	it('adds new node to start of list by correctly setting head and updating length.', () => {
		const l = new LinkedList();
		l.unshift('Kevin');
		assert.equal(l.head.data, 'Kevin');
		assert.equal(l.length, 1);
	});

	it('Does not overwrite old head.', () => {
		const l = new LinkedList();
		l.unshift('Kevin');
		assert.equal(l.head.data, 'Kevin');
		assert.equal(l.length, 1);

		l.unshift('eric');
		assert.equal(l.head.data, 'eric');
		assert.equal(l.head.next.data, 'Kevin');
		assert.equal(l.length, 2);
	});
});

describe.skip('getFirst()', () => {
	it('returns the first node in linked list.', () => {
		const l = new LinkedList();
		assert.equal(l.getFirst(), null);
		l.unshift(1);
		assert.equal(l.getFirst().data, 1);
		l.unshift(2);
		assert.equal(l.getFirst().data, 2);
	});
});

describe.skip('getLast()', () => {
	it('returns the last node in linked list.', () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.getLast().data, 1);
		l.unshift(2);
		assert.equal(l.getLast().data, 1);
	});
	it('does not crash AND returns null on empty list.', () => {
		const l = new LinkedList();
		assert.equal(l.getLast(), null);
	});
});

describe.skip('clear()', () => {
	it('clears out the linked list and resets length to 0.', () => {
		const l = new LinkedList();
		assert.equal(l.length, 0);
		l.unshift(1);
		l.unshift(1);
		l.unshift(1);
		assert.equal(l.length, 3);
		l.clear();
		assert.equal(l.length, 0);
		assert.equal(l.head, null);
	});
});

describe.skip('shift()', () => {
	it('removes AND returns first node, updates length for linked list w/ one node.', () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.shift().data, 1);
		assert.equal(l.length, 0);
		assert.equal(l.getFirst(), null);
	});
	it('removes the first node and returns it, decreases length of list.', () => {
		const l = new LinkedList();
		l.unshift(3);
		l.unshift(2);
		l.unshift(1);
		assert.equal(l.shift().data, 1);
		assert.equal(l.length, 2);
		assert.equal(l.getFirst().data, 2);
		assert.equal(l.shift().data, 2);
		assert.equal(l.length, 1);
		assert.equal(l.getFirst().data, 3);
	});
	it('does not crash AND returns null on empty list. Does not decrease length.', () => {
		const l = new LinkedList();
		assert.equal(l.shift(), null);
		assert.equal(l.length, 0);
	});
});

describe.skip('pop()', () => {
	it('removes AND returns last node, decreases length.', () => {
		const l = new LinkedList();
		l.unshift('b');
		l.unshift('a');
		assert.equal(l.pop().data, 'b');
		assert.equal(l.length, 1);
		assert.equal(l.head.data, 'a');
	});
	it('removes AND returns last node, decreases length on linked-list w/ one node.', () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.pop().data, 1);
		assert.equal(l.head, null);
		assert.equal(l.length, 0);
	});
	it('Returns null on empty list AND does not decrease length.', () => {
		const l = new LinkedList();
		assert.equal(l.pop(), null);
		assert.equal(l.length, 0);
	});
});

describe.skip('push(data)', () => {
	it('adds to the end of the list and increases length.', () => {
		const l = new LinkedList();
		l.unshift(1);
		l.push(2);
		assert.equal(l.length, 2);
		assert.equal(l.getLast().data, 2);
	});
	it('adds to end of empty list and increases length without crashing.', () => {
		const l = new LinkedList();
		l.push(1);
		assert.equal(l.length, 1);
		assert.equal(l.getLast().data, 1);
		assert.equal(l.getFirst().data, 1);
	});
});

describe.skip('get(index)', () => {
	it('returns null on negative or out of bounds index.', () => {
		const l = new LinkedList();
		l.push('Kevin');
		assert.equal(l.get(-1), null);
		assert.equal(l.get(100), null);
	});
	it('returns the node at given index.', () => {
		const l = new LinkedList();
		l.push('Kevin');
		l.push('is');
		l.push('kewl');

		assert.equal(l.get(0).data, 'Kevin');
		assert.equal(l.get(1).data, 'is');
		assert.equal(l.get(2).data, 'kewl');
	});
});

describe.skip('set(index, data)', () => {
	it('returns falsy value on out of bounds or negative index.', () => {
		const l = new LinkedList();
		l.push(2);
		assert.isNotOk(l.set(-1, 'meow'));
		assert.isNotOk(l.set(100, 'meow'));
	});
	it('Updates node and returns true.', () => {
		const l = new LinkedList();
		l.push(2);
		l.push(4);
		assert.equal(l.set(1, 'meow'), true);
		assert.equal(l.getLast().data, 'meow');
	});
});

describe.skip('remove(index)', () => {
	it('returns falsy value on out of bounds OR negative index.', () => {
		const l = new LinkedList();
		l.push(2);
		assert.isNotOk(l.remove(-1));
		assert.isNotOk(l.remove(100));
	});
	it('removes and returns node at given index. Decreases length.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);

		assert.equal(l.get(3).data, 4);
		assert.equal(l.remove(3).data, 4);
		assert.isNotOk(l.get(3));
		assert.equal(l.length, 3);
	});
	it('removes node at index 0, decreases length, and returns removed node.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);

		assert.equal(l.get(0).data, 1);
		assert.equal(l.remove(0).data, 1);
		assert.equal(l.get(0).data, 2);
		assert.equal(l.length, 3);
	});
});

describe.skip('insert(index, data)', () => {
	it('returns false on index greater than length or negative index.', () => {
		const l = new LinkedList();
		assert.equal(l.insert(1, 'meow'), false);
		assert.equal(l.insert(-10, 'meow'), false);
		assert.equal(l.length, 0);
	});
	it('inserts new node at given index, increases length, and returns true.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);
		assert.equal(l.insert(2, 'kevin'), true);
		assert.equal(l.get(0).data, 1);
		assert.equal(l.get(1).data, 2);
		assert.equal(l.get(2).data, 'kevin');
		assert.equal(l.get(3).data, 3);
		assert.equal(l.get(4).data, 4);
		assert.equal(l.length, 5);
	});
	it('inserts node at 0 index correctly, increases length, returns true.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		assert.equal(l.insert(0, 'kevin'), true);
		assert.equal(l.get(0).data, 'kevin');
		assert.equal(l.get(1).data, 1);
		assert.equal(l.get(2).data, 2);
		assert.equal(l.get(3).data, 3);
		assert.equal(l.length, 4);
	});
});

mocha.run();
