(()=>{var e,t={481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"img/cross.png"},760:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"img/cross.svg"},686:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"img/down_arrow.svg"},797:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"img/icons_sprite.png"},148:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"img/noavatar.png"},398:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"img/plus.svg"},120:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"img/up_arrow.svg"},397:(e,t,r)=>{var n={"./cross.png":481,"./cross.svg":760,"./down_arrow.svg":686,"./icons_sprite.png":797,"./noavatar.png":148,"./plus.svg":398,"./up_arrow.svg":120};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=397},434:(e,t,r)=>{"use strict";r.p,r.p;var n=r(189),s=r(671);const a=document.querySelector(".page-header__login-form"),o=a.querySelector(".login-button"),i=document.querySelector(".page-header__user"),d=i.querySelector(".page-header__name"),l=document.querySelector(".board__back-user-name"),c=(0,s.ZF)({apiKey:"AIzaSyCBehvUdJ1Sww5gcdv4yBRRpetngqVoFiY",authDomain:"board-3a7c6.firebaseapp.com",projectId:"board-3a7c6",storageBucket:"board-3a7c6.appspot.com",messagingSenderId:"457479426554",appId:"1:457479426554:web:f1b1ea86d33b6ff9f95443",measurementId:"G-5SZC6Y976H"}),u=(0,n.ad)(c);let f;async function y(e){const t=(0,n.hJ)(e,"users");return await(0,n.PL)(t).then((e=>e.docs.map((e=>e.data()))))}function p(e,t){for(let r of e)if(r.name===t)return r;return new Error("Wrong user name")}function g(e){i.style.display="inline-block",d.innerHTML=e,a.style.display="none",l.innerHTML=e,f=(0,n.JU)(u,"users",e)}void 0===sessionStorage.loginState&&(sessionStorage.loginState=!1),"true"===sessionStorage.loginState&&g(sessionStorage.user),o.addEventListener("click",(async function(){const e=a.querySelector(".user-name"),t=a.querySelector(".user-password"),r=p(await y(u),e.value);r instanceof Error?alert("No such user"):!function(e,t){return e.password===t}(r,t.value)?alert("Wrong password"):(sessionStorage.loginState=!0,sessionStorage.user=e.value,g(e.value),document.location.reload())}));let v,m=document.querySelector("body"),S=m.querySelector(".board"),h=m.querySelector(".clear-board"),_=m.querySelector(".add-card"),b=S.querySelector("#card-template").content.querySelector(".board-card"),k=S.querySelector("#task-template").content.querySelector(".board-card__item"),w=1,q=m.querySelector(".card-contents"),x=q.querySelector(".card-contents__text"),C=q.querySelector(".card-contents__submit-button"),L=q.querySelector(".card-contents__header-1"),O=q.querySelector(".card-contents__card-header"),E=[],I={width:"100%",height:"100%",position:"absolute",top:0,left:0,backgroundColor:"rgba(255, 255, 255, 0.7)",zIndex:50};class N{constructor(e){this.id=e.id,this.header=e.querySelector(".board-card__header").textContent,this.date=e.querySelector(".board-card__date").textContent,this.tasks=[],this.taskIds=[],this.markers=[],this.left="",this.top=""}}class T{constructor(){this.cardsFontSize="14px"}}new T;let J=new class extends T{constructor(){super()}};class z extends Error{constructor(e){super(e),this.name="NoTextError"}}function $(e){let t=e.querySelector(".board-card__list"),r=k.cloneNode(!0),s=r.querySelector(".board-card__task");r.taskId=e.tasksIdsCounter++,s.textContent=x.value,F(r,e),j(e,r),Y(e,r),async function(e,t){let r=t.querySelector(".board-card__circle").style.fill,s=t.querySelector(".board-card__task"),a=E.find((t=>t.id==e.id));a.tasks.push(s.textContent),a.markers.push(r),a.taskIds.push(t.taskId),localStorage.savedCards=JSON.stringify(E),await(0,n.r7)(f,{savedCards:JSON.stringify(E)})}(e,r),t.appendChild(r),x.value=""}function D(e){e.querySelector(".board-card__add-task-button").addEventListener("click",(function(){R("new task",e)}))}async function F(e,t){e.querySelector(".board-card__task-remover").addEventListener("click",(async function(){let r=E.find((e=>e.id==t.id)),s=r.taskIds.indexOf(e.taskId);if(r.tasks.splice(s,1),r.markers.splice(s,1),r.taskIds.splice(s,1),localStorage.savedCards=JSON.stringify(E),await(0,n.r7)(f,{savedCards:JSON.stringify(E)}),e.remove(),!t.querySelector(".board-card__item")){for(let e of E)e.id==t.id&&(E.splice(E.indexOf(e),1),localStorage.savedCards=JSON.stringify(E),await(0,n.r7)(f,{savedCards:JSON.stringify(E)}));t.style.transform="scale(0)",setTimeout((()=>t.remove()),300)}}))}async function j(e,t){let r=["limegreen","orange","red"],s=t.querySelector(".board-card__circle"),a=E.find((t=>t.id==e.id));s.addEventListener("click",(async function(){2===r.indexOf(`${s.style.fill}`)?s.style.fill=r[0]:s.style.fill=r[r.indexOf(s.style.fill)+1];let e=a.taskIds.indexOf(t.taskId);a.markers[e]=s.style.fill,localStorage.savedCards=JSON.stringify(E),await(0,n.r7)(f,{savedCards:JSON.stringify(E)})}))}function Y(e,t){t.addEventListener("dblclick",(function(){let r=t.querySelector(".board-card__task"),s=document.createElement("textarea");var a;s.classList.add("board-card__task-editor"),s.value=r.textContent,s.rows=3,t.style.marginBottom="40px",async function(e,t,r){let s=t.querySelector(".board-card__task"),a=E.find((t=>t.id==e.id));r.addEventListener("keydown",(async function(e){13===e.keyCode&&(e.preventDefault(),s.textContent=r.value,a.tasks[a.taskIds.indexOf(t.taskId)]=r.value,t.style.marginBottom=0,r.remove(),localStorage.savedCards=JSON.stringify(E),await(0,n.r7)(f,{savedCards:JSON.stringify(E)}))}))}(e,t,s),(a=s).addEventListener("focusout",(()=>a.focus())),t.appendChild(s),s.focus()}))}function M(e){e.addEventListener("mousedown",(t=>{if(!t.target.classList.contains("board-card__task-editor")){t.preventDefault();let r=t.clientX-e.offsetLeft,n=t.clientY-e.offsetTop;function s(t,s){e.style.left=t-r+"px",e.style.top=s-n+"px"}function a(e){s(e.clientX,e.clientY)}function o(){A(e),H(e,e.style.left,e.style.top),document.removeEventListener("mousemove",a),e.style.zIndex=0,document.removeEventListener("mousemove",o)}e.style.zIndex=100,s(t.clientX,t.clientY),document.addEventListener("mousemove",a),document.addEventListener("mouseup",o)}}))}async function H(e,t,r){let s=E.find((t=>t.id==e.id));s.left=t,s.top=r,localStorage.savedCards=JSON.stringify(E),await(0,n.r7)(f,{savedCards:JSON.stringify(E)})}function A(e){let t=window.innerWidth,r=window.innerHeight,n=e.offsetWidth,s=e.offsetHeight;parseInt(e.style.left)<0&&(e.style.left="10px"),parseInt(e.style.top)<0&&(e.style.top="10px"),parseInt(e.style.left)+n>t&&(e.style.left=t-n-10+"px"),parseInt(e.style.top)+s>r-74&&(e.style.top=r-s-74+"px")}window.addEventListener("resize",(()=>{let e=document.querySelectorAll(".board-card");if(0!==e.length)for(let t of e)A(t)})),window.addEventListener("load",(()=>{let e=document.querySelectorAll(".board-card");if(0!==e.length)for(let t of e)A(t)})),setInterval((()=>{let e=S.querySelector(".board__clock"),t=new Date,r=t.getHours(),n=t.getMinutes(),s=t.getSeconds();r<10&&(r=`0${r}`),n<10&&(n=`0${n}`),s<10&&(s=`0${s}`),e.innerHTML=`${r}:${n}:${s}`}),1e3),h.addEventListener("click",(async function(){let e=S.querySelectorAll(".board-card");for(let t of e)t.style.transform="scale(0)",setTimeout((()=>t.remove()),300);localStorage.savedCards="",E=[],await(0,n.r7)(f,{savedCards:JSON.stringify(E)}),w=1})),_.addEventListener("click",(function(e){e.preventDefault(),R("new card")}));let B=S.querySelector(".settings-menu"),P=B.querySelector(".settings-menu__button"),U=P.querySelector(".settings-menu__button-image"),W=B.querySelector(".settings-menu__font-size-setting");if(P.addEventListener("click",(function(e){e.preventDefault(),"translateY(-100%)"===B.style.transform?(B.style.transform="translateY(0)",U.style.transform="rotate(180deg)"):(B.style.transform="translateY(-100%)",U.style.transform="rotate(0)")})),W.addEventListener("input",(async function(){let e=S.querySelectorAll(".board-card");for(let t of e)t.style.fontSize=W.value+"px";J.cardsFontSize=W.value+"px",localStorage.userSettings=JSON.stringify(J),await(0,n.r7)(f,{savedCards:JSON.stringify(E)})})),localStorage.userSettings&&(J=JSON.parse(localStorage.userSettings),W.value=parseInt(J.cardsFontSize)),"true"===sessionStorage.loginState){let e;(async function(){return p(await y(u),sessionStorage.user).savedCards})().then((function(t){e=JSON.parse(t);for(let t of e)X(t)}))}function X(e){let t=b.cloneNode(!0),r=t.querySelector(".board-card__header"),n=t.querySelector(".board-card__list"),s=t.querySelector(".board-card__date");E.push(e),t.style.fontSize=J.cardsFontSize,t.id=e.id,w=+e.id+1,r.textContent=e.header,s.textContent=e.date,D(t),e.tasks.forEach(((r,s)=>{let a=k.cloneNode(!0),o=a.querySelector(".board-card__task"),i=a.querySelector(".board-card__circle"),d=r;a.taskId=e.taskIds[s],i.style.fill=e.markers[s],o.textContent=d,F(a,t),j(t,a),Y(t,a),n.appendChild(a)})),S.appendChild(t),M(t),t.style.left=e.left,t.style.top=e.top}function R(e,t){function r(n){n.preventDefault();try{if("new card"===e&&0==O.value)throw new z("Заполните все поля!");if(0==x.value)throw new z("Заполните все поля!")}catch(e){return void alert(e.message)}switch(e){case"new card":L.classList.add("hidden"),O.classList.add("hidden"),q.classList.add("hidden"),v.remove(),function(e){let t=b.cloneNode(!0),r=t.querySelector(".board-card__date"),n=t.querySelector(".board-card__header");""!==J.cardsFontSize&&(t.style.fontSize=J.cardsFontSize),t.tasksIdsCounter=1,n.textContent=O.value,O.value="",r.textContent=`Дата: ${function(){let e=new Date,t=e.getDate(),r=e.getMonth()+1;return r<10&&(r=`0${r}`),t<10&&(t=`0${t}`),`${t}.${r}.${e.getFullYear()}`}()}`,t.id=w,w<1e3?w++:w=1,E.push(new N(t)),D(t),$(t),S.appendChild(t),M(t),t.style.left="40%",t.style.top="-300px",setTimeout((()=>{return(e=t).style.transition="all 500ms cubic-bezier(0.500, 0.250, 0.195, 1.650)",e.style.top="300px",void setTimeout((()=>{e.style.transition="transform 0.3s",H(e,e.style.left,e.style.top)}),1e3);var e}),100)}();break;case"new task":q.classList.add("hidden"),v.remove(),$(t)}C.removeEventListener("click",r)}q.classList.remove("hidden"),"new card"===e?(L.classList.remove("hidden"),O.classList.remove("hidden"),O.focus()):x.focus(),function(e){v=document.createElement("div");for(let e in I)v.style[e]=I[e];v.addEventListener("click",(function(){C.removeEventListener("click",r),L.classList.add("hidden"),O.classList.add("hidden"),e.classList.add("hidden"),x.value="",v.remove()})),m.appendChild(v)}(q),C.addEventListener("click",r)}r(952),r(397)},952:()=>{let e=document.querySelector(".settings-menu__theme-toggler"),t=document.querySelector(".settings-menu__toggler"),r=document.querySelector("#main_style");"dark"===localStorage.currentTheme&&(t.style.left="18px",setTimeout((()=>e.style.background="linear-gradient(to right, rgb(41, 223, 71) 70%, white 70%)"),30),r.href="./dark.css"),t.addEventListener("click",(function(){"-2px"===t.style.left?(t.style.left="18px",setTimeout((()=>e.style.background="linear-gradient(to right, rgb(41, 223, 71) 70%, white 70%)"),30),r.href="./dark.css",localStorage.currentTheme="dark"):(t.style.left="-2px",r.href="./light.css",setTimeout((()=>e.style.background="linear-gradient(to right, rgb(41, 223, 71) 30%, white 30%)"),30),localStorage.currentTheme="light")}))}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,s,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,s,a]=e[c],i=!0,d=0;d<r.length;d++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,s,a]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var s,a,[o,i,d]=r,l=0;if(o.some((t=>0!==e[t]))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(d)var c=d(n)}for(t&&t(r);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0;return n.O(c)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=n.O(void 0,[150],(()=>n(434)));s=n.O(s)})();