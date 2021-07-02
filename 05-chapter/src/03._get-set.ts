// get和set不能同时使用一个装饰器


function visitDec(target: any, key: any, descriptor: PropertyDescriptor) {
  console.log('setter')
  // descriptor.writable = false
}
  
  

class TestGT {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
  @visitDec
  set name(name: string) {
    this._name = name
  }
}

const testgt = new TestGT('Small-inn')
testgt.name = 'lx'
console.log(testgt.name)