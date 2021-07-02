// 普通方法 target对应的是类的prototype
// 静态方法 target对应的是类的构造函数
function getNameDecorator(target: any, key: any, descriptor: PropertyDescriptor) {
  console.log('target', target)
  console.log('key', key)
  console.log('descriptor', descriptor)
  // descriptor.writable = false
  descriptor.value = function () {
    return 'lx'
  }
  console.log("🚀 ~ file: method-decorator.ts ~ line 9 ~ getNameDecorator ~ descriptor.value", descriptor.value)
}
  
  

class TestM {
  name: string
  constructor(name: string) {
    this.name = name
  }
  @getNameDecorator
  getName() {
    return this.name
  }
}

const testm = new TestM('Small-inn')
// testm.getName()
// console.log("🚀 ~ file: method-decorator.ts ~ line 21 ~ test.getName()", testm.getName())

// testm.getName = () => {
//   return '123'
// }
console.log(testm.getName())