interface Point { x: Number, y: Number }

function tsDemo(data: Point) {
  console.log('123')
  // return Math.sqrt(data.x ** 2 + data.y ** 2) // 报红错误
}
tsDemo({x: 1, y: 2})