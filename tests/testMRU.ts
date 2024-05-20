import MRUPolicy from '../Policies/MRUPolicy'

console.log("Running tests for MRU policy of cache size 3");

let lruCache = new MRUPolicy(3);

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

console.log("State of cache: (a should be gone)", lruCache.StateOfCache());

console.log("Get value of a:", lruCache.Get('a'));