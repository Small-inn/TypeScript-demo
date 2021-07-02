
// 类的属性装饰器

// function propDecorator(target: any, key: any): any {
//   console.log('prop')
//   const descriptor: PropertyDescriptor = {
//     writable: false
//   }
//   return descriptor
// }

// propDesc.name = 'lx'

// 修改的属性在原型上
function propDecorator(target: any, key: any): any {
  target[key] = 'lx'
}

// name属性放在实例上
class PropDesc {
  @propDecorator
  name: string = 'Small-inn'
}


const propDesc = new PropDesc()

console.log((propDesc as any).__proto__.name)