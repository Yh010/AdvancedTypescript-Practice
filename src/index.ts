import { userAgent } from "next/server";

interface User{
    name: string;
    age: number;
    password: string;
    email: string;
}

type UpdatedProps = Pick<User, 'name' | 'age'>;

type UpdatedOptionalProps = Partial<UpdatedProps>

function updatedUser(updatedUserProps: UpdatedOptionalProps) {
    
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}
