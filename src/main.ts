import { message, message2 } from "./basic/5";
import { mango, poly } from "./basic/6";
import { page1, page2 } from "./basic/7";
import { merge } from "./generics/3";
import { createOrUpdateUser } from "./generics/4";
import { RoleDescription } from "./generics/5";
import { form } from "./generics/6";

message();
message2();

console.log(mango, poly);

console.log(page1, page2);

console.log(merge({ name: "string" }, { age: 123 }));

console.log(
  createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
  })
);

console.log(RoleDescription);
console.log(form);
