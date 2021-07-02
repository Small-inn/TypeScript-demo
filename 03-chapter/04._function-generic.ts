// 泛型 泛指的类型

function join<T>(first: T, second: T) {
  return `${first}-${second}`
}

join<string>('1', '2')
join<number>(1, 2)

// function map<T>(params: T[]) {
function map<T>(params: Array<T>) {
  return params 
}
map<string>(['123'])
