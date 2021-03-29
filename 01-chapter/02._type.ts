// 基础类型 number null string undefined symbol boolean void
const count: number = 12


// 复杂类型
const teacher: {
  name: string,
  age: number
} = {
  name: 'lx',
  age: 20
}

const numbers: number[] = [1, 2, 3]


class Person {}

const lx: Person = new Person()

const getTotal: () => number = () => {
  return 123
}

