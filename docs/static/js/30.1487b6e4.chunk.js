webpackJsonp([30],{1382:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),l=a.n(i),c=a(88),u=a(1671),p=a(496),m=a(1540),f=a(1547),d=a(1513),h=a(1530),g=a(497),b=a(3010),y=a(151),v=a(28),E=a(150),w=a(1531),k=a(111),C=a(471),S=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),T=c.k.Content,A=c.k.Footer,O=function(e){function t(){var e,a,s,i;n(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return a=s=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),s.state={visible:!1,userName:"",password:"",url:s.props.redirectURL,errorMsg:"",showLoader:!1,loginLoader:!0},s.tokenVerifyCallback=function(e){200===e.status?(s.setState({loginLoader:!1}),s.props.basic(e.data)):(s.setState({loginLoader:!1}),console.log(e.response))},s.callback=function(e){200===e.status?(s.setState({showLoader:!1,errorMsg:""}),sessionStorage.setItem("jwt",e.data.auth_token),s.props.basic(e.data.user),!1===e.data.user.firstTime?s.props.history.push("/user/updatePassword"):"pending"!==e.data.user.approval&&null!==e.data.user.approval||!0!==e.data.user.firstTime?e.data.user.firstTime&&"approved"===e.data.user.approval&&(s.props.login(),s.state.url&&"/"!==s.state.url?s.props.history.push(s.state.url):s.props.history.push("/dashboard")):s.props.history.push("/user/profile")):e.response?(s.setState({showLoader:!1}),s.setState({errorMsg:"Please enter valid username or password"})):(s.setState({showLoader:!1}),s.setState({errorMsg:"Something went wrong. Please try again latter!"}))},s.onFormSubmit=function(e){e.preventDefault(),s.setState({showLoader:!0,errorMsg:""});var t={email:s.state.userName,password:s.state.password};s.state.userName&&s.state.password?Object(g.a)(s.callback,t):s.setState({errorMsg:"Please enter valid username or password"})},s.onInputChange=function(e){s.setState(r({},e.target.name,e.target.value))},s.openModal=function(){s.setState({visible:!0})},s.cancelClick=function(){s.setState({visible:!1})},i=a,o(s,i)}return s(t,e),S(t,[{key:"componentWillMount",value:function(){y.b?Object(g.b)(this.tokenVerifyCallback,Object(y.b)()):this.setState({loginLoader:!1})}},{key:"render",value:function(){return this.state.loginLoader?l.a.createElement(c.k,null,l.a.createElement(p.a,null),l.a.createElement(c.k,{style:{marginTop:64,height:"93vh"}},l.a.createElement(T,{className:"login"},l.a.createElement(C.a,null,"Loading...")))):this.props.isLoggedIn&&"approved"===this.props.isApproved&&Object(y.b)()?l.a.createElement(k.d,{to:this.state.url}):l.a.createElement(c.k,null,l.a.createElement(p.a,null),l.a.createElement(c.k,{style:{marginTop:64,height:"93vh"}},l.a.createElement(u.a,{heading:"Enter Your Registered Email.",showModal:this.state.visible,cancelClick:this.cancelClick,footer:null},l.a.createElement(b.a,{cancelClick:this.cancelClick})),l.a.createElement(T,{className:"login"},l.a.createElement("div",{className:"login-box"},l.a.createElement(m.a,{heading:l.a.createElement("b",null,"Sign In")}),l.a.createElement(h.a,{onSubmitHandler:this.onFormSubmit},l.a.createElement(f.a,{type:"text",value:this.state.userName,name:"userName",prefixType:"user",placeholder:"Enter Username",onInputChange:this.onInputChange,isRequired:!0,labelName:"User Name"}),l.a.createElement(f.a,{type:"password",value:this.state.password,name:"password",prefixType:"lock",placeholder:"Enter Password",onInputChange:this.onInputChange,isRequired:!0,labelName:"Password"}),this.state.errorMsg?l.a.createElement(w.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?l.a.createElement(C.a,null,"Logging..."):null,l.a.createElement("div",{className:"login-button-group"},l.a.createElement("div",{className:"login-group"},l.a.createElement(d.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"LOGIN")),l.a.createElement("div",{className:"login-group"},l.a.createElement(d.a,{isType:"danger",isBlock:!0,onClick:this.openModal},"FORGOT PASSWORD")))))),l.a.createElement(A,{style:{textAlign:"center",marginBottom:64}},"Copyright \xa9 2018. Ethereal Machines Pvt Ltd. All rights reserved.")))}}]),t}(i.Component),L=function(e){var t=void 0,a=void 0;return void 0===e.Login||null===e.Login?(t=!1,a="/loginasims"):(t=e.Login.isLogedIn,a=e.Login.redirect),{isLoggedIn:t,isApproved:e.Basic.basic.approval,redirectURL:a}},j=function(e){return{login:function(){e({type:v.x})},basic:function(t){e({type:v.Z,value:t})}}};t.default=Object(E.connect)(L,j)(O)},1486:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=function(e){return n.a.createElement("div",{className:"form-control"},e.children)};t.a=o},1513:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(88),s=function(e){return n.a.createElement(o.c,{htmlType:e.htmlTypes,block:!!e.isBlock,size:e.isSize?e.isSize:"large",type:e.isType?e.isType:"default",disabled:!!e.isDisabled&&e.isDisabled,shape:e.shape,className:e.classValue,onClick:e.onClick},e.children)};t.a=s},1530:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=function(e){return n.a.createElement("form",{onSubmit:e.onSubmitHandler},e.children)};t.a=o},1531:function(e,t,a){"use strict";function r(e){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"error-box"},"Warning:\xa0",e.errorMsgs,"\xa0",e.children))}var n=a(0),o=a.n(n),s=a(1486),i=a(1578);a.n(i);t.a=r},1540:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=function(e){return n.a.createElement("div",{className:"heading"},n.a.createElement("h1",null,e.heading))};t.a=o},1547:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(88),s=a(1486),i=function(e){return n.a.createElement(s.a,null,n.a.createElement("label",{htmlFor:e.name},e.labelName,e.isRequired?n.a.createElement("span",{className:"star"},"*"):null),n.a.createElement(o.j,{type:e.type,className:e.classValue,placeholder:e.placeholder,prefix:e.prefixType?n.a.createElement(o.i,{type:e.prefixType,style:{color:"rgba(0,0,0,.25)"}}):null,name:e.name,value:e.value,onChange:e.onInputChange,required:!!e.isRequired&&e.isRequired,size:"large",readOnly:!!e.isReadonly&&e.isReadonly}))};t.a=i},1578:function(e,t,a){var r=a(1579);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!1};n.transform=void 0;a(1360)(r,n);r.locals&&(e.exports=r.locals)},1579:function(e,t,a){t=e.exports=a(1359)(!0),t.push([e.i,".error-box{display:inline-block;list-style:none;text-align:left;color:red;font-size:.8rem}","",{version:3,sources:["D:/Work/Actualize/Ethereal/Github/Ethereal/src/components/form/error-box/error-box.css"],names:[],mappings:"AAEC,WACG,qBAAsB,AACtB,gBAAiB,AACjB,gBAAiB,AACjB,UAAW,AACX,eAAkB,CACrB",file:"error-box.css",sourcesContent:[" \r\n\r\n .error-box {\r\n    display: inline-block;\r\n    list-style: none;\r\n    text-align: left;\r\n    color: red;\r\n    font-size: 0.8rem;\r\n}"],sourceRoot:""}])},1671:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(88),s=function(e){return n.a.createElement(o.m,{title:e.heading,visible:e.showModal,onOk:e.okClick,onCancel:e.cancelClick,okText:e.okText?e.okText:"Ok",cancelText:"Cancel",okType:e.okBType?e.okBType:"primary",cancelType:e.cancelBType?e.cancelBType:"default",footer:e.footer,maskClosable:e.maskClosable,width:768},e.children)};t.a=s},1972:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return o});var r=a(470),n=function(e,t){r.a.get("/companycreate/",{headers:{Accept:"application/json",Authorization:t?"Token "+t:"","Content-Type":"application/json"}}).then(function(t){e(t)}).catch(function(t){return e(t)})},o=function(e,t){r.a.patch("/user/forgot-password",t).then(function(t){e(t)}).catch(function(t){return e(t)})}},3010:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(0),l=a.n(i),c=a(88),u=a(1530),p=a(1547),m=a(1513),f=a(1531),d=a(471),h=a(1972),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),b=function(e){function t(){var e,a,s,i;n(this,t);for(var l=arguments.length,u=Array(l),p=0;p<l;p++)u[p]=arguments[p];return a=s=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),s.state={email:"",emailWarn:!1,errorMsg:"",showLoader:!1},s.success=function(){c.m.success({title:"Successful",content:"Your new password has been sent to your email."})},s.callback=function(e){200===e.status?(s.reset(),s.success(),s.props.cancelClick()):404===e.response.status?s.setState({errorMsg:e.response.data.statusText,showLoader:!1}):s.setState({errorMsg:"Something went wrong. Please try again later &#x2639;",showLoader:!1})},s.onFormSubmit=function(e){e.preventDefault(),s.reset(),s.setState({showLoader:!0});var t=s.state.email;if(s.validate()){s.outlineColor();var a={email:t};a&&Object(h.a)(s.callback,a)}else s.outlineColor(),s.setState({showLoader:!1,errorMsg:"Please fill all the required field"})},s.onInputChange=function(e){s.setState(r({},e.target.name,e.target.value))},s.reset=function(){s.setState({email:"",errorMsg:"",showLoader:!1})},s.outlineColor=function(){s.state.email.trim()?s.setState({emailWarn:!1}):s.setState({emailWarn:!0})},s.validate=function(){return""!==s.state.email.trim()},i=a,o(s,i)}return s(t,e),g(t,[{key:"render",value:function(){return l.a.createElement(u.a,{onSubmitHandler:this.onFormSubmit},l.a.createElement(p.a,{type:"email",value:this.state.email,name:"email",labelName:"Email",placeholder:"Enter Your Email",onInputChange:this.onInputChange,isRequired:!0,classValue:this.state.emailWarn?"inputField-outline":null}),this.state.errorMsg?l.a.createElement(f.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?l.a.createElement(d.a,null,"Requesting..."):null,l.a.createElement("div",{className:"issue-form-button"},l.a.createElement(m.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"Submit")))}}]),t}(i.Component);t.a=b}});
//# sourceMappingURL=30.1487b6e4.chunk.js.map