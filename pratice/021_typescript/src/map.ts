// map is a js concept but <> "generics" is ts thing

const usersMap = new Map<string, number>();
usersMap.set("pratik", 19);
usersMap.set("vicky", 18);

console.log(usersMap.get("pratik")); // return 19
