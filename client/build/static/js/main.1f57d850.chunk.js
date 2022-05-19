(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a(171)},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n,c,r,o,l,i,s,u=a(0),m=a.n(u),d=a(31),p=a.n(d),b=a(23),f=a(15),h=a(1),E=a(4),g=a(177),v=function(e){var t=e.show,a=e.variant,n=e.children,c=Object(E.a)(e,["show","variant","children"]);return m.a.createElement(m.a.Fragment,null,t&&m.a.createElement(g.a,Object.assign({variant:a},c),n))},j=a(6),O=a(102),y=a(94),x=a.n(y),w=a(175),S=a(176),C=a(173),N=a(46),k=a(35),_=a(44),L=a.n(_),D=a(21),T=a.n(D),P=a(38),B=a(69),I=function(e,t){var a=new Date,n=a.getTime();n+=2592e6,a.setTime(n),document.cookie="".concat(e,"=").concat(t,"; expires=").concat(a,"; path=/")},U=m.a.createContext(),G=function(){return Object(u.useContext)(U)},A=new B.a,z=function(e){var t=e.children,a=Object(u.useState)(A.get("currentUser")&&"object"===typeof A.get("currentUser")&&A.get("currentUser")._id&&A.get("currentUser").email?A.get("currentUser"):null),n=Object(h.a)(a,2),c=n[0],r=n[1],o="Bearer ".concat(A.get("token")),l=function(){var e=Object(P.a)(T.a.mark(function e(t){var a,n,c,o;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.prev=1,e.next=4,L.a.post("".concat("https://server.docify.devtahsin.com","/api/users/login"),{email:a,password:n},{withCredentials:!0});case 4:return c=e.sent,I("token",c.data.token),(o=c.data.user)&&o._id&&o.email&&(r(o),I("currentUser",JSON.stringify(o))),e.abrupt("return",Object(k.a)({type:"success"},c));case 11:if(e.prev=11,e.t0=e.catch(1),!e.t0){e.next=15;break}return e.abrupt("return",{type:"error",data:{message:"Something wrong happened! Try again later"}});case 15:return e.abrupt("return",Object(k.a)({type:"error"},e.t0.response));case 16:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),i={signup:function(){var e=Object(P.a)(T.a.mark(function e(t){var a,n,c,r,o,l;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.email,c=t.phone,r=t.password,o=t.password2,e.prev=1,e.next=4,L.a.post("".concat("https://server.docify.devtahsin.com","/api/users"),{name:a,email:n,phone:c,password:r,password2:o},{withCredentials:!0});case 4:return l=e.sent,e.abrupt("return",Object(k.a)({type:"success"},l));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(k.a)({type:"error"},e.t0.response));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),login:l,logout:function(){A.remove("token"),A.remove("Docify"),A.remove("currentUser"),r(null)},Authorization:o,currentUser:c,setCurrentUser:r};return m.a.createElement(U.Provider,{value:i},t)},F=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=Object(u.useState)(),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(!1),s=Object(h.a)(i,2),m=s[0],d=s[1],p=G(),b=p.Authorization,f=p.logout,E=(new B.a).get("socketid");return Object(u.useEffect)(function(){return e&&("get"===t||"delete"===t?L.a[t](a,{headers:{Authorization:b,socketid:E},withCredentials:!0}).then(function(e){l(Object(k.a)({type:"success"},e)),e.data.token&&I("token",e.data.token)}).catch(function(e){e.response?(l(Object(k.a)({type:"error"},e.response)),401===e.response.status&&setTimeout(function(){f()},3e3)):l({type:"error",data:{message:"Something wrong happened"}})}).then(function(){d(!0)}):L.a[t](a,Object(k.a)({},n),{headers:{Authorization:b,socketid:E},withCredentials:!0}).then(function(e){l(Object(k.a)({type:"success"},e)),e.data.token&&I("token",e.data.token)}).catch(function(e){e.response?(401===e.response.status&&setTimeout(function(){f()},3e3),l(Object(k.a)({type:"error"},e.response))):l({type:"error",data:{message:"Something wrong happened!"}})}).then(function(){d(!0)})),function(){d(!1)}},[e]),m&&o},M=m.a.createContext(),H=function(){return Object(u.useContext)(M)},R=[],Y=function(e,t){switch(t.type){case"load":return[].concat(Object(N.a)(e),Object(N.a)(t.payload));case"create":return[t.doc].concat(Object(N.a)(e));case"update":return[t.payload].concat(Object(N.a)(e.filter(function(e){return e._id.toString()!==t.payload._id.toString()})));case"delete":return e.filter(function(e){return e._id.toString()!==t.docId.toString()});case"deleteSome":for(var a=[],n=t.keep<=e.length?t.keep:e.length,c=0;c<n;c++)a.push(e[c]);return a;case"unload":return[];default:return e}},J=function(e){var t=e.children,a=Object(u.useReducer)(Y,R),n=Object(h.a)(a,2),c=n[0],r=n[1],o=Object(u.useState)(!1),l=Object(h.a)(o,2),i=l[0],s=l[1],d=Object(u.useState)(!1),p=Object(h.a)(d,2),b=p[0],f=p[1],E=Object(u.useState)(0),g=Object(h.a)(E,2),v=g[0],j=g[1],O=Object(u.useState)(!0),y=Object(h.a)(O,2),x=y[0],w=y[1],S=G().currentUser,C=F(i,"get","".concat("https://server.docify.devtahsin.com","/api/docs/limit/").concat(8*v,"/").concat(8));Object(u.useEffect)(function(){if(C&&"success"===C.type){f(!0),j(function(e){return e+1});var e=C.data.docs;C.data.docs.length>0&&r({type:"load",payload:e}),w(e.length>=8),s(!1)}return function(){s(!1)}},[C]),Object(u.useEffect)(function(){S&&S._id&&S.email&&s(!0)},[S]);var N={docs:c,dispatchDocs:r,setPageNumber:j,hasMore:x,setHasMore:w,setShouldGetDocs:s,deleteSome:function(){r({type:"deleteSome",keep:8}),j(1),w(c.length>=8)},docsLoaded:b,setDocsLoaded:f};return m.a.createElement(M.Provider,{value:N},t)},q=a(65),W=function(e){var t=e.loading,a=e.text;return m.a.createElement(v,{variant:"info",show:t},m.a.createElement("div",{className:"d-flex"},m.a.createElement(q.HashLoader,{size:30,color:"#135F7A",loading:t}),m.a.createElement("div",{className:"ms-2"},a,"...")))},K=function(e){var t=e.show,a=e.handleClose,n=e.doc,c=Object(u.useState)(n.title),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(!1),s=Object(h.a)(i,2),d=s[0],p=s[1],b=Object(u.useState)(!1),f=Object(h.a)(b,2),E=f[0],g=f[1],j=Object(u.useState)(""),O=Object(h.a)(j,2),y=O[0],x=O[1],N=Object(u.useState)(""),k=Object(h.a)(N,2),_=k[0],L=k[1],D=H().dispatchDocs,T=F(d,"put","".concat("https://server.docify.devtahsin.com","/api/docs/").concat(n._id),{title:o}),P=function(){x(""),L(""),g(!1),a()};return Object(u.useEffect)(function(){return T&&("success"===T.type?(L(T.data.message),setTimeout(function(){L(""),P(),D({type:"update",payload:T.data.doc})},300)):x(T.data.message),g(!1),p(!1)),function(){p(!1)}},[T]),m.a.createElement(w.a,{show:t,onHide:P},m.a.createElement(w.a.Header,{closeButton:!0},m.a.createElement(w.a.Title,null,m.a.createElement("h5",null,"You're editing: ",n.title))),m.a.createElement(w.a.Body,null,m.a.createElement(S.a,{onSubmit:function(e){if(e.preventDefault(),x(""),L(""),n.title.trim()===o.trim())return x("Nothing to update");g(!0),p(!0)}},m.a.createElement(v,{variant:"danger",show:y},y),m.a.createElement(v,{variant:"success",show:_},_),m.a.createElement(W,{loading:E,text:"Updating ".concat(n.title)}),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicTitle"},m.a.createElement(S.a.Label,null,"New Title"),m.a.createElement(S.a.Control,{type:"text",value:o,onChange:function(e){l(e.target.value)},placeholder:"Ex: Passport, NID..."})),m.a.createElement(C.a,{variant:"primary",type:"submit"},"Update"))))},Q=function(e){var t=e.show,a=e.handleClose,n=e.doc,c=Object(u.useState)(!1),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(!1),s=Object(h.a)(i,2),d=s[0],p=s[1],b=Object(u.useState)(!1),f=Object(h.a)(b,2),E=f[0],g=f[1],j=Object(u.useState)(!1),O=Object(h.a)(j,2),y=O[0],x=O[1],S="".concat("https://server.docify.devtahsin.com","/api/docs/").concat(n._id),N=H().dispatchDocs,k=F(E,"delete","".concat("https://server.docify.devtahsin.com","/api/docs/").concat(n._id)),_=function(){a(),l(""),p("")};return Object(u.useEffect)(function(){return k&&("success"===k.type?(p(k.data.message),setTimeout(function(){_(),N({type:"delete",docId:n._id})},300)):l(k.data.message),g(!1),x(!1)),function(){x(!1),g(!1)}},[k,n._id]),m.a.createElement(w.a,{show:t,onHide:_},m.a.createElement(w.a.Header,{closeButton:!0},m.a.createElement(w.a.Title,null,m.a.createElement("h5",null,"Confirm deletion"))),m.a.createElement(w.a.Body,null,m.a.createElement(v,{variant:"danger",show:o},o),m.a.createElement(v,{variant:"success",show:d},d),m.a.createElement(W,{loading:y,text:"Deleting ".concat(n.title)}),m.a.createElement("p",null,"Do you really want to delete ",m.a.createElement("b",null,n.title),"?"),m.a.createElement("img",{src:S,alt:n.title,width:"200px"})),m.a.createElement(w.a.Footer,null,m.a.createElement(C.a,{variant:"secondary",onClick:_},"Cancel"),m.a.createElement(C.a,{variant:"danger",onClick:function(){x(!0),setTimeout(function(){g(!0)},3e3)}},"Yes")))},V=function(e){var t=e.show,a=e.handleClose,n=e.doc,c=Object(u.useState)(""),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(""),s=Object(h.a)(i,2),d=s[0],p=s[1],b=Object(u.useState)(""),f=Object(h.a)(b,2),E=f[0],g=f[1],j=Object(u.useState)(!1),O=Object(h.a)(j,2),y=O[0],x=O[1],N=Object(u.useState)(!1),k=Object(h.a)(N,2),_=k[0],L=k[1],D=Object(u.useState)(""),T=Object(h.a)(D,2),P=T[0],B=T[1],I=Object(u.useState)(""),U=Object(h.a)(I,2),G=U[0],A=U[1],z=n.title,M=function(){L(!1),a()},H=F(y,"post","".concat("https://server.docify.devtahsin.com","/api/docs/mail/").concat(n._id),{receiver:o,subject:d,message:E}),R=function(e){return e.preventDefault(),B(""),A(""),L(!1),o?d?(L(!0),void x(!0)):B("Subject is required!"):B("Receiver address is required!")};return Object(u.useEffect)(function(){return p(z),function(){p("")}},[z]),Object(u.useEffect)(function(){return H&&(H.type&&"success"===H.type?(A(H.data.message),l(""),g(""),setTimeout(function(){A(""),M()},700)):B(H.data.message),L(!1)),x(!1),function(){x(!1)}},[H]),m.a.createElement(w.a,{show:t,onHide:M},m.a.createElement(w.a.Header,{closeButton:!0},m.a.createElement(w.a.Title,null,m.a.createElement("h5",null,"Mail your document"))),m.a.createElement(w.a.Body,null,m.a.createElement(S.a,{onSubmit:R},m.a.createElement(v,{variant:"danger",show:P},P),m.a.createElement(v,{variant:"success",show:G},G),m.a.createElement(W,{loading:_,text:"Sending"}),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicReceiver"},m.a.createElement(S.a.Label,null,"Receiver"),m.a.createElement(S.a.Control,{type:"text",placeholder:"fulan@gmail.com",value:o,onChange:function(e){l(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicSubject"},m.a.createElement(S.a.Label,null,"Subject"),m.a.createElement(S.a.Control,{type:"text",placeholder:"Passport of Fulan Ibn Fulan",value:d,onChange:function(e){p(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicMessage"},m.a.createElement(S.a.Label,null,"Message"),m.a.createElement(S.a.Control,{as:"textarea",placeholder:"Message",value:E,onChange:function(e){g(e.target.value)},style:{height:"100px"}}))),m.a.createElement("p",null,"* Email will be sent from: ",m.a.createElement("b",null,"docify@devtahsin.com")," ",m.a.createElement("br",null),"* Check the spam folder")),m.a.createElement(w.a.Footer,null,m.a.createElement(C.a,{variant:"primary",type:"button",onClick:R},"Send Mail"),m.a.createElement(C.a,{variant:"secondary",type:"button",onClick:M},"Cancel")))},X=m.a.createContext(),Z=function(e){var t=e.children,a=Object(u.useState)({title:"",_id:""}),n=Object(h.a)(a,2),c=n[0],r=n[1],o=Object(u.useState)(""),l=Object(h.a)(o,2),i=l[0],s=l[1],d=Object(u.useState)(!1),p=Object(h.a)(d,2),b=p[0],f=p[1],E=Object(u.useState)(!1),g=Object(h.a)(E,2),v=g[0],j=g[1],O=Object(u.useState)(!1),y=Object(h.a)(O,2),x=y[0],w=y[1];Object(u.useEffect)(function(){switch(i.type){case"edit":j(!0),r(i.doc);break;case"mail":w(!0),r(i.doc);break;case"delete":f(!0),r(i.doc);break;default:r({title:"",_id:""})}return function(){r({title:"",_id:""})}},[i]);var S={selectedDoc:c,setSelectedDoc:r,docAction:i,setDocAction:s};return m.a.createElement(X.Provider,{value:S},t,m.a.createElement(K,{show:v,doc:c,handleClose:function(){j(!1)}}),m.a.createElement(V,{show:x,doc:c,handleClose:function(){w(!1)}}),m.a.createElement(Q,{show:b,doc:c,handleClose:function(){f(!1)}}))},$=a(45),ee=a.n($),te=function(e){var t=e.show,a=e.doc,n="".concat("https://server.docify.devtahsin.com","/api/docs/download/").concat(a._id),c=Object(u.useContext)(X).setDocAction;return m.a.createElement("div",null,m.a.createElement("div",{className:"".concat(ee.a.options," ").concat(t?ee.a.show:null)},m.a.createElement("a",{href:"".concat("https://server.docify.devtahsin.com","/api/docs/").concat(a._id),target:"_blank",rel:"noopener noreferrer",className:"".concat(ee.a.option)},m.a.createElement("i",{className:"bi bi-box-arrow-up-right"}),m.a.createElement("span",{className:"ms-2"},"Open")),m.a.createElement("a",{href:n,className:"".concat(ee.a.option)},m.a.createElement("i",{className:"bi bi-download"}),m.a.createElement("span",{className:"ms-2"},"Download")),m.a.createElement("div",{className:"".concat(ee.a.option),onClick:function(){c({type:"mail",doc:a})}},m.a.createElement("i",{className:"bi bi-envelope"}),m.a.createElement("span",{className:"ms-2"},"Mail")),m.a.createElement("div",{className:"".concat(ee.a.option),onClick:function(){c({type:"edit",doc:a})}},m.a.createElement("i",{className:"bi bi-pencil"}),m.a.createElement("span",{className:"ms-2"}," Edit")),m.a.createElement("div",{className:"".concat(ee.a.option),onClick:function(){c({type:"delete",doc:a})}},m.a.createElement("i",{className:"bi bi-trash"}),m.a.createElement("span",{className:"ms-2"},"Delete"))))},ae=function(){return m.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center text-center bg-dark text-light p-2"},m.a.createElement("div",{className:"display-1"},m.a.createElement("i",{className:"bi bi-file-earmark-pdf"})),m.a.createElement("h5",null,"No preview available"),m.a.createElement("p",null,"Download the file or ",m.a.createElement("br",null)," open in new tab"))},ne=a(7),ce=a(95),re=a.n(ce),oe=ne.b.div(n||(n=Object(j.a)(["\n    background-color: var(--sidebar-color);\n    color: var(--text-color);\n    padding: 0.5rem;\n    border-radius: 5px;\n    box-sizing: border-box;\n"]))),le=ne.b.div(c||(c=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 0.5rem 0;\n    position: relative;\n"]))),ie=ne.b.div(r||(r=Object(j.a)(["\n    border-radius: 5px;\n    width: 100%;\n    height: 28vh;\n    /* max-height: 200px; */\n    overflow: hidden;\n"]))),se=ne.b.img(o||(o=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n"]))),ue=function(e){var t=e.doc,a=Object(u.useState)(),n=Object(h.a)(a,2),c=n[0],r=n[1],o=Object(u.useState)(),l=Object(h.a)(o,2),i=l[0],s=l[1],d=Object(u.useState)(),p=Object(h.a)(d,2),b=p[0],f=p[1],E="".concat("https://server.docify.devtahsin.com","/api/docs/").concat(t._id),g="".concat("https://server.docify.devtahsin.com","/api/docs/download/").concat(t._id),v=Object(u.useState)(!1),j=Object(h.a)(v,2),y=j[0],w=j[1],S=Object(u.useRef)();return Object(u.useEffect)(function(){return window.addEventListener("click",function(e){e.target!==S.current&&w(!1)}),function(){}},[]),m.a.createElement(m.a.Fragment,null,m.a.createElement(oe,null,m.a.createElement(le,null,m.a.createElement("div",null,m.a.createElement("i",{className:"bi bi-clock",style:{marginRight:"0.5rem"}}),x()(t.createdAt).format("DD MMMM YYYY")),m.a.createElement(te,{show:y,doc:t}),m.a.createElement("div",{onClick:function(){w(function(e){return!e})}},m.a.createElement("i",{className:"bi bi-three-dots-vertical",role:"button",ref:S}))),m.a.createElement(ie,{role:"button"},"application/pdf"===t.mimetype&&m.a.createElement(ae,null),"application/pdf"!==t.mimetype&&m.a.createElement(se,{className:re.a.skeleton,src:E,alt:t.title,crossOrigin:"use-credentials",onClick:"application/pdf"!==t.mimetype?function(){!function(e,t){r(!0),s(e),f(t)}(E,t.title)}:function(){}})),m.a.createElement("h5",{style:{marginTop:"0.5rem"}},t.title)),c&&m.a.createElement(O.a,{medium:i,alt:b,showRotate:!0,downloadLink:g,onClose:function(){r(!1)}}))},me=a(98),de=ne.b.div(l||(l=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 1.3rem;\n\n    @media screen and (max-width: 1040px) {\n        grid-template-columns: 1fr 1fr;\n    }\n    @media screen and (max-width: 600px) {\n        grid-template-columns: 1fr;\n    }\n"]))),pe=function(e){var t=e.children;return m.a.createElement(de,null,t)},be=function(e){var t=e.docs,a=e.loading,n=H(),c=n.hasMore,r=n.setShouldGetDocs;return Object(u.useEffect)(function(){console.log(t)},[t]),m.a.createElement(me.a,{dataLength:t.length,next:function(){r(!0)},hasMore:c,loader:!a&&c?m.a.createElement("div",{className:"d-flex w-100 align-items-center justify-content-center mt-4"},m.a.createElement("div",{style:{color:"dodgerblue"}},"Loading"),m.a.createElement(q.BeatLoader,{size:20,color:"dodgerblue"})):null},m.a.createElement(pe,null,t.map(function(e){return m.a.createElement(ue,{key:e._id,doc:e})})))},fe=ne.b.h1(i||(i=Object(j.a)(["\n    margin-bottom: 20px;\n"]))),he=function(e){var t=e.children;return m.a.createElement(fe,null,t)},Ee=function(){var e=Object(u.useState)(!0),t=Object(h.a)(e,2),a=t[0],n=t[1],c=H(),r=c.docs,o=c.docsLoaded;return Object(u.useEffect)(function(){return o&&n(!1),function(){}},[o]),m.a.createElement(m.a.Fragment,null,m.a.createElement(he,null,"Home"),m.a.createElement(v,{variant:"secondary",show:!a&&r&&r.length<1},"No document uploaded yet"),m.a.createElement(W,{loading:a,text:"Getting your docs"}),m.a.createElement(be,{docs:r,loading:a}))},ge=a(67),ve=a.n(ge),je=a(174),Oe=ne.b.div(s||(s=Object(j.a)(['\n    position: relative;\n    min-height: 100vh;\n    height: 100%;\n    max-height: 100000vh;\n    background-color: var(--body-color);\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Poppins", sans-serif;\n']))),ye=function(e){var t=e.children;return m.a.createElement(Oe,null,t)},xe=function(){var e=Object(u.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(u.useState)(""),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(!1),s=Object(h.a)(i,2),d=s[0],p=s[1],E=Object(u.useState)(!1),g=Object(h.a)(E,2),j=g[0],O=g[1],y=Object(u.useState)(""),x=Object(h.a)(y,2),w=x[0],N=x[1],k=Object(u.useState)(""),_=Object(h.a)(k,2),L=_[0],D=_[1],B=Object(u.useState)(),I=Object(h.a)(B,2),U=I[0],A=I[1],z=Object(u.useState)(!1),F=Object(h.a)(z,2),M=F[0],R=F[1],Y=Object(f.g)(),J=G().login,q=H().dispatchDocs;return Object(u.useEffect)(function(){return q({type:"unload"}),function(){}},[]),Object(u.useEffect)(function(){return Object(P.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!U){e.next=13;break}return e.prev=1,e.next=4,J({email:a,password:o});case 4:"error"===(t=e.sent).type?(p(!0),N(t.data.message)):(O(!0),D(t.data.message),O(!1),D(null),Y.push("/")),A(!1),R(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}))(),function(){A(!1)}},[a,U,Y,o]),m.a.createElement(ye,null,m.a.createElement(je.a,{className:"py-4 rounded d-flex align-items-center justify-content-center"},m.a.createElement(S.a,{className:"".concat(ve.a.formCard," bg-white p-4 rounded"),onSubmit:function(e){if(e.preventDefault(),A(!1),p(!1),O(!1),R(!1),N(""),D(""),!a||!o)return p(!0),void N("All fields are required!");R(!0),setTimeout(function(){A(!0)},1500)}},m.a.createElement("h2",{className:"text-center"},"Docify"),m.a.createElement("p",{className:"text-center"},"An address for your documents"),m.a.createElement("hr",null),m.a.createElement(v,{variant:"danger",show:d},w),m.a.createElement(v,{variant:"success",show:j},L),m.a.createElement(W,{loading:M,text:"Logging you in"}),m.a.createElement("h4",null,"Login"),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicEmail"},m.a.createElement(S.a.Label,null,"Email"),m.a.createElement(S.a.Control,{type:"email",placeholder:"Enter your email",value:a,onChange:function(e){n(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicPassword"},m.a.createElement(S.a.Label,null,"Password"),m.a.createElement(S.a.Control,{type:"password",placeholder:"Enter your password",value:o,onChange:function(e){l(e.target.value)}})),m.a.createElement("div",null,m.a.createElement("span",null,"Don't have an account? "),m.a.createElement(b.b,{to:"/signup"},"Sign up")),m.a.createElement(C.a,{variant:"primary",type:"submit"},"Login"))))},we=function(){var e=Object(u.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(u.useState)(""),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(""),s=Object(h.a)(i,2),d=s[0],p=s[1],E=Object(u.useState)(""),g=Object(h.a)(E,2),j=g[0],O=g[1],y=Object(u.useState)(""),x=Object(h.a)(y,2),w=x[0],N=x[1],k=Object(u.useState)(!1),_=Object(h.a)(k,2),L=_[0],D=_[1],B=Object(u.useState)(!1),I=Object(h.a)(B,2),U=I[0],A=I[1],z=Object(u.useState)(""),F=Object(h.a)(z,2),M=F[0],R=F[1],Y=Object(u.useState)(""),J=Object(h.a)(Y,2),q=J[0],K=J[1],Q=Object(u.useState)(),V=Object(h.a)(Q,2),X=V[0],Z=V[1],$=Object(u.useState)(!1),ee=Object(h.a)($,2),te=ee[0],ae=ee[1],ne=Object(f.g)(),ce=H().dispatchDocs,re=G().signup,oe=function(){var e=Object(P.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),D(!1),A(!1),ae(!1),R(""),K(""),a&&o&&d&&j&&w){e.next=10;break}return D(!0),R("All fields are required!"),e.abrupt("return");case 10:ae(!0),Z(!0);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)(function(){return ce({type:"unload"}),function(){}},[]),Object(u.useEffect)(function(){return Object(P.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!X){e.next=12;break}return e.prev=1,e.next=4,re({name:a,email:o,phone:d,password:j,password2:w});case 4:"error"===(t=e.sent).type?(D(!0),R(t.data.message),Z(!1)):(A(!0),K(t.data.message),setTimeout(function(){A(!1),K(null),ne.push("/login")},1500)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:ae(!1);case 12:case"end":return e.stop()}},e,null,[[1,8]])}))(),function(){Z(!1)}},[o,X,ne,j,w,d,a]),m.a.createElement(ye,null,m.a.createElement(je.a,{className:"py-4 rounded d-flex align-items-center justify-content-center"},m.a.createElement(S.a,{className:"".concat(ve.a.formCard," bg-white p-4 rounded"),onSubmit:oe},m.a.createElement("h2",{className:"text-center"},"Docify"),m.a.createElement("p",{className:"text-center"},"An address for your documents"),m.a.createElement("hr",null),m.a.createElement("h4",null,"Sign up"),m.a.createElement(v,{variant:"danger",show:L},M),m.a.createElement(v,{variant:"success",show:U},q),m.a.createElement(W,{loading:te,text:"Signing up"}),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicName"},m.a.createElement(S.a.Label,null,"Your Name"),m.a.createElement(S.a.Control,{type:"text",placeholder:"Enter your name",value:a,onChange:function(e){n(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicEmail"},m.a.createElement(S.a.Label,null,"Email"),m.a.createElement(S.a.Control,{type:"email",placeholder:"Enter your email",value:o,onChange:function(e){l(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicPhone"},m.a.createElement(S.a.Label,null,"Phone"),m.a.createElement(S.a.Control,{type:"text",placeholder:"Enter your phone",value:d,onChange:function(e){p(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicPassword"},m.a.createElement(S.a.Label,null,"Password"),m.a.createElement(S.a.Control,{type:"password",placeholder:"Enter your password",value:j,onChange:function(e){O(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicRepeatPassword"},m.a.createElement(S.a.Label,null,"Repeat Password"),m.a.createElement(S.a.Control,{type:"password",placeholder:"Repeat your password",value:w,onChange:function(e){N(e.target.value)}})),m.a.createElement("div",null,m.a.createElement("span",null,"Already have an account? "),m.a.createElement(b.b,{to:"/login"},"Login")),m.a.createElement(C.a,{variant:"primary",type:"submit"},"Sign up"))))},Se=function(){return m.a.createElement(je.a,{className:"d-flex flex-column text-center align-items-center justify-content-center text-light"},m.a.createElement("h1",{className:"display-1"},"404"),m.a.createElement("br",null),m.a.createElement("h4",null,"Sorry! We couldn't find the page you are looking for."),m.a.createElement(b.b,{to:"/"},m.a.createElement(C.a,{variant:"primary"},"Back to homepage")))};var Ce,Ne,ke,_e,Le,De,Te,Pe,Be,Ie,Ue,Ge,Ae,ze,Fe,Me,He,Re,Ye=function(e){var t=e.component,a=Object(E.a)(e,["component"]);return G().currentUser?m.a.createElement(f.a,{to:"/"}):m.a.createElement(f.b,a,function(e){return m.a.createElement(t,e)})},Je=ne.b.span(Ce||(Ce=Object(j.a)(["\n    color: var(--text-color);\n    transition: var(--tran-03);\n    font-size: 17px;\n    font-weight: 500;\n    white-space: nowrap;\n    opacity: ",";\n"])),function(e){return!0===e.hide?0:1}),qe=function(e){var t=e.children,a=(Object(E.a)(e,["children"]),gt().sidebarToggle);return m.a.createElement(Je,{hide:!a,props:!0},t)},We=ne.b.i(Ne||(Ne=Object(j.a)(["\n    position: absolute;\n    top: 50%;\n    right: -25px;\n    height: 25px;\n    width: 25px;\n    background-color: var(--primary-color);\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px;\n    cursor: pointer;\n    transition: var(--tran-03);\n"]))),Ke=function(){var e=gt(),t=e.sidebarToggle,a=e.setSidebarToggle;return m.a.createElement(We,{className:"bx bx-chevron-".concat(t?"left":"right"),onClick:function(){a(function(e){return!e})}})},Qe=ne.b.header(ke||(ke=Object(j.a)(["\n    position: relative;\n"]))),Ve=ne.b.div(_e||(_e=Object(j.a)(["\n    display: flex;\n    align-items: center;\n"]))),Xe=ne.b.span(Le||(Le=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),Ze=ne.b.img(De||(De=Object(j.a)(["\n    width: 40px;\n    border-radius: 6px;\n    margin-left: 10px;\n    margin-right: 10px;\n"]))),$e=ne.b.div(Te||(Te=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),et=ne.b.span(Pe||(Pe=Object(j.a)(["\n    margin-top: 2px;\n    font-size: 18px;\n    font-weight: 600;\n"]))),tt=ne.b.span(Be||(Be=Object(j.a)(["\n    font-size: 16px;\n    margin-top: -2px;\n    display: block;\n"]))),at=function(){var e=Object(u.useState)(window.innerWidth),t=Object(h.a)(e,2),a=t[0],n=t[1],c=gt().setSidebarToggle,r=G().currentUser;return Object(u.useEffect)(function(){return a<900&&c(!1),function(){}},[a]),Object(u.useEffect)(function(){window.addEventListener("resize",function(){n(window.innerWidth)})},[]),m.a.createElement(Qe,null,m.a.createElement(Ve,null,m.a.createElement(Xe,{className:"image"},m.a.createElement(Ze,{src:"/devtahsin.png",alt:"Logo"})),m.a.createElement(qe,null,m.a.createElement($e,null,m.a.createElement(et,null,r.name.split(" ")[0]),m.a.createElement(tt,null,r.membership||"Free")))),a>900?m.a.createElement(Ke,null):null)},nt=ne.b.li(Ie||(Ie=Object(j.a)(["\n    height: 50px;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    padding: 0;\n"]))),ct=ne.b.i(Ue||(Ue=Object(j.a)(["\n    min-width: 60px;\n    border-radius: 6px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    color: var(--text-color);\n    transition: var(--tran-03);\n"]))),rt=Object(ne.a)(Ge||(Ge=Object(j.a)(["\n    list-style: none;\n    background-color: transparent;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-radius: 6px;\n    text-decoration: none;\n    transition: var(--tran-03);\n    color: #fff;\n\n    &.active {\n        background-color: dodgerblue;\n\n        &:hover {\n            background-color: dodgerblue;\n        }\n    }\n\n    &:hover {\n        background-color: var(--primary-color);\n    }\n"]))),ot=Object(ne.b)(b.c)(Ae||(Ae=Object(j.a)(["\n    ","\n"])),rt),lt=ne.b.button(ze||(ze=Object(j.a)(["\n    border: 0;\n    outline: 0;\n    padding: 0;\n    margin: 0;\n    ","\n"])),rt),it=function(e){var t=e.icon,a=e.text,n=e.href,c=Object(E.a)(e,["icon","text","href"]);return m.a.createElement(nt,{className:"nav-link"},n&&m.a.createElement(ot,Object.assign({to:n,exact:!0},c),m.a.createElement(ct,{className:t}),m.a.createElement(qe,null,a)),!n&&m.a.createElement(lt,c,m.a.createElement(ct,{className:t}),m.a.createElement(qe,null,a)))},st=function(){var e=Object(u.useState)(!1),t=Object(h.a)(e,2),a=t[0],n=t[1],c=G().logout,r=H().dispatchDocs,o=F(a,"post","".concat("https://server.docify.devtahsin.com","/api/users/logout"));return Object(u.useEffect)(function(){return o&&"success"===o.type&&(r({type:"unload"}),c()),function(){n(!1)}},[o]),m.a.createElement("div",null,m.a.createElement(it,{icon:"bx bx-log-out icon",text:"Logout",onClick:function(){n(!0)}}))},ut=ne.b.div(Fe||(Fe=Object(j.a)(["\n    height: calc(100% - 55px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    overflow-y: scroll;\n\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]))),mt=ne.b.div(Me||(Me=Object(j.a)(["\n    margin-top: 60px;\n"]))),dt=function(){return m.a.createElement(ut,null,m.a.createElement(mt,null,m.a.createElement("ul",{style:{margin:"0",padding:"0"}},m.a.createElement(it,{icon:"bx bx-home-alt",text:"My Docs",href:"/"}),m.a.createElement(it,{icon:"bx bx-plus-circle",text:"Add new",href:"/create"}),m.a.createElement(it,{icon:"bx bx-user",text:"Settings",href:"/settings"}))),m.a.createElement(st,null))},pt=ne.b.nav(He||(He=Object(j.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 250px;\n    padding: 10px 14px;\n    background: var(--sidebar-color);\n    transition: var(--tran-03);\n    z-index: 100;\n\n    &.close {\n        width: 88px;\n    }\n"]))),bt=function(){var e=gt().sidebarToggle;return m.a.createElement(pt,{className:"".concat(e||"close")},m.a.createElement(at,null),m.a.createElement(dt,null))},ft=ne.b.section(Re||(Re=Object(j.a)(["\n    position: absolute;\n    top: 0;\n    top: 0;\n    left: 250px;\n    min-height: 100vh;\n    height: auto;\n    max-height: 100000vh;\n    width: calc(100% - 250px);\n    background-color: var(--body-color);\n    transition: var(--tran-03);\n    padding: 2rem 2rem;\n    color: var(--text-color);\n\n    &.close {\n        min-height: 100vh;\n        height: auto;\n        max-height: 100000vh;\n        left: 78px;\n        width: calc(100% - 78px);\n        transition: var(--tran-03);\n    }\n"]))),ht=function(e){var t=e.children,a=gt().sidebarToggle;return m.a.createElement(ft,{className:"".concat(!a&&"close")},t)},Et=m.a.createContext(),gt=function(){return Object(u.useContext)(Et)},vt=function(e){var t=e.children,a=Object(u.useState)(JSON.parse(localStorage.getItem("toggleSidebar"))),n=Object(h.a)(a,2),c=n[0],r=n[1];Object(u.useEffect)(function(){localStorage.setItem("toggleSidebar",c)},[c]);var o={sidebarToggle:c,setSidebarToggle:r};return m.a.createElement(Et.Provider,{value:o},m.a.createElement(ye,null,m.a.createElement(bt,null),m.a.createElement(ht,null,t)))};var jt,Ot,yt=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=G().currentUser;return n&&n._id&&n.email?m.a.createElement(f.b,a,function(e){return m.a.createElement(vt,null,m.a.createElement(t,e))}):m.a.createElement(f.a,{to:"/login"})},xt=ne.b.div(jt||(jt=Object(j.a)(["\n    max-width: 500px;\n    width: 100%;\n"]))),wt=function(){var e=Object(u.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(u.useState)(),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(!1),s=Object(h.a)(i,2),d=s[0],p=s[1],b=Object(u.useState)(!1),E=Object(h.a)(b,2),g=E[0],j=E[1],O=Object(u.useState)(""),y=Object(h.a)(O,2),x=y[0],w=y[1],N=Object(u.useState)(""),k=Object(h.a)(N,2),_=k[0],D=k[1],B=G().Authorization,I=Object(f.g)(),U=H(),A=U.dispatchDocs,z=U.deleteSome;return Object(u.useEffect)(function(){return Object(P.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d&&((t=new FormData).append("title",a),t.append("document",o),L.a.post("".concat("https://server.docify.devtahsin.com","/api/docs"),t,{headers:{Authorization:B,"Content-Type":"multipart/form-data"}}).then(function(e){D(e.data.message),n(""),l(null),A({type:"create",doc:e.data.doc}),z(),setTimeout(function(){D(null),I.push("/")},1e3)}).catch(function(e){w(e.response.data.message),401===e.response.status&&(window.location.href="/")}).then(function(){j(!1)}));case 1:case"end":return e.stop()}},e)}))(),function(){p(!1)}},[B,o,d,a]),m.a.createElement(xt,null,m.a.createElement(he,null,"Add new document"),m.a.createElement(S.a,{onSubmit:function(e){if(e.preventDefault(),p(!1),w(""),j(!1),!a||!o)return w("Please give a title and select a file");j(!0),p(!0)}},m.a.createElement(v,{variant:"danger",show:x},x),m.a.createElement(v,{variant:"success",show:_},_),m.a.createElement(W,{loading:g,text:"Uploading"}),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicTitle"},m.a.createElement(S.a.Label,null,"Document Title"),m.a.createElement(S.a.Control,{type:"text",placeholder:"Ex: Passport, NID...",value:a,onChange:function(e){n(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicTitle"},m.a.createElement(S.a.Label,null,"Select File"),m.a.createElement(S.a.Control,{type:"file",onChange:function(e){l(e.target.files[0])}})),m.a.createElement(C.a,{variant:"primary",type:"submit",className:"px-4"},"Upload")))},St=ne.b.div(Ot||(Ot=Object(j.a)(["\n    max-width: 500px;\n    width: 100%;\n"]))),Ct=function(){var e=Object(u.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(u.useState)(""),r=Object(h.a)(c,2),o=r[0],l=r[1],i=Object(u.useState)(""),s=Object(h.a)(i,2),d=s[0],p=s[1],b=Object(u.useState)(""),f=Object(h.a)(b,2),E=f[0],g=f[1],j=Object(u.useState)(""),O=Object(h.a)(j,2),y=O[0],x=O[1],w=Object(u.useState)(),N=Object(h.a)(w,2),k=N[0],_=N[1],L=Object(u.useState)(),D=Object(h.a)(L,2),T=D[0],P=D[1],B=G(),I=B.currentUser,U=B.setCurrentUser,A=Object(u.useState)(!1),z=Object(h.a)(A,2),M=z[0],H=z[1],R=Object(u.useState)(!1),Y=Object(h.a)(R,2),J=Y[0],q=Y[1],K=function(e){e.preventDefault(),_(""),P(""),q(!1),0!==E.trim().length?(q(!0),H(!0)):_("Password is required to make any change!")},Q=F(M,"put","".concat("https://server.docify.devtahsin.com","/api/users/me"),{name:a,phone:d,password:E,password2:y});return Object(u.useEffect)(function(){return n(I.name),l(I.email),p(I.phone),function(){}},[I]),Object(u.useEffect)(function(){return Q&&(H(!1),"error"===Q.type?_(Q.data.message):(P(Q.data.message),delete Q.data.message,U(Q.data),g(""),x(""),setTimeout(function(){P()},3e3)),q(!1)),function(){H(!1)}},[Q]),m.a.createElement(m.a.Fragment,null,m.a.createElement(he,null,"Settings"),m.a.createElement(St,null,m.a.createElement(S.a,{onSubmit:K},m.a.createElement(v,{variant:"danger",show:k},k),m.a.createElement(v,{variant:"success",show:T},T),m.a.createElement(W,{loading:J,text:"Updating"}),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicName"},m.a.createElement(S.a.Label,null,"Name"),m.a.createElement(S.a.Control,{type:"text",placeholder:"What should we call you now?",value:a,onChange:function(e){n(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicEmail"},m.a.createElement(S.a.Label,null,"Email address"),m.a.createElement(S.a.Control,{type:"email",placeholder:"You can't change your email",value:o,onChange:function(e){l(e.target.value)},disabled:!0}),m.a.createElement(S.a.Text,{className:"text-muted"},"You can't change your email.")),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicPhone"},m.a.createElement(S.a.Label,null,"Phone"),m.a.createElement(S.a.Control,{type:"text",minLength:"11",maxLength:"11",placeholder:"Phone number must be bangladeshi",value:d,onChange:function(e){p(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicCurrentPassword"},m.a.createElement(S.a.Label,null,"Password"),m.a.createElement(S.a.Control,{type:"password",placeholder:"Enter your Password",value:E,onChange:function(e){g(e.target.value)}})),m.a.createElement(S.a.Group,{className:"mb-3",controlId:"formBasicNewPassword"},m.a.createElement(S.a.Label,null,"New Password"),m.a.createElement(S.a.Control,{type:"password",placeholder:"Enter new Password",value:y,onChange:function(e){x(e.target.value)}}),m.a.createElement(S.a.Text,{className:"text-muted"},"Leave this empty if you do not want to change your password.")),m.a.createElement(C.a,{variant:"primary",type:"submit",onClick:K},"Update Account"))))},Nt=a(80),kt=a.n(Nt);kt.a.config({barColors:{0:"dodgerblue",.5:"dodgerblue","1.0":"dodgerblue"},shadowBlur:5});var _t=function(e){var t=e.children,a=Object(u.useState)(!1),n=Object(h.a)(a,2),c=n[0],r=n[1],o=Object(u.useState)(""),l=Object(h.a)(o,2),i=l[0],s=l[1],d=Object(f.h)();return Object(u.useEffect)(function(){s(d.pathname),r(!0),d.pathname===i&&s("")},[d]),Object(u.useEffect)(function(){r(!1)},[i]),m.a.createElement(m.a.Fragment,null,c&&m.a.createElement(kt.a,null),m.a.createElement(f.d,null,t))},Lt=function(){return m.a.createElement(b.a,null,m.a.createElement(_t,null,m.a.createElement(Ye,{exact:!0,path:"/login",component:xe}),m.a.createElement(Ye,{exact:!0,path:"/signup",component:we}),m.a.createElement(yt,{exact:!0,path:"/",component:Ee}),m.a.createElement(yt,{exact:!0,path:"/create",component:wt}),m.a.createElement(yt,{exact:!0,path:"/settings",component:Ct}),m.a.createElement(f.b,{component:Se})))},Dt=a(101),Tt=a(70),Pt=function(e){var t=e.children;return Object(u.useEffect)(function(){var e=Object(Dt.a)("https://server.docify.devtahsin.com");e.on("connect",function(){I("socketid",e.id)}),e.on("new_notice",function(e){Tt.b.success(e.message,{theme:"colored",position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),e.on("connect_error",function(){setTimeout(function(){return e.connect()},5e3)})},[]),m.a.createElement(m.a.Fragment,null,t)},Bt=function(e){var t=e.children,a=G(),n=a.currentUser,c=a.setCurrentUser,r=Object(u.useState)(!1),o=Object(h.a)(r,2),l=o[0],i=o[1],s=F(l,"get","".concat("https://server.docify.devtahsin.com","/api/users/me"));return Object(u.useEffect)(function(){return"undefined"===n||!n||n._id?i(!0):i(!1),function(){i(!1)}},[n]),Object(u.useEffect)(function(){return s&&s.data&&(c(s.data.user),I("currentUser",JSON.stringify(s.data.user))),function(){}},[s]),m.a.createElement(m.a.Fragment,null,t)},It=function(e){var t=e.children;return m.a.createElement(m.a.Fragment,null,m.a.createElement(Bt,null,m.a.createElement(J,null,m.a.createElement(Pt,null,m.a.createElement(Z,null,m.a.createElement(ye,null,t))))),m.a.createElement(Tt.a,null))},Ut=function(){return m.a.createElement(z,null,m.a.createElement(It,null,m.a.createElement(Lt,null)))};a(164),a(165),a(166),a(167),a(168),a(169),a(170);p.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(Ut,null)),document.getElementById("root"))},45:function(e,t,a){e.exports={options:"Options_options__HNyvP",show:"Options_show__1h2my",option:"Options_option__1CP9x"}},67:function(e,t,a){e.exports={formCard:"FormCard_formCard__1d3-_"}},95:function(e,t,a){e.exports={skeleton:"Skeleton_skeleton__2_JHL","skeleton-loading":"Skeleton_skeleton-loading__3jM-w"}}},[[103,1,2]]]);
//# sourceMappingURL=main.1f57d850.chunk.js.map