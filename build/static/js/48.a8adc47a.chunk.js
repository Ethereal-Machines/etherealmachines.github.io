(this["webpackJsonpetherealmachines.com"]=this["webpackJsonpetherealmachines.com"]||[]).push([[48],{1742:function(e,t,n){},1775:function(e,t,n){"use strict";n.r(t);var c=n(27),a=n(0),s=n(47),i=n(87),r=n(348),o=(n(1742),n(5)),l=n(783),j=n(31),d=n(2);t.default=Object(s.b)((function(e){return{companies:e.Company.company,firstRunCompanies:e.Company.firstRun}}),(function(e){return{vendorDispatch:function(t){e({type:o.n,value:t})},dispatchUpdateFirstRunCompanies:function(t){e({type:o.L,value:t})}}}))((function(e){var t=Object(a.useState)(Object(j.b)()),n=Object(c.a)(t,2),s=n[0],o=(n[1],Object(a.useState)(e.firstRunCompanies)),h=Object(c.a)(o,2),b=h[0],u=(h[1],Object(a.useState)(!0)),p=Object(c.a)(u,2),O=(p[0],p[1],function(t){200===t.status?(e.getCompany(t.data),e.showLoader(!1),e.dispatchUpdateFirstRunCompanies(!1)):console.log(t.response)});return Object(a.useEffect)((function(){s&&e.firstRunCompanies&&Object(l.a)(O,s)}),[]),b?Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(i.a,{})}):0===e.companies.length?Object(d.jsx)("div",{className:"vendors-container flex-row u-text-center",children:Object(d.jsx)("h2",{children:Object(d.jsx)("b",{style:{color:"#bcbcbc"},children:"No Data"})})}):Object(d.jsxs)("div",{className:"vendors-container flex-column",children:[Object(d.jsx)("h2",{children:Object(d.jsx)("b",{children:"Vendor List"})}),Object(d.jsx)(r.a,{}),Object(d.jsx)("div",{className:"vendor-table",style:{overflowX:"auto"},children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Vendor Comapny"}),Object(d.jsx)("th",{children:"Location"}),Object(d.jsx)("th",{children:"Machines"}),Object(d.jsx)("th",{children:"Pentagram"}),Object(d.jsx)("th",{children:"Halo"}),Object(d.jsx)("th",{children:"Ray"})]})}),Object(d.jsx)("tbody",{children:e.companies.map((function(e){var t=0,n=0,c=0;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.location}),Object(d.jsx)("td",{className:"text-right",children:Object(d.jsx)("span",{children:e.products.length})}),e.products.length>0&&e.products.map((function(e){"Halo"===e.name?t++:"Pentagram"===e.name?n++:"Ray"===e.name&&c++})),Object(d.jsx)("td",{className:"text-right",children:Object(d.jsx)("span",{children:t})}),Object(d.jsx)("td",{className:"text-right",children:Object(d.jsx)("span",{children:n})}),Object(d.jsx)("td",{className:"text-right",children:Object(d.jsx)("span",{children:c})})]},e._id)}))})]})})]})}))},348:function(e,t,n){"use strict";n(0);var c=n(796),a=(n(349),n(2));t.a=function(e){return Object(a.jsx)(c.a,{className:e.classValue?e.classValue:"divider",dashed:e.isDashed,type:e.isType,orientation:e.isOrientation})}},349:function(e,t,n){},783:function(e,t,n){"use strict";var c=n(39);t.a=function(e,t){c.a.get("/user/company",{headers:{Accept:"application/json",Authorization:t?"Token ".concat(t):"","Content-Type":"application/json"}}).then((function(t){e(t)})).catch((function(t){return e(t)}))}},796:function(e,t,n){"use strict";var c=n(4),a=n(7),s=n(0),i=n(8),r=n.n(i),o=n(91),l=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};t.a=function(e){return s.createElement(o.a,null,(function(t){var n,i=t.getPrefixCls,o=t.direction,j=e.prefixCls,d=e.type,h=void 0===d?"horizontal":d,b=e.orientation,u=void 0===b?"center":b,p=e.className,O=e.children,x=e.dashed,m=e.plain,f=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),y=i("divider",j),v=u.length>0?"-".concat(u):u,g=!!O,N=r()(y,"".concat(y,"-").concat(h),(n={},Object(a.a)(n,"".concat(y,"-with-text"),g),Object(a.a)(n,"".concat(y,"-with-text").concat(v),g),Object(a.a)(n,"".concat(y,"-dashed"),!!x),Object(a.a)(n,"".concat(y,"-plain"),!!m),Object(a.a)(n,"".concat(y,"-rtl"),"rtl"===o),n),p);return s.createElement("div",Object(c.a)({className:N},f,{role:"separator"}),O&&s.createElement("span",{className:"".concat(y,"-inner-text")},O))}))}}}]);
//# sourceMappingURL=48.a8adc47a.chunk.js.map