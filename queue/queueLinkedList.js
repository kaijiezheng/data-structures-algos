/**
 * Queue implementation with singly linked list.
*/

'use strict';

var SLinkedList = require('../linkedList/singlyLinkedList');

function Queue() {
  this._storage = new SLinkedList();
}

Queue.prototype.enqueue = function(value) {
  this._storage.addToTail(value);
};

Queue.prototype.dequeue = function() {
  return this._storage.removeFromHead();
};

Queue.prototype.bottom = function() {
  return this._storage.retrieveHead();
};

Queue.prototype.size = function() {
  return this._storage.size();
};

Queue.prototype.isEmpty = function() {
  return this.size() === 0;
};

module.exports = Queue;
