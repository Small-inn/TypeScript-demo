function sayHi(): void {
  console.log('hello')
}


function errorEmitter(): never {
  throw new Error()
}


function add({ first, second }: { first: number, second: number }): number {
  return first + second
}
const total = add({first: 1, second: 2})


// 两种方式
const func = (str: string): number => {
  return parseInt(str)
}
const func1: (str: string) => number = (str) =>  {
  return parseInt(str)
}