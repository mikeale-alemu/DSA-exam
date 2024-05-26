class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.frontIndex = -1;
        this.rearIndex = -1;
    }
    enqueue(value) {
        if ((this.rearIndex + 1) % this.size === this.frontIndex) {
            console.log('Queue is full');
            return false;
        }

        if (this.frontIndex === -1) {
            this.frontIndex = 0;
        }

        this.rearIndex = (this.rearIndex + 1) % this.size;
        this.queue[this.rearIndex] = value;
        return true;
    }

    dequeue() {
        if (this.frontIndex === -1) {
            console.log('Queue is empty');
            return null;
        }

        const value = this.queue[this.frontIndex];
        if (this.frontIndex === this.rearIndex) {
            this.frontIndex = -1;
            this.rearIndex = -1;
        } else {
            this.frontIndex = (this.frontIndex + 1) % this.size;
        }

        return value;
    }

    front() {
        if (this.frontIndex === -1) {
            console.log('Queue is empty');
            return null;
        }

        return this.queue[this.frontIndex];
    }

    rear() {
        if (this.rearIndex === -1) {
            console.log('Queue is empty');
            return null;
        }

        return this.queue[this.rearIndex];
    }

    isEmpty() {
        return this.frontIndex === -1;
    }
}
const q = new CircularQueue(3);
console.log(q.enqueue(1)); // true
console.log(q.enqueue(2)); // true
console.log(q.enqueue(3)); // true
console.log(q.dequeue());  // 1
console.log(q.enqueue(4)); // true
console.log(q.front());    // 2
console.log(q.rear());     // 4
console.log(q.isEmpty());  // false