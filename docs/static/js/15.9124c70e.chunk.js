webpackJsonp([15],{144:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=t(0),i=t.n(s),c=t(276),l=t(902),p=(t.n(l),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),u=function(e){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),p(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page page--error-page"},i.a.createElement("section",{className:"section section--404"},i.a.createElement("div",{className:"container container--error-page"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"primary-heading u-text-center"},i.a.createElement("span",{className:"primary-heading--main"},"404"),i.a.createElement("span",{className:"primary-heading--sub"},"Oops, Sorry we can't find that ",this.props.msg?"job":"page","!")),i.a.createElement(c.a,{url:this.props.msg?"careers":"",classValue:"btn--blue"},"Go to ",this.props.msg?"Carrer":"Home")))))}}]),n}(s.Component);n.default=u},276:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(4),s=t(279),i=(t.n(s),function(e){var n=["nav-btn","btn"],t=e.classValue.split(" "),r=n.concat(t);return a.a.createElement("div",{className:r.join(" ")},a.a.createElement(o.c,{to:"/"+e.url},e.children))});n.a=i},279:function(e,n,t){var r=t(280);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(143)(r,a);r.locals&&(e.exports=r.locals)},280:function(e,n,t){n=e.exports=t(142)(!0),n.push([e.i,".nav-btn a{-ms-flex-pack:center;justify-content:center}@media screen and (max-width:768px){.nav-btn{margin-left:auto;margin-right:auto}}","",{version:3,sources:["/mnt/Ethereal_Data/Ethereal/src/components/ui/nav-btn/nav-btn.css"],names:[],mappings:"AAKA,WACE,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,oCACE,SACE,iBAAkB,AAClB,iBAAmB,CACpB,CACF",file:"nav-btn.css",sourcesContent:["/*\r\n * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'\r\n * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'\r\n */\r\n\r\n.nav-btn a {\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .nav-btn {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}"],sourceRoot:""}])},902:function(e,n,t){var r=t(903);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(143)(r,a);r.locals&&(e.exports=r.locals)},903:function(e,n,t){n=e.exports=t(142)(!0),n.push([e.i,".page--error-page h1{color:var(--color-black)}.section--404{text-align:center}.container--error-page{position:static!important}.section--404 .content{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.section--404 .nav-btn{margin-right:auto;margin-left:auto}","",{version:3,sources:["/mnt/Ethereal_Data/Ethereal/src/pages/error-page/error-page.css"],names:[],mappings:"AAKA,qBACE,wBAA0B,CAC3B,AAED,cACE,iBAAmB,CACpB,AAED,uBACE,yBAA4B,CAC7B,AAED,uBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACrC,mCAAqC,AACjC,8BAAiC,CAC1C,AAED,uBACE,kBAAmB,AACnB,gBAAkB,CACnB",file:"error-page.css",sourcesContent:["/*\r\n * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'\r\n * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'\r\n */\r\n\r\n.page--error-page h1 {\r\n  color: var(--color-black);\r\n}\r\n\r\n.section--404 {\r\n  text-align: center;\r\n}\r\n\r\n.container--error-page {\r\n  position: static !important;\r\n}\r\n\r\n.section--404 .content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n      -ms-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.section--404 .nav-btn {\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}"],sourceRoot:""}])}});
//# sourceMappingURL=15.9124c70e.chunk.js.map