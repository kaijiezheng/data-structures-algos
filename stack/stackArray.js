/**
 * Stack class with native array methods.
*/

'use strict';

function Stack() {
  this._storage = [];
}

Stack.prototype.push = function(value) {
  this._storage.push(value);
};

Stack.prototype.pop = function() {
  return this._storage.pop();
};

Stack.prototype.top = function() {
  return this._storage[this._storage.length - 1];
};

Stack.prototype.size = function() {
  return this._storage.length;
};

Stack.prototype.isEmpty = function() {
  return this.size() === 0;
};

module.exports = Stack;
