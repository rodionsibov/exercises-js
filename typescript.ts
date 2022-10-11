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

const user: UserInterface = {
  name: "bob",
  age: 23,
};

const user2: UserInterface = {
  name: "bob",
};

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

// let user: UserInterface | null = null;

interface User2Interface {
  name: ID;
  surname: string;
}

const user3: User2Interface | null = null; 

// type aliases in ts
type ID = string
type PopularTag  = string
type MaybePopularTag = PopularTag | null

const popularTags: PopularTag[] = ['dragon', 'coffee']
const dragonsTag: MaybePopularTag = 'dragon'

const doSomething = (): void => {
  console.log("doSomething");
};

const doSomething2 = (): never => {
  throw "never";
};

let vAny: any = 10
let vUnknown: unknown = 10
let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;

// console.log(vAny.foo())
// console.log(vUnknown.foo())

const someElement = document.querySelector("foo") as HTMLInputElement;
console.log(someElement.value);

someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});
