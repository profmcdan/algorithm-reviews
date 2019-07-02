const Stack = (() => {
  // We use an IIFE implementation
  //   An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
  const sKey = {};
  const items = new WeakMap();

  class Stack {
    constructor() {
      items.set(sKey, []);
    }

    push(element) {
      let stack = items.get(sKey);
      stack.push(element);
    }

    pop() {
      let stack = items.get(sKey);
      return stack.pop();
    }

    peek() {
      let stack = items.get(sKey);
      return stack[stack.length - 1];
    }

    clear() {
      items.set(sKey, []);
    }

    size() {
      return items.get(sKey).length;
    }
  }

  return Stack;
})();

// AMD
if (typeof define === "function" && define.amd) {
  define(function() {
    return Stack;
  });

  // NodeJS/CommonJS
} else if (typeof exports === "object") {
  if (typeof module === "object" && typeof module.exports === "object") {
    exports = module.exports = Stack;
  }

  // Browser
} else {
  window.Stack = Stack;
}
