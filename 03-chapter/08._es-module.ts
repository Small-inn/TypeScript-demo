
declare module 'jquery' {
  interface JQuery {
    html: (html: string) => JQuery
  }

  function  $(readefn: () => void): void 
  function $(selector: string): JQuery

  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $
}