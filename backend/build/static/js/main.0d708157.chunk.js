(this["webpackJsonpfull-stack-newsletter-sign-up"]=this["webpackJsonpfull-stack-newsletter-sign-up"]||[]).push([[0],{22:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"depositMoney",(function(){return u})),n.d(c,"withdrawMoney",(function(){return j})),n.d(c,"inputFirstName",(function(){return h})),n.d(c,"inputLastName",(function(){return b})),n.d(c,"inputPhoneNum",(function(){return x})),n.d(c,"inputEmail",(function(){return p})),n.d(c,"markCheckbox1",(function(){return f})),n.d(c,"markCheckbox2",(function(){return O})),n.d(c,"markCheckbox3",(function(){return m})),n.d(c,"markCheckbox4",(function(){return g})),n.d(c,"markCheckbox5",(function(){return v})),n.d(c,"radio1Selected",(function(){return y})),n.d(c,"radio2Selected",(function(){return k})),n.d(c,"radio3Selected",(function(){return C})),n.d(c,"radio4Selected",(function(){return w})),n.d(c,"inputTextArea",(function(){return N}));n(1);var r=n(7),i=n.n(r),a=(n(22),n(0)),o=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{class:"nav-wrapper",children:[Object(a.jsx)("a",{href:"#!",class:"brand-logo",children:"REI-DR Enterprises"}),Object(a.jsx)("a",{href:"#","data-target":"mobile-demo",class:"sidenav-trigger",children:Object(a.jsx)("i",{class:"material-icons",children:"menu"})}),Object(a.jsxs)("ul",{class:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Solutions"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Press"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Careers"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Contact"})})]})]})}),Object(a.jsxs)("ul",{class:"sidenav",id:"mobile-demo",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Solutions"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Press"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Why REI-DR"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#!",children:"Contact"})})]})]})},l=(n(24),n(2)),s=n(3),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"check1"===t.type?t.payload:e},u=function(e){return function(t){t({type:"deposit",payload:e})}},j=function(e){return function(t){t({type:"withdraw",payload:e})}},h=function(e){return function(t){t({type:"firstName",payload:e})}},b=function(e){return function(t){t({type:"lastName",payload:e})}},x=function(e){return function(t){t({type:"phoneNum",payload:e})}},p=function(e){return function(t){t({type:"email",payload:e})}},f=function(e){return function(t){t({type:"check1",payload:e})}},O=function(e){return function(t){t({type:"check2",payload:e})}},m=function(e){return function(t){t({type:"check3",payload:e})}},g=function(e){return function(t){t({type:"check4",payload:e})}},v=function(e){return function(t){t({type:"check5",payload:e})}},y=function(e){return function(e){e({type:"radio1Selected",payload:"0% - 10%"})}},k=function(e){return function(e){e({type:"radio2Selected",payload:"10% - 20%"})}},C=function(e){return function(e){e({type:"radio3Selected",payload:"20% - 50%"})}},w=function(e){return function(e){e({type:"radio4Selected",payload:"+50%"})}},N=function(e){return function(t){t({type:"textArea",payload:e})}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("#first_name, #last_name");M.CharacterCounter.init(e)}));var R=function(){Object(l.c)((function(e){return e.firstName})),Object(l.c)((function(e){return e.lastName}));var e=Object(l.b)(),t=Object(s.bindActionCreators)(c,e),n=t.inputFirstName,r=t.inputLastName;return Object(a.jsxs)("div",{class:"row",children:[Object(a.jsxs)("div",{class:"input-field col s6",children:[Object(a.jsx)("label",{class:"active",for:"first_name",children:"First Name"}),Object(a.jsx)("input",{id:"first_name",type:"text",class:"validate","data-length":"20",onChange:function(e){return n(e.target.value)}}),Object(a.jsx)("span",{class:"helper-text","data-error":"Please input within the character limit"})]}),Object(a.jsxs)("div",{class:"input-field col s6",children:[Object(a.jsx)("label",{class:"active",for:"last_name",children:"Last Name"}),Object(a.jsx)("input",{id:"last_name",type:"text",class:"validate","data-length":"20",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("span",{class:"helper-text","data-error":"Please input within the character limit"})]})]})},S=function(){Object(l.c)((function(e){return e.phoneNum}));var e=Object(l.b)(),t=Object(s.bindActionCreators)(c,e).inputPhoneNum;return Object(a.jsx)("div",{class:"row",children:Object(a.jsxs)("div",{class:"input-field col s12",children:[Object(a.jsx)("label",{class:"active",for:"phone",children:"Phone #"}),Object(a.jsx)("input",{id:"phone",type:"text",class:"validate",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",onChange:function(e){return t(e.target.value)}}),Object(a.jsx)("span",{class:"helper-text","data-error":"Please use the proper format: XXX-XXX-XXXX"})]})})};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("#email");M.CharacterCounter.init(e)}));var A=function(){Object(l.c)((function(e){return e.email}));var e=Object(l.b)(),t=Object(s.bindActionCreators)(c,e).inputEmail;return Object(a.jsx)("div",{class:"row",children:Object(a.jsxs)("div",{class:"input-field col s12",children:[Object(a.jsx)("label",{class:"active",for:"email",children:"Email"}),Object(a.jsx)("input",{id:"email",type:"email",class:"validate","data-length":"50",onChange:function(e){return t(e.target.value)}}),Object(a.jsx)("span",{class:"helper-text","data-error":"Please input a valid email"})]})})},E=function(){var e=Object(l.c)((function(e){return e.checkbox1})),t=Object(l.c)((function(e){return e.checkbox2})),n=Object(l.c)((function(e){return e.checkbox3})),r=Object(l.c)((function(e){return e.checkbox4})),i=Object(l.c)((function(e){return e.checkbox5})),o=Object(l.b)(),d=Object(s.bindActionCreators)(c,o),u=d.markCheckbox1,j=d.markCheckbox2,h=d.markCheckbox3,b=d.markCheckbox4,x=d.markCheckbox5;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"What real estate investing strategies do you want to learn more about?"}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"checkbox1",children:[Object(a.jsx)("input",{type:"checkbox",id:"checkbox1",onChange:function(){return"Buy and Hold"!==e?u("Buy and Hold"):""!==e?u(""):void 0}}),Object(a.jsx)("span",{children:"Buy and Hold"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"checkbox2",children:[Object(a.jsx)("input",{type:"checkbox",id:"checkbox2",onChange:function(){return"Fix and Flip"!==t?j("Fix and Flip"):""!==t?j(""):void 0}}),Object(a.jsx)("span",{children:"Fix and Flip"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"checkbox3",children:[Object(a.jsx)("input",{type:"checkbox",id:"checkbox3",onChange:function(){return"Wholesaling"!==n?h("Wholesaling"):""!==n?h(""):void 0}}),Object(a.jsx)("span",{children:"Wholesaling"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"checkbox4",children:[Object(a.jsx)("input",{type:"checkbox",id:"checkbox4",onChange:function(){return"BRRR"!==r?b("BRRR"):""!==r?b(""):void 0}}),Object(a.jsx)("span",{children:"BRRR"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"checkbox5",children:[Object(a.jsx)("input",{type:"checkbox",id:"checkbox5",onChange:function(){return"Long-term Rentals"!==i?x("Long-term Rentals"):""!==i?x(""):void 0}}),Object(a.jsx)("span",{children:"Long-term Rentals"})]})})]})},L=function(){Object(l.c)((function(e){return e.radioMarked}));var e=Object(l.b)(),t=Object(s.bindActionCreators)(c,e),n=t.radio1Selected,r=t.radio2Selected,i=t.radio3Selected,o=t.radio4Selected;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{class:"active",children:"Within what range do you want to make your down-payment?"}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"radio1",children:[Object(a.jsx)("input",{class:"with-gap",name:"group1",type:"radio",id:"radio1",onChange:function(e){return n(e.target.checked)}}),Object(a.jsx)("span",{children:"0% - 10%"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"radio2",children:[Object(a.jsx)("input",{class:"with-gap",name:"group1",type:"radio",id:"radio2",onChange:function(e){return r(e.target.checked)}}),Object(a.jsx)("span",{children:"10% - 20%"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"radio3",children:[Object(a.jsx)("input",{class:"with-gap",name:"group1",type:"radio",id:"radio3",onChange:function(e){return i(e.target.checked)}}),Object(a.jsx)("span",{children:"20% - 50%"})]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("label",{for:"radio4",children:[Object(a.jsx)("input",{class:"with-gap",name:"group1",type:"radio",id:"radio4",onChange:function(e){return o(e.target.checked)}}),Object(a.jsx)("span",{children:"+50%"})]})})]})};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("#comments");M.CharacterCounter.init(e)}));var F=function(){Object(l.c)((function(e){return e.comments}));var e=Object(l.b)(),t=Object(s.bindActionCreators)(c,e).inputTextArea;return Object(a.jsx)("div",{class:"row",children:Object(a.jsxs)("div",{class:"input-field col s12",children:[Object(a.jsx)("label",{class:"active",for:"comments",children:"Additional Comments (Optional)"}),Object(a.jsx)("textarea",{id:"comments",class:"materialize-textarea","data-length":"200",onChange:function(e){return t(e.target.value)}})]})})},P=function(){return Object(a.jsx)("button",{class:"btn waves-effect waves-light",type:"submit",name:"action",children:"Submit"})},B=function(){return Object(a.jsx)("div",{className:"form",children:Object(a.jsxs)("div",{class:"row form-container",children:[Object(a.jsx)("div",{className:"form-header",children:Object(a.jsx)("h5",{children:"Newsletter Sign-up"})}),Object(a.jsxs)("form",{class:"col s12",children:[Object(a.jsx)(R,{firstName:"First Name",lastName:"Last Name"}),Object(a.jsx)(S,{phoneNum:"Phone #"}),Object(a.jsx)(A,{email:"Email"}),Object(a.jsx)(E,{checkbox1:"Buy and Hold",checkbox2:"Fix and Flip",checkbox3:"Wholesaling",checkbox4:"BRRR",checkbox5:"Long-term Rentals"}),Object(a.jsx)(L,{radioLabel:"Within what range do you want to make your down-payment?",radio1:"0% - 10%",radio2:"10% - 20%",radio3:"20% - 50%",radio4:"+50%"}),Object(a.jsx)(F,{textAreaLabel:"Additional Comments (Optional)"}),Object(a.jsx)(P,{submitButtonLabel:"Submit"})]})]})})},W=function(){return Object(a.jsxs)("footer",{class:"page-footer",children:[Object(a.jsx)("div",{class:"container",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsxs)("div",{class:"col l6 s12",children:[Object(a.jsx)("h5",{class:"white-text",children:"REI-DR Enterprises"}),Object(a.jsx)("p",{class:"grey-text text-lighten-4",children:"Driven by purpose to empower families.  Curious about technology innovation for all.  Relentless with great customer experiences."})]}),Object(a.jsx)("div",{class:"col l4 offset-l2 s12",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"grey-text text-lighten-3",href:"#!",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"grey-text text-lighten-3",href:"#!",children:"Solutions"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"grey-text text-lighten-3",href:"#!",children:"Press"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"grey-text text-lighten-3",href:"#!",children:"Careers"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"grey-text text-lighten-3",href:"#!",children:"Contact"})})]})})]})}),Object(a.jsx)("div",{class:"footer-copyright",children:Object(a.jsxs)("div",{class:"container",children:["\xa9 2021 REI-DR Enterprises, Inc. All Rights Reserved.",Object(a.jsx)("a",{class:"grey-text text-lighten-4 right",href:"#!",children:"Privacy Statement"})]})})]})},X=function(){var e=Object(l.c)((function(e){return e.firstName})),t=Object(l.c)((function(e){return e.lastName})),n=Object(l.c)((function(e){return e.phoneNum})),c=Object(l.c)((function(e){return e.email})),r=Object(l.c)((function(e){return e.checkbox1})),i=Object(l.c)((function(e){return e.checkbox2})),o=Object(l.c)((function(e){return e.checkbox3})),s=Object(l.c)((function(e){return e.checkbox4})),d=Object(l.c)((function(e){return e.checkbox5})),u=Object(l.c)((function(e){return e.radioMarked})),j=Object(l.c)((function(e){return e.comments}));return console.log("*****NEWSLETTER STATE*****"),console.log("First Name: "+e),console.log("Last Name: "+t),console.log("Phone: "+n),console.log("Email: "+c),console.log("Checkbox 1: "+r),console.log("Checkbox 2: "+i),console.log("Checkbox 3: "+o),console.log("Checkbox 4: "+s),console.log("Checkbox 5: "+d),console.log("Radio Marked: "+u),console.log("Comments: "+j),Object(a.jsx)("div",{})},D=n(10),T=function(){return Object(a.jsx)(D.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{}),Object(a.jsx)(B,{}),Object(a.jsx)(W,{}),Object(a.jsx)(X,{})]})})},I=(n(33),n(16)),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"firstName"===t.type?t.payload:e},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"lastName"===t.type?t.payload:e},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"phoneNum"===t.type?t.payload:e},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"email"===t.type?t.payload:e},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"radio1Selected":case"radio2Selected":case"radio3Selected":case"radio4Selected":return t.payload;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"check2"===t.type?t.payload:e},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"check3"===t.type?t.payload:e},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"check4"===t.type?t.payload:e},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"check5"===t.type?t.payload:e},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"textArea"===t.type?t.payload:e},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"deposit":return e+t.payload;case"withdraw":return e-t.payload;default:return e}},Z=Object(s.combineReducers)({firstName:_,lastName:H,phoneNum:q,email:J,checkbox1:d,checkbox2:G,checkbox3:K,checkbox4:Q,checkbox5:U,radioMarked:z,comments:V,account:Y}),$=n(17),ee=Object(s.createStore)(Z,Object(I.composeWithDevTools)(Object(s.applyMiddleware)($.a)));i.a.render(Object(a.jsx)(l.a,{store:ee,children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0d708157.chunk.js.map