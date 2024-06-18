interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User): number {
    return user1.age + user2.age;
}

const totalAge = sumOfAge(
    { name: "Pratik", age: 18 },
    { name: "Vicky", age: 20 }
);
console.log(`totalAge : ${totalAge}`);
