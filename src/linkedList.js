class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        // adds a new node containing value to the start 
        // of the list.
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value) {
        // adds a new node containing value to the end of 
        // the list.
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    
    size() {
        return this.size;
    }

    listHead() { //check naming convention, why "head" doesnt work
        return this.head.value;
        // should return the value of the first node in the list. If the list is empty, it should return undefined.
    }

    listTail() {
        return this.tail.value;
        // should return the value of the final node in the list. If the list is empty, it should return undefined.
    }

    at(index) {
        // should return the value of the node at the given index. If there’s no node at the given index, it should return undefined.
    }

    pop() {
       if (this.isEmpty()) {
            return null;
       } else {
        const value = this.head.value;
        this.head = this.head.next;
        this.size--
        return value;
       }
    }

    contains(value) {
        // returns true if the passed in value is in the list 
        // and otherwise returns false.

    }

    findIndex(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while(curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    toString() {
        if (this.isEmpty()) {
            console.log("");
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `( ${curr.value} ) -> `;
                curr = curr.next;
            }
            console.log(`${listValues}null`)
        }
    }

    insertAt(index, ...values) {
        // should insert new nodes with the given values at the given index  
        // If the method is called with an index that is out of bounds (below 0 or above the list’s size), throw a RangeError.
    }

    removeAt(index) {
        // that removes the node at the given index. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a RangeError
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new linkedList;
// list.print()
// list.append(10);
// list.print()
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.print()

console.log(list.findIndex(10));
list.toString()