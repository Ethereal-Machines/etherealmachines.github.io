webpackJsonp([29],{1386:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{userComapny:e.Users.company}}function i(e){return{dispatchUserCompany:function(t){e({type:C._0,value:t})}}}Object.defineProperty(t,"__esModule",{value:!0});var c=a(0),u=a.n(c),m=a(150),p=a(88),d=a(1530),f=a(471),h=a(1531),b=a(1986),g=a(1547),y=a(3018),v=a(1513),N=a(1540),C=a(28),E=a(151),S=a(3019),j=a(1972),A=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),w=function(e){function t(){var e,a,o,l;r(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return a=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={gToken:Object(E.b)(),productName:"",serialNumber:"",subject:"",message:"",productNameWarn:!1,serialNumberWarn:!1,subjectWarn:!1,messageWarn:!1,showLoader:!1,errMsg:"",showUCLoader:!0},o.success=function(){p.m.success({title:"Successful",content:"Issue has been created :)"})},o.error=function(){p.m.error({title:"Oops",content:"Something went wrong. Please try again later :("})},o.getCompanyCallback=function(e){200===e.status||304===e.status?(o.setState({showUCLoader:!1}),o.props.dispatchUserCompany(e.data)):console.log(e.response)},o.callback=function(e){200===e.status?(o.success(),o.setState({showLoader:!1,errMsg:""})):(o.error(),o.setState({showLoader:!1,errMsg:""}),console.log(e.response))},o.onFormSubmit=function(e){if(e.preventDefault(),o.setState({showLoader:!0,errMsg:""}),o.validate()&&o.state.gToken){var t={productName:o.state.productName,serialNumber:o.state.serialNumber,subject:o.state.subject,description:o.state.message};o.outlineColor(),Object(S.a)(o.callback,t,o.state.gToken)}else o.outlineColor(),o.setState({showLoader:!1,errMsg:"Fill all * field"})},o.onInputChange=function(e){o.setState(n({},e.target.name,e.target.value))},o.outlineColor=function(){o.state.productName?o.setState({productNameWarn:!1}):o.setState({productNameWarn:!0}),o.state.serialNumber?o.setState({serialNumberWarn:!1}):o.setState({serialNumberWarn:!0}),o.state.subject?o.setState({subjectWarn:!1}):o.setState({subjectWarn:!0}),o.state.message?o.setState({messageWarn:!1}):o.setState({messageWarn:!0})},o.validate=function(){var e=o.state,t=e.productName,a=e.serialNumber,n=e.subject,r=e.message;return""!==t&&""!==a&&""!==n&&""!==r},l=a,s(o,l)}return o(t,e),A(t,[{key:"componentDidMount",value:function(){var e=this.state.gToken;e&&Object(j.b)(this.getCompanyCallback,e)}},{key:"render",value:function(){var e=this,t=["Pentagram","Ray","Halo"],a=[];return this.props.userComapny&&this.props.userComapny.products&&this.props.userComapny.products.map(function(e){return a.push(e.machineSRN)}),this.state.showUCLoader?u.a.createElement("div",{className:"container"},u.a.createElement(f.a,null)):u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"issue-form"},u.a.createElement(N.a,{heading:"Raise Issue"}),u.a.createElement(d.a,{onSubmitHandler:this.onFormSubmit},u.a.createElement(b.a,{onSelectChange:function(t){return e.setState({productName:t})},isRequired:!0,name:"productsName",labelName:"Product Name",dataSource:t,placeholder:"Select a Product",classValue:this.state.productNameWarn?"inputField-outline":null}),u.a.createElement(b.a,{onSelectChange:function(t){return e.setState({serialNumber:t})},isRequired:!0,name:"productsNumber",labelName:"Product Number",dataSource:a,placeholder:"Select Product Number",classValue:this.state.serialNumberWarn?"inputField-outline":null}),u.a.createElement(g.a,{type:"text",value:this.state.subject,name:"subject",labelName:"Subject",placeholder:"Enter subject",onInputChange:this.onInputChange,isRequired:!0,classValue:this.state.subjectWarn?"inputField-outline":null}),u.a.createElement(y.a,{name:"message",labelName:"Description",placeholder:"Enter Description",value:this.state.message,onInputChange:this.onInputChange,isRequired:!0,classValue:this.state.messageWarn?"inputField-outline":null}),this.state.errorMsg?u.a.createElement(h.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?u.a.createElement(f.a,null,"Creating..."):null,u.a.createElement("div",{className:"issue-form-button"},u.a.createElement(v.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"Submit")))))}}]),t}(c.Component);t.default=Object(m.connect)(l,i)(w)},1486:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=function(e){return r.a.createElement("div",{className:"form-control"},e.children)};t.a=s},1513:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(88),o=function(e){return r.a.createElement(s.c,{htmlType:e.htmlTypes,block:!!e.isBlock,size:e.isSize?e.isSize:"large",type:e.isType?e.isType:"default",disabled:!!e.isDisabled&&e.isDisabled,shape:e.shape,className:e.classValue,onClick:e.onClick},e.children)};t.a=o},1530:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=function(e){return r.a.createElement("form",{onSubmit:e.onSubmitHandler},e.children)};t.a=s},1531:function(e,t,a){"use strict";function n(e){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"error-box"},"Warning:\xa0",e.errorMsgs,"\xa0",e.children))}var r=a(0),s=a.n(r),o=a(1486),l=a(1578);a.n(l);t.a=n},1540:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=function(e){return r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,e.heading))};t.a=s},1547:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(88),o=a(1486),l=function(e){return r.a.createElement(o.a,null,r.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?r.a.createElement("span",{className:"star"},"*"):null),r.a.createElement(s.j,{type:e.type,className:e.classValue,placeholder:e.placeholder,prefix:e.prefixType?r.a.createElement(s.i,{type:e.prefixType,style:{color:"rgba(0,0,0,.25)"}}):null,name:e.name,value:e.value,onChange:e.onInputChange,required:!!e.isRequired&&e.isRequired,size:"large",readOnly:!!e.isReadonly&&e.isReadonly}))};t.a=l},1578:function(e,t,a){var n=a(1579);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1};r.transform=void 0;a(1360)(n,r);n.locals&&(e.exports=n.locals)},1579:function(e,t,a){t=e.exports=a(1359)(!0),t.push([e.i,".error-box{display:inline-block;list-style:none;text-align:left;color:red;font-size:.8rem}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/Ethereal/src/components/form/error-box/error-box.css"],names:[],mappings:"AAEC,WACG,qBAAsB,AACtB,gBAAiB,AACjB,gBAAiB,AACjB,UAAW,AACX,eAAkB,CACrB",file:"error-box.css",sourcesContent:[" \r\n\r\n .error-box {\r\n    display: inline-block;\r\n    list-style: none;\r\n    text-align: left;\r\n    color: red;\r\n    font-size: 0.8rem;\r\n}"],sourceRoot:""}])},1972:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return s});var n=a(470),r=function(e,t){n.a.get("/companycreate/",{headers:{Accept:"application/json",Authorization:t?"Token "+t:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})},s=function(e,t){n.a.patch("/user/forgot-password",t).then(function(t){e(t)}).catch(function(t){return e(t)})}},1986:function(e,t,a){"use strict";function n(e){return s.a.createElement(o.a,null,s.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?s.a.createElement("span",{className:"star"},"*"):null),s.a.createElement(l.a,{className:e.classValue,name:e.name,onSearch:e.onInputSearch,onSelect:e.onSelectChange,required:!!e.isRequired&&e.isRequired,size:"large",readOnly:!!e.isReadonly&&e.isReadonly,dataSource:e.dataSource,placeholder:e.placeholder,filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())}}))}var r=a(0),s=a.n(r),o=a(1486),l=a(88);t.a=n},3018:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(88),o=a(1486),l=s.j.TextArea,i=function(e){return r.a.createElement(o.a,null,r.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?r.a.createElement("span",{className:"star"},"*"):null),r.a.createElement(l,{placeholder:e.placeholder,className:e.classValue,name:e.name,value:e.value,onChange:e.onInputChange,size:"large",autosize:{minRows:e.minRows?e.minRows:6}}))};t.a=i},3019:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(470),r=function(e,t,a){n.a.post("/issues",t,{headers:{Accept:"application/json",Authorization:a?"Token "+a:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})}}});
//# sourceMappingURL=29.a90dad9b.chunk.js.map