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


interface Config{
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config>={
    endpoint: "wrgwrgrw",
    apiKey:"efwrwrf"
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}


type Users = Record<string, number>;
const users: Users = {
    "wegrwegr": 21,
    "wgwrg":55
} 

const newUsers = new Map();
newUsers.set("ergergre", 21);
newUsers.set("egeee", 54);

const newUser = newUsers.get("egeee");
console.log(newUser);