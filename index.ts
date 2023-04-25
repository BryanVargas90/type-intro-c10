//ts-node index.ts = to run code.
//-----------------------------------------------

let age : number = 23
let firstName : string = "Bryan"
let isTall: boolean = true
let childrenNames: string[] = ["Lilly", "David"]

console.log(`${firstName} is ${age} years old`)

if (isTall) {
    console.log("and so tall")
} else {
    console.log("and so pretty")
}

for(let i: number = 0; i < childrenNames.length; i++){
    console.log(childrenNames[i])
}

//Enum
enum taxForm {
    standartTaxForm = "1040",
    childTaxForm = "641",
    crypTaxForm = "420z"
}

console.log("The crypto one is:", taxForm.crypTaxForm)


let zipCode: string | number = 12345 // good
zipCode = "ABCDE" // good   
// zipCode = null // badd

console.log(zipCode)

//function sum
function sum (x: number, y: number): number  {
    return x + y
}
let total: number = sum(5, 6)
console.log(total) 

//void

function debug(message: string) : void {
    console.log (message)
}
debug("hello world")

//any = idk
let person: any = {
    firstName : "me",
    age: 23
}

console.log(person)

//interface

interface person {
    firstName: string,
    age: number,
    children: string[],
    hasCertificate?: boolean, // we put ? to 

}
let Bryan: person = {
    firstName : "me",
    age: 23,
    children: ["lilly", "David"],
    hasCertificate: false
}

let Daniel : person = {
    firstName : "Bryan",
    age: 19,
    children: ["lilly", "David"],
    hasCertificate: true
}

console.log(Bryan, Daniel)