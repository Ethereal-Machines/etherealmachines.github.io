webpackJsonp([33],{1555:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{companies:e.Company.company,firstRunCompanies:e.Company.firstRun}}function l(e){return{vendorDispatch:function(t){e({type:f.n,value:t})},dispatchUpdateFirstRunCompanies:function(t){e({type:f.L,value:t})}}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),c=n.n(s),u=n(177),d=n(538),p=n(1828),A=n(3956),f=(n.n(A),n(36)),m=n(2338),h=n(178),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=function(e){function t(){var e,n,o,i;r(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={gToken:Object(h.b)(),showLoader:!!o.props.firstRunCompanies},o.callback=function(e){200===e.status?(o.props.vendorDispatch(e.data),o.setState({showLoader:!1}),o.props.dispatchUpdateFirstRunCompanies(!1)):console.log(e.response)},i=n,a(o,i)}return o(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this.state.gToken;e&&this.props.firstRunCompanies&&Object(m.a)(this.companyCallback,e)}},{key:"render",value:function(){return this.state.showLoader?c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null)):0===this.props.companies.length?c.a.createElement("div",{className:"vendors-container flex-row u-text-center"},c.a.createElement("h2",null,c.a.createElement("b",{style:{color:"#bcbcbc"}},"No Data"))):c.a.createElement("div",{className:"vendors-container flex-column"},c.a.createElement("h2",null,c.a.createElement("b",null,"Vendor List")),c.a.createElement(p.a,null),c.a.createElement("div",{className:"vendor-table",style:{overflowX:"auto"}},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Vendor Comapny"),c.a.createElement("th",null,"Location"),c.a.createElement("th",null,"Machines"),c.a.createElement("th",null,"Pentagram"),c.a.createElement("th",null,"Halo"),c.a.createElement("th",null,"Ray"))),c.a.createElement("tbody",null,this.props.companies.map(function(e){var t=0,n=0,r=0;return c.a.createElement("tr",{key:e._id},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.location),c.a.createElement("td",{className:"text-right"},c.a.createElement("span",null,e.products.length)),e.products.length>0&&e.products.map(function(e){"Halo"===e.name?t++:"Pentagram"===e.name?n++:"Ray"===e.name&&r++}),c.a.createElement("td",{className:"text-right"},c.a.createElement("span",null,t)),c.a.createElement("td",{className:"text-right"},c.a.createElement("span",null,n)),c.a.createElement("td",{className:"text-right"},c.a.createElement("span",null,r)))})))))}}]),t}(s.Component);t.default=Object(u.b)(i,l)(v)},1828:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(98),i=n(1829),l=(n.n(i),function(e){return a.a.createElement(o.g,{className:e.classValue?e.classValue:"divider",dashed:e.isDashed,type:e.isType,orientation:e.isOrientation})});t.a=l},1829:function(e,t,n){var r=n(1830);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;n(1522)(r,a);r.locals&&(e.exports=r.locals)},1830:function(e,t,n){t=e.exports=n(1521)(!0),t.push([e.i,".divider{background:#a8c4dd}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/etherealfrontendnew/src/components/ui/divider/divider.css"],names:[],mappings:"AAEA,SACI,kBAAoB,CACvB",file:"divider.css",sourcesContent:[" \r\n\r\n.divider {\r\n    background: #a8c4dd;\r\n}"],sourceRoot:""}])},2338:function(e,t,n){"use strict";var r=n(537),a=function(e,t){r.a.get("/user/company",{headers:{Accept:"application/json",Authorization:t?"Token "+t:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=a},3956:function(e,t,n){var r=n(3957);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;n(1522)(r,a);r.locals&&(e.exports=r.locals)},3957:function(e,t,n){t=e.exports=n(1521)(!0),t.push([e.i,".vendors-container{width:100%;display:-ms-flexbox;display:flex;background:#fff;padding:1rem;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.vendor-table table{border-collapse:collapse;border-spacing:0;width:100%}.vendor-table th{color:rgba(0,0,0,.8)}.vendor-table th,td{text-align:left;padding:16px;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;border:1px solid #ddd}.text-right{text-align:right}.vendor-table tr:nth-child(2n){background-color:#f2f2f2}.vendor-table tbody tr:hover{background-color:#e6f7ff}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/etherealfrontendnew/src/admin/pages/vendors/vendors.css"],names:[],mappings:"AAEA,mBACI,WAAY,AACZ,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,aAAmB,AACnB,uBAAyB,AACzB,kBAAoB,AACpB,cAAgB,CACnB,AAED,oBACI,yBAA0B,AAC1B,iBAAkB,AAClB,UAAY,CACf,AAED,iBACI,oBAA0B,CAC7B,AAED,oBACI,gBAAiB,AACjB,aAAc,AACd,uBAAyB,AACzB,kBAAoB,AACpB,eAAiB,AACjB,qBAAuB,CAC1B,AAED,YACI,gBAAkB,CACrB,AAED,+BAAiC,wBAAyB,CAAC,AAE3D,6BACI,wBAAyB,CAC5B",file:"vendors.css",sourcesContent:[" \r\n\r\n.vendors-container {\r\n    width: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background: #fff;\r\n    padding: 1rem 1rem;\r\n    -webkit-transition: 0.3s;\r\n    -o-transition: 0.3s;\r\n    transition: 0.3s\r\n}\r\n\r\n.vendor-table table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n}\r\n\r\n.vendor-table th {\r\n    color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.vendor-table th, td {\r\n    text-align: left;\r\n    padding: 16px;\r\n    -webkit-transition: 0.3s;\r\n    -o-transition: 0.3s;\r\n    transition: 0.3s;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.text-right {\r\n    text-align: right;\r\n}\r\n\r\n.vendor-table tr:nth-child(even){background-color: #f2f2f2}\r\n\r\n.vendor-table tbody tr:hover {\r\n    background-color: #E6F7FF\r\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=33.b92dc189.chunk.js.map