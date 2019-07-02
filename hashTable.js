class NaiveDict {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(key, value) {
    this.keys.push(key);
    this.values.push(value);
  }

  get(lookupKey) {
    for (let i = 0; i < this.keys.length; i++) {
      const key = this.keys[i];
      if (key === lookupKey) {
        return this.values[i];
      }
    }
  }
}

function HashTable() {
  this.bucketCount = 100000;
  this.buckets = [];
  for (let i = 0; i < this.bucketCount; i++) {
    this.bucketCount.push(new NativeDict());
  }
}
