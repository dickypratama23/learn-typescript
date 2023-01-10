// array
let fruits: Array<string> = [
  "Apple", "Banana"
]

let numbers: Array<number> = [
  1, 2, 3, 4, 5
]

// array tuple
let student: [string, string, number] = ["Dicky", "Pratama", 30]

console.log(fruits[0])
console.log(numbers[4])
console.log(student[0])

// update data
student[0] = "Pratama"
console.log(student[0])

// push new data
fruits.push('Jack')
console.log(fruits)

// delete data
delete fruits[0]
console.log(fruits)
