class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // FIFO
  constructor() {
    this.storage = {};
    this.firstIn = 1;
    this.lastIn = 1;
  }

  enqueue(value) {
    this.storage[this.lastIn] = value;
    this.lastIn++;
  }

  dequeue() {
    var dequeued = this.storage[this.firstIn];
    delete this.storage[this.firstIn];
    this.firstIn++;
    return dequeued;
  }

  size() {
    return this.lastIn - this.firstIn >= 0 ? this.lastIn - this.firstIn : 0;
  }
}

var sammichRobot = new Queue();
