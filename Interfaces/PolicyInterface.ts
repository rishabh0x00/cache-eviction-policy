import LinkedListNode from '../LinkedList/LinkedListNode';

export default interface PolicyInterface {
  //set default limit of 10 if limit is not passed.
  size: number;
  limit: number;
  head?: LinkedListNode;
  tail?: LinkedListNode;
  cache: any;

  Insert(key: any, value: any): void;

  Get(key: any): any;

  StateOfCache(): Array<any>;
}
