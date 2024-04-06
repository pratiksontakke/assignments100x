function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args); // Generate a unique key for the arguments
        if (cache.has(key)) {
            console.log(cache)
            return cache.get(key); // Return the cached result if available
        } else {
            const result = fn(...args); // Call the original function
            cache.set(key, result); // Cache the result for future use
            console.log(cache)
            return result;
        }
    };
}

// Example usage:
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedSum);

console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(2, 2)); // Output: 4 (Cached result used)
console.log(memoizedFib(5)); // Output: 8
console.log(memoizedFib(5)); // Output: 8 (Cached result used)
console.log(memoizedFactorial(3)); // Output: 6
console.log(memoizedFactorial(5)); // Output: 6 (Cached result used)
