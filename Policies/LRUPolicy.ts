import PolicyInterface from '../Interfaces/PolicyInterface';
import LinkedListNode from '../LinkedList/LinkedListNode';

export default class LRUPolicy implements PolicyInterface {
  size = 0;
  limit = 10;
  head = null;
  tail = null;
  cache = {};

  constructor(limit: number) {
    this.limit = limit;
  }

  public Insert(key: any, value: any) {
    // If limit reached, remove tail as it is least recently visited
    this.CheckLimit()

    // Write new Node to head of LinkedList
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(key, value);
    } else {
      const node = new LinkedListNode(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    //Update the cache map
    this.cache[key] = this.head;
    this.size++;
  }

  public Get(key: any) {
    if (this.cache[key]) {
      const value = this.cache[key].value;

      // node removed from it's position and cache
      this.Remove(key)

      // write node again to the head of LinkedList to make it most recently used
      this.Insert(key, value);

      return value;
    }

    console.log(`Item not available in cache for ${key}`);
  }

  protected Remove(key: any) {
    const node = this.cache[key];

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev
    }

    delete this.cache[key];
    this.size--;
  }

  protected CheckLimit() {
    if (this.size === this.limit) {
      this.Remove(this.tail.key)
    }
  }

  public StateOfCache() {
    return Object.keys(this.cache).map((key) => {
      return {key, value: this.cache[key].value}
    })
  }
}
