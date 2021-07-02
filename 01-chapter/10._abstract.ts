class Person10 {
  public readonly name: string
  // private _name: string
  constructor(name: string) {
    this.name = name
  } 
  // get name() {
  //   return this._name
  // }
}

const person10 = new Person10('Small-inn')
// person10.name = 'hh'
console.log(person10.name)


// 抽象类, 只能被继承不能被实例化
abstract class Geom {
  abstract width: number
  getType(): string {
    return 'Geom'
  }
  abstract getArea(): number
}

class Circle extends Geom {
  width = 1000
  getArea() {
    return 123
  }
}
