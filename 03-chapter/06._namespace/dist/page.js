"use strict";
var Components;
(function (Components) {
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerHTML = 'this is header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerHTML = 'this is content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerHTML = 'this is footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
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
var Home;
(function (Home) {
    var SmallInn;
    (function (SmallInn) {
        SmallInn.teacher = {
            name: 'Small-inn'
        };
    })(SmallInn = Home.SmallInn || (Home.SmallInn = {}));
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
