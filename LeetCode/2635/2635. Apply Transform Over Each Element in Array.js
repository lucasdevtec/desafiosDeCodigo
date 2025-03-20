/**
 * @param {string} val
 * @return {Object}
 */

var mapLeetCode = function (arr, fn) {
  const arrayNovo = [];

  arr.forEach((item, i) => {
    arrayNovo.push(fn(item, i));
  });
  return arrayNovo;
};

console.log(
  mapLeetCode([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);
