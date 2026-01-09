let response: any = "42";
// forcefull type assertion 
let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = "{'name':'who moved my cheese'}";
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name);


const inputElement = document.getElementById("username") as HTMLInputElement

// any vs unknown 

let value: any;
value = "chai";
value = [1,2,3];
value = 2.5;
value.toUpperCase(); //won't give any warning

let newValue: unknown;
newValue = "chai";
newValue = [1,3,4];
newValue = 2.5;

if (typeof newValue === "string") {
    newValue.toUpperCase();
}
