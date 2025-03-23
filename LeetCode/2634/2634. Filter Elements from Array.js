/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const filter = function (arr, fn) {
  const filteredArray = [];

  arr.forEach((n, i) => {
    const pertence = fn(n, i);
    if (pertence) filteredArray.push(n);
  });
  return filteredArray;
};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);
