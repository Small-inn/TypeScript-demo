// type annotation 类型注解 我们告诉TS变量类型
// type inference 类型推断　TS会自动尝试分析变量类型


let count03: number;
count03 = 123


let countInference = 123



// function add03(x: number, y: number): number {
function add03(x: number, y: number) {
  return x + y 
}
let res03 = add03(1, 2)
