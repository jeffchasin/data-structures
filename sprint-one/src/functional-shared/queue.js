var Queue = function() {
  var newQueue = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue.queue = {};

  newQueue.firstIn = 1;
  newQueue.lastIn = 1;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {

  enqueue: function(value) {
    this.queue[this.lastIn] = value;
    this.lastIn++;
  },

  dequeue: function() {
    var delStr = this.queue[this.firstIn];
    delete this.queue[this.firstIn];
    this.firstIn++;
    return delStr;
  },

  size: function() {
    return this.lastIn - this.firstIn >= 0 ? this.lastIn - this.firstIn : 0;
  }
};


