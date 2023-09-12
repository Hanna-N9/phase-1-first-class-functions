//Take a callback function as an argument & call the callback function
function receivesAFunction(callback) {
  callback();
}

//Return a named function
function returnsANamedFunction() {
  return function named() {
    "";
  };
}

//Return an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    "";
  };
}
