/**
 * Singly linked list implementation.
*/

'use strict';

function SLinkedList() {
  this._head = null;
  this._tail = null;
}

SLinkedList.prototype.createNode = function(value) {
  return {
    value,
    next: null
  };
};

SLinkedList.prototype.addToTail = function(value) {
  var newNode = this.createNode(value);

  if (this._head === null) {
    this._head = newNode;
  } else {
    this._tail.next = newNode;
  }

  this._tail = newNode;
};

SLinkedList.prototype.addToHead = function(value) {
  var newNode = this.createNode(value);

  if (this._head === null) {
    this._tail = newNode;
  } else {
    newNode.next = this._head;
  }

  this._head = newNode;
};


SLinkedList.prototype.removeFromTail = function() {
  var removedVal;
  if (this._head === null) {
    return;
  } else if (this._head.next === null) {
    removedVal = this._head.value;
    this._head = null;
    this._tail = null;
  } else {
    var currNode = this._head;

    while (currNode.next && currNode.next.next) {
      currNode = currNode.next;
    }

    removedVal = currNode.next.value;
    currNode.next = null;
    this._tail = currNode;
  }

  return removedVal;
};

SLinkedList.prototype.removeFromHead = function() {
  var removedVal;
  if (this._head === null) {
    return;
  } else if (this._head.next === null) {
    removedVal = this._head.value;
    this._head = null;
    this._tail = null;
  } else {
    removedVal = this._head.value;
    this._head = this._head.next;
  }

  return removedVal;
};

SLinkedList.prototype.contains = function(target) {
  var currNode = this._head;

  while (currNode) {
    if (currNode.value === target) {
      return true;
    }

    currNode = currNode.next;
  }

  return false;
};

SLinkedList.prototype.retrieveHead = function(first_argument) {
  return (this._head) ? this._head.value : this._head;
};

SLinkedList.prototype.retrieveTail = function(first_argument) {
  return (this._tail) ? this._tail.value : this._tail;
};

SLinkedList.prototype.size = function() {
  var size = 0;
  var currNode = this._head;

  while (currNode) {
    size++;
    currNode = currNode.next;
  }
  return size;
};

SLinkedList.prototype.detectCycle = function(first_argument) {

};

SLinkedList.prototype.detectCycleStart = function(first_argument) {

};

SLinkedList.prototype.kthNodeFromEnd = function(first_argument) {

};

SLinkedList.prototype.reverseLL = function(first_argument) {

};

module.exports = SLinkedList;

// EXAMPLE USAGE:
var list = new SLinkedList();
console.log(list._tail); // null
list.addToTail(4);
list.addToTail(5);
console.log(list.size()); // 2
console.log(list._head.value); // 4
console.log(list.contains(5)); // true
console.log(list.contains(6)); // false
console.log(list.removeFromHead()); // 4
console.log(list._tail.value); // 5
console.log(list.size()); // 1
