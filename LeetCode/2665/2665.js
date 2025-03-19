/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let valor = init;

  return {
    increment: () => {
      valor = valor + 1;
      return valor;
    },
    reset: () => {
      valor = init;
      return valor;
    },
    decrement: () => {
      valor = valor - 1;
      return valor;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
