// Fisher Yates Shuffle Algorithm
const shuffle = array => {
  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(data));
