class Person09 {
  constructor(private _name: string) {

  }
  get name() {
    return this._name + ' is lx'
  }
  set name(name: string) {
    this._name = name
  }
}

const person09 = new Person09('Small-inn')
console.log(person09.name)
person09.name = 'xx'
console.log(person09.name)

// 单例模式

class Demo {
  private static instance: Demo
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('Small-inn')
    }
    return this.instance
  }
}
const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
console.log(demo1 === demo2)