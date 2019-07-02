const Stack = require("./stack");
const { Queue } = require("./queue");

const stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.items);
console.log(stack.peek());
console.log(stack.size());
stack.clear();
console.log(stack.size());

const simpleQueue = new Queue();
simpleQueue.add(10);
simpleQueue.add(20);

console.log(simpleQueue.size());
