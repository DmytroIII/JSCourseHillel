

function name(a) {
  return function(b) {
      return a * b;
  };
}

console.log(name(3)(5));
