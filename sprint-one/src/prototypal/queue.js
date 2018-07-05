var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // FIFO
  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.firstIn = 1;
  newQueue.lastIn = 1;

  return newQueue;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.lastIn] = value;
    this.lastIn++;
  },

  dequeue: function() {
    var dequeued = this.storage[this.firstIn];
    delete this.storage[this.firstIn];
    this.firstIn++;
    return dequeued;
  },

  size: function() {
    return this.lastIn - this.firstIn >= 0 ? this.lastIn - this.firstIn : 0;
  }
};


