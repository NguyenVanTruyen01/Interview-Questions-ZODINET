//Using object-oriented programming to create a Stack class and its methods: find, push, pop, size, and isEmpty.

class Stack {
    constructor() {
        this.items = [];
    }

    find(item) {
        return this.items.includes(item);
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}