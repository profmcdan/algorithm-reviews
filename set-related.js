// cartesian product
const cartesianProduct = (A, B) => {
  if (!A || !B || !A.length || !B.length) return null;
  const products = [];
  for (let indexA = 0; indexA < A.length; indexA++) {
    for (let indexB = 0; indexB < B.length; indexB++) {
      products.push([A[indexA], B[indexB]]);
    }
  }
  return products;
};

//
const setA = ["A", "B", "C"];
const setB = [1, 2, 3];
// console.log(cartesianProduct(setA, setB));

// Fisher Yates Shuffle Algorithm
const shuffle = array => {
  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(shuffle(data));

// Power set using bitwise operation
const powerSet = originalSet => {
  const subsets = [];
  const numOfCombinations = 2 ** originalSet.length;
  for (
    let combinationIndex = 0;
    combinationIndex < numOfCombinations;
    combinationIndex++
  ) {
    const subSet = [];
    for (
      let elementIndex = 0;
      elementIndex < originalSet.length;
      elementIndex++
    ) {
      if (combinationIndex & (1 << elementIndex)) {
        subSet.push(originalSet[elementIndex]);
      }
    }
    subsets.push(subSet);
  }
  return { subsets, length: subsets.length };
};

const mySet = ["a", "b", "c", "d"];
// console.log(powerSet(mySet));

// Prime Factors
const getPrimeFactor = number => {
  let factors = [];

  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }
  return factors;
};

const factors = getPrimeFactor(30);
console.log(powerSet(factors));
