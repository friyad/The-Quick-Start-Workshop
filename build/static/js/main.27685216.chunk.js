(this["webpackJsonpthe-quick-start-workshop"]=this["webpackJsonpthe-quick-start-workshop"]||[]).push([[0],{109:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),r=s(40),i=s.n(r),n=(s(97),s(98),s(25)),l=s(13),o=s(115),j=s(12),d=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("/CarPartsData.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),{carParts:s,setCarParts:a}},b=s(84),h=s(123),m=s(85),x=s(1),u=function(e){var t=e.parts,s=t.name,c=t.imgUrl,a=t.price,r=t.description,i=(t.advice,t.id),n=Object(l.g)();return Object(x.jsx)(o.a,{className:"mb-4","data-aos":"fade-up","data-aos-duration":"500",children:Object(x.jsx)(b.a,{children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(h.a.Img,{variant:"top",src:c,style:{height:"20rem"}}),Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)(h.a.Title,{children:s}),Object(x.jsx)(h.a.Text,{children:r.slice(0,130)}),Object(x.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(x.jsxs)("h3",{children:["$",a]}),Object(x.jsx)(m.a,{onClick:function(){n.push("/partsDetails/".concat(i))},variant:"success",children:"Show Details"})]})]})]})})})},O=function(){var e=d(),t=e.carParts;e.setCarParts;return Object(x.jsxs)("div",{className:"container mx-auto mt-5",children:[Object(x.jsx)("h1",{id:"CarParts",className:"fw-bold text-start mb-4",children:"Our Car Parts"}),Object(x.jsx)(o.a,{xs:1,md:2,lg:3,className:"g-1 mx-auto",children:t&&t.map((function(e){return Object(x.jsx)(u,{parts:e},e.id)}))})]})},p=s(121),g=function(){return Object(x.jsx)("div",{className:"bg-black",children:Object(x.jsxs)(p.a,{fade:!0,children:[Object(x.jsx)(p.a.Item,{children:Object(x.jsx)("img",{className:"d-block w-100",style:{height:"40rem",opacity:"45%"},src:"https://i.ibb.co/WDC3Czj/1.jpg",alt:"First slide"})}),Object(x.jsx)(p.a.Item,{children:Object(x.jsx)("img",{className:"d-block w-100",style:{height:"40rem",opacity:"45%"},src:"https://i.ibb.co/g6Sqnsq/2.jpg",alt:"Second slide"})}),Object(x.jsx)(p.a.Item,{children:Object(x.jsx)("img",{className:"d-block w-100",style:{height:"40rem",opacity:"45%"},src:"https://i.ibb.co/71zJnVD/Auto-mechanic-working-in-the-garage-Service-and-maintenance-and-car-maintenance.jpg",alt:"Third slide"})}),Object(x.jsx)(p.a.Item,{children:Object(x.jsx)("img",{className:"d-block w-100",style:{height:"40rem",opacity:"45%"},src:"https://i.ibb.co/FBkLQG6/4.jpg",alt:"Third slide"})}),Object(x.jsx)(p.a.Item,{children:Object(x.jsx)("img",{className:"d-block w-100",style:{height:"40rem",opacity:"45%"},src:"https://i.ibb.co/DK8VrZY/5.jpg",alt:"Third slide"})}),Object(x.jsx)(p.a.Item,{children:Object(x.jsx)("img",{className:"d-block w-100",style:{height:"40rem",opacity:"45%"},src:"https://i.ibb.co/0GNVGg5/6.jpg",alt:"Third slide"})})]})})},f=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("./expertsData.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),{experts:s,setExperts:a}},N=function(e){var t=e.expert,s=t.expartise,c=(t.id,t.name),a=t.photoUrl;return Object(x.jsx)(o.a,{className:"mb-4","data-aos":"fade-up","data-aos-duration":"500",children:Object(x.jsx)(b.a,{children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(h.a.Img,{variant:"top",src:a,style:{width:"100%",height:"11rem"}}),Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)(h.a.Title,{children:c}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:["Expert on ",s]}),Object(x.jsx)(m.a,{variant:"success",children:"See Details"})]})]})]})})})},y=function(){var e=f().experts;return Object(x.jsxs)("div",{className:"container mt-5",children:[Object(x.jsx)("h1",{className:"text-start fw-bolder",id:"OurExperts",children:"Our Experts"}),Object(x.jsx)(o.a,{xs:1,md:2,lg:4,className:"g-1 mt-4",children:e&&e.map((function(e){return Object(x.jsx)(N,{expert:e},e.id)}))})]})},w=function(){return Object(x.jsxs)("div",{id:"home",children:[Object(x.jsx)(g,{}),Object(x.jsx)(O,{}),Object(x.jsx)(y,{})]})},v=s.p+"static/media/404_not_found.1380d98d.png",k=function(){return Object(x.jsx)("div",{className:"py-5 mb-5",children:Object(x.jsx)("div",{className:"py-5 my-5",children:Object(x.jsxs)("div",{className:"row container mx-auto",children:[Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("img",{src:v,alt:"",className:"w-50"})}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h1",{className:"text-danger fw-bolder",children:"We could not found your page"}),Object(x.jsx)("h5",{children:"Please go back home and try again letter"}),Object(x.jsx)(n.b,{to:"/home#home",children:Object(x.jsx)(m.a,{variant:"outlined-warning",className:"px-4 py-2 mt-2",style:{backgroundColor:"#f46518",color:"white"},children:"Go Back Home"})})]})]})})})},C=s.p+"static/media/logo.f9df5d4e.png",I=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"pt-5 pb-3 text-white",style:{backgroundColor:"#284b63"},children:Object(x.jsxs)("div",{className:"row container mx-auto","data-aos":"fade-up","data-aos-duration":"600",children:[Object(x.jsxs)("div",{className:"col text-start",children:[Object(x.jsx)("img",{src:C,alt:"",style:{width:"120px"}}),Object(x.jsx)("p",{className:"mt-2 text-justify",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta unde atque necessitatibus voluptatibus. Vero perspiciatis nulla repellendus blanditiis sunt, similique reprehenderit ex corporis qui reiciendis neque tempora! Numquam dolorem quo impedit, commodi libero doloremque quia sunt? Obcaecati praesentium adipisci, explicabo cupiditate quis ratione, placeat modi id eaque itaque quasi neque? Blanditiis, ipsa! Exercitationem modi, tenetur quae necessitatibus suscipit, officiis, nesciunt nam facere iusto eum quisquam maxime aliquam veniam fugit."})]}),Object(x.jsxs)("div",{className:"col text-start ps-5",children:[Object(x.jsx)("h3",{children:"Our Socail Media"}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Facebook"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Twitter"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Linkedin"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Instagram"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Youtube"})]}),Object(x.jsxs)("div",{className:"col text-start",children:[Object(x.jsx)("h3",{children:"Our sub workshops"}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Road No. 25"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Kandir Par"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Ullar Puskani"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Harikhula"}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"text-white fs-5 text-decoration-none",href:"#",children:"Amtala"})]})]})}),Object(x.jsx)("div",{style:{backgroundColor:"#17354a"},children:Object(x.jsx)("p",{className:"text-center py-4 text-white m-0",children:"\xa9 Copyright of this site 2022 all rights resived by The Quick Start Workshop"})})]})},P=s(119),S=s(116),L=s(122),E=s(120),q=s(88),T=s(118),B=s(87),G={apiKey:"AIzaSyDMvFgGpAdE3nEk1UcOy5b-WXiBUTb1MR8",authDomain:"thequickstartworkshop.firebaseapp.com",projectId:"thequickstartworkshop",storageBucket:"thequickstartworkshop.appspot.com",messagingSenderId:"50155565452",appId:"1:50155565452:web:ac7562a51a46c1ab65e6a9"},R=function(){return Object(B.a)(G)},D=s(51);R();var F=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),n=i[0],l=i[1],o=Object(c.useState)(""),d=Object(j.a)(o,2),b=d[0],h=d[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),u=x[0],O=x[1],p=Object(c.useState)(""),g=Object(j.a)(p,2),f=(g[0],g[1]),N=Object(c.useState)(!0),y=Object(j.a)(N,2),w=y[0],v=y[1],k=Object(D.c)(),C=new D.a,I=new D.b;Object(c.useEffect)((function(){var e=Object(D.d)(k,(function(e){a(e||null),v(!1)}));return function(){return e}}),[]);return{user:s,email:b,password:u,error:n,isLoading:w,setIsLoading:v,setUser:a,setEmail:h,setPassword:O,setName:f,setError:l,handleLogOut:function(){v(!0),Object(D.f)(k).then((function(){a(null),l("")})).catch((function(e){l(e.message)})).finally((function(){return v(!1)}))},handleGoogleSignIn:function(){return Object(D.e)(k,C)},handleTwitterSignIn:function(){return Object(D.e)(k,I)}}},U=Object(c.createContext)(),A=function(e){var t=e.children,s=F();return Object(x.jsx)(U.Provider,{value:s,children:t})},W=function(){return Object(c.useContext)(U)},M=s(77),z=function(){var e=W(),t=e.user,s=e.handleLogOut,a=Object(c.useState)(!1),r=Object(j.a)(a,2),i=r[0],o=r[1],d=Object(l.h)(),b=!1;"/"!==d.pathname&&"#home"!==d.hash&&"/home"!==d.pathname&&(b=!0);return window.addEventListener("scroll",(function(){window.scrollY>=500?o(!0):o(!1)})),Object(x.jsx)("div",{style:i||b?{position:"fixed",zIndex:"999",width:"100%",backgroundColor:"#284b63",transition:"0.5s"}:{position:"fixed",zIndex:"999",width:"100%"},"data-aos":"fade-down",children:Object(x.jsx)(P.a,{className:"py-3",expand:"lg",style:{background:"none"},children:Object(x.jsxs)(S.a,{children:[Object(x.jsxs)(P.a.Brand,{href:"#",className:"d-flex align-items-center",children:[Object(x.jsx)("img",{className:"",src:C,alt:"",style:{width:"100px"}}),Object(x.jsx)("h3",{className:"text-white m-0 fw-bold",children:"QSW"})]}),Object(x.jsx)(P.a.Toggle,{"aria-controls":"navbarScroll",style:{backgroundColor:"white"}}),Object(x.jsxs)(P.a.Collapse,{id:"navbarScroll",children:[Object(x.jsxs)(L.a,{className:"me-auto my-2 my-lg-0 ms-5",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(x.jsx)(L.a.Link,{as:M.a,to:"/home#home",className:"text-white fs-5 text-decoration-none me-4",children:"Home"}),Object(x.jsx)(L.a.Link,{as:M.a,to:"/home#CarParts",className:"text-white fs-5 text-decoration-none me-4",children:"Car Parts"}),Object(x.jsx)(L.a.Link,{as:M.a,to:"/home#OurExperts",className:"text-white fs-5 text-decoration-none me-4",children:"Our Experts"})]}),t&&Object(x.jsxs)(E.a,{className:"d-flex",children:[Object(x.jsx)(q.a,{type:"search",placeholder:"Search",className:"me-2 py-2","aria-label":"Search"}),Object(x.jsx)(m.a,{variant:"outlined-warning",style:{backgroundColor:"#f46518",color:"white"},children:"Search"})]}),Object(x.jsx)("div",{className:"d-flex ms-4",children:t&&(t.email||t.displayName)?Object(x.jsxs)(T.a,{title:t.photoURL?Object(x.jsx)("img",{className:"rounded-circle",src:t.photoURL,alt:"",style:{width:"50px",height:"50px"}}):Object(x.jsx)("div",{div:!0,className:"ms-3 user-select-none text-white p-2 d-inline-block rounded-circle",style:{width:"50px",height:"50px",backgroundColor:"#ef461a"},children:Object(x.jsx)("h3",{children:t.displayName.slice(0,1)})}),children:[Object(x.jsx)(T.a.Item,{href:"",children:t.displayName}),Object(x.jsx)(T.a.Item,{onClick:s,href:"",children:"Log Out"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(L.a.Link,{as:n.b,className:"text-white fs-5 text-decoration-none ",to:"/login",children:"Log In"}),Object(x.jsx)(L.a.Link,{as:n.b,className:"text-white fs-5 text-decoration-none ",to:"/registration",children:"Registration"})]})})]})]})})})},K=s(90),Q=s.n(K),V=(s(107),function(){var e=d(),t=e.carParts,s=(e.setCarParts,Object(l.i)().partsId),c={};t&&(c=t.find((function(e){return e.id===JSON.parse(s)})));var a=c,r=a.name,i=a.imgUrl,n=a.price,o=a.description,j=a.advice;a.id;return Object(x.jsx)("div",{className:"py-5",children:Object(x.jsx)("div",{className:"py-5 my-5",children:Object(x.jsxs)("div",{className:"py-5 my-5 row container mx-auto",children:[Object(x.jsxs)("div",{className:"col-7 text-start pe-5",children:[Object(x.jsx)("h1",{children:r}),Object(x.jsx)("p",{children:o}),Object(x.jsxs)("h5",{children:["Advice for you: ",j]}),Object(x.jsxs)("h2",{className:"my-4",children:["$",n]}),Object(x.jsx)("button",{className:"btn btn-success",children:"Place Order"})]}),Object(x.jsx)("div",{className:"col-5",children:Object(x.jsx)("img",{className:"w-100 h-100",src:i,alt:""})})]})})})}),Y=s.p+"static/media/divider.2f96a420.png",H=function(){var e,t=W(),s=(t.user,t.error),c=t.setError,a=t.setUser,r=(t.setEmail,t.setPassword,t.setIsLoading),i=t.handleGoogleSignIn,o=t.handleTwitterSignIn,j=Object(l.g)(),d=(null===(e=Object(l.h)().state)||void 0===e?void 0:e.from)||"/",b=function(e){r(!0),e().then((function(e){a(e.user),c(""),j.push(d)})).catch((function(e){c(e.message)})).finally((function(){return r(!1)}))};return Object(x.jsx)("div",{className:"py-5",style:{backgroundColor:"#eeeeee"},children:Object(x.jsx)("div",{className:"my-5 py-5 w-75 mx-auto",children:Object(x.jsxs)("div",{className:"p-5 rounded-3 row shadow-lg",style:{backgroundColor:"white"},"data-aos":"fade-up",children:[Object(x.jsx)("div",{className:"col-6 d-flex justify-content-center align-items-center",children:Object(x.jsxs)("div",{className:"p-2 w-50 mx-auto",children:[Object(x.jsx)("img",{onClick:function(){return b(i)},src:"https://i.ibb.co/TrXWCNN/Google.png",alt:"",className:"w-100",style:{height:"44px",cursor:"pointer"}}),Object(x.jsx)("img",{onClick:function(){return b(o)},src:"https://i.ibb.co/7KsF8c7/twitter.png",alt:"",className:"w-100 mt-4 coursor-pointer",style:{height:"44px",cursor:"pointer"}}),Object(x.jsx)("img",{src:"https://i.ibb.co/9yZxYgj/facebook.png",alt:"",className:"w-100 mt-4 coursor-pointer",style:{height:"44px",cursor:"pointer"}}),Object(x.jsx)("img",{src:"https://i.ibb.co/QMm05bm/github.png",alt:"",className:"w-100 mt-4 coursor-pointer",style:{height:"44px",cursor:"pointer"}})]})}),Object(x.jsx)("div",{className:"col-1 select-none d-flex align-items-center",children:Object(x.jsx)("img",{className:"w-100",src:Y,alt:""})}),Object(x.jsx)("div",{className:"col-1"}),Object(x.jsx)("div",{className:"col-4 text-start",children:Object(x.jsxs)(E.a,{children:[Object(x.jsx)("h2",{className:"m-0",children:"Please Log In"}),Object(x.jsx)("hr",{className:"my-2 mb-4"}),Object(x.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(E.a.Label,{children:"Email address"}),Object(x.jsx)(E.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(x.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(E.a.Label,{children:"Password"}),Object(x.jsx)(E.a.Control,{type:"password",placeholder:"Password"})]}),Object(x.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicReTypePassword",children:[Object(x.jsx)(E.a.Label,{children:"Re-Type Password"}),Object(x.jsx)(E.a.Control,{type:"password",placeholder:"Re-Type Password"})]}),Object(x.jsx)("p",{className:"text-danger",children:s}),Object(x.jsxs)("p",{children:["New user? Please ",Object(x.jsx)(n.b,{to:"registration",children:"Registration"})]}),Object(x.jsx)(m.a,{variant:"primary",type:"submit",children:"Log In"})]})})]})})})},J=function(){var e,t=W(),s=(t.user,t.error,t.setName,t.setError),c=t.setUser,a=(t.setEmail,t.setPassword,t.setIsLoading),r=t.handleGoogleSignIn,i=t.handleTwitterSignIn,o=Object(l.g)(),j=(null===(e=Object(l.h)().state)||void 0===e?void 0:e.from)||"/",d=function(e){a(!0),e().then((function(e){c(e.user),s(""),o.push(j)})).catch((function(e){s(e.message)})).finally((function(){return a(!1)}))};return Object(x.jsx)("div",{className:"py-5",style:{backgroundColor:"#eeeeee"},children:Object(x.jsx)("div",{className:"my-5 py-5 w-75 mx-auto",children:Object(x.jsxs)("div",{className:"p-5 rounded-3 row shadow-lg",style:{backgroundColor:"white"},"data-aos":"fade-up",children:[Object(x.jsx)("div",{className:"col-6 d-flex justify-content-center align-items-center",children:Object(x.jsxs)("div",{className:"p-2 w-50 mx-auto",children:[Object(x.jsx)("img",{onClick:function(){return d(r)},src:"https://i.ibb.co/TrXWCNN/Google.png",alt:"",className:"w-100",style:{height:"44px",cursor:"pointer"}}),Object(x.jsx)("img",{onClick:function(){return d(i)},src:"https://i.ibb.co/7KsF8c7/twitter.png",alt:"",className:"w-100 mt-4 coursor-pointer",style:{height:"44px",cursor:"pointer"}}),Object(x.jsx)("img",{src:"https://i.ibb.co/9yZxYgj/facebook.png",alt:"",className:"w-100 mt-4 coursor-pointer",style:{height:"44px",cursor:"pointer"}}),Object(x.jsx)("img",{src:"https://i.ibb.co/QMm05bm/github.png",alt:"",className:"w-100 mt-4 coursor-pointer",style:{height:"44px",cursor:"pointer"}})]})}),Object(x.jsx)("div",{className:"col-1 select-none d-flex align-items-center",children:Object(x.jsx)("img",{className:"w-100",src:Y,alt:""})}),Object(x.jsx)("div",{className:"col-1"}),Object(x.jsx)("div",{className:"col-4 text-start",children:Object(x.jsxs)(E.a,{children:[Object(x.jsx)("h2",{className:"m-0",children:"Please Registere"}),Object(x.jsx)("hr",{className:"my-2 mb-4"}),Object(x.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(E.a.Label,{children:"Name"}),Object(x.jsx)(E.a.Control,{type:"text",placeholder:"Enter name"})]}),Object(x.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(E.a.Label,{children:"Email address"}),Object(x.jsx)(E.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(x.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(E.a.Label,{children:"Password"}),Object(x.jsx)(E.a.Control,{type:"password",placeholder:"Password"})]}),Object(x.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicReTypePassword",children:[Object(x.jsx)(E.a.Label,{children:"Re-Type Password"}),Object(x.jsx)(E.a.Control,{type:"password",placeholder:"Re-Type Password"})]}),Object(x.jsxs)("p",{children:["Already have an acount? Please ",Object(x.jsx)(n.b,{to:"login",children:"Log In"})]}),Object(x.jsx)(m.a,{variant:"primary",type:"submit",children:"Register Now"})]})})]})})})},X=s(5),Z=s(7),$=s(117),_=["children"],ee=function(e){var t=e.children,s=Object(Z.a)(e,_),c=W(),a=c.user,r=c.isLoading;return console.log(r),r?Object(x.jsx)("div",{className:"py-5",children:Object(x.jsx)("div",{className:"py-5 my-5",children:Object(x.jsx)("div",{className:"py-5 my-5",children:Object(x.jsx)("div",{className:"py-5 my-5",children:Object(x.jsx)("div",{className:"py-5 my-5",children:Object(x.jsx)($.a,{animation:"border"})})})})})}):Object(x.jsx)(l.b,Object(X.a)(Object(X.a)({},s),{},{render:function(e){var s=e.location;return a&&(a.email||a.displayName)?t:Object(x.jsx)(l.a,{to:{pathname:"/login",state:{from:s}}})}}))};Q.a.init();var te=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(A,{children:Object(x.jsxs)(n.a,{children:[Object(x.jsx)(z,{}),Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/home",children:Object(x.jsx)(w,{})}),Object(x.jsx)(ee,{path:"/partsDetails/:partsId",children:Object(x.jsx)(V,{})}),Object(x.jsx)(l.b,{path:"/login",children:Object(x.jsx)(H,{})}),Object(x.jsx)(l.b,{path:"/registration",children:Object(x.jsx)(J,{})}),Object(x.jsx)(l.b,{exact:!0,path:"/",children:Object(x.jsx)(w,{})}),Object(x.jsx)(l.b,{exact:!0,path:"*",children:Object(x.jsx)(k,{})})]}),Object(x.jsx)(I,{})]})})})},se=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,124)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),r(e),i(e)}))};s(108);i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(te,{})}),document.getElementById("root")),se()},97:function(e,t,s){},98:function(e,t,s){}},[[109,1,2]]]);
//# sourceMappingURL=main.27685216.chunk.js.map