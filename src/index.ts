import { userAgent } from "next/server";
import { z } from 'zod';
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


const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type FinaluserProfileSchema = z.infer<typeof userProfileSchema>;