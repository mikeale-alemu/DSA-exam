class Stack {
    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push (value){
        this.storage[this.count] = value;
        // console.log(``)
        this.count++;
    }

    pop() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        this.count -= 1;
        return result;
    }
    length() {
        return this.count;
    }
}
function reverseString(str) {
    const stacks = new Stack();
    let reversedString = '';
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    while (stack.length > 0) {
        reversedString += stack[stack.length - 1];
        stack.length--;
    }
    return reversedString;
}
const inputString = "hello";
console.log(reverseString(inputString)); // Output: "olleh"
