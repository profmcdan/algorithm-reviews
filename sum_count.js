const count_sets = (arr, total) => {
  return rec(arr, total, arr.length);
};

const rec = (arr, total, i) => {
  if (total === 0) return 1;
  else if (total < 0) return 0;
  else if (i < 0) return 0;
  else if (total > arr[i]) return rec(arr, total, i - 1);
  else {
    return rec(arr, total - arr[i], i - 1) + rec(arr, total, i - 1);
  }
};

function minCoinChange(coins, amount) {
  const cache = []; // {1}
  const makeChange = value => {
    // {2}
    if (!value) {
      // {3}
      return [];
    }
    if (cache[value]) {
      // {4}
      return cache[value];
    }
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      // {5}
      const coin = coins[i];
      newAmount = value - coin; // {6}
      if (newAmount >= 0) {
        newMin = makeChange(newAmount); // {7}
      }
      if (
        newAmount >= 0 && // {8}
        (newMin.length < min.length - 1 || !min.length) && // {9}
        (newMin.length || !newAmount) // {10}
      ) {
        min = [coin].concat(newMin); // {11}
        console.log("new Min " + min + " for " + amount);
      }
    }
    return (cache[value] = min); // {12}
  };
  return makeChange(amount); // {13}
}

// Example
const possible = [5, 10, 20, 50, 100];
const number = 235;
console.log(minCoinChange(possible, number));
