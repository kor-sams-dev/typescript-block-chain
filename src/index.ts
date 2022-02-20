class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("saem", 30, "male");

const sayHi = (persion: Human): string => {
  return `Hello ${persion.name}, you are ${persion.age}, you are a ${persion.gender}!!!!`;
};

console.log(sayHi(lynn));

export {};
