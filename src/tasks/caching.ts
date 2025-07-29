import { Fn } from "../interfaces";

function memoize(fn: Fn): Fn {
  let cached = new Map();
  console.log(cached);

  return (...args) => {
    const key = JSON.stringify(args);
    if (cached.get(key)) {
      return cached.get(key);
    }
    const result = fn(...args);
    cached.set(key, result);
    return result;
  };
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
console.log(memoizedFn(2, 4)); // 6
console.log(callCount); // 2
