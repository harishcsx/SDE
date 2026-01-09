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
// won't give warnings while assigning but raise error while using it 
if (typeof newValue === "string") {
    newValue.toUpperCase();
}


// try catch 

try {

} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}

const data: unknown  = "chai aur code";
const strData: string = data as string;