(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[25],{1225:function(e,t,a){"use strict";var n=a(214);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),s=(0,n(a(284)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=s},1226:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1741:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(594),c=a(1177),o=a(377),l=a(29),u=a(26),i=a(2),m=a(1184),d=a(1216),p=a(1187),b=a(78),f=a(1138),v=a(1225),h=a.n(v),g=Object(s.a)((function(){return{root:{}}}));var E=function(e){var t=e.className,a=Object(l.a)(e,["className"]),n=g();return r.a.createElement(m.a,Object.assign({className:Object(i.default)(n.root,t),container:!0,justify:"space-between",spacing:3},a),r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{separator:r.a.createElement(h.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(p.a,{variant:"body1",color:"inherit",to:"/admin/welcome",component:u.a},"Management"),r.a.createElement(p.a,{variant:"body1",color:"inherit",to:"/admin/management/products",component:u.a},"Sensors"),r.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Add Sensor")),r.a.createElement(b.a,{variant:"h3",color:"textPrimary"},"Assign Sensor")),r.a.createElement(m.a,{item:!0},r.a.createElement(f.a,{component:u.a,to:"/admin/management/sensors"},"Cancel")))},j=a(17),O=a.n(j),S=a(41),y=a(33),N=a(49),k=a(38),x=a.n(k),C=a(1237),w=a(1239),A=a(1226),P=a(114),V=a(1170),B=a(1174),U=a(1183),W=a(1173),I=a(1150),M=a(368),q=a(1128),z=Object(s.a)((function(){return{root:{},editor:{"& .ql-editor":{height:400}}}}));var F=function(e){var t=e.className,a=Object(l.a)(e,["className"]),s=z(),c=Object(N.g)(),o=Object(n.useState)([]),u=Object(y.a)(o,2),d=u[0],p=u[1],b=Object(n.useState)(null),v=Object(y.a)(b,2),h=v[0],g=v[1],E=Object(n.useState)(null),j=Object(y.a)(E,2),k=j[0],F=j[1],J=Object(n.useState)(null),L=Object(y.a)(J,2),T=L[0],_=L[1],H=Object(n.useState)(!0),R=Object(y.a)(H,2),D=R[0],G=R[1],K=Object(A.a)(),Q=Object(P.useSnackbar)().enqueueSnackbar,X=Object(n.useCallback)((function(){x.a.get("http://localhost:5000/user/sensorAssignedUsers").then((function(e){K.current&&p(e.data.sensor)}))}),[K]);Object(n.useEffect)((function(){X()}),[]);var Y=function(){var e=Object(S.a)(O.a.mark((function e(t){var a,n,r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(t.target.value),a=t.target.value,console.log(a),n={sensor:a},r={headers:{"content-type":"application/json"}},e.prev=5,e.next=8,x.a.post("http://localhost:5000/user/sensorAgainstUser",n,r);case 8:s=e.sent,console.log("response",s),F(s.data.id),_(s.data.name),G(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0.response);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{initialValues:{sensor:"",userCode:"",userName:""},validationSchema:C.c().shape({sensor:C.e().max(255)}),onSubmit:function(){var e=Object(S.a)(O.a.mark((function e(t,a){var n,r,s,o,l,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,r=a.setStatus,s=a.setSubmitting,o={sensorName:h},l={headers:{"content-type":"application/json"}},e.prev=3,e.next=6,x.a.post("http://localhost:5000/energysensor/add",o,l);case 6:u=e.sent,console.log(u),r({success:!0}),s(!1),Q(u.data,{variant:"success"}),c.push("/admin/management/sensors"),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0.response.data),n({submit:e.t0.response.data}),r({success:!1}),s(!1);case 20:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,c=e.handleBlur,o=e.handleChange,l=e.handleSubmit,u=e.isSubmitting,p=(e.setFieldValue,e.touched);e.values;return r.a.createElement("form",Object.assign({onSubmit:l,className:Object(i.default)(s.root,t)},a),r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:12,lg:8}),r.a.createElement(m.a,{item:!0,xs:12,lg:6},r.a.createElement(V.a,null,r.a.createElement(B.a,{title:"Select Sensor Name"}),r.a.createElement(U.a,null),r.a.createElement(W.a,null,r.a.createElement(I.a,{fullWidth:!0,autoFocus:"true",label:"Sensor",name:"Sensor",onChange:Y,select:!0,SelectProps:{native:!0},defaultValue:" ",value:h,variant:"outlined"},r.a.createElement("option",null,"Select Sensor"),d.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement(M.a,{mt:2},r.a.createElement(I.a,{fullWidth:!0,label:"User Id",name:"userCode",onBlur:c,onChange:o,defaultValue:" ",value:k,variant:"outlined",disabled:D,InputProps:{readOnly:!0}})),r.a.createElement(M.a,{mt:2},r.a.createElement(I.a,{fullWidth:!0,helperText:p.userName&&n.userName,label:"User Name",name:"userName",onBlur:c,onChange:o,defaultValue:" ",value:T,variant:"outlined",disabled:D,InputProps:{readOnly:!0}})))))),n.submit&&r.a.createElement(M.a,{mt:3},r.a.createElement(q.a,{error:!0},n.submit)),r.a.createElement(M.a,{mt:2},r.a.createElement(f.a,{color:"secondary",variant:"contained",type:"submit",disabled:u},"Add Sensor")))}))},J=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));t.default=function(){var e=J();return r.a.createElement(o.a,{className:e.root,title:"Sensor Add"},r.a.createElement(c.a,{maxWidth:"lg"},r.a.createElement(E,null),r.a.createElement(F,null)))}}}]);
//# sourceMappingURL=25.c1c47e5b.chunk.js.map