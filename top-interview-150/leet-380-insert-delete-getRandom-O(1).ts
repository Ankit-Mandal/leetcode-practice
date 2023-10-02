class RandomizedSet {
  map: Map<number, number>;
  nums: number[];

  constructor() {
    this.map = new Map<number, number>();
    this.nums = new Array<number>();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }
    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }

    const index = this.map.get(val)!;
    const lastArrayVal = this.nums[this.nums.length - 1];

    this.map.set(lastArrayVal, index);
    this.nums[index] = lastArrayVal;

    this.map.delete(val);
    this.nums.pop();

    return true;
  }

  getRandom(): number {
    const arrLen = this.nums.length;
    const randomIndex = Math.floor(Math.random() * arrLen);
    return this.nums[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
