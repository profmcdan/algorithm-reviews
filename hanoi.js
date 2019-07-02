const towerOfHanoi = (n, A, B, C) => {
  if (n > 0) {
    towerOfHanoi(n - 1, A, C, B);
    console.log(`move 1 disc from ${A} --> ${C}`);
    towerOfHanoi(n - 1, B, A, C);
  }
};

towerOfHanoi(3, "A", "B", "C");
