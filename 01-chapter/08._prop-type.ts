// private protected public
// public 允许在类内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

class Person08 {
  public name: string
  protected age: number
  private sayHi() {
    return 'Hi'
  }
}

const person08 = new Person08()
person08.name = 'Small-inn'
console.log(person08.name)
// console.log(person08.age)
// console.log(person08.sayHi())


// constructor
// 如果在子类中使用constructor 要手动调一下父类constructor super()

class _Person {
  constructor(public name: string) {
    this.name = name
  }
}

class _Teacher extends _Person {
  constructor(name: string, age: number) {
    super(name)

  }

}

