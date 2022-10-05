let hello: string = "hello";

const getFullNamed = (name: string, surname: string): string[] => {
  return [name, surname];
};

console.log(getFullNamed("13", "33"));

interface UserInterface {
  name: string;
  age?: number;
  getMessages?(): string;
}

// const user: UserInterface = {
//   name: "bob",
//   age: 23,
// };

const user2: UserInterface = {
  name: "bob",
};

console.log(user2.name);

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

// let user: UserInterface | null = null;

interface User3Interface {
  name: string;
  surname: string;
}


let user: User3Interface | null = null; 


