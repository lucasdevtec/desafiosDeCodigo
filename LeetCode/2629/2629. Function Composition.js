/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    for (let index = functions.length - 1; index >= 0; index--) {
      x = functions[index](x);
    }
    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4));
