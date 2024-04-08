const TimeLimitedCache = require('./004_timeLimitedCache');

const timeLimitedCache = new TimeLimitedCache();

// Set key-value pairs with expiration durations
timeLimitedCache.set(1, 42, 1000);
timeLimitedCache.set(1, 42, 500);
timeLimitedCache.set(2, 100, 2000);

// Get values associated with keys
console.log(timeLimitedCache.get(1)); // Output: 42
console.log(timeLimitedCache.get(2)); // Output: 100
console.log(timeLimitedCache.get(3)); // Output: -1 (Key does not exist)

// Get count of non-expired keys
console.log(timeLimitedCache.count()); // Output: 2

// Wait for some time to let keys expire

// After some time...

// Get values associated with keys again
console.log(timeLimitedCache.get(1)); // Output: -1 (Key has expired)
console.log(timeLimitedCache.get(2)); // Output: -1 (Key has expired)

// Get count of non-expired keys again
console.log(timeLimitedCache.count()); // Output: 0
