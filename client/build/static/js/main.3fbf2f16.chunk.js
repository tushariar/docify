(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),o=a.n(r),l=a(1),s=a(35),u=a(13),i=a(86),m=a.n(i),d=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid pt-4 ".concat(m.a.layout)},t))},p=a(171),f=a(170),b=a(87),E=a.n(b),h=a(4),v=a(174),j=function(e){var t=e.show,a=e.variant,n=e.children,r=Object(h.a)(e,["show","variant","children"]);return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(v.a,Object.assign({variant:a},r),n))},O=a(89),g=a(98),y=a(68),w=a.n(y),S=a(90),C=a.n(S),N=a(42),x=a.n(N),k=function(e){var t=e.show,a=e.doc,n=e.setDocAction,r=(e.setShowActions,"".concat("https://server.docify.devtahsin.com","/api/docs/download/").concat(a._id));return c.a.createElement("div",null,c.a.createElement("div",{className:"".concat(x.a.options," ").concat(t?x.a.show:null)},c.a.createElement("a",{href:"".concat("https://server.docify.devtahsin.com","/api/docs/").concat(a._id),target:"_blank",rel:"noopener noreferrer",className:"".concat(x.a.option)},c.a.createElement("i",{className:"bi bi-box-arrow-up-right"}),c.a.createElement("span",{className:"ms-2"},"Open")),c.a.createElement("a",{href:r,className:"".concat(x.a.option)},c.a.createElement("i",{className:"bi bi-download"}),c.a.createElement("span",{className:"ms-2"},"Download")),c.a.createElement("div",{className:"".concat(x.a.option),onClick:function(){n({type:"mail",doc:a})}},c.a.createElement("i",{className:"bi bi-envelope"}),c.a.createElement("span",{className:"ms-2"},"Mail")),c.a.createElement("div",{className:"".concat(x.a.option),onClick:function(){n({type:"edit",doc:a})}},c.a.createElement("i",{className:"bi bi-pencil"}),c.a.createElement("span",{className:"ms-2"}," Edit")),c.a.createElement("div",{className:"".concat(x.a.option),onClick:function(){n({type:"delete",doc:a})}},c.a.createElement("i",{className:"bi bi-trash"}),c.a.createElement("span",{className:"ms-2"},"Delete"))))},_=function(){return c.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center text-center bg-dark text-light p-2"},c.a.createElement("div",{className:"display-1"},c.a.createElement("i",{className:"bi bi-file-earmark-pdf"})),c.a.createElement("h5",null,"No preview available"),c.a.createElement("p",null,"Download the file or ",c.a.createElement("br",null)," open in new tab"))},D=function(e){var t=e.doc,a=e.setDocAction,r=Object(n.useState)(),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(),m=Object(l.a)(i,2),d=m[0],p=m[1],f=Object(n.useState)(),b=Object(l.a)(f,2),E=b[0],h=b[1],v="".concat("https://server.docify.devtahsin.com","/api/docs/").concat(t._id),j="".concat("https://server.docify.devtahsin.com","/api/docs/download/").concat(t._id),O=Object(n.useState)(!1),y=Object(l.a)(O,2),S=y[0],N=y[1],x=Object(n.useRef)();return Object(n.useEffect)(function(){return window.addEventListener("click",function(e){e.target!==x.current&&N(!1)}),function(){}},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(w.a.galleryItem)},c.a.createElement("div",{className:"rounded"},c.a.createElement("div",{className:"d-flex justify-content-between mt-1 mb-2 position-relative"},c.a.createElement("div",null,c.a.createElement("i",{className:"bi bi-clock me-2"}),C()(t.createdAt).format("DD MMMM YYYY")),c.a.createElement(k,{show:S,doc:t,setDocAction:a}),c.a.createElement("div",{onClick:function(){N(function(e){return!e})}},c.a.createElement("i",{className:"bi bi-three-dots-vertical",role:"button",ref:x}))),c.a.createElement("div",{className:"".concat(w.a.thumbnail_container),role:"button"},"application/pdf"!==t.mimetype?c.a.createElement("img",{src:"application/pdf"!==t.mimetype?v:"./img_placeholder.png",alt:t.title,crossOrigin:"use-credentials",className:"".concat(w.a.thumbnail),onClick:"application/pdf"!==t.mimetype?function(){!function(e,t){u(!0),p(e),h(t)}(v,t.title)}:function(){}}):c.a.createElement(_,null)),c.a.createElement("h5",{className:"my-2"},t.title))),s&&c.a.createElement(g.a,{medium:d,alt:E,showRotate:!0,downloadLink:j,onClose:function(){u(!1)}}))},B=a(91),I=a.n(B),L=a(172),T=a(48),P=c.a.createContext(),G=function(){return Object(n.useContext)(P)},A=[],F=function(e,t){switch(t.type){case"load":return[].concat(Object(T.a)(e),Object(T.a)(t.payload));case"create":return[].concat(Object(T.a)(e),[t.doc]);case"update":return e.map(function(e){return e._id!==t.payload._id?e:t.payload});case"delete":return e.filter(function(e){return e._id.toString()!==t.docId.toString()});case"unload":return[];default:return e}},U=function(e){var t=e.children,a=Object(n.useReducer)(F,A),r=Object(l.a)(a,2),o={docs:r[0],dispatchDocs:r[1]};return c.a.createElement(P.Provider,{value:o},t)},H=a(3),M=a(41),R=a.n(M),Y=a(19),z=a.n(Y),q=a(37),Q=a(65),J=function(e,t){var a=new Date,n=a.getTime();n+=2592e6,a.setTime(n),document.cookie="".concat(e,"=").concat(t,"; expires=").concat(a,"; path=/")},W=c.a.createContext(),V=function(){return Object(n.useContext)(W)},K=new Q.a,X=function(e){var t=e.children,a=Object(n.useState)(),r=Object(l.a)(a,2),o=r[0],s=r[1],u="Bearer ".concat(K.get("token")),i=function(){var e=Object(q.a)(z.a.mark(function e(t){var a,n,c,r;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.prev=1,e.next=4,R.a.post("".concat("https://server.docify.devtahsin.com","/api/users/login"),{email:a,password:n});case 4:return c=e.sent,J("token",c.data.token),(r=c.data.user)&&r._id&&r.email&&s(r),e.abrupt("return",Object(H.a)({type:"success"},c));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",Object(H.a)({type:"error"},e.t0.response));case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),m={signup:function(){var e=Object(q.a)(z.a.mark(function e(t){var a,n,c,r,o,l;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.email,c=t.phone,r=t.password,o=t.password2,e.prev=1,e.next=4,R.a.post("".concat("https://server.docify.devtahsin.com","/api/users"),{name:a,email:n,phone:c,password:r,password2:o});case 4:return l=e.sent,e.abrupt("return",Object(H.a)({type:"success"},l));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(H.a)({type:"error"},e.t0.response));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),login:i,logout:function(){K.remove("token"),K.remove("Docify"),s(null)},Authorization:u,currentUser:o,setCurrentUser:s};return c.a.createElement(W.Provider,{value:m},t)},Z=function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=Object(n.useState)(),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(!1),m=Object(l.a)(i,2),d=m[0],p=m[1],f=V(),b=f.Authorization,E=f.logout,h=(new Q.a).get("socketid");return Object(n.useEffect)(function(){return e&&("get"===t||"delete"===t?R.a[t](a,{headers:{Authorization:b,socketid:h}}).then(function(e){u(Object(H.a)({type:"success"},e)),e.data.token&&J("token",e.data.token)}).catch(function(e){e.response?(u(Object(H.a)({type:"error"},e.response)),401===e.response.status&&setTimeout(function(){E()},3e3)):u({type:"error",data:{message:"Something wrong happened"}})}).then(function(){p(!0)}):R.a[t](a,Object(H.a)({},c),{headers:{Authorization:b,socketid:h}}).then(function(e){u(Object(H.a)({type:"success"},e)),e.data.token&&J("token",e.data.token)}).catch(function(e){e.response?(401===e.response.status&&setTimeout(function(){E()},3e3),u(Object(H.a)({type:"error"},e.response))):u({type:"error",data:{message:"Something wrong happened!"}})}).then(function(){p(!0)})),function(){p(!1)}},[e]),d&&s},$=a(92),ee=function(e){var t=e.loading,a=e.text;return c.a.createElement(j,{variant:"info",show:t},c.a.createElement("div",{className:"d-flex"},c.a.createElement($.HashLoader,{size:30,color:"#135F7A",loading:t}),c.a.createElement("div",{className:"ms-2"},a,"...")))},te=function(e){var t=e.show,a=e.handleClose,r=e.thumbnail,o=e.doc,s=Object(n.useState)(!1),u=Object(l.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),b=p[0],E=p[1],h=Object(n.useState)(!1),v=Object(l.a)(h,2),O=v[0],g=v[1],y=Object(n.useState)(!1),w=Object(l.a)(y,2),S=w[0],C=w[1],N=G().dispatchDocs,x=Z(O,"delete","".concat("https://server.docify.devtahsin.com","/api/docs/").concat(o._id)),k=function(){a(),m(""),E("")};return Object(n.useEffect)(function(){return x&&("success"===x.type?(E(x.data.message),setTimeout(function(){k(),N({type:"delete",docId:o._id})},300)):m(x.data.message),g(!1),C(!1)),function(){C(!1),g(!1)}},[x]),c.a.createElement(L.a,{show:t,onHide:k},c.a.createElement(L.a.Header,{closeButton:!0},c.a.createElement(L.a.Title,null,c.a.createElement("h5",null,"Confirm deletion"))),c.a.createElement(L.a.Body,null,c.a.createElement(j,{variant:"danger",show:i},i),c.a.createElement(j,{variant:"success",show:b},b),c.a.createElement(ee,{loading:S,text:"Deleting ".concat(o.title)}),c.a.createElement("p",null,"Do you really want to delete ",c.a.createElement("b",null,o.title),"?"),c.a.createElement("img",{src:r,alt:o.title,width:"200px"})),c.a.createElement(L.a.Footer,null,c.a.createElement(f.a,{variant:"secondary",onClick:k},"Cancel"),c.a.createElement(f.a,{variant:"danger",onClick:function(){C(!0),setTimeout(function(){g(!0)},3e3)}},"Yes")))},ae=a(173),ne=function(e){var t=e.show,a=e.handleClose,r=e.doc,o=Object(n.useState)(r.title),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),p=d[0],b=d[1],E=Object(n.useState)(!1),h=Object(l.a)(E,2),v=h[0],O=h[1],g=Object(n.useState)(""),y=Object(l.a)(g,2),w=y[0],S=y[1],C=Object(n.useState)(""),N=Object(l.a)(C,2),x=N[0],k=N[1],_=G().dispatchDocs,D=Z(p,"put","".concat("https://server.docify.devtahsin.com","/api/docs/").concat(r._id),{title:u}),B=function(){S(""),k(""),O(!1),a()};return Object(n.useEffect)(function(){return D&&("success"===D.type?(k(D.data.message),setTimeout(function(){k(""),B(),_({type:"update",payload:D.data.doc})},300)):S(D.data.message),O(!1),b(!1)),function(){b(!1)}},[D]),c.a.createElement(L.a,{show:t,onHide:B},c.a.createElement(L.a.Header,{closeButton:!0},c.a.createElement(L.a.Title,null,c.a.createElement("h5",null,"You're editing: ",r.title))),c.a.createElement(L.a.Body,null,c.a.createElement(ae.a,{onSubmit:function(e){if(e.preventDefault(),S(""),k(""),r.title.trim()===u.trim())return S("Nothing to update");O(!0),b(!0)}},c.a.createElement(j,{variant:"danger",show:w},w),c.a.createElement(j,{variant:"success",show:x},x),c.a.createElement(ee,{loading:v,text:"Updating ".concat(r.title)}),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicTitle"},c.a.createElement(ae.a.Label,null,"New Title"),c.a.createElement(ae.a.Control,{type:"text",value:u,onChange:function(e){i(e.target.value)},placeholder:"Ex: Passport, NID..."})),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Update"))))},ce=function(e){var t=e.show,a=e.handleClose,r=e.doc,o=Object(n.useState)(""),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),d=Object(l.a)(m,2),p=d[0],b=d[1],E=Object(n.useState)(""),h=Object(l.a)(E,2),v=h[0],O=h[1],g=Object(n.useState)(!1),y=Object(l.a)(g,2),w=y[0],S=y[1],C=Object(n.useState)(!1),N=Object(l.a)(C,2),x=N[0],k=N[1],_=Object(n.useState)(""),D=Object(l.a)(_,2),B=D[0],I=D[1],T=Object(n.useState)(""),P=Object(l.a)(T,2),G=P[0],A=P[1],F=r.title,U=function(){k(!1),a()},H=Z(w,"post","".concat("https://server.docify.devtahsin.com","/api/docs/mail/").concat(r._id),{receiver:u,subject:p,message:v}),M=function(e){return e.preventDefault(),I(""),A(""),k(!1),u?p?(k(!0),void S(!0)):I("Subject is required!"):I("Receiver address is required!")};return Object(n.useEffect)(function(){return b(F),function(){b("")}},[F]),Object(n.useEffect)(function(){return H&&(H.type&&"success"===H.type?(A(H.data.message),i(""),O(""),setTimeout(function(){A(""),U()},700)):I(H.data.message),k(!1)),S(!1),function(){S(!1)}},[H]),c.a.createElement(L.a,{show:t,onHide:U},c.a.createElement(L.a.Header,{closeButton:!0},c.a.createElement(L.a.Title,null,c.a.createElement("h5",null,"Mail your document"))),c.a.createElement(L.a.Body,null,c.a.createElement(ae.a,{onSubmit:M},c.a.createElement(j,{variant:"danger",show:B},B),c.a.createElement(j,{variant:"success",show:G},G),c.a.createElement(ee,{loading:x,text:"Sending"}),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicReceiver"},c.a.createElement(ae.a.Label,null,"Receiver"),c.a.createElement(ae.a.Control,{type:"text",placeholder:"fulan@gmail.com",value:u,onChange:function(e){i(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicSubject"},c.a.createElement(ae.a.Label,null,"Subject"),c.a.createElement(ae.a.Control,{type:"text",placeholder:"Passport of Fulan Ibn Fulan",value:p,onChange:function(e){b(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicMessage"},c.a.createElement(ae.a.Label,null,"Message"),c.a.createElement(ae.a.Control,{as:"textarea",placeholder:"Message",value:v,onChange:function(e){O(e.target.value)},style:{height:"100px"}}))),c.a.createElement("p",null,"* Email will be sent from: ",c.a.createElement("b",null,"docify@devtahsin.com")," ",c.a.createElement("br",null),"* Check the spam folder")),c.a.createElement(L.a.Footer,null,c.a.createElement(f.a,{variant:"primary",type:"button",onClick:M},"Send Mail"),c.a.createElement(f.a,{variant:"secondary",type:"button",onClick:U},"Cancel")))},re=function(e){var t=e.docs,a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=r[0],s=r[1],u=Object(n.useState)(!1),i=Object(l.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),b=f[0],E=f[1],h=Object(n.useState)({title:"",_id:""}),v=Object(l.a)(h,2),j=v[0],g=v[1],y=Object(n.useState)(""),w=Object(l.a)(y,2),S=w[0],C=w[1];Object(n.useEffect)(function(){switch(S.type){case"edit":d(!0),g(S.doc);break;case"mail":E(!0),g(S.doc);break;case"delete":s(!0),g(S.doc);break;default:g({title:"",_id:""})}return function(){g({title:"",_id:""})}},[S]);var N="object"===typeof j?"".concat("https://server.docify.devtahsin.com","/api/docs/").concat(j._id):null;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(I.a.gallery)},t.map(function(e){return c.a.createElement(D,{key:Object(O.uniqueId)()*Math.random(),doc:e,setDocAction:C})})),c.a.createElement(ne,{show:m,doc:j,handleClose:function(){d(!1)}}),c.a.createElement(ce,{show:b,doc:j,handleClose:function(){E(!1)}}),c.a.createElement(te,{show:o,thumbnail:N,doc:j,handleClose:function(){s(!1)}}))},oe=function(e){var t=e.show,a=e.handleClose,r=Object(n.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),d=m[0],p=m[1],b=Object(n.useState)(""),E=Object(l.a)(b,2),h=E[0],v=E[1],O=Object(n.useState)(""),g=Object(l.a)(O,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(),_=Object(l.a)(k,2),D=_[0],B=_[1],I=Object(n.useState)(),T=Object(l.a)(I,2),P=T[0],G=T[1],A=V(),F=A.currentUser,U=A.setCurrentUser,H=Object(n.useState)(!1),M=Object(l.a)(H,2),R=M[0],Y=M[1],z=Object(n.useState)(!1),q=Object(l.a)(z,2),Q=q[0],J=q[1],W=function(e){e.preventDefault(),B(""),G(""),J(!1),0!==y.trim().length?(J(!0),Y(!0)):B("Password is required to make any change!")},K=Z(R,"put","".concat("https://server.docify.devtahsin.com","/api/users/me"),{name:s,phone:h,password:y,password2:N});return Object(n.useEffect)(function(){return u(F.name),p(F.email),v(F.phone),function(){}},[F]),Object(n.useEffect)(function(){return K&&(Y(!1),"error"===K.type?B(K.data.message):(G(K.data.message),delete K.data.message,U(K.data),w(""),x(""),setTimeout(function(){G()},3e3)),J(!1)),function(){Y(!1)}},[K]),c.a.createElement(L.a,{show:t,onHide:function(){J(!1),a()}},c.a.createElement(L.a.Header,{closeButton:!0},c.a.createElement(L.a.Title,null,c.a.createElement("h5",null,"Assalamu Alaikum, ",F.name))),c.a.createElement(L.a.Body,null,c.a.createElement("form",{onSubmit:W},c.a.createElement(j,{variant:"danger",show:D},D),c.a.createElement(j,{variant:"success",show:P},P),c.a.createElement(ee,{loading:Q,text:"Updating"}),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicName"},c.a.createElement(ae.a.Label,null,"Name"),c.a.createElement(ae.a.Control,{type:"text",placeholder:"What should we call you now?",value:s,onChange:function(e){u(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicEmail"},c.a.createElement(ae.a.Label,null,"Email address"),c.a.createElement(ae.a.Control,{type:"email",placeholder:"You can't change your email",value:d,onChange:function(e){p(e.target.value)},disabled:!0}),c.a.createElement(ae.a.Text,{className:"text-muted"},"You can't change your email.")),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicPhone"},c.a.createElement(ae.a.Label,null,"Phone"),c.a.createElement(ae.a.Control,{type:"text",minLength:"11",maxLength:"11",placeholder:"Phone number must be bangladeshi",value:h,onChange:function(e){v(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicCurrentPassword"},c.a.createElement(ae.a.Label,null,"Password"),c.a.createElement(ae.a.Control,{type:"password",placeholder:"Enter your Password",value:y,onChange:function(e){w(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicNewPassword"},c.a.createElement(ae.a.Label,null,"New Password"),c.a.createElement(ae.a.Control,{type:"password",placeholder:"Enter new Password",value:N,onChange:function(e){x(e.target.value)}}),c.a.createElement(ae.a.Text,{className:"text-muted"},"Leave this empty if you do not want to change your password.")),c.a.createElement(f.a,{variant:"primary",type:"submit",onClick:W},"Update Account"))))},le=function(e){var t=e.show,a=e.handleClose,r=Object(n.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(),m=Object(l.a)(i,2),d=m[0],p=m[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),h=E[0],v=E[1],O=Object(n.useState)(!1),g=Object(l.a)(O,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(""),_=Object(l.a)(k,2),D=_[0],B=_[1],I=V().Authorization,T=G().dispatchDocs,P=function(){u(""),p(null),w(!1),x(""),B(""),a()};return Object(n.useEffect)(function(){return Object(q.a)(z.a.mark(function e(){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h&&((t=new FormData).append("title",s),t.append("document",d),R.a.post("".concat("https://server.docify.devtahsin.com","/api/docs"),t,{headers:{Authorization:I,"Content-Type":"multipart/form-data"}}).then(function(e){B(e.data.message),u(""),p(null),setTimeout(function(){B(null),P(),T({type:"create",doc:e.data.doc})},300)}).catch(function(e){x(e.response.data.message),401===e.response.status&&(window.location.href="/")}).then(function(){w(!1)}));case 1:case"end":return e.stop()}},e)}))(),function(){v(!1)}},[h]),c.a.createElement(L.a,{show:t,onHide:P},c.a.createElement(L.a.Header,{closeButton:!0},c.a.createElement(L.a.Title,null,c.a.createElement("h5",null,"Add new document"))),c.a.createElement(L.a.Body,null,c.a.createElement(ae.a,{onSubmit:function(e){if(e.preventDefault(),v(!1),x(""),w(!1),!s||!d)return x("Please give a title and select a file");w(!0),v(!0)}},c.a.createElement(j,{variant:"danger",show:N},N),c.a.createElement(j,{variant:"success",show:D},D),c.a.createElement(ee,{loading:y,text:"Uploading"}),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicTitle"},c.a.createElement(ae.a.Label,null,"Document Title"),c.a.createElement(ae.a.Control,{type:"text",placeholder:"Ex: Passport, NID...",value:s,onChange:function(e){u(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicTitle"},c.a.createElement(ae.a.Label,null,"Select File"),c.a.createElement(ae.a.Control,{type:"file",onChange:function(e){p(e.target.files[0])}})),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Upload"))))},se=a(52),ue=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),b=d[0],h=d[1],v=Object(n.useState)(!1),O=Object(l.a)(v,2),g=O[0],y=O[1],w=Object(n.useState)(!0),S=Object(l.a)(w,2),C=S[0],N=S[1],x=V().logout,k=G(),_=k.docs,D=k.dispatchDocs,B=Z(b,"post","".concat("https://server.docify.devtahsin.com","/api/users/logout")),I=Z(g,"get","".concat("https://server.docify.devtahsin.com","/api/docs/"));return Object(n.useEffect)(function(){return B&&"success"===B.type&&(D({type:"unload"}),x()),function(){h(!1)}},[B]),Object(n.useEffect)(function(){if(I&&"success"===I.type){var e=I.data.docs;I.data.docs.length>0&&D({type:"load",payload:e}),Object(se.b)("Fetched all docs",{theme:"dark",position:"top-left",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0}),N(!1),y(!1)}return function(){N(!1),y(!1)}},[I]),Object(n.useEffect)(function(){return y(!0),function(){y(!1)}},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{fluid:!0,className:"rounded d-flex align-items-center justify-content-center"},c.a.createElement(p.a,{className:"text-light rounded p-2 ".concat(E.a.dashboard)},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",null,"Dashboard"),c.a.createElement("div",null,c.a.createElement(f.a,{className:"ms-2",variant:"light",onClick:function(){i(!0)}},c.a.createElement("i",{className:"bi bi-plus-circle"})),c.a.createElement(f.a,{variant:"light",className:"ms-2",onClick:function(){r(!0)}},c.a.createElement("i",{className:"bi bi-person"})),c.a.createElement(f.a,{className:"ms-2",variant:"light",onClick:function(){h(!0)}},c.a.createElement("i",{className:"bi bi-box-arrow-right"})))),c.a.createElement("hr",null),c.a.createElement(j,{variant:"secondary",show:!C&&_&&_.length<1},"No document uploaded yet"),c.a.createElement(ee,{loading:C,text:"Getting your docs"}),c.a.createElement(re,{docs:_}))),c.a.createElement(oe,{show:a,handleClose:function(){r(!1)}}),c.a.createElement(le,{show:u,handleClose:function(){i(!1)}}))},ie=a(63),me=a.n(ie),de=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),h=E[0],v=E[1],O=Object(n.useState)(!1),g=Object(l.a)(O,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(""),_=Object(l.a)(k,2),D=_[0],B=_[1],I=Object(n.useState)(),L=Object(l.a)(I,2),T=L[0],P=L[1],A=Object(n.useState)(!1),F=Object(l.a)(A,2),U=F[0],H=F[1],M=Object(u.g)(),R=V().login,Y=G().dispatchDocs;return Object(n.useEffect)(function(){return Y({type:"unload"}),function(){}},[]),Object(n.useEffect)(function(){return Object(q.a)(z.a.mark(function e(){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=13;break}return e.prev=1,e.next=4,R({email:a,password:m});case 4:"error"===(t=e.sent).type?(v(!0),x(t.data.message)):(w(!0),B(t.data.message),setTimeout(function(){w(!1),B(null),M.push("/")},1e3)),P(!1),H(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}))(),function(){P(!1)}},[T]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{className:"my-2 rounded d-flex align-items-center justify-content-center"},c.a.createElement(ae.a,{className:"".concat(me.a.formCard," bg-white p-4 rounded"),onSubmit:function(e){if(e.preventDefault(),P(!1),v(!1),w(!1),H(!1),x(""),B(""),!a||!m)return v(!0),void x("All fields are required!");H(!0),P(!0)}},c.a.createElement("h2",{className:"text-center"},"Docify"),c.a.createElement("p",{className:"text-center"},"An address for your documents"),c.a.createElement("hr",null),c.a.createElement(j,{variant:"danger",show:h},N),c.a.createElement(j,{variant:"success",show:y},D),c.a.createElement(ee,{loading:U,text:"Logging you in"}),c.a.createElement("h4",null,"Login"),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicEmail"},c.a.createElement(ae.a.Label,null,"Email"),c.a.createElement(ae.a.Control,{type:"email",placeholder:"Enter your email",value:a,onChange:function(e){r(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicPassword"},c.a.createElement(ae.a.Label,null,"Password"),c.a.createElement(ae.a.Control,{type:"password",placeholder:"Enter your password",value:m,onChange:function(e){d(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("span",null,"Don't have an account? "),c.a.createElement(s.b,{to:"/signup"},"Sign up")),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Login"))))},pe=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)(""),E=Object(l.a)(b,2),h=E[0],v=E[1],O=Object(n.useState)(""),g=Object(l.a)(O,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(!1),_=Object(l.a)(k,2),D=_[0],B=_[1],I=Object(n.useState)(!1),L=Object(l.a)(I,2),T=L[0],P=L[1],A=Object(n.useState)(""),F=Object(l.a)(A,2),U=F[0],H=F[1],M=Object(n.useState)(""),R=Object(l.a)(M,2),Y=R[0],Q=R[1],J=Object(n.useState)(),W=Object(l.a)(J,2),K=W[0],X=W[1],Z=Object(n.useState)(!1),$=Object(l.a)(Z,2),te=$[0],ne=$[1],ce=Object(u.g)(),re=G().dispatchDocs,oe=V().signup,le=function(){var e=Object(q.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),B(!1),P(!1),ne(!1),H(""),Q(""),a&&m&&h&&y&&N){e.next=10;break}return B(!0),H("All fields are required!"),e.abrupt("return");case 10:ne(!0),X(!0);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return re({type:"unload"}),function(){}},[]),Object(n.useEffect)(function(){return Object(q.a)(z.a.mark(function e(){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!K){e.next=12;break}return e.prev=1,e.next=4,oe({name:a,email:m,phone:h,password:y,password2:N});case 4:"error"===(t=e.sent).type?(B(!0),H(t.data.message),X(!1)):(P(!0),Q(t.data.message),setTimeout(function(){P(!1),Q(null),ce.push("/login")},1500)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:ne(!1);case 12:case"end":return e.stop()}},e,null,[[1,8]])}))(),function(){X(!1)}},[K]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{className:"my-2 rounded d-flex align-items-center justify-content-center"},c.a.createElement(ae.a,{className:"".concat(me.a.formCard," bg-white p-4 rounded"),onSubmit:le},c.a.createElement("h2",{className:"text-center"},"Docify"),c.a.createElement("p",{className:"text-center"},"An address for your documents"),c.a.createElement("hr",null),c.a.createElement("h4",null,"Sign up"),c.a.createElement(j,{variant:"danger",show:D},U),c.a.createElement(j,{variant:"success",show:T},Y),c.a.createElement(ee,{loading:te,text:"Signing up"}),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicName"},c.a.createElement(ae.a.Label,null,"Your Name"),c.a.createElement(ae.a.Control,{type:"text",placeholder:"Enter your name",value:a,onChange:function(e){r(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicEmail"},c.a.createElement(ae.a.Label,null,"Email"),c.a.createElement(ae.a.Control,{type:"email",placeholder:"Enter your email",value:m,onChange:function(e){d(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicPhone"},c.a.createElement(ae.a.Label,null,"Phone"),c.a.createElement(ae.a.Control,{type:"text",placeholder:"Enter your phone",value:h,onChange:function(e){v(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicPassword"},c.a.createElement(ae.a.Label,null,"Password"),c.a.createElement(ae.a.Control,{type:"password",placeholder:"Enter your password",value:y,onChange:function(e){w(e.target.value)}})),c.a.createElement(ae.a.Group,{className:"mb-3",controlId:"formBasicRepeatPassword"},c.a.createElement(ae.a.Label,null,"Repeat Password"),c.a.createElement(ae.a.Control,{type:"password",placeholder:"Repeat your password",value:N,onChange:function(e){x(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("span",null,"Already have an account? "),c.a.createElement(s.b,{to:"/login"},"Login")),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Sign up"))))};var fe=function(e){var t=e.component,a=Object(h.a)(e,["component"]),n=V().currentUser;return n&&n._id&&n.email?c.a.createElement(u.b,a,function(e){return c.a.createElement(t,e)}):c.a.createElement(u.a,{to:"/login"})};var be=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return V().currentUser?c.a.createElement(u.a,{to:"/"}):c.a.createElement(u.b,a,function(e){return c.a.createElement(t,e)})},Ee=(a(158),function(){return c.a.createElement(p.a,{className:"d-flex flex-column text-center align-items-center justify-content-center text-light"},c.a.createElement("h1",{className:"display-1"},"404"),c.a.createElement("br",null),c.a.createElement("h4",null,"Sorry! We couldn't find the page you are looking for."),c.a.createElement(s.b,{to:"/"},c.a.createElement(f.a,{variant:"primary"},"Back to homepage")))}),he=a(97),ve=function(){var e=V(),t=e.currentUser,a=e.setCurrentUser,r=Object(n.useState)(!1),o=Object(l.a)(r,2),i=o[0],m=o[1],p=Z(i,"get","".concat("https://server.docify.devtahsin.com","/api/users/me"));return Object(n.useEffect)(function(){return t&&!t._id||m(!0),function(){m(!1)}},[]),Object(n.useEffect)(function(){return p&&p.data&&a(p.data.user),function(){}},[p]),Object(n.useEffect)(function(){var e=Object(he.a)("https://server.docify.devtahsin.com");console.log(e),e.on("connect",function(){J("socketid",e.id)}),e.on("new_notice",function(e){console.log(e),se.b.success(e.message,{theme:"dark",position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0})}),e.on("connect_error",function(){setTimeout(function(){return e.connect()},5e3)})},[]),c.a.createElement(U,null,c.a.createElement(s.a,null,c.a.createElement(d,null,c.a.createElement(u.d,null,c.a.createElement(fe,{exact:!0,path:"/",component:ue}),c.a.createElement(be,{exact:!0,path:"/login",component:de}),c.a.createElement(be,{exact:!0,path:"/signup",component:pe}),c.a.createElement(u.b,{component:Ee})))),c.a.createElement(se.a,null))};a(163),a(164),a(165),a(166),a(167);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(X,null,c.a.createElement(ve,null))),document.getElementById("root"))},42:function(e,t,a){e.exports={options:"Options_options__3Qa42",show:"Options_show__3T3gE",option:"Options_option__3Q2-v"}},63:function(e,t,a){e.exports={formCard:"FormCard_formCard__1sSnc"}},68:function(e,t,a){e.exports={galleryItem:"GalleryItem_galleryItem__hyjVQ",thumbnail_container:"GalleryItem_thumbnail_container__2Q3ym",thumbnail:"GalleryItem_thumbnail__2jFa5"}},86:function(e,t,a){e.exports={layout:"Layout_layout__2EAUG"}},87:function(e,t,a){},91:function(e,t,a){e.exports={gallery:"Gallery_gallery__2hrU6"}},99:function(e,t,a){e.exports=a(168)}},[[99,1,2]]]);
//# sourceMappingURL=main.3fbf2f16.chunk.js.map