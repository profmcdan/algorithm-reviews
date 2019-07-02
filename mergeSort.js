const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

const defaultCompare = (a, b) => {
  if (a === b) return Compare.EQUALS;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const merge = (left, right, compareFn) => {
  let i = 0,
    j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    );
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
};

const mergeSort = (array, compareFn = defaultCompare) => {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    array = merge(left, right, compareFn);
  }
  return array;
};

// TEST
const data = [
  10,
  23,
  3,
  4,
  5,
  2,
  3,
  4,
  1,
  2,
  3,
  4,
  9,
  0,
  1,
  4,
  6,
  6,
  6,
  3,
  1,
  5
];
console.log(mergeSort(data));
