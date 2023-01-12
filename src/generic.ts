// general function
function getOtherData<T, >(value: T) {
  return value
}

console.log(getOtherData("Dicky"))

// arrow function
const getData = <T, >(value: T) => {
  return value
}

console.log(getData("Pratama"))


// generic class
class List<T> {
  private data: T[]

  constructor(...elements: T[]) {
    this.data = elements
  }

  add(element: T): void {
    this.data.push(element)
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements)
  }

  getAll(): T[] {
    return this.data
  }
}

// number type generic
let number = new List<number>(1,2,3,4,5)
console.log(number.getAll())

number.add(6)
console.log(number.getAll())

number.addMultiple(7, 8, 9, 10)
console.log(number.getAll())

// mixed type generic
let randoms = new List<number | string>(1, "Q")
console.log(randoms.getAll())
