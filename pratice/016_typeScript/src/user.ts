interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function isLegal1(user: User): boolean {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(
    "isLegal : " +
        isLegal1({
            firstName: "Pratik",
            lastName: "Sontakke",
            age: 18,
        })
);
