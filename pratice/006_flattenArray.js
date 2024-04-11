function flattenArray(arr, currentDepth, n) {
    let flattened = [];
    if (currentDepth >= n) {
        return [arr];
    }
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            flattened.push(...flattenArray(elem, currentDepth + 1, n));
        } else {
            flattened.push(elem);
        }
    }
    return flattened;
}

// Test the function
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 2;
const flattenedArr = flattenArray(arr, 0, n);
console.log(flattenedArr);
