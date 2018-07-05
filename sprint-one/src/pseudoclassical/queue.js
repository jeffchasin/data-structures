var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // FIFO
  this.storage = {};
  this.firstIn = 1;
  this.lastIn = 1;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastIn] = value;
  this.lastIn++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.firstIn];
  delete this.storage[this.firstIn];
  this.firstIn++;
  return dequeued;
};

Queue.prototype.size = function() {
  return this.lastIn - this.firstIn >= 0 ? this.lastIn - this.firstIn : 0;
};

var sandwichLine = new Queue();
