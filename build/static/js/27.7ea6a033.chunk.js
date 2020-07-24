(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[27],{1225:function(e,a,t){"use strict";var r=t(214);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),l=(0,r(t(284)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=l},1241:function(e,a,t){"use strict";a.a=function(e){return new Promise((function(a){return setTimeout(a,e)}))}},1728:function(e,a,t){"use strict";t.r(a);var r=t(33),n=t(0),l=t.n(n),s=t(594),o=t(1177),c=t(368),i=t(1214),u=t(1192),m=t(1183),d=t(377),p=t(29),b=t(26),f=t(2),h=t(1216),E=t(1187),v=t(78),w=t(1225),g=t.n(w),x=Object(s.a)((function(){return{root:{}}}));var y=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=x();return l.a.createElement("div",Object.assign({className:Object(f.default)(r.root,a)},t),l.a.createElement(h.a,{separator:l.a.createElement(g.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(E.a,{color:"inherit",to:"/app",component:b.a},"Dashboard"),l.a.createElement(v.a,{color:"textPrimary"},"Account")),l.a.createElement(v.a,{variant:"h3",color:"textPrimary"},"Settings"))},N=t(31),j=t(1184),O=t(1170),C=t(1173),S=t(1220),P=t(1172),k=t(1138),q=Object(s.a)((function(e){return{root:{},name:{marginTop:e.spacing(1)},avatar:{height:100,width:100}}}));var B=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=q(),n=Object(N.d)((function(e){return e.account.user}));return l.a.createElement(O.a,Object.assign({className:Object(f.default)(r.root,a)},t),l.a.createElement(C.a,null,l.a.createElement(c.a,{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center"},l.a.createElement(S.a,{className:r.avatar,src:n.avatar}),l.a.createElement(v.a,{className:r.name,gutterBottom:!0,variant:"h3",color:"textPrimary"},"".concat(n.username)))),l.a.createElement(P.a,null,l.a.createElement(k.a,{fullWidth:!0,variant:"text"},"Change picture")))},T=t(17),W=t.n(T),M=t(41),A=t(1237),F=t(1239),H=t(114),L=t(1174),R=t(1150),z=t(1191),D=t(1128),I=t(158),J=["Alabama","New York","San Francisco"],V=Object(s.a)((function(){return{root:{}}}));var _=function(e){var a=e.user,t=e.className,r=Object(p.a)(e,["user","className"]),n=V(),s=Object(N.c)(),o=Object(H.useSnackbar)().enqueueSnackbar;return l.a.createElement(F.a,{enableReinitialize:!0,initialValues:{canHire:a.canHire,country:a.country,email:a.email,firstName:a.firstName,isPublic:a.isPublic,lastName:a.lastName,phone:a.phone,state:a.state},validationSchema:A.c().shape({country:A.e().max(255).required("Country is required"),email:A.e().email("Must be a valid email").max(255).required("Email is required"),firstName:A.e().max(255).required("First name is required"),lastName:A.e().max(255).required("Last name is required")}),onSubmit:function(){var e=Object(M.a)(W.a.mark((function e(a,t){var r,n,l,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,n=t.setErrors,l=t.setStatus,c=t.setSubmitting,e.prev=1,e.next=4,s(Object(I.e)(a));case 4:r(),l({success:!0}),o("Profile updated",{variant:"success"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),l({success:!1}),n({submit:e.t0.message});case 13:return e.prev=13,c(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,s=e.handleBlur,o=e.handleChange,i=e.handleSubmit,u=e.isSubmitting,d=e.touched,p=e.values;return l.a.createElement("form",{onSubmit:i},l.a.createElement(O.a,Object.assign({className:Object(f.default)(n.root,t)},r),l.a.createElement(L.a,{title:"Profile"}),l.a.createElement(m.a,null),l.a.createElement(C.a,null,l.a.createElement(j.a,{container:!0,spacing:4},l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.firstName&&a.firstName),fullWidth:!0,helperText:d.firstName&&a.firstName,label:"First Name",name:"firstName",onBlur:s,onChange:o,required:!0,type:"firstName",value:p.firstName,variant:"outlined"})),l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.lastName&&a.lastName),fullWidth:!0,helperText:d.lastName&&a.lastName,label:"Last Name",name:"lastName",onBlur:s,onChange:o,required:!0,type:"lastName",value:p.lastName,variant:"outlined"})),l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.email&&a.email),fullWidth:!0,helperText:d.email&&a.email?a.email:"We will use this email to contact you",label:"Email Address",name:"email",onBlur:s,onChange:o,required:!0,type:"email",value:p.email,variant:"outlined"})),l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.phone&&a.phone),fullWidth:!0,helperText:d.phone&&a.phone,label:"Phone Number",name:"phone",onBlur:s,onChange:o,value:p.phone,variant:"outlined"})),l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(R.a,{fullWidth:!0,label:"Select State",name:"state",onChange:o,select:!0,SelectProps:{native:!0},value:p.state,variant:"outlined"},J.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.country&&a.country),fullWidth:!0,helperText:d.country&&a.country,label:"Country",name:"country",onBlur:s,onChange:o,required:!0,type:"country",value:p.country,variant:"outlined"})),l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Make Contact Info Public"),l.a.createElement(v.a,{variant:"body2",color:"textSecondary"},"Means that anyone viewing your profile will be able to see your contacts details"),l.a.createElement(z.a,{checked:p.isPublic,edge:"start",name:"isPublic",onChange:o})),l.a.createElement(j.a,{item:!0,md:6,xs:12},l.a.createElement(v.a,{variant:"h6",color:"textPrimary"},"Available to hire"),l.a.createElement(v.a,{variant:"body2",color:"textSecondary"},"Toggling this will let your teammates know that you are available for acquiring new projects"),l.a.createElement(z.a,{checked:p.canHire,edge:"start",name:"canHire",onChange:o}))),a.submit&&l.a.createElement(c.a,{mt:3},l.a.createElement(D.a,{error:!0},a.submit))),l.a.createElement(m.a,null),l.a.createElement(c.a,{p:2,display:"flex",justifyContent:"flex-end"},l.a.createElement(k.a,{color:"secondary",disabled:u,type:"submit",variant:"contained"},"Save Changes"))))}))},G=Object(s.a)((function(){return{root:{}}}));var Y=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=G(),n=Object(N.d)((function(e){return e.account})).user;return l.a.createElement(j.a,Object.assign({className:Object(f.default)(r.root,a),container:!0,spacing:3},t),l.a.createElement(j.a,{item:!0,lg:4,md:6,xl:3,xs:12},l.a.createElement(B,{user:n})),l.a.createElement(j.a,{item:!0,lg:8,md:6,xl:9,xs:12},l.a.createElement(_,{user:n})))},K=t(1241),Q=t(38),U=t.n(Q),X=Object(s.a)((function(){return{root:{}}}));var Z=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=X(),n=Object(H.useSnackbar)().enqueueSnackbar,s=Object(N.d)((function(e){return e.account.user}));return l.a.createElement(F.a,{initialValues:{oldpassword:"",newpassword:"",passwordConfirm:""},validationSchema:A.c().shape({oldpassword:A.e().min(7,"").max(255).required("Required"),newpassword:A.e().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:A.e().oneOf([A.d("newpassword"),null],"Passwords must match").required("Required")}),onSubmit:function(){var e=Object(M.a)(W.a.mark((function e(a,t){var r,l,o,c,i,u,m;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,l=t.setErrors,o=t.setStatus,c=t.setSubmitting,e.prev=1,i={oldpassword:a.oldpassword,newpassword:a.newpassword,userid:s.userid},u={headers:{"content-type":"application/json"}},e.next=6,U.a.post("".concat("http://localhost:5000","/user/changePassword"),i,u);case 6:return(m=e.sent)&&console.log(m),e.next=10,Object(K.a)(500);case 10:r(),o({success:!0}),c(!1),n("Password updated",{variant:"success"}),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0.response.data),o({success:!1}),l({submit:e.t0.response.data}),c(!1);case 22:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,s=e.handleBlur,o=e.handleChange,i=e.handleSubmit,u=e.isSubmitting,d=e.touched,p=e.values;return l.a.createElement("form",{onSubmit:i},l.a.createElement(O.a,Object.assign({className:Object(f.default)(r.root,a)},t),l.a.createElement(L.a,{title:"Change Password"}),l.a.createElement(m.a,null),l.a.createElement(C.a,null,l.a.createElement(j.a,{container:!0,spacing:3},l.a.createElement(j.a,{item:!0,md:4,sm:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.oldpassword&&n.oldpassword),fullWidth:!0,helperText:d.oldpassword&&n.oldpassword,label:"Old Password",name:"oldpassword",onBlur:s,onChange:o,type:"password",value:p.oldpassword,variant:"outlined"})),l.a.createElement(j.a,{item:!0,md:4,sm:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.newpassword&&n.newpassword),fullWidth:!0,helperText:d.newpassword&&n.newpassword,label:"new Password",name:"newpassword",onBlur:s,onChange:o,type:"password",value:p.newpassword,variant:"outlined"})),l.a.createElement(j.a,{item:!0,md:4,sm:6,xs:12},l.a.createElement(R.a,{error:Boolean(d.passwordConfirm&&n.passwordConfirm),fullWidth:!0,helperText:d.passwordConfirm&&n.passwordConfirm,label:"Password Confirmation",name:"passwordConfirm",onBlur:s,onChange:o,type:"password",value:p.passwordConfirm,variant:"outlined"}))),n.submit&&l.a.createElement(c.a,{mt:3},l.a.createElement(D.a,{error:!0},n.submit))),l.a.createElement(m.a,null),l.a.createElement(c.a,{p:2,display:"flex",justifyContent:"flex-end"},l.a.createElement(k.a,{color:"secondary",enabled:u,type:"submit",variant:"contained"},"Change Password"))))}))},$=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=$(),a=Object(n.useState)("general"),t=Object(r.a)(a,2),s=t[0],p=t[1];return l.a.createElement(d.a,{className:e.root,title:"Settings"},l.a.createElement(o.a,{maxWidth:"lg"},l.a.createElement(y,null),l.a.createElement(c.a,{mt:3},l.a.createElement(i.a,{onChange:function(e,a){p(a)},scrollButtons:"auto",value:s,variant:"scrollable",textColor:"secondary",className:e.tabs},[{value:"general",label:"General"},{value:"security",label:"Security"}].map((function(e){return l.a.createElement(u.a,{key:e.value,label:e.label,value:e.value})})))),l.a.createElement(m.a,null),l.a.createElement(c.a,{mt:3},"general"===s&&l.a.createElement(Y,null),"security"===s&&l.a.createElement(Z,null))))}}}]);
//# sourceMappingURL=27.7ea6a033.chunk.js.map