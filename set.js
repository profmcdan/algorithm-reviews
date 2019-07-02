const set = new Set();
const wset = new WeakSet();

const tets = (function() {
  const a = { a: 1 },
    b = { b: 2 },
    c = { c: 3 },
    d = { d: 4 };
  set
    .add(1)
    .add(2)
    .add(3)
    .add(4);
  wset
    .add(a)
    .add(b)
    .add(c)
    .add(d);
})();

console.dir(set);
console.dir(wset);
