let arr = [1, 2];
let obj = { key: "value", key2: "value2" };

let emptArr = [];
let emptObj = [];

if (Object.keys(obj).length == 0) {
    console.log(true);
} else {
    console.log(false);
}

console.log("------------obj----");
console.log(Object.keys(obj));
console.log("------------arr----");
console.log(Object.keys(arr));
