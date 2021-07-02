// 参数装饰器

// 参数： 原型， 方法名，参数所在位置
function paramsDecorator(target: any, key: any, paramIndex: number) {
  console.log(target, key, paramIndex)
}

class ArgDec {
  getInfo(@paramsDecorator name: string, age: number) {
    console.log(name, age)
  }
}
  
const argdec = new ArgDec()
argdec.getInfo('Small-inn', 20)