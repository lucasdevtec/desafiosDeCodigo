/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (be) {
      if (val === be) {
        return true;
      } else {
        return "Not Equal";
      }
    },
    notToBe: function (notBe) {
      if (val !== notBe) {
        return true;
      } else {
        return "Equal";
      }
    },
  };
};

console.log(expect(5).toBe(null));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
