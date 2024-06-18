interface User1 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User1, "name" | "age" | "email">;

function updateUser(updateProps: UpdateProps) {
    //DB call and code
}
