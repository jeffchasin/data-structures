var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // LIFO
  var newStack = Object.create(stackMethods);

  newStack.storage = {};

  return newStack;
};

var stackMethods = {

  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },

  pop: function() {
    var popped = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return popped;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }

};


