// 利用工厂模式封装错误信息
function methodDecroptorCatchErr(info: string) {
  return function(target: any, key: any, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = function () {
      try {
        fn()
      } catch(e) {
        console.log(info)
      }
    }
  }
}

const userInfo: any = undefined
class Example {
  @methodDecroptorCatchErr('user name 不存在')
  getName() {
    return userInfo.name
  }
  @methodDecroptorCatchErr('user age 不存在')
  getAge() {
    return userInfo.age
  }
}

const example = new Example()
console.log(example.getName())
console.log(example.getAge())