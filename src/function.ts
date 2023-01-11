const sayHello = (): string => "Hello World"
console.log(sayHello())

const printName = (): void => console.log("print name")
printName()

//=========================================================

const multiply = (val1: number, val2: number): number => val1 * val2
const result = multiply(1,5)
console.log(result)

//=========================================================

type Maths = (val1: number, val2:number) => number
const Add: Maths = (val1, val2) => {
  return val1 + val2
}

console.log(Add(1, 4))

// default parameter
const fullNames = (first: string, last: string = "Pratama"): string => `${first} ${last}`
console.log(fullNames("Dicky"))

// optional parameter
const getWords = (val1: string, val2?: string): string => `${val1} ${val2}`
console.log(getWords("QWERTY"))
