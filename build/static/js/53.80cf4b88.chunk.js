(this["webpackJsonpetherealmachines.com"]=this["webpackJsonpetherealmachines.com"]||[]).push([[53],{1802:function(e,t,s){"use strict";s.r(t);var a=s(27),n=s(0),i=s(47),c=s(167),r=s(97),l=s(254),o=s(269),u=s(230),d=s(247),p=s(39),h=function(e,t,s,a){p.a.patch("/user/update-password/".concat(t),s,{headers:{Accept:"application/json",Authorization:a?"Token ".concat(a):"","Content-Type":"application/json"}}).then((function(t){e(t)})).catch((function(t){return e(t)}))},j=s(5),b=s(31),m=s(2),f=c.a.Content,O=c.a.Footer;t.default=Object(i.b)((function(e){return{basic:e.Basic.basic}}),(function(e){return{firstTime:function(t){e({type:j.u,value:t})}}}))((function(e){var t=Object(n.useState)(""),s=Object(a.a)(t,2),i=s[0],p=(s[1],Object(n.useState)("")),j=Object(a.a)(p,2),x=j[0],y=(j[1],Object(n.useState)("")),g=Object(a.a)(y,2),v=g[0],T=g[1],w=function(t){200===t.status?(e.firstTime(t.data),T(""),e.history.push("/user/profile")):t.response&&console.log(t.response)},N=function(e){e.target.name(e.target.value)};return Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{}),Object(m.jsxs)(c.a,{style:{marginTop:64,height:"100vh"},children:[Object(m.jsx)(f,{className:"login",children:Object(m.jsxs)("div",{className:"login-box",children:[Object(m.jsx)(l.a,{heading:Object(m.jsx)("b",{children:"Update Password"})}),Object(m.jsxs)(d.a,{onSubmitHandler:function(t){t.preventDefault();var s=Object(b.b)();i===x?s?h(w,e.basic._id,{password:i},s):console.log("Token is missing"):T("Password not matched")},children:[Object(m.jsx)(o.a,{type:"password",value:i,name:"password",prefixType:"lock",placeholder:"Enter New Password",onInputChange:N,isRequired:!0,labelName:"New Password"}),Object(m.jsx)(o.a,{type:"text",value:x,name:"reTypePassword",prefixType:"lock",placeholder:"Retype Password",onInputChange:N,isRequired:!0,labelName:"Retype Password"}),v,Object(m.jsx)(u.a,{isType:"primary",htmlTypes:"submit",isBlock:!0,children:"UPDATE"})]})]})}),Object(m.jsx)(O,{style:{textAlign:"center",marginBottom:64},children:"Copyright \xa9 2018. Ethereal Machines Pvt Ltd. All rights reserved."})]})]})}))},199:function(e,t,s){"use strict";s(0);var a=s(2);t.a=function(e){return Object(a.jsx)("div",{className:"form-control",children:e.children})}},230:function(e,t,s){"use strict";s(0);var a=s(379),n=s(2);t.a=function(e){return Object(n.jsx)(a.a,{htmlType:e.htmlTypes,block:!!e.isBlock,size:e.isSize?e.isSize:"large",type:e.isType?e.isType:"default",disabled:!!e.isDisabled&&e.isDisabled,shape:e.shape,className:e.classValue,onClick:e.onClick,children:e.children})}},247:function(e,t,s){"use strict";s(0);var a=s(2);t.a=function(e){return Object(a.jsx)("form",{onSubmit:e.onSubmitHandler,children:e.children})}},254:function(e,t,s){"use strict";s(0);var a=s(2);t.a=function(e){return Object(a.jsx)("div",{className:"heading",children:Object(a.jsx)("h1",{children:e.heading})})}},269:function(e,t,s){"use strict";s(0);var a=s(1786),n=s(168),i=s(199),c=s(2);t.a=function(e){return Object(c.jsxs)(i.a,{children:[Object(c.jsxs)("label",{htmlFor:e.name,children:[e.labelName,e.isRequired?Object(c.jsx)("span",{className:"star",children:"*"}):null]}),Object(c.jsx)(a.a,{type:e.type,className:e.classValue,placeholder:e.placeholder,prefix:e.prefixType?Object(c.jsx)(n.a,{type:e.prefixType,style:{color:"rgba(0,0,0,.25)"}}):null,name:e.name,value:e.value,onChange:e.onInputChange,required:!!e.isRequired&&e.isRequired,size:"large",readOnly:!!e.isReadonly&&e.isReadonly})]})}}}]);
//# sourceMappingURL=53.80cf4b88.chunk.js.map