
// 类的装饰器
// 装饰器本身就是一个函数
// 类的装饰器接收的参数是构造函数
// 装饰器通过@符号来使用

//1.0
// function testDecorator(flag: boolean) {
//   console.log(1111)
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log("🚀 ~ file: index.ts ~ line 17 ~ Small-inn", 'Small-inn')
//       }
//     }
//   }
// }

// 2.0
// function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
//   return class extends constructor {
//     name = 'lx'
//     getName() {
//       return this.name
//     }
//   }
// }

// @testDecorator
// class Test {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// const test = new Test('Small-inn')
// console.log("🚀 ~ file: index.ts ~ line 27 ~ test", test)

// 3.0
function testDecorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'lx'
      getName() {
        return this.name
      }
    }
  }
}

const Test = testDecorator()(
  class Test {
    name: string
    constructor(name: string) {
      this.name = name
    }
  }
)


const test = new Test('Small-inn')
test.getName()
console.log("🚀 ~ file: index.ts ~ line 63 ~ test.getName()", test.getName())


