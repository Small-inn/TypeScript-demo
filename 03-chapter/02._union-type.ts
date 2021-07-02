interface Bird {
  fly: Boolean
  sing: () => {}
}

interface Dog {
  fly: Boolean
  bark: () => {}
}

// 类型断言
function trainAnimal(animal: Bird | Dog) {
  // animal.fly
  // animal.sing() 无法确定是Bird还是Dog
  if (animal.fly) {
    (animal as Bird).sing()
  } else {
    (animal as Dog).bark()
  }
}

// in语法
function trainAnimal_in(animal: Bird | Dog) {
  // animal.fly
  // animal.sing() 无法确定是Bird还是Dog
  if ('sing' in animal) {
    animal.sing()
  } else {
    animal.bark()
  }
}


// 使用instanceof语法做类型保护
class NumberObj {
  count: number
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return `${first.count}${second.count}`
  }
  return 0
}