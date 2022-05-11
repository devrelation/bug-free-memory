const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.flag = undefined;
};

LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    this.flag = key;
    return this.cache[key];
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (Object.keys(this.cache).length === this.capacity) {
    delete this.cache[this.flag];
  }
  this.cache[key] = value;
  return null;
};

const solution = (keyArr, valArr) => {
  const initializeCache = () => {
    keyArr.shift();
    return { lru: new LRUCache(...valArr.shift()), initArr: [null] };
  };
  const { lru, initArr } = initializeCache();
  return keyArr.reduce((acc, cur, idx) => {
    if (cur === 'put') {
      return [...acc, lru.put(...valArr[idx])];
    } else {
      return [...acc, lru.get(...valArr[idx])];
    }
  }, initArr);
};

export default solution;
