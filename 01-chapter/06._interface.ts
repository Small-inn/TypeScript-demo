// 
// const getPerson = person => {
//   console.log(person.name)
// }

interface Person {
  // readonly name: string, // 只读
  name: string
  age?: number // 可有可无
  [propName: string]: any
  say(): string 
}

interface Teacher extends Person {
  teach(): string
}


interface Haha {
  (word: string): string
}

const getPerson = (person: { name: string }, name: string) => {
  console.log(person.name)
}

const getPerson1 = (person: Person): void => {
  console.log(person.name)
}

const setPerson1 = (person: Person, name: string): void => {
  person.name = name
}

const getTeacher = (person: Teacher): void => {
  console.log(person.teach())
}

const person = {
  name: 'lx',
  age: 20,
  sex: 'male',
  say() { 
    return 'hi' 
  },
  teach() { 
    return 'hello' 
  }
}

class User06 implements Person {
  name: 'xx'
  say() { 
    return 'hello' 
  }
}

getPerson1(person)
setPerson1(person, 'hh')
getTeacher(person)


const hh: Haha = (word: string) => {
  return word
}