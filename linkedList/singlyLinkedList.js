/**
 * Singly linked list implementation.
*/

'use strict';

function SLinkedList() {
  this._head = null;
  this._tail = null;
}

SLinkedList.createNode = function(value) {
  return {
    value,
    next: null
  };
};

SLinkedList.addToTail = function(value) {
  var newNode = this.createNode(value);

  if (this._head === null) {
    this._head = newNode;
  } else {
    this._tail.next = newNode;
  }

  this._tail = newNode;
};

SLinkedList.addToHead = function(value) {
  var newNode = this.createNode(value);

  if (this._head === null) {
    this._tail = newNode;
  } else {
    newNode.next = this._head;
  }

  this._head = newNode;
};


SLinkedList.removeFromTail = function() {
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

SLinkedList.removeFromHead = function() {
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

SLinkedList.contains = function(target) {
  var currNode = this._head;

  while (currNode) {
    if (currNode.value === target) {
      return true;
    }

    currNode = currNode.next;
  }

  return false;
};

SLinkedList.detectCycle = function(first_argument) {

};

SLinkedList.detectCycleStart = function(first_argument) {

};

SLinkedList.kthNodeFromEnd = function(first_argument) {

};

SLinkedList.reverseLL = function(first_argument) {

};

module.exports = SLinkedList;
