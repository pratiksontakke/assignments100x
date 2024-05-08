function greet(firstName: string) {
    console.log("Hellooo " + firstName);
}

function sum(a: number, b: number): number {
    console.log("sum of a+b = " + (a + b));
    return a + b;
}

function isLegal(age: number): boolean {
    return age > 18 ? true : false;
}

function runAfter1S(fn: () => void) {
    setTimeout(fn, 2000);
}

function fn(a: number) {
    console.log("Hi I'm Pratik " + a);
}

runAfter1S(() => {
    fn(19);
});
