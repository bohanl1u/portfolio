(this["webpackJsonpbohan-liu"]=this["webpackJsonpbohan-liu"]||[]).push([[0],{10:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(4),i=c.n(a),n=c(18),r=c.n(n),l=c(16),o=(c(25),["btn--primary","btn--outline","btn--test"]),j=["btn--medium","btn--large"],b=function(e){var t=e.children,c=e.type,a=e.onClick,i=e.buttonStyle,n=e.buttonSize,r=o.includes(i)?i:o[0],l=j.includes(n)?n:j[0];return Object(s.jsx)("button",{className:"btn ".concat(r," ").concat(l),onClick:a,type:c,children:t})},m=c(5);c(26);var d=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)(!0),r=Object(l.a)(n,2),o=(r[0],r[1]),j=function(){return i(!1)},b=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(a.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsxs)(m.b,{to:"/",className:"navbar-logo",children:["Bohan Liu\xa0",Object(s.jsx)("i",{class:"fab fa-buy-n-large"})]}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:Object(s.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{to:"/",className:"nav-links",onClick:j,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{to:"/about",className:"nav-links",onClick:j,children:"About"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{to:"/projects",className:"nav-links",onClick:j,children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(m.b,{to:"/contact",className:"nav-links",onClick:j,children:"Contact"})})]})]})})})},u=(c(10),c(2));c(34);var h=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards__item",children:Object(s.jsxs)(m.b,{className:"cards__item__link",to:e.path,children:[Object(s.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(s.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})}),Object(s.jsx)("div",{className:"cards__item__info",children:Object(s.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var x=function(){return Object(s.jsx)("div",{className:"cards",children:Object(s.jsx)("div",{className:"cards__container",children:Object(s.jsxs)("div",{className:"cards__wrapper",children:[Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(h,{src:"images/image-resume.jpg",text:"Check out my resume here:",label:"Resume",path:"/about"}),Object(s.jsx)(h,{src:"images/image-contact.jpg",text:"Contact information and links:",label:"Contact",path:"/contact"})]}),Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(h,{src:"images/image-projects.jpg",text:"View my projects:",label:"Projects",path:"/projects"}),Object(s.jsx)(h,{src:"images/img-4.jpg",text:"Check out the source code for this website:",label:"React JS",path:"/source code"})]})]})})})};c(35);var p=function(){return Object(s.jsxs)("div",{className:"hero-container",children:[Object(s.jsx)("video",{src:"/videos/video3.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(s.jsx)("div",{class:"description-text",children:Object(s.jsx)("p",{children:"Hi, my name is Bohan Liu. I am currently pursuing a B.S. in Computer Science at UC Davis (2022), scroll down to learn more:"})}),Object(s.jsx)("img",{src:"/images/image-2.jpg",className:"profile-picture",alt:"Error"}),Object(s.jsxs)("div",{className:"hero-btns",children:[Object(s.jsx)(m.b,{to:"/About",children:Object(s.jsxs)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:["About ",Object(s.jsx)("i",{class:"far fa-address-card"})]})}),Object(s.jsx)(m.b,{to:"/projects",children:Object(s.jsxs)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:["View Projects ",Object(s.jsx)("i",{class:"fas fa-laptop-code"})]})})]})]})};var O=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{}),Object(s.jsx)(x,{})]})};c(36);function g(){return Object(s.jsxs)("div",{className:"about-container",children:[Object(s.jsx)("video",{src:"/videos/video-typing-2-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(s.jsx)("div",{className:"textbox-1",children:Object(s.jsx)("p",{children:"About me: I plan to graduate with a B.S. in Computer Science and a Minor in Economics. Some of my skills include proficiency in Python, HTML/CSS/JavaScript, and C/C++ with some experience in C#. Comfortable using Git, React JS, SQL database frameworks, and cloud computing services (AWS)."})})]})}c(37);var v=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("video",{src:"/videos/video-typing-2-phone-only.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(h,{src:"images/img-linkedin.jpg",text:"Link: linkedin....",label:"LinkedIn",path:"/bitly."}),Object(s.jsx)(h,{src:"images/img-black.jpg",text:"Link: github.io",label:"Github",path:"/bitly."}),Object(s.jsx)(h,{src:"images/img-mail.jpg",text:"Email: jimmybliu@gmail.com\\n Phone: 408-642-9916",label:"Email & Phone Number",path:"/bitly.email"})]})]})};function f(){return Object(s.jsx)(v,{})}c(38);var N=function(){return Object(s.jsx)("div",{className:"cards",children:Object(s.jsx)("div",{className:"cards__container-1",children:Object(s.jsxs)("div",{className:"cards__wrapper",children:[Object(s.jsx)("h1",{children:"Check out some of my projects:"}),Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(h,{src:"images/img-rogueline.jpg",text:"A 2D rogue-like video game built with Unity for submission to the GMTK Game Jam 2019",label:"Rogueline",path:"/bitly"}),Object(s.jsx)(h,{src:"images/img-asl.jpg",text:"Sign language processing to communicate with Amazon Alexa, won best technology at SacHacks 2018",label:"AlexaSL",path:"/services"})]}),Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(h,{src:"images/img-battleship.jpg",text:"Implemenation of popular board game Battleship using C++ and the MVC model",label:"Battleship",path:"/bitly"}),Object(s.jsx)(h,{src:"images/img-4.jpg",text:"Github link to the files for this portfolio website built with ReactJS",label:"Personal Website",path:"/bitly"}),Object(s.jsx)(h,{src:"images/img-spotify.jpg",text:"Web-app that gives a genre breakdown using Spotify API to get user data",label:"Coming Soon!",path:"/"})]})]})})})};function _(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("p",{children:"HI"}),Object(s.jsx)("div",{className:"card-container",children:Object(s.jsx)(N,{})})]})}var y=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(m.a,{children:[Object(s.jsx)(d,{}),Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{path:"/",exact:!0,component:O}),Object(s.jsx)(u.a,{path:"/about",exact:!0,component:g}),Object(s.jsx)(u.a,{path:"/projects",exact:!0,component:_}),Object(s.jsx)(u.a,{path:"/contact",exact:!0,component:f})]})]})})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.595f1323.chunk.js.map