import 'reflect-metadata'

function showData(target: typeof User) {
  console.log('show')
  for (const key in target.prototype) {
    const data = Reflect.getMetadata('data', target.prototype, key)
    console.log(data)
  }
}

function setData(dataKey: string, info: string) {
  return function (target: User, key: string) {
    Reflect.defineMetadata(dataKey, info, target, key)
  }
}

@showData
class User {
  
  @Reflect.metadata('data', 'name')
  getName() {}

  @setData('data', 'age')
  getAge() {}
}

