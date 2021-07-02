class Person07 {
  name  = 'lx'
  getName() {
    return this.name
  }
}

class Teacher07 extends Person07 {
  getTeacherName() {
    console.log(this.name)
  }
  getName() {
    return `${super.getName()} is Small-inn`
  }
}

const person07 = new Person07()
console.log(person07.getName())

const teacher07 = new Teacher07()
console.log(teacher07.getName())