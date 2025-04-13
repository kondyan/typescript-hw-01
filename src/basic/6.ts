type Address = {
  city: string;
  country: string;
};
interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

export const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

export const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
