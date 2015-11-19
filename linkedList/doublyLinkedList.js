/**
 * Doubly linked list implementation, inheriting contains method from SLL.
*/

'use strict';

var SLinkedList = require('./singlyLinkedList');

function DLinkedList() {
  SLinkedList.call(this);
}

DLinkedList.prototype = Object.create(SLinkedList.prototype);

DLinkedList.prototype.constructor = DLinkedList;

DLinkedList.prototype.createNode = function(value) {
  return {
    value,
    next: null,
    prev: null
  };
};

DLinkedList.prototype.addToTail = function(value) {
  var newNode = this.createNode(value);

  if (this._head === null) {
    this._head = newNode;
  } else {
    newNode.prev = this._tail;
    this._tail.next = newNode;
  }

  this._tail = newNode;
};

DLinkedList.prototype.addToHead = function(value) {
  var newNode = this.createNode(value);

  if (this._head === null) {
    this._tail = newNode;
  } else {
    this._head.prev = newNode;
    newNode.next = this._head;
  }

  this._head = newNode;
};

DLinkedList.prototype.removeFromTail = function() {
  var removedVal;
  if (this._head === null) {
    return;
  } else if (this._head.next === null) {
    removedVal = this._tail.value;
    this._head = null;
    this._tail = null;
  } else {
    removedVal = this._tail.value;
    this._tail = this._tail.prev;
    this._tail.next = null;
  }

  return removedVal;
};

DLinkedList.prototype.removeFromHead = function() {
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
    this._head.prev = null;
  }

  return removedVal;
};

DLinkedList.prototype.detectCycle = function(first_argument) {

};

DLinkedList.prototype.detectCycleStart = function(first_argument) {

};

DLinkedList.prototype.kthNodeFromEnd = function(first_argument) {

};

DLinkedList.prototype.reverseLL = function(first_argument) {

};



var list = new DLinkedList();
console.log(list._tail); // null
list.addToTail(4);
list.addToTail(5);
console.log(list._head.value); // 4
console.log(list.contains(5)); // true
console.log(list.contains(6)); // false
console.log(list.removeFromHead()); // 4
console.log(list._tail.value); // 5
console.log(DLinkedList.prototype.constructor);
