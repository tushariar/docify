(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),o=a.n(r),l=a(1),s=a(28),u=a(10),i=a(68),m=a.n(i),d=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid p-4 ".concat(m.a.layout)},t))},p=a(145),f=a(144),b=a(69),E=a.n(b),h=a(4),j=a(148),O=function(e){var t=e.show,a=e.variant,n=e.children,r=Object(h.a)(e,["show","variant","children"]);return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(j.a,Object.assign({variant:a},r),n))},v=a(71),g=a(76),y=a(49),w=a.n(y),S=a(72),C=a.n(S),N=a(30),x=a.n(N),k=function(e){var t=e.show,a=e.doc,n=e.setDocAction,r=(e.setShowActions,"".concat("https://docify.devtahsin.com","/api/docs/download/").concat(a._id));return c.a.createElement("div",null,c.a.createElement("div",{className:"".concat(x.a.options," ").concat(t?x.a.show:null)},c.a.createElement("a",{href:r,className:"".concat(x.a.option)},c.a.createElement("i",{className:"bi bi-download"}),c.a.createElement("span",{className:"ms-2"},"Download")),c.a.createElement("div",{className:"".concat(x.a.option),onClick:function(){n({type:"mail",doc:a})}},c.a.createElement("i",{className:"bi bi-envelope"}),c.a.createElement("span",{className:"ms-2"},"Mail")),c.a.createElement("div",{className:"".concat(x.a.option),onClick:function(){n({type:"edit",doc:a})}},c.a.createElement("i",{className:"bi bi-pencil"}),c.a.createElement("span",{className:"ms-2"}," Edit")),c.a.createElement("div",{className:"".concat(x.a.option),onClick:function(){n({type:"delete",doc:a})}},c.a.createElement("i",{className:"bi bi-trash"}),c.a.createElement("span",{className:"ms-2"},"Delete"))))},_=function(e){var t=e.doc,a=e.setDocAction,r=Object(n.useState)(),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(),m=Object(l.a)(i,2),d=m[0],p=m[1],f=Object(n.useState)(),b=Object(l.a)(f,2),E=b[0],h=b[1],j="".concat("https://docify.devtahsin.com","/api/docs/").concat(t._id),O="".concat("https://docify.devtahsin.com","/api/docs/download/").concat(t._id),v=Object(n.useState)(!1),y=Object(l.a)(v,2),S=y[0],N=y[1],x=Object(n.useRef)();return Object(n.useEffect)(function(){return window.addEventListener("click",function(e){e.target!==x.current&&N(!1)}),function(){}},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(w.a.galleryItem)},c.a.createElement("div",{className:"rounded"},c.a.createElement("div",{className:"d-flex justify-content-between mt-1 mb-2 position-relative"},c.a.createElement("div",null,c.a.createElement("i",{className:"bi bi-clock me-2"}),C()(t.createdAt).format("DD MMMM YYYY")),c.a.createElement(k,{show:S,doc:t,setDocAction:a}),c.a.createElement("div",{onClick:function(){N(function(e){return!e})}},c.a.createElement("i",{className:"bi bi-three-dots-vertical",role:"button",ref:x}))),c.a.createElement("div",{className:"".concat(w.a.thumbnail_container)},c.a.createElement("img",{src:"application/pdf"!==t.mimetype?j:"./img_placeholder.png",alt:t.title,className:"".concat(w.a.thumbnail),onClick:"application/pdf"!==t.mimetype?function(){!function(e,t){u(!0),p(e),h(t)}(j,t.title)}:function(){}})),c.a.createElement("h5",{className:"my-2"},t.title))),s&&c.a.createElement(g.a,{medium:d,alt:E,showRotate:!0,downloadLink:O,onClose:function(){u(!1)}}))},D=a(73),I=a.n(D),B=a(146),L=a(34),T=c.a.createContext(),A=function(){return Object(n.useContext)(T)},G=[],P=function(e,t){switch(t.type){case"load":return[].concat(Object(L.a)(e),Object(L.a)(t.payload));case"create":return[].concat(Object(L.a)(e),[t.doc]);case"update":return e.map(function(e){return e._id!==t.payload._id?e:t.payload});case"delete":return e.filter(function(e){return e._id.toString()!==t.docId.toString()});case"unload":return[];default:return e}},F=function(e){var t=e.children,a=Object(n.useReducer)(P,G),r=Object(l.a)(a,2),o={docs:r[0],dispatchDocs:r[1]};return c.a.createElement(T.Provider,{value:o},t)},U=a(3),M=a(26),H=a.n(M),R=a(11),Y=a.n(R),z=a(21),q=a(77),Q=function(e){var t=new Date,a=t.getTime();a+=2592e6,t.setTime(a),document.cookie="token=".concat(e,"; expires=").concat(t,"; path=/")},J=c.a.createContext(),V=function(){return Object(n.useContext)(J)},W=new q.a,K=function(e){var t=e.children,a=Object(n.useState)(),r=Object(l.a)(a,2),o=r[0],s=r[1],u="Bearer ".concat(W.get("token")),i=function(){var e=Object(z.a)(Y.a.mark(function e(t){var a,n,c,r;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.prev=1,e.next=4,H.a.post("".concat("https://docify.devtahsin.com","/api/users/login"),{email:a,password:n});case 4:return c=e.sent,Q(c.data.token),(r=c.data.user)&&r._id&&r.email&&s(r),e.abrupt("return",Object(U.a)({type:"success"},c));case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",Object(U.a)({type:"error"},e.t0.response));case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),m=function(){W.remove("token"),W.remove("Docify"),s(null)},d=function(){var e=Object(z.a)(Y.a.mark(function e(t){var a,n,c,r,o,l;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.email,c=t.phone,r=t.password,o=t.password2,e.prev=1,e.next=4,H.a.post("".concat("https://docify.devtahsin.com","/api/users"),{name:a,email:n,phone:c,password:r,password2:o});case 4:return l=e.sent,e.abrupt("return",Object(U.a)({type:"success"},l));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(U.a)({type:"error"},e.t0.response));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(z.a)(Y.a.mark(function e(){var t;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat("https://docify.devtahsin.com","/api/users/me"),{headers:{Authorization:u}});case 3:return t=e.sent,s(t.data.user),e.abrupt("return",Object(U.a)({type:"success"},t));case 8:e.prev=8,e.t0=e.catch(0),m();case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),f={signup:d,login:i,logout:m,getMe:p,Authorization:u,currentUser:o,setCurrentUser:s};return Object(n.useEffect)(function(){Object(z.a)(Y.a.mark(function e(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:case"end":return e.stop()}},e)}))()},[]),c.a.createElement(J.Provider,{value:f},t)},X=function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=Object(n.useState)(),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(!1),m=Object(l.a)(i,2),d=m[0],p=m[1],f=V(),b=f.Authorization,E=f.logout;return Object(n.useEffect)(function(){return e&&("get"===t||"delete"===t?H.a[t](a,{headers:{Authorization:b}}).then(function(e){u(Object(U.a)({type:"success"},e)),e.data.token&&Q(e.data.token)}).catch(function(e){e.response?(u(Object(U.a)({type:"error"},e.response)),401===e.response.status&&setTimeout(function(){E()},3e3)):u({type:"error",data:{message:"Something wrong happened"}})}).then(function(){p(!0)}):H.a[t](a,Object(U.a)({},c),{headers:{Authorization:b}}).then(function(e){u(Object(U.a)({type:"success"},e)),e.data.token&&Q(e.data.token)}).catch(function(e){401===e.response.status&&setTimeout(function(){E()},3e3),u(Object(U.a)({type:"error"},e.response))}).then(function(){p(!0)})),function(){p(!1)}},[e]),d&&s},Z=a(74),$=function(e){var t=e.loading,a=e.text;return c.a.createElement(O,{variant:"info",show:t},c.a.createElement("div",{className:"d-flex"},c.a.createElement(Z.HashLoader,{size:30,color:"#135F7A",loading:t}),c.a.createElement("div",{className:"ms-2"},a,"...")))},ee=function(e){var t=e.show,a=e.handleClose,r=e.thumbnail,o=e.doc,s=Object(n.useState)(!1),u=Object(l.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),b=p[0],E=p[1],h=Object(n.useState)(!1),j=Object(l.a)(h,2),v=j[0],g=j[1],y=Object(n.useState)(!1),w=Object(l.a)(y,2),S=w[0],C=w[1],N=A().dispatchDocs,x=X(v,"delete","".concat("https://docify.devtahsin.com","/api/docs/").concat(o._id)),k=function(){a(),m(""),E("")};return Object(n.useEffect)(function(){return x&&("success"===x.type?(E(x.data.message),setTimeout(function(){k(),N({type:"delete",docId:o._id})},300)):m(x.data.message),g(!1),C(!1)),function(){C(!1),g(!1)}},[x]),c.a.createElement(B.a,{show:t,onHide:k},c.a.createElement(B.a.Header,{closeButton:!0},c.a.createElement(B.a.Title,null,c.a.createElement("h5",null,"Confirm deletion"))),c.a.createElement(B.a.Body,null,c.a.createElement(O,{variant:"danger",show:i},i),c.a.createElement(O,{variant:"success",show:b},b),c.a.createElement($,{loading:S,text:"Deleting ".concat(o.title)}),c.a.createElement("p",null,"Do you really want to delete ",c.a.createElement("b",null,o.title),"?"),c.a.createElement("img",{src:r,alt:o.title,width:"200px"})),c.a.createElement(B.a.Footer,null,c.a.createElement(f.a,{variant:"secondary",onClick:k},"Cancel"),c.a.createElement(f.a,{variant:"danger",onClick:function(){C(!0),setTimeout(function(){g(!0)},3e3)}},"Yes")))},te=a(147),ae=function(e){var t=e.show,a=e.handleClose,r=e.doc,o=Object(n.useState)(r.title),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),p=d[0],b=d[1],E=Object(n.useState)(!1),h=Object(l.a)(E,2),j=h[0],v=h[1],g=Object(n.useState)(""),y=Object(l.a)(g,2),w=y[0],S=y[1],C=Object(n.useState)(""),N=Object(l.a)(C,2),x=N[0],k=N[1],_=A().dispatchDocs,D=X(p,"put","".concat("https://docify.devtahsin.com","/api/docs/").concat(r._id),{title:u}),I=function(){S(""),k(""),v(!1),a()};return Object(n.useEffect)(function(){return D&&("success"===D.type?(k(D.data.message),setTimeout(function(){k(""),I(),_({type:"update",payload:D.data.doc})},300)):S(D.data.message),v(!1),b(!1)),function(){b(!1)}},[D]),c.a.createElement(B.a,{show:t,onHide:I},c.a.createElement(B.a.Header,{closeButton:!0},c.a.createElement(B.a.Title,null,c.a.createElement("h5",null,"You're editing: ",r.title))),c.a.createElement(B.a.Body,null,c.a.createElement(te.a,{onSubmit:function(e){if(e.preventDefault(),S(""),k(""),r.title.trim()===u.trim())return S("Nothing to update");v(!0),b(!0)}},c.a.createElement(O,{variant:"danger",show:w},w),c.a.createElement(O,{variant:"success",show:x},x),c.a.createElement($,{loading:j,text:"Updating ".concat(r.title)}),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicTitle"},c.a.createElement(te.a.Label,null,"New Title"),c.a.createElement(te.a.Control,{type:"text",value:u,onChange:function(e){i(e.target.value)},placeholder:"Ex: Passport, NID..."})),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Update"))))},ne=function(e){var t=e.show,a=e.handleClose,r=e.doc,o=Object(n.useState)(""),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),d=Object(l.a)(m,2),p=d[0],b=d[1],E=Object(n.useState)(""),h=Object(l.a)(E,2),j=h[0],v=h[1],g=Object(n.useState)(!1),y=Object(l.a)(g,2),w=y[0],S=y[1],C=Object(n.useState)(!1),N=Object(l.a)(C,2),x=N[0],k=N[1],_=Object(n.useState)(""),D=Object(l.a)(_,2),I=D[0],L=D[1],T=Object(n.useState)(""),A=Object(l.a)(T,2),G=A[0],P=A[1],F=r.title,U=function(){k(!1),a()},M=X(w,"post","".concat("https://docify.devtahsin.com","/api/docs/mail/").concat(r._id),{receiver:u,subject:p,message:j}),H=function(e){return e.preventDefault(),L(""),P(""),k(!1),u?p?(k(!0),void S(!0)):L("Subject is required!"):L("Receiver address is required!")};return Object(n.useEffect)(function(){return b(F),function(){b("")}},[F]),Object(n.useEffect)(function(){return M&&(M.type&&"success"===M.type?(P(M.data.message),i(""),v(""),setTimeout(function(){P(""),U()},700)):L(M.data.message),k(!1)),S(!1),function(){S(!1)}},[M]),c.a.createElement(B.a,{show:t,onHide:U},c.a.createElement(B.a.Header,{closeButton:!0},c.a.createElement(B.a.Title,null,c.a.createElement("h5",null,"Mail your document"))),c.a.createElement(B.a.Body,null,c.a.createElement(te.a,{onSubmit:H},c.a.createElement(O,{variant:"danger",show:I},I),c.a.createElement(O,{variant:"success",show:G},G),c.a.createElement($,{loading:x,text:"Sending"}),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicReceiver"},c.a.createElement(te.a.Label,null,"Receiver"),c.a.createElement(te.a.Control,{type:"text",placeholder:"fulan@gmail.com",value:u,onChange:function(e){i(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicSubject"},c.a.createElement(te.a.Label,null,"Subject"),c.a.createElement(te.a.Control,{type:"text",placeholder:"Passport of Fulan Ibn Fulan",value:p,onChange:function(e){b(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicMessage"},c.a.createElement(te.a.Label,null,"Message"),c.a.createElement(te.a.Control,{as:"textarea",placeholder:"Message",value:j,onChange:function(e){v(e.target.value)},style:{height:"100px"}}))),c.a.createElement("p",null,"* Email will be sent from: ",c.a.createElement("b",null,"docify@devtahsin.com")," ",c.a.createElement("br",null),"* Check the spam folder")),c.a.createElement(B.a.Footer,null,c.a.createElement(f.a,{variant:"primary",type:"button",onClick:H},"Send Mail"),c.a.createElement(f.a,{variant:"secondary",type:"button",onClick:U},"Cancel")))},ce=function(e){var t=e.docs,a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=r[0],s=r[1],u=Object(n.useState)(!1),i=Object(l.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),b=f[0],E=f[1],h=Object(n.useState)({title:"",_id:""}),j=Object(l.a)(h,2),O=j[0],g=j[1],y=Object(n.useState)(""),w=Object(l.a)(y,2),S=w[0],C=w[1];Object(n.useEffect)(function(){switch(S.type){case"edit":d(!0),g(S.doc);break;case"mail":E(!0),g(S.doc);break;case"delete":s(!0),g(S.doc);break;default:g({title:"",_id:""})}return function(){g({title:"",_id:""})}},[S]);var N="object"===typeof O?"".concat("https://docify.devtahsin.com","/api/docs/").concat(O._id):null;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(I.a.gallery)},t.map(function(e){return c.a.createElement(_,{key:Object(v.uniqueId)()*Math.random(),doc:e,setDocAction:C})})),c.a.createElement(ae,{show:m,doc:O,handleClose:function(){d(!1)}}),c.a.createElement(ne,{show:b,doc:O,handleClose:function(){E(!1)}}),c.a.createElement(ee,{show:o,thumbnail:N,doc:O,handleClose:function(){s(!1)}}))},re=function(e){var t=e.show,a=e.handleClose,r=Object(n.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),d=m[0],p=m[1],b=Object(n.useState)(""),E=Object(l.a)(b,2),h=E[0],j=E[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(),_=Object(l.a)(k,2),D=_[0],I=_[1],L=Object(n.useState)(),T=Object(l.a)(L,2),A=T[0],G=T[1],P=V(),F=P.currentUser,U=P.setCurrentUser,M=Object(n.useState)(!1),H=Object(l.a)(M,2),R=H[0],Y=H[1],z=Object(n.useState)(!1),q=Object(l.a)(z,2),Q=q[0],J=q[1],W=function(e){e.preventDefault(),I(""),G(""),J(!1),0!==y.trim().length?(J(!0),Y(!0)):I("Password is required to make any change!")},K=X(R,"put","".concat("https://docify.devtahsin.com","/api/users/me"),{name:s,phone:h,password:y,password2:N});return Object(n.useEffect)(function(){return u(F.name),p(F.email),j(F.phone),function(){}},[F]),Object(n.useEffect)(function(){return K&&(Y(!1),"error"===K.type?I(K.data.message):(G(K.data.message),delete K.data.message,U(K.data),w(""),x(""),setTimeout(function(){G()},3e3)),J(!1)),function(){Y(!1)}},[K]),c.a.createElement(B.a,{show:t,onHide:function(){J(!1),a()}},c.a.createElement(B.a.Header,{closeButton:!0},c.a.createElement(B.a.Title,null,c.a.createElement("h5",null,"Assalamu Alaikum, ",F.name))),c.a.createElement(B.a.Body,null,c.a.createElement("form",{onSubmit:W},c.a.createElement(O,{variant:"danger",show:D},D),c.a.createElement(O,{variant:"success",show:A},A),c.a.createElement($,{loading:Q,text:"Updating"}),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicName"},c.a.createElement(te.a.Label,null,"Name"),c.a.createElement(te.a.Control,{type:"text",placeholder:"What should we call you now?",value:s,onChange:function(e){u(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicEmail"},c.a.createElement(te.a.Label,null,"Email address"),c.a.createElement(te.a.Control,{type:"email",placeholder:"You can't change your email",value:d,onChange:function(e){p(e.target.value)},disabled:!0}),c.a.createElement(te.a.Text,{className:"text-muted"},"You can't change your email.")),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicPhone"},c.a.createElement(te.a.Label,null,"Phone"),c.a.createElement(te.a.Control,{type:"text",minLength:"11",maxLength:"11",placeholder:"Phone number must be bangladeshi",value:h,onChange:function(e){j(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicCurrentPassword"},c.a.createElement(te.a.Label,null,"Password"),c.a.createElement(te.a.Control,{type:"password",placeholder:"Enter your Password",value:y,onChange:function(e){w(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicNewPassword"},c.a.createElement(te.a.Label,null,"New Password"),c.a.createElement(te.a.Control,{type:"password",placeholder:"Enter new Password",value:N,onChange:function(e){x(e.target.value)}}),c.a.createElement(te.a.Text,{className:"text-muted"},"Leave this empty if you do not want to change your password.")),c.a.createElement(f.a,{variant:"primary",type:"submit",onClick:W},"Update Account"))))},oe=function(e){var t=e.show,a=e.handleClose,r=Object(n.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)(),m=Object(l.a)(i,2),d=m[0],p=m[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),h=E[0],j=E[1],v=Object(n.useState)(!1),g=Object(l.a)(v,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(""),_=Object(l.a)(k,2),D=_[0],I=_[1],L=V().Authorization,T=A().dispatchDocs,G=function(){u(""),p(null),w(!1),x(""),I(""),a()};return Object(n.useEffect)(function(){return Object(z.a)(Y.a.mark(function e(){var t;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h&&((t=new FormData).append("title",s),t.append("document",d),H.a.post("".concat("https://docify.devtahsin.com","/api/docs"),t,{headers:{Authorization:L,"Content-Type":"multipart/form-data"}}).then(function(e){I(e.data.message),u(""),p(null),setTimeout(function(){I(null),G(),T({type:"create",doc:e.data.doc})},300)}).catch(function(e){x(e.response.data.message),401===e.response.status&&(window.location.href="/")}).then(function(){w(!1)}));case 1:case"end":return e.stop()}},e)}))(),function(){j(!1)}},[h]),c.a.createElement(B.a,{show:t,onHide:G},c.a.createElement(B.a.Header,{closeButton:!0},c.a.createElement(B.a.Title,null,c.a.createElement("h5",null,"Add new document"))),c.a.createElement(B.a.Body,null,c.a.createElement(te.a,{onSubmit:function(e){if(e.preventDefault(),j(!1),x(""),w(!1),!s||!d)return x("Please give a title and select a file");w(!0),j(!0)}},c.a.createElement(O,{variant:"danger",show:N},N),c.a.createElement(O,{variant:"success",show:D},D),c.a.createElement($,{loading:y,text:"Uploading"}),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicTitle"},c.a.createElement(te.a.Label,null,"Document Title"),c.a.createElement(te.a.Control,{type:"text",placeholder:"Ex: Passport, NID...",value:s,onChange:function(e){u(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicTitle"},c.a.createElement(te.a.Label,null,"Select File"),c.a.createElement(te.a.Control,{type:"file",onChange:function(e){p(e.target.files[0])}})),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Upload"))))},le=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),b=d[0],h=d[1],j=Object(n.useState)(!1),v=Object(l.a)(j,2),g=v[0],y=v[1],w=Object(n.useState)(!0),S=Object(l.a)(w,2),C=S[0],N=S[1],x=V().logout,k=A(),_=k.docs,D=k.dispatchDocs,I=X(b,"post","".concat("https://docify.devtahsin.com","/api/users/logout")),B=X(g,"get","".concat("https://docify.devtahsin.com","/api/docs/"));return Object(n.useEffect)(function(){return I&&"success"===I.type&&(D({type:"unload"}),x()),function(){h(!1)}},[I]),Object(n.useEffect)(function(){if(B&&"success"===B.type){var e=B.data.docs;B.data.docs.length>0&&D({type:"load",payload:e}),N(!1),y(!1)}return function(){N(!1),y(!1)}},[B]),Object(n.useEffect)(function(){return y(!0),function(){y(!1)}},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{fluid:!0,className:"rounded d-flex align-items-center justify-content-center"},c.a.createElement(p.a,{className:"text-light rounded p-2 ".concat(E.a.dashboard)},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",null,"Dashboard"),c.a.createElement("div",null,c.a.createElement(f.a,{className:"ms-2",variant:"light",onClick:function(){i(!0)}},c.a.createElement("i",{className:"bi bi-plus-circle"})),c.a.createElement(f.a,{variant:"light",className:"ms-2",onClick:function(){r(!0)}},c.a.createElement("i",{className:"bi bi-person"})),c.a.createElement(f.a,{className:"ms-2",variant:"light",onClick:function(){h(!0)}},c.a.createElement("i",{className:"bi bi-box-arrow-right"})))),c.a.createElement("hr",null),c.a.createElement(O,{variant:"secondary",show:!C&&_&&_.length<1},"No document uploaded yet"),c.a.createElement($,{loading:C,text:"Getting your docs"}),c.a.createElement(ce,{docs:_}))),c.a.createElement(re,{show:a,handleClose:function(){r(!1)}}),c.a.createElement(oe,{show:u,handleClose:function(){i(!1)}}))},se=a(46),ue=a.n(se),ie=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),h=E[0],j=E[1],v=Object(n.useState)(!1),g=Object(l.a)(v,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(""),_=Object(l.a)(k,2),D=_[0],I=_[1],B=Object(n.useState)(),L=Object(l.a)(B,2),T=L[0],G=L[1],P=Object(n.useState)(!1),F=Object(l.a)(P,2),U=F[0],M=F[1],H=Object(u.g)(),R=V().login,q=A().dispatchDocs;return Object(n.useEffect)(function(){return q({type:"unload"}),function(){}},[]),Object(n.useEffect)(function(){return Object(z.a)(Y.a.mark(function e(){var t;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=13;break}return e.prev=1,e.next=4,R({email:a,password:m});case 4:"error"===(t=e.sent).type?(j(!0),x(t.data.message)):(w(!0),I(t.data.message),setTimeout(function(){w(!1),I(null),H.push("/")},1e3)),G(!1),M(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}))(),function(){G(!1)}},[T]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{className:"my-2 rounded d-flex align-items-center justify-content-center"},c.a.createElement(te.a,{className:"".concat(ue.a.formCard," bg-white p-4 rounded"),onSubmit:function(e){if(e.preventDefault(),G(!1),j(!1),w(!1),M(!1),x(""),I(""),!a||!m)return j(!0),void x("All fields are required!");M(!0),G(!0)}},c.a.createElement("h2",{className:"text-center"},"Docify"),c.a.createElement("p",{className:"text-center"},"An address for your documents"),c.a.createElement("hr",null),c.a.createElement(O,{variant:"danger",show:h},N),c.a.createElement(O,{variant:"success",show:y},D),c.a.createElement($,{loading:U,text:"Logging you in"}),c.a.createElement("h4",null,"Login"),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicEmail"},c.a.createElement(te.a.Label,null,"Email"),c.a.createElement(te.a.Control,{type:"email",placeholder:"Enter your email",value:a,onChange:function(e){r(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicPassword"},c.a.createElement(te.a.Label,null,"Password"),c.a.createElement(te.a.Control,{type:"password",placeholder:"Enter your password",value:m,onChange:function(e){d(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("span",null,"Don't have an account? "),c.a.createElement(s.b,{to:"/signup"},"Sign up")),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Login"))))},me=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),m=i[0],d=i[1],b=Object(n.useState)(""),E=Object(l.a)(b,2),h=E[0],j=E[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),y=g[0],w=g[1],S=Object(n.useState)(""),C=Object(l.a)(S,2),N=C[0],x=C[1],k=Object(n.useState)(!1),_=Object(l.a)(k,2),D=_[0],I=_[1],B=Object(n.useState)(!1),L=Object(l.a)(B,2),T=L[0],G=L[1],P=Object(n.useState)(""),F=Object(l.a)(P,2),U=F[0],M=F[1],H=Object(n.useState)(""),R=Object(l.a)(H,2),q=R[0],Q=R[1],J=Object(n.useState)(),W=Object(l.a)(J,2),K=W[0],X=W[1],Z=Object(n.useState)(!1),ee=Object(l.a)(Z,2),ae=ee[0],ne=ee[1],ce=Object(u.g)(),re=A().dispatchDocs,oe=V().signup,le=function(){var e=Object(z.a)(Y.a.mark(function e(t){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(!1),G(!1),ne(!1),M(""),Q(""),a&&m&&h&&y&&N){e.next=10;break}return I(!0),M("All fields are required!"),e.abrupt("return");case 10:ne(!0),X(!0);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return re({type:"unload"}),function(){}},[]),Object(n.useEffect)(function(){return Object(z.a)(Y.a.mark(function e(){var t;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!K){e.next=12;break}return e.prev=1,e.next=4,oe({name:a,email:m,phone:h,password:y,password2:N});case 4:"error"===(t=e.sent).type?(I(!0),M(t.data.message),X(!1)):(G(!0),Q(t.data.message),setTimeout(function(){G(!1),Q(null),ce.push("/login")},1500)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:ne(!1);case 12:case"end":return e.stop()}},e,null,[[1,8]])}))(),function(){X(!1)}},[K]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{className:"my-2 rounded d-flex align-items-center justify-content-center"},c.a.createElement(te.a,{className:"".concat(ue.a.formCard," bg-white p-4 rounded"),onSubmit:le},c.a.createElement("h2",{className:"text-center"},"Docify"),c.a.createElement("p",{className:"text-center"},"An address for your documents"),c.a.createElement("hr",null),c.a.createElement("h4",null,"Sign up"),c.a.createElement(O,{variant:"danger",show:D},U),c.a.createElement(O,{variant:"success",show:T},q),c.a.createElement($,{loading:ae,text:"Signing up"}),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicName"},c.a.createElement(te.a.Label,null,"Your Name"),c.a.createElement(te.a.Control,{type:"text",placeholder:"Enter your name",value:a,onChange:function(e){r(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicEmail"},c.a.createElement(te.a.Label,null,"Email"),c.a.createElement(te.a.Control,{type:"email",placeholder:"Enter your email",value:m,onChange:function(e){d(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicPhone"},c.a.createElement(te.a.Label,null,"Phone"),c.a.createElement(te.a.Control,{type:"text",placeholder:"Enter your phone",value:h,onChange:function(e){j(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicPassword"},c.a.createElement(te.a.Label,null,"Password"),c.a.createElement(te.a.Control,{type:"password",placeholder:"Enter your password",value:y,onChange:function(e){w(e.target.value)}})),c.a.createElement(te.a.Group,{className:"mb-3",controlId:"formBasicRepeatPassword"},c.a.createElement(te.a.Label,null,"Repeat Password"),c.a.createElement(te.a.Control,{type:"password",placeholder:"Repeat your password",value:N,onChange:function(e){x(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("span",null,"Already have an account? "),c.a.createElement(s.b,{to:"/login"},"Login")),c.a.createElement(f.a,{variant:"primary",type:"submit"},"Sign up"))))};var de=function(e){var t=e.component,a=Object(h.a)(e,["component"]),n=V().currentUser;return n&&n._id&&n.email?c.a.createElement(u.b,a,function(e){return c.a.createElement(t,e)}):c.a.createElement(u.a,{to:"/login"})};var pe=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return V().currentUser?c.a.createElement(u.a,{to:"/"}):c.a.createElement(u.b,a,function(e){return c.a.createElement(t,e)})},fe=(a(137),function(){var e=V().setCurrentUser,t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],o=a[1],i=X(r,"get","".concat("https://docify.devtahsin.com","/api/users/me"));return Object(n.useEffect)(function(){return o(!0),function(){o(!1)}},[]),Object(n.useEffect)(function(){return i&&i.data&&e(i.data.user),function(){}},[i]),c.a.createElement(F,null,c.a.createElement(s.a,null,c.a.createElement(d,null,c.a.createElement(u.d,null,c.a.createElement(de,{exact:!0,path:"/",component:le}),c.a.createElement(pe,{exact:!0,path:"/login",component:ie}),c.a.createElement(pe,{exact:!0,path:"/signup",component:me})))))});a(138),a(139),a(140),a(141);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null,c.a.createElement(fe,null))),document.getElementById("root"))},30:function(e,t,a){e.exports={options:"Options_options__3Qa42",show:"Options_show__3T3gE",option:"Options_option__3Q2-v"}},46:function(e,t,a){e.exports={formCard:"FormCard_formCard__1sSnc"}},49:function(e,t,a){e.exports={galleryItem:"GalleryItem_galleryItem__hyjVQ",thumbnail_container:"GalleryItem_thumbnail_container__2Q3ym",thumbnail:"GalleryItem_thumbnail__2jFa5"}},68:function(e,t,a){e.exports={layout:"Layout_layout__2EAUG"}},69:function(e,t,a){},73:function(e,t,a){e.exports={gallery:"Gallery_gallery__2hrU6"}},78:function(e,t,a){e.exports=a(142)}},[[78,1,2]]]);
//# sourceMappingURL=main.9946ea87.chunk.js.map