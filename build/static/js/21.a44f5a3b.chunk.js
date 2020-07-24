(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[21],{1225:function(e,a,t){"use strict";var r=t(214);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),o=(0,r(t(284)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=o},1241:function(e,a,t){"use strict";a.a=function(e){return new Promise((function(a){return setTimeout(a,e)}))}},1426:function(e,a,t){"use strict";var r=t(4),n=t(1),o=t(0),l=(t(3),t(2)),i=t(9),c=t(5),s=t(173),m=t(30),d=Object(m.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),u=Object(m.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),p=Object(m.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),f=Object(m.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),h=Object(m.a)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),g=t(656),b=t(8),E={success:o.createElement(d,{fontSize:"inherit"}),warning:o.createElement(u,{fontSize:"inherit"}),error:o.createElement(p,{fontSize:"inherit"}),info:o.createElement(f,{fontSize:"inherit"})},v=o.createElement(h,{fontSize:"small"}),y=o.forwardRef((function(e,a){var t=e.action,i=e.children,c=e.classes,m=e.className,d=e.closeText,u=void 0===d?"Close":d,p=e.color,f=e.icon,h=e.iconMapping,y=void 0===h?E:h,C=e.onClose,x=e.role,N=void 0===x?"alert":x,w=e.severity,k=void 0===w?"success":w,O=e.variant,S=void 0===O?"standard":O,M=Object(r.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(s.a,Object(n.a)({role:N,square:!0,elevation:0,className:Object(l.default)(c.root,c["".concat(S).concat(Object(b.a)(p||k))],m),ref:a},M),!1!==f?o.createElement("div",{className:c.icon},f||y[k]||E[k]):null,o.createElement("div",{className:c.message},i),null!=t?o.createElement("div",{className:c.action},t):null,null==t&&C?o.createElement("div",{className:c.action},o.createElement(g.a,{size:"small","aria-label":u,title:u,color:"inherit",onClick:C},v)):null)}));a.a=Object(c.a)((function(e){var a="light"===e.palette.type?i.a:i.i,t="light"===e.palette.type?i.i:i.a;return{root:Object(n.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:a(e.palette.success.main,.6),backgroundColor:t(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:a(e.palette.info.main,.6),backgroundColor:t(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:a(e.palette.warning.main,.6),backgroundColor:t(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:a(e.palette.error.main,.6),backgroundColor:t(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:a(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:a(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:a(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:a(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(y)},1745:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(26),l=t(594),i=t(1177),c=t(1216),s=t(1187),m=t(78),d=t(368),u=t(1184),p=t(1225),f=t.n(p),h=t(377),g=t(17),b=t.n(g),E=t(41),v=t(33),y=t(1237),C=t(1239),x=t(1170),N=t(1174),w=t(1183),k=t(1173),O=t(1176),S=t(1150),M=t(1152),j=t(1128),z=t(1138),L=t(1426),W=t(1241);var A=function(){var e=Object(r.useState)(!0),a=Object(v.a)(e,2),t=a[0],o=a[1];return n.a.createElement(C.a,{initialValues:{email:"johnnydoe@yahoo.com",firstName:"John",lastName:"Doe",password:"thisisasecuredpassword",policy:!1},validationSchema:y.c().shape({email:y.e().email().required("Required"),firstName:y.e().required("Required"),lastName:y.e().required("Required"),password:y.e().min(7,"Must be at least 7 characters").max(255).required("Required"),policy:y.b().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(E.a)(b.a.mark((function e(a,t){var r,n,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,n=t.setErrors,o=t.setStatus,l=t.setSubmitting,e.prev=1,e.next=4,Object(W.a)(1e3);case 4:r(),o({success:!0}),l(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),o({success:!1}),n({submit:e.t0.message}),l(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,r=e.handleBlur,l=e.handleChange,i=e.handleSubmit,c=e.isSubmitting,p=e.touched,f=e.values;return n.a.createElement(x.a,null,n.a.createElement(N.a,{title:"Basic Form"}),n.a.createElement(w.a,null),n.a.createElement(k.a,null,t&&n.a.createElement(d.a,{mb:3},n.a.createElement(L.a,{onClose:function(){return o(!1)},severity:"info"},"This is an info alert - check it out!")),c?n.a.createElement(d.a,{display:"flex",justifyContent:"center",my:5},n.a.createElement(O.a,null)):n.a.createElement("form",{onSubmit:i},n.a.createElement(u.a,{container:!0,spacing:2},n.a.createElement(u.a,{item:!0,md:6,xs:12},n.a.createElement(S.a,{error:Boolean(p.firstName&&a.firstName),fullWidth:!0,helperText:p.firstName&&a.firstName,label:"First Name",name:"firstName",onBlur:r,onChange:l,value:f.firstName,variant:"outlined"})),n.a.createElement(u.a,{item:!0,md:6,xs:12},n.a.createElement(S.a,{error:Boolean(p.lastName&&a.lastName),fullWidth:!0,helperText:p.lastName&&a.lastName,label:"Last Name",name:"lastName",onBlur:r,onChange:l,value:f.lastName,variant:"outlined"}))),n.a.createElement(d.a,{mt:2},n.a.createElement(S.a,{error:Boolean(p.email&&a.email),fullWidth:!0,helperText:p.email&&a.email,label:"Email Address",name:"email",onBlur:r,onChange:l,type:"email",value:f.email,variant:"outlined"})),n.a.createElement(d.a,{mt:2},n.a.createElement(S.a,{error:Boolean(p.password&&a.password),fullWidth:!0,helperText:p.password&&a.password,label:"Password",name:"password",onBlur:r,onChange:l,type:"password",value:f.password,variant:"outlined"})),n.a.createElement(d.a,{alignItems:"center",display:"flex",mt:2,ml:-1},n.a.createElement(M.a,{checked:f.policy,name:"policy",onChange:l}),n.a.createElement(m.a,{variant:"body2",color:"textSecondary"},"I have read the"," ",n.a.createElement(s.a,{component:"a",href:"#",color:"secondary"},"Terms and Conditions"))),Boolean(p.policy&&a.policy)&&n.a.createElement(j.a,{error:!0},a.policy),n.a.createElement(d.a,{mt:2},n.a.createElement(z.a,{color:"secondary",disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign up")))))}))},B=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=B();return n.a.createElement(h.a,{className:e.root,title:"Formik Form"},n.a.createElement(i.a,{maxWidth:"lg"},n.a.createElement(c.a,{separator:n.a.createElement(f.a,{fontSize:"small"}),"aria-label":"breadcrumb"},n.a.createElement(s.a,{variant:"body1",color:"inherit",to:"/app",component:o.a},"Dashboard"),n.a.createElement(m.a,{variant:"body1",color:"textPrimary"},"Forms")),n.a.createElement(m.a,{variant:"h3",color:"textPrimary"},"Formik"),n.a.createElement(d.a,{mt:3},n.a.createElement(u.a,{container:!0},n.a.createElement(u.a,{item:!0,xs:12,md:6},n.a.createElement(A,null))))))}}}]);
//# sourceMappingURL=21.a44f5a3b.chunk.js.map