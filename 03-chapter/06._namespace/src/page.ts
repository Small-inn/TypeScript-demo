// class Header {
//   constructor() {
//     const ele = document.createElement('div')
//     ele.innerHTML = 'this is header'
//     document.body.appendChild(ele)
//   }
// }

// class Content {
//   constructor() {
//     const ele = document.createElement('div')
//     ele.innerHTML = 'this is content'
//     document.body.appendChild(ele)
//   }
// }

// class Footer {
//   constructor() {
//     const ele = document.createElement('div')
//     ele.innerHTML = 'this is footer'
//     document.body.appendChild(ele)
//   }
// }


// class Page {
//   constructor() {
//     new Header()
//     new Content()
//     new Footer()
//   }
// }

///<reference path='./components.ts' />

namespace Home {
  export namespace SmallInn {
    export const teacher: Components.User = {
      name: 'Small-inn'
    }
  }
  export class Page {
    constructor() {
      new Components.Header()
      new Components.Content()
      new Components.Footer()
    }
  }
}