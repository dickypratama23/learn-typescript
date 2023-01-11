abstract class Animal {
  abstract type: string
  start(): void {
    console.log("eat")
  }
}

class Cat extends Animal {
  type = "Land"
}

class Fish extends Animal {
  type = "Water"
}

let cat = new Cat()
console.log(cat.type)
cat.start()

let fish = new Fish()
console.log(fish.type)
fish.start()
