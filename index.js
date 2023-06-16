function recievesAFunction(callback) {
    callback();
}

// 2. returnsANamedFunction function
function returnsANamedFunction() {
    // Define and return a named function
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  // 3. returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      console.log("This is an anonymous function.");
    };
  }
