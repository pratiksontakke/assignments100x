class TimeLimitedCache {
    constructor() {
        this.cache = {};
    }

    set(key, value, duration) {
        let isPresent = this.cache.hasOwnProperty(key);
        if (isPresent) {
            clearTimeout(this.cache[key].durationFn);
        }

        this.cache[key] = {
            value: value,
            durationFn: setTimeout(() => {
                delete this.    cache[key];
            }, duration),
        };
        return isPresent;
    }

    get(key) {
        key = this.cache[key];
        if (!key) {
            return -1;
        } else {
            return key["value"];
        }
    }

    count() {
        let count = 0;
        for (let key in this.cache) {
            count++;
        }
        return count;
    }
}

module.exports = TimeLimitedCache;

// on leetcode

// var TimeLimitedCache = function () {
//     this.cache = {};
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function (key, value, duration) {
//     // obj.hasOwnProperty('name')
//     let isPresent = this.cache.hasOwnProperty(key);

//     if (isPresent) {
//         clearTimeout(this.cache[key].durationFn);
//     }

//     // key -> delete || duration end -> delete key || setTimeout(cbFn, millis)
//     this.cache[key] = {
//         value: value,
//         durationFn: setTimeout(() => {
//             delete this.cache[key]; // delete person.age || going to delete key after some milli sec
//         }, duration),
//     };
//     return isPresent;
// };

// /**
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function (key) {
//     key = this.cache[key];
//     if (!key) {
//         return -1;
//     } else {
//         return key["value"];
//     }
// };

// /**
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function () {
//     let count = 0;
//     for (let key in this.cache) {
//         count++;
//     }
//     return count;
// };

// /**
//  * const timeLimitedCache = new TimeLimitedCache()
//  * timeLimitedCache.set(1, 42, 1000); // false
//  * timeLimitedCache.get(1) // 42
//  * timeLimitedCache.count() // 1
//  */
