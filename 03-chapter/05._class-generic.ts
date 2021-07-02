
// 1
class DataManger<T> {
  // constructor(private data: string[]) {}
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index]
  }
}
const dm = new DataManger([1])
const item = dm.getItem(0)
console.log(item)


// 2
interface Item {
  name: string
}

class DataManger2<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name
  }
}
const dm2 = new DataManger2([{name: 'small-inn'}])
const item2 = dm2.getItem(0)
console.log(item2)


// 3
class DataManger3<T extends string | number> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index]
  }
}
const dm3 = new DataManger3<number | string>(['1', 1])

// 泛型作为一个具体的类型注解
function hello<T>(params: T): T {
  return params
}

const fn: <T>(param: T) => T = hello