const add = function(...Args) {
	return Args.reduce((tot, arg) => tot + arg, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((tot, arg) => tot + arg, 0);
};

const multiply = function(arr) {
  return arr.reduce((tot, num) => tot * num);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
