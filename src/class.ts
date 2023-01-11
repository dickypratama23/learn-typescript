export class User {
  public name: string
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  setName = (value: string): void => {
    this.name = value
  }

  getName = (): string => this.name
}

let user = new User("Dicky", 17)
console.log(user)

// inheritance
class Admin extends User {
  public read: boolean = true
  public write: boolean = true
  public phone: string

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone
  }

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    }
  }
}

let admin = new Admin("08117778888","Dicky", 30);
console.log(admin)
console.log(admin.getName())
admin.setName("Pratama")
console.log(admin.getRole())
console.log(admin.getName())
console.log(admin.phone)
