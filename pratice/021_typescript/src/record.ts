// it's a typescript concept
type UsersAge = {
    [key: string]: number;
};

const users1: UsersAge = {
    pratik: 19,
    vicky: 18,
};

// After using records

type Users = Record<string, number>;

const users2: Users = {
    pratik: 19,
    vicky: 18,
};

// getting data from record

console.log(users2["pratik"]); // return 19
