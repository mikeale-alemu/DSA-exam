class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        let newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    printList() {
        let current = this.head;
        const result = [];
        let i = 0;
        while (current !== null) {
            result[i] = current.value;
            current = current.next;
            i++;
        }
        console.log(result.join(' -> '));
    }
}
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        current = next;
    }

    return prev;
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log("Original list:");
list.printList();
list.head = reverseLinkedList(list.head);
console.log("Reversed list:");
list.printList();