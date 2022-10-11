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
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

const popularTags: PopularTag[] = ["dragon", "coffee"];
const dragonsTag: MaybePopularTag = "dragon";

const doSomething = (): void => {
  console.log("doSomething");
};

const doSomething2 = (): never => {
  throw "never";
};

let vAny: any = 10;
let vUnknown: unknown = 10;
let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;

// console.log(vAny.foo())
// console.log(vUnknown.foo())

const someElement = document.querySelector("foo") as HTMLInputElement;
console.log(someElement.value);

someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});

interface UserInterface2 {
  getFullname(): string;
}

class User implements UserInterface2 {
  protected firstName: string;
  private lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  changeUnchangableName(): void {
    // this.unchangableName = "foo";
  }

  getFullname(): string {
    return this.firstName + "" + this.lastName;
  }
}

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor() {
    return this.editor;
  }
}

const user4 = new User("Mo", "lessons");
console.log(User.maxAge);
// console.log(user4.maxAge)

const admin = new Admin("Foo", "Bar");
console.log(admin.getEditor());

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface3<T> {
  name: string;
  data: T;
}

const user5: UserInterface3<{ meta: string }> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
};

const user6: UserInterface3<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
};

// const result = addId<UserInterface3>(user5);

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

enum Status {
  NotStarted,
  InProgress,
  Done,
}

let notStartedStatus: Status = Status.NotStarted

notStartedStatus = Status.Done 

console.log(Status.InProgress)


