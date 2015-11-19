/**
 * Queue class with native array methods.
*/

'use strict';

function Queue() {
  this._storage = [];
}

Queue.prototype.enqueue = function(value) {
  this._storage.push(value);
};

Queue.prototype.dequeue = function() {
  return this._storage.shift();
};

Queue.prototype.bottom = function() {
  return this._storage[0];
};

Queue.prototype.size = function() {
  return this._storage.length;
};

Queue.prototype.isEmpty = function() {
  return this.size() === 0;
};

module.exports = Queue;
