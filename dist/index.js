"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "wgerg", age: 20 }, { name: "wgergfwef", age: 23 });
console.log(age);
