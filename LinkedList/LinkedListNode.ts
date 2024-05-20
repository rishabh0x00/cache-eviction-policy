// Cache state as doubly Linked List
export default class LinkedListNode {
  public key: any;
  public value: any;
  public next: LinkedListNode;
  public prev: LinkedListNode;
  
  constructor(key: any, value: any, next: LinkedListNode = null, prev:LinkedListNode = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
