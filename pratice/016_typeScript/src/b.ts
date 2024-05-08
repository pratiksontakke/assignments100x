function firstEl<T>(arr: T[]): T {
    return arr[0];
}

const valueStr = firstEl<string>(["Pratik", "Vicky"]);
const valueNum = firstEl<number>([1, 2, 3]);

console.log(valueStr.toUpperCase());
console.log(valueNum);
