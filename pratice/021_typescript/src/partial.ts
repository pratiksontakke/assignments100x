interface User3 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}
type UpdateProps3 = Pick<User1, "name" | "age" | "email">;

type UpdatePartialUser = Partial<UpdateProps3>;

function updateUser3(updatePartialUser: UpdatePartialUser) {
    //DB call and code
}
