var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIn = 1;
  var lastIn = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIn] = value;
    lastIn++;
  };

  someInstance.dequeue = function() {
    var deleteStr = storage[firstIn];
    delete storage[firstIn];
    firstIn++;
    return deleteStr;
  };

  someInstance.size = function() {
    return lastIn - firstIn >= 0 ? lastIn - firstIn : 0;
  };

  return someInstance;
};
