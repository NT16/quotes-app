(this["webpackJsonpfav-quotes"]=this["webpackJsonpfav-quotes"]||[]).push([[0],{45:function(e,t,c){},47:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(18),l=c.n(s),i=(c(45),c(9)),r=c(5),o=c(14),u=(c(46),c(47),c(78)),j=c(12),b=c.n(j),d=c(1);var h=function(e){var t=e.quote;return Object(d.jsx)("div",{className:"card quote text-center",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(d.jsx)("p",{children:Object(d.jsx)("q",{children:t.text})}),Object(d.jsx)("footer",{className:"blockquote-footer",children:t.by&&Object(d.jsxs)("p",{children:["By - ",t.by]})})]})})})};var O=function(e){var t=e.quotes,c=e.dispatch,a=e.config;return Object(n.useEffect)((function(){0===t.length&&(console.log("getting my quotes: init"),c({type:"FETCH_INIT"}),b.a.get("/quotes/me",a).then((function(e){console.log("success"),c({type:"SET_MINE",data:e.data})})).catch((function(e){return c({type:"FETCH_ERROR"})})))}),[t]),Object(d.jsx)("div",{className:"center",children:0!==t.length&&t.map((function(e){return Object(d.jsx)(h,{quote:e},e._id)}))})};var m=function(e){var t=e.quotes,c=e.dispatch,a=e.config;return Object(n.useEffect)((function(){console.log("getting Public quotes: init"),c({type:"FETCH_INIT"}),b.a.get("/quotes",a).then((function(e){console.log("success"),c({type:"SET_ALL",data:e.data})})).catch((function(e){return c({type:"FETCH_ERROR"})}))}),[]),Object(d.jsx)("div",{children:0!==t.length&&t.map((function(e){return Object(d.jsx)(h,{quote:e},e._id)}))})};var f=function(e){var t=e.dispatch,c=Object(r.f)(),a=Object(n.useState)(""),s=Object(i.a)(a,2),l=s[0],o=s[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),h=j[0],O=j[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("login init"),b.a.post("/users/login",{email:l,password:h}).then((function(e){console.log("login success",e),t({type:"SET_USER",data:e.data}),c.push("/me")})).catch((function(e){console.log("login fail",e),t({type:"FETCH_ERROR",data:e.message})}))},children:[Object(d.jsxs)("div",{className:"form-group mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"email"}),Object(d.jsx)("input",{value:l,id:"email",type:"email",onChange:function(e){return o(e.target.value)},className:"form-control"})]}),Object(d.jsxs)("div",{className:"form-group  mb-3",children:[Object(d.jsx)("label",{htmlFor:"pw",className:"form-label",children:"password"}),Object(d.jsx)("input",{value:h,id:"pw",type:"password",onChange:function(e){return O(e.target.value)},className:"form-control"})]}),Object(d.jsx)("button",{type:"submit",children:"Go"})]})]})};var g=function(e){var t=e.dispatch,c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],l=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),u=o[0],j=o[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),m=O[0],f=O[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Sign up"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/users",{email:s,username:u,password:m}).then((function(e){console.log("signup success",e),t({type:"SET_USER",data:e.data})})).catch((function(e){return console.log(e)}))},children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{value:s,id:"email",onChange:function(e){return l(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{value:u,id:"username",onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"pw",children:"Password"}),Object(d.jsx)("input",{value:m,id:"pw",onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Go"})]})]})};var x=function(e){var t=e.config,c=e.dispatch,a=Object(n.useState)(""),s=Object(i.a)(a,2),l=s[0],r=s[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),j=u[0],h=u[1];return Object(d.jsxs)("div",{className:"add",children:[Object(d.jsx)("h2",{children:"Add Quote"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={text:l};0!==j.length&&(n.by=j),!0===e.target.isPublic.checked&&(n.private=!1),console.log("posting this quote",n),b.a.post("/quotes",n,t).then((function(e){console.log(e),c({type:"ADD_QUOTE",data:n})})).catch((function(e){return c({type:"ERROR",data:e.message})}))},children:[Object(d.jsxs)("div",{className:"mb-1",children:[Object(d.jsx)("label",{className:"form-label",children:"Quote "}),Object(d.jsx)("input",{value:l,onChange:function(e){return r(e.target.value)},className:"form-control"})]}),Object(d.jsxs)("div",{className:"mb-1",children:[Object(d.jsx)("label",{className:"form-label",children:"By "}),Object(d.jsx)("input",{value:j,onChange:function(e){return h(e.target.value)},className:"form-control"})]}),Object(d.jsxs)("div",{className:"form-check mb-1",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",id:"isPublic"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"isPublic",children:"Public"})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]})]})},p=c(40),v=c(11),N={all:[],mine:[],token:null,error:null,loading:!1,user:null};var E=function(e,t){switch(t.type){case"SET_USER":return Object(v.a)(Object(v.a)({},e),{},{token:t.data.token,user:t.data.user});case"SET_ALL":return Object(v.a)(Object(v.a)({},e),{},{loading:!1,all:t.data});case"SET_MINE":return Object(v.a)(Object(v.a)({},e),{},{loading:!1,mine:t.data});case"FETCH_INIT":return Object(v.a)(Object(v.a)({},e),{},{loading:!0,error:null});case"FETCH_ERROR":return Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:t.data});case"ADD_QUOTE":return Object(v.a)(Object(v.a)({},e),{},{mine:[].concat(Object(p.a)(e.mine),[t.data])});case"LOGOUT":return N;default:return e}};var y=function(){var e,t=Object(n.useReducer)(E,N),c=Object(i.a)(t,2),a=c[0],s=c[1],l=Object(n.useState)({}),j=Object(i.a)(l,2),h=j[0],p=j[1],v=Object(r.f)();function y(e){console.log("logout"),b.a.post(e,{},h).then((function(e){s({type:"LOGOUT"}),v.push("/")})).catch((function(e){console.log("logout fail"),s({type:"FETCH_ERROR",data:e.message})}))}return console.log("currenmt state",a),Object(n.useEffect)((function(){null!==a.token&&p({headers:{Authorization:"Bearer ".concat(a.token)}})}),[a.token]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"center",children:"Quote it"}),Object(d.jsxs)(o.a,{children:[Object(d.jsxs)("ul",{className:"nav nav-tabs justify-content-end navigation-bar",children:[!a.token&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/signup",className:"nav-link",children:"Sign up"})})]}),a.token&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/public",className:"nav-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/me",className:"nav-link",children:"Me"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/add",className:"nav-link",children:"Add"})})]}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.a,{children:(null===a||void 0===a||null===(e=a.user)||void 0===e?void 0:e.username)&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(u.a.Toggle,{variant:"success",id:"dropdown-basic",children:["Hi, ",a.user.username]}),Object(d.jsxs)(u.a.Menu,{children:[Object(d.jsx)(u.a.Item,{href:"#/logout",onClick:function(){return y("/users/logout")},children:"Logout"}),Object(d.jsx)(u.a.Item,{href:"#/logoutall",onClick:function(){return y("/users/logoutAll")},children:"Logout All"})]})]})})})]}),Object(d.jsx)("div",{className:"notification",children:a.error&&Object(d.jsxs)("div",{className:"error-notif",children:["Error:  ",a.error]})}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/add",children:Object(d.jsx)(x,{dispatch:s,config:h})}),Object(d.jsx)(r.a,{path:"/me",children:Object(d.jsx)(O,{quotes:a.mine,dispatch:s,config:h})}),Object(d.jsx)(r.a,{path:"/public",children:Object(d.jsx)(m,{quotes:a.all,dispatch:s,config:h})}),Object(d.jsx)(r.a,{path:"/signup",children:Object(d.jsx)(g,{dispatch:s})}),Object(d.jsx)(r.a,{path:"/",children:Object(d.jsx)(f,{dispatch:s})})]})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),k()}},[[73,1,2]]]);
//# sourceMappingURL=main.02a8e097.chunk.js.map