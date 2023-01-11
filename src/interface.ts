interface Laptop {
  name: string
  on(): void
  off(): void
}

class MacBook implements Laptop {
  public name: string
  public isDesign: boolean

  constructor(name: string, isDesign: boolean) {
    this.name= name
    this.isDesign = isDesign
  }


  off(): void {
    console.log('Off')
  }

  on(): void {
    console.log('On')
  }
}

class Asus implements Laptop {
  public name: string;
  public isWifi: boolean

  constructor(name: string, isWifi: boolean) {
    this.name = name
    this.isWifi = isWifi
  }


  off(): void {
    console.log('Off')
  }

  on(): void {
    console.log('On')
  }

}

let mac = new MacBook('M1', true)
console.log(mac.name)
mac.on()
mac.off()

let asus = new Asus('VivoBook', false)
console.log(asus.name)
asus.on()
asus.off()
