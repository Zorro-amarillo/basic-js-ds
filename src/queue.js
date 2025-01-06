const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueArr = []
  }

  getUnderlyingList() {
    return this.queueArr[0];
  }

  enqueue(value) {
    if (this.queueArr.length === 0) {
      this.queueArr.push(new ListNode(value));
    } else {
      checkNextValue(this.queueArr[0]);

      function checkNextValue(obj) {
        if (obj.next === null) {
          obj.next = new ListNode(value);
        } else {
          checkNextValue(obj.next);
        }
      }
    }
  }

  dequeue() {
    const firstItemValue = this.queueArr[0].value;
    const firstItemNextValue = JSON.parse(JSON.stringify(this.queueArr[0].next));

    this.queueArr = [firstItemNextValue];

    return firstItemValue;
  }
}

module.exports = {
  Queue
};
