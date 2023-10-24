const myNumber: number = 3
const myString: string = "Hola"

const array = [1 , 2, 3]

// tupla
// type Person = [string, number, boolean]

type Person = {
    name: string,
    age: number
}
// intersection
let value: number | string = 3
value = "hola"

type SecondName = string | number | boolean | null
let SecondName: SecondName = "Luis"

// const santi: Person = ["Santi", 27, false]

// console.log("long tupla", santi.length)

// console.log(santi[0])

console.log("hola clase 🤓")

type Params = {
    a: number;
    b: number;
}

const sum = ({a, b}: Params) => a + b; 

// type User = {
//     name: string;
//     age: number;
//     job: string;
// }

// // tipo parcial
const userOne: User = {
    age: 23,
    name: "jaimito",
    job: "QA",
}
// // permite modificar un valor
function updateUserData(user: User, newData: Partial<User>){
    return {
        ...user,
        ...newData
    }
}

const userUpdated: User = updateUserData(userOne, {job: "CEO"})

console.log(userUpdated)

// // hace que todos los campos sean requeridos
// type Person = {
//     name: string
//     age?: number
// }
type PersonStrict = Required<Person>

function createUser (userData: Required<Person>){
    console.log("llamando a una API")
    console.log("con los siguientes datos: ", userData)
}


// // hacer readOnly

// // hacer PICK

// OMITE
 type User = {
    name: string;
    age: number;
    job: string;
}

type userWithoutJob = Omit<User, "job">

// // tipado de una fucino, variable, parametro va a ser generico pero no es any.

function mySuperFunction<T>(a: T, b: T): T[]{
    // return a + b
    console.log(typeof a)
    console.log(typeof b)
    return [a, b]
}

console.log(mySuperFunction<number>(3,5))
console.log(mySuperFunction<string>("Hola"," Clase"))

// Tupla
function mySuperFunctionTupla<T, U>(a: T, b: U): [T, U]{
    // return a + b
    console.log(typeof a)
    console.log(typeof b)
    return [a, b]
}

console.log(mySuperFunctionTupla<number, boolean>(3,true))
console.log(mySuperFunctionTupla<string, number>("Hola",10))

function mySuperFunctionIF<T extends string, U>(a: T, b: U): [T, U]{
    if (typeof a === "string"){
        // return [a.split(""), b]
        return [a, b]
    }
    return [a, b]
}
console.log(mySuperFunctionIF<string, number>("Hola",10))

// // diccionario de objetos

const COLORS = {
    RED: "#FF0000",
    BLUE: "#0000FF",
    GREEN: "#00FF00"
}

function getColor(color: keyof typeof COLORS){
    return COLORS[color]
}

console.log(getColor("RED"))

const HTTP_STATUS = {
    "OK": 200,
    "NOT_FOUND": 404,
    "INTERNAL_SERVER_ERROR": 500
}

function getErrorMessage(status: keyof typeof HTTP_STATUS){
    return HTTP_STATUS[status]
}

console.log(getErrorMessage("OK"))
