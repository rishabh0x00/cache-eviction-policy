import LRUPolicy from '../Policies/LRUPolicy'

console.log("Running tests for LRU policy of cache size 3");

let lruCache = new LRUPolicy(3);

console.log("Insert a: 12");
lruCache.Insert('a', 12);
console.log("Insert b: 25");
lruCache.Insert('b', 25);
console.log("Insert b: 67");
lruCache.Insert('c', 67);

console.log("State of cache:", lruCache.StateOfCache());

console.log("Get value of a", lruCache.Get('a'));

console.log("insert d: 98")
lruCache.Insert('d', 98);

console.log("State of cache: (b should be gone)", lruCache.StateOfCache());

console.log("Get value of b:", lruCache.Get('b'));