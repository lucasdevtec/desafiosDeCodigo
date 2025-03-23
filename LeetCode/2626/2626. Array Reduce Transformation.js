/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

function soma(accum, curr) {
  return accum + curr;
}

function soma2(accum, curr) {
  return accum + curr * curr;
}

const reduce = function (nums, fn, init) {
  let acumulador = init;
  nums.forEach((n, i) => {
    acumulador = fn(acumulador, n);
  });
  return acumulador;
};

console.log(reduce([1, 2, 3, 4], soma2, 100));
