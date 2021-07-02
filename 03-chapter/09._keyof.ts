interface Person {
  name: string
  age: number
  gender: string
}

// type T = 'name'

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
}

const teacher = new Teacher({
  name: 'Small-inn',
  age: 20,
  gender: 'male'
})

const tName = teacher.getInfo('name')
console.log(tName)