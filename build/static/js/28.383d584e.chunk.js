webpackJsonp([28],{1394:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{firstRunCompanies:e.Company.firstRun,companies:e.Company.company}}function l(e){return{getCompany:function(t){e({type:g.n,value:t})},dispatchUpdateFirstRunCompanies:function(t){e({type:g.L,value:t})}}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),c=n.n(s),u=n(149),p=n(1683),m=n(1550),f=n(3114),h=n(3116),d=n(150),y=n(469),b=n(1987),g=n(28),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),C=function(e){function t(){var e,n,o,i;a(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={visible:!1,showLoader:!!o.props.firstRunCompanies,gToken:Object(d.b)()},o.callback=function(e){200===e.status?(o.props.getCompany(e.data),o.setState({showLoader:!1}),o.props.dispatchUpdateFirstRunCompanies(!1)):console.log(e.response)},o.openModal=function(e){o.setState({visible:e})},o.cancelClick=function(e){o.setState({visible:!1})},i=n,r(o,i)}return o(t,e),v(t,[{key:"componentDidMount",value:function(){var e=this.state.gToken;e&&this.props.firstRunCompanies&&Object(b.a)(this.callback,e)}},{key:"render",value:function(){return this.state.showLoader&&!this.props.companies?c.a.createElement(y.a,null):this.props.companies?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"issue-form"},c.a.createElement(p.a,{heading:"Create Company",showModal:this.state.visible,cancelClick:this.cancelClick,footer:null},c.a.createElement(f.a,{cancelClick:this.cancelClick})),c.a.createElement(m.a,{heading:"Create New User"}),c.a.createElement(h.a,{openModal:this.openModal,companies:this.props.companies}))):null}}]),t}(s.Component);t.default=Object(u.connect)(i,l)(C)},1489:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"form-control"},e.children)};t.a=o},1523:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(87),i=function(e){return r.a.createElement(o.c,{htmlType:e.htmlTypes,block:!!e.isBlock,size:e.isSize?e.isSize:"large",type:e.isType?e.isType:"default",disabled:!!e.isDisabled&&e.isDisabled,shape:e.shape,className:e.classValue,onClick:e.onClick},e.children)};t.a=i},1540:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("form",{onSubmit:e.onSubmitHandler},e.children)};t.a=o},1541:function(e,t,n){"use strict";function a(e){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"error-box"},"Warning:\xa0",e.errorMsgs,"\xa0",e.children))}var r=n(0),o=n.n(r),i=n(1489),l=n(1588);n.n(l);t.a=a},1550:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(e){return r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,e.heading))};t.a=o},1557:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(87),i=n(1489),l=function(e){return r.a.createElement(i.a,null,r.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?r.a.createElement("span",{className:"star"},"*"):null),r.a.createElement(o.j,{type:e.type,className:e.classValue,placeholder:e.placeholder,prefix:e.prefixType?r.a.createElement(o.i,{type:e.prefixType,style:{color:"rgba(0,0,0,.25)"}}):null,name:e.name,value:e.value,onChange:e.onInputChange,required:!!e.isRequired&&e.isRequired,size:"large",readOnly:!!e.isReadonly&&e.isReadonly}))};t.a=l},1588:function(e,t,n){var a=n(1589);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(1360)(a,r);a.locals&&(e.exports=a.locals)},1589:function(e,t,n){t=e.exports=n(1359)(!0),t.push([e.i,".error-box{display:inline-block;list-style:none;text-align:left;color:red;font-size:.8rem}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/etherealfrontendnew/src/components/form/error-box/error-box.css"],names:[],mappings:"AAEC,WACG,qBAAsB,AACtB,gBAAiB,AACjB,gBAAiB,AACjB,UAAW,AACX,eAAkB,CACrB",file:"error-box.css",sourcesContent:[" \r\n\r\n .error-box {\r\n    display: inline-block;\r\n    list-style: none;\r\n    text-align: left;\r\n    color: red;\r\n    font-size: 0.8rem;\r\n}"],sourceRoot:""}])},1628:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(87),i=n(1489),l=function(e){return r.a.createElement(i.a,null,r.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?r.a.createElement("span",{className:"star"},"*"):null,"\xa0"),r.a.createElement(o.n,Object.assign({showSearch:!0,className:e.classValue,placeholder:e.placeholder,optionFilterProp:"children",onChange:e.onSelect,size:"large",required:!!e.isRequired&&e.isRequired,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},e),e.children))};t.a=l},1683:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(87),i=function(e){return r.a.createElement(o.m,{title:e.heading,visible:e.showModal,onOk:e.okClick,onCancel:e.cancelClick,okText:e.okText?e.okText:"Ok",cancelText:"Cancel",okType:e.okBType?e.okBType:"primary",cancelType:e.cancelBType?e.cancelBType:"default",footer:e.footer,maskClosable:e.maskClosable,width:768},e.children)};t.a=i},1987:function(e,t,n){"use strict";var a=n(468),r=function(e,t){a.a.get("/user/company",{headers:{Accept:"application/json",Authorization:t?"Token "+t:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r},3114:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{addCompany:function(t){e({type:b.b,value:t})}}}var s=n(0),c=n.n(s),u=n(149),p=n(1540),m=n(1557),f=n(1523),h=n(1541),d=n(469),y=n(3115),b=n(28),g=n(150),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),C=function(e){function t(){var e,n,i,l;r(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={name:"",location:"",nameWarn:!1,locationWarn:!1,errorMsg:"",showLoader:!1},i.callback=function(e){200===e.status?(i.reset(),i.props.addCompany(e.data),i.props.cancelClick(!1)):(e.response,i.setState({errorMsg:"Something went wrong. Please try again later &#x2639;",showLoader:!1}))},i.onFormSubmit=function(e){var t=Object(g.b)();e.preventDefault(),i.setState({showLoader:!0,errorMsg:""});var n=i.state,a=n.name,r=n.location;if(i.validate()){i.outlineColor();var o={name:a,location:r};o&&t&&Object(y.a)(i.callback,o,t)}else i.outlineColor(),i.setState({errorMsg:"Please fill all the required field"})},i.onInputChange=function(e){i.setState(a({},e.target.name,e.target.value))},i.reset=function(){i.setState({name:"",location:"",errorMsg:"",showLoader:!1})},i.outlineColor=function(){i.state.name.trim()?i.setState({nameWarn:!1}):i.setState({nameWarn:!0}),i.state.location.trim()?i.setState({locationWarn:!1}):i.setState({locationWarn:!0})},i.validate=function(){var e=i.state,t=e.name,n=e.location;return""!==t.trim()&&""!==n.trim()},l=n,o(i,l)}return i(t,e),v(t,[{key:"render",value:function(){return c.a.createElement(p.a,{onSubmitHandler:this.onFormSubmit},c.a.createElement(m.a,{type:"text",value:this.state.name,name:"name",labelName:"Company Name",placeholder:"Enter Company Name",onInputChange:this.onInputChange,isRequired:!0,classValue:this.state.nameWarn?"inputField-outline":null}),c.a.createElement(m.a,{type:"text",value:this.state.location,name:"location",labelName:"Company Location",placeholder:"Enter Company Location",onInputChange:this.onInputChange,isRequired:!0,classValue:this.state.locationWarn?"inputField-outline":null}),this.state.errorMsg?c.a.createElement(h.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?c.a.createElement(d.a,null,"Creating..."):null,c.a.createElement("div",{className:"issue-form-button"},c.a.createElement(f.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"Submit")))}}]),t}(s.Component);t.a=Object(u.connect)(null,l)(C)},3115:function(e,t,n){"use strict";var a=n(468),r=function(e,t,n){a.a.post("/user/company",t,{headers:{Accept:"application/json",Authorization:n?"Token "+n:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r},3116:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),s=n.n(l),c=n(87),u=n(1540),p=n(1557),m=n(1523),f=n(1628),h=n(1541),d=n(469),y=n(3117),b=n(150),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=c.n.Option,C=function(e){function t(){var e,n,i,l;r(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={name:"",email:"",companyId:"",group:"",phone:"",companyIdWarn:!1,groupWarn:!1,errorMsg:"",showLoader:!1},i.reset=function(){i.setState({name:"",email:"",companyId:"",group:"",phone:"",errorMsg:"",showLoader:!1})},i.callback=function(e){200===e.status?(i.reset(),console.log(e.data)):e.response?i.setState({errorMsg:e.response.data._message,showLoader:!1}):i.setState({errorMsg:"Something went wrong. Please try again later &#x2639;",showLoader:!1})},i.onFormSubmit=function(e){var t=Object(b.b)();i.setState({showLoader:!0,errorMsg:""}),e.preventDefault();var n=i.state,a=n.name,r=n.email,o=n.companyId,l=n.group,s=n.phone;if(i.validate()){i.outlineColor();var c={name:a,email:r,companyId:o,group:l,phone:s};c&&t&&Object(y.a)(i.callback,c,t)}else i.outlineColor(),i.setState({errorMsg:"Please fill all the required field"})},i.onCompanySelect=function(e){i.setState({companyId:e})},i.onUserRole=function(e){i.setState({group:e})},i.onInputChange=function(e){i.setState(a({},e.target.name,e.target.value))},i.outlineColor=function(){i.state.companyId?i.setState({companyIdWarn:!1}):i.setState({companyIdWarn:!0}),i.state.group?i.setState({groupWarn:!1}):i.setState({groupWarn:!0})},i.validate=function(){var e=i.state,t=e.name,n=e.email,a=e.companyId,r=e.group,o=e.phone;return""!==t&&""!==n&&""!==a&&""!==r&&""!==o},l=n,o(i,l)}return i(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props.companies;return s.a.createElement(u.a,{onSubmitHandler:this.onFormSubmit},s.a.createElement(f.a,{labelName:"Comapny",placeholder:"Select User Company",optionFilterProp:"children",onSelect:this.onCompanySelect,size:"large",isRequired:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},classValue:this.state.companyIdWarn?"inputField-outline":null},t.map(function(e){return s.a.createElement(v,{value:e._id,key:e._id},e.name)})),s.a.createElement(h.a,{errorMsgs:"If company is not listed above then create company"},s.a.createElement(m.a,{isSize:"small",isType:"danger",onClick:function(){return e.props.openModal(!0)}},"Click")),s.a.createElement(f.a,{labelName:"User Role",placeholder:"Select User Role",optionFilterProp:"children",onSelect:this.onUserRole,size:"large",isRequired:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},classValue:this.state.groupWarn?"inputField-outline":null},s.a.createElement(v,{value:"user"},"User"),s.a.createElement(v,{value:"admin"},"Admin")),s.a.createElement(p.a,{type:"text",value:this.state.name,name:"name",labelName:"Name ",placeholder:"Enter Name",onInputChange:this.onInputChange,isRequired:!0}),s.a.createElement(p.a,{type:"email",value:this.state.email,name:"email",labelName:"Email",placeholder:"Enter Email",onInputChange:this.onInputChange,isRequired:!0}),s.a.createElement(p.a,{type:"number",value:this.state.phone,name:"phone",labelName:"Phone Number",placeholder:"Enter Phone",onInputChange:this.onInputChange,isRequired:!0}),this.state.errorMsg?s.a.createElement(h.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?s.a.createElement(d.a,null,"Creating..."):null,s.a.createElement("div",{className:"issue-form-button"},s.a.createElement(m.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"Submit")))}}]),t}(l.Component);t.a=C},3117:function(e,t,n){"use strict";var a=n(468),r=function(e,t,n){a.a.post("/user",t,{headers:{Accept:"application/json",Authorization:n?"Token "+n:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r}});
//# sourceMappingURL=28.383d584e.chunk.js.map