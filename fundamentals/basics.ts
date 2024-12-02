//primitives,complex, functions types and parameters

let age: number = 12; //note: nukmber not Number, similarly string not String and so on....
age = 12;

let userName: string;
userName = "Amrit";

let isStudent: boolean;
isStudent = true;

// More complex types
let hobbies: string[]; // this means array of strings
hobbies = ["string", "and", "strings"];

let ages: number[];
ages = [1, 2, 3, 4];

let person: {
  name: string;
  age: number;
};
person = {
  name: "amrit",
  age: 23,
};

// person = {
//     isEmploye: true
// }   will show error cox in defn no boolean was mentioned

let people: {
  name: string;
  age: number;
}[]; //array of object

// type inference
let course = "The react complete guide";
// here we neednt to use course: string, coz its a string we already assigned, so typescript know it, and will use that type as its infer type
// course = 1234 // and wont allow other type

// to allow multiple different types
//here we have a feature called union types

let courseId: string | number = "The react complete guide"; // here we can have as much as types here like |boolean here, too and boolean will also work
courseId = 4355;

//even
let names: string | string[];

// function and types

function addition(a: number, b: number) {
  //we could also define return type by addition(a:number, b:string):number{}// recommended to only use when we need to explicitly define it, for normal cases ts automatically infers it
  return a + b;
}

//there is also anohter return type

function printOutput(value: any) {
  // hence here is no return type, so the return type is void here, ain't talking about any here in value: any
  console.log(value);
}

// Generics

function insertAtTheBegining(array: any[], value: any) {
  const newArray = [value, ...array];
  return array;
}

const deomArray = [1, 2, 3];
const updatedArray = insertAtTheBegining(deomArray, -1); //[-1, 1, 2, 3]
updatedArray[0].split(""); //we ain't getting any error here, ofc we will get runtime error coz we cant use split on a number, but here
//we should have already get  error coz we have array of numbers, but using split, it doesnt coz we have used any type in function..
// ts doesnt know the array is of numbers coz of type defination is any, so to work with such problems we have a feature called generics
//with the generic feature we can convert this function to generic function, for this we use  a special syntax here
//after the function name, in front of the parameter list, we add angle brackets written typicaly T inside it
//and there we will using generic type which will only be available inside this funtion

function insertAtLast<T>(array: T[], value: T) {
  // this is like having of type T, and now typescript is able to understand that it should look at the concrete values of the arguments and it understand it is the array of numbers
  //and further we need to pass string arguments its also ok to do, T wont create a problem, its just that typescript will know its of string type
  const newArray = [...array, value];
  return array;
}

const nextArray = insertAtLast(deomArray, 4);
const stringArray = insertAtLast(["a", "b", "c"], "d");

nextArray[0].split(""); // now it fuckin shows the error
