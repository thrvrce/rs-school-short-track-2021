const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.firstNode = null;
  }

  get size() {
    let currentNode = this.firstNode;
    let size = currentNode ? 1 : 0;
    while (currentNode.next) {
      currentNode = currentNode.next;
      size++;
    }
    return size;
  }

  enqueue(element) {
    const newNode = new ListNode(element);

    if (this.firstNode) {
      let currentNode = this.firstNode;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    } else {
      this.firstNode = newNode;
    }
  }

  dequeue() {
    const currentFirstNode = this.firstNode;
    this.firstNode = this.firstNode.next ? this.firstNode.next : null;
    return currentFirstNode.value;
  }
}

module.exports = Queue;
