/**
 * Stack implementation with singly linked list.
*/

'use strict';

var SLinkedList = require('../linkedList/singlyLinkedList');

function Stack() {
  this._storage = new SLinkedList();
}

Stack.prototype.push = function(value) {
  this._storage.addToHead(value);
};

Stack.prototype.pop = function() {
  return this._storage.removeFromHead();
};

Stack.prototype.top = function() {
  return this._storage.retrieveHead();
};

Stack.prototype.size = function() {
  return this._storage.size();
};

Stack.prototype.isEmpty = function() {
  return this._storage.size() === 0;
};

module.exports = Stack;
