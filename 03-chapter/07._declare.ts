// 定义全局变量
declare var $: (param: () => void) => void


// 定义全局函数
declare function fn07(params: () => void): void


interface JQueryInstance {
  html: (html: string) => JQueryInstance
}

declare function fn_07(params: string): JQueryInstance


// 函数重载
declare function $_r(readyFunc: () => void): void
declare function $_r(selector: string): JQueryInstance

// 使用interface语法 函数重载 既可以...又可以...
interface Jquery {
  (readyFunc: () => void): void
  (selector: string): JQueryInstance
}