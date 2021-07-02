// 数组
const arr: (number | string )[] = [1, '2', 3]

const strArr: string[] = ['1', '2', '3']

const undefinedArr: undefined[] = [undefined]
// 
const objArr: { name: string, age: number }[] = [{name: 'lx', age: 20}, {name: 'hh', age: 18}]
// ===>  type alias 类型别名
type User = { name: string, age: number }

const objArr1: User[] = [{name: 'lx', age: 20}, {name: 'hh', age: 18}]


// 元组 tuple
const teacherInfo: [string, string, number] = ['lx', 'male', 18]
// csv

const teacherList: [string, string, number][] = [
  ['lx', 'male', 18],
  ['hh', 'female', 20],
  ['xx', 'female', 2]
]

console.log(teacherList)

