var Stack = function() {
  var newStack = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {
  push: function(value) {
    this[Object.keys(this).length] = value;
  },

  pop: function() {
    var deleteValue = this[Object.keys(this).length - 1];
    delete this[Object.keys(this).length - 1];
    return deleteValue;
  },

  size: function() {
    return Object.keys(this).length;
  }
};
