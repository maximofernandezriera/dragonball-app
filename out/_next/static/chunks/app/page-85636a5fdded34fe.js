(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8615:(e,a,t)=>{Promise.resolve().then(t.bind(t,7920))},7920:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>m});var r=t(5155),i=t(2115),s=t(6793),c=t.n(s),n=t(2651);let l=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;try{let t=await n.A.get("".concat("https://dragonball-api.com/api/characters","?limit=").concat(a,"&offset=").concat((e-1)*a));return console.log("API Response:",t.data),t.data.items.map(e=>({id:e.id,name:e.name,race:e.race,ki:e.ki,maxKi:e.maxKi,imageUrl:e.imageUrl}))}catch(e){return console.error("Error fetching characters:",e),[]}},o=e=>{let{character:a}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:a.imageUrl,alt:a.name,className:"card-image"}),(0,r.jsx)("h2",{children:a.name}),(0,r.jsxs)("p",{children:["Race: ",a.race]}),(0,r.jsxs)("p",{children:["Ki: ",a.ki]}),(0,r.jsxs)("p",{children:["MaxKi: ",a.maxKi]})]})};var h=t(6358),d=t.n(h);let m=()=>{let[e,a]=(0,i.useState)([]),[t,s]=(0,i.useState)(1),[n,h]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{(async()=>{h(!0);let e=await l(t);console.log("Data from getCharacters:",e),a(e),h(!1)})()},[t]),(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:"Dragon Ball Characters"})}),(0,r.jsx)("h1",{className:d().title,children:"Dragon Ball Characters"}),n?(0,r.jsx)("p",{children:"Loading..."}):(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(o,{character:e},e.name))}),(0,r.jsx)("button",{onClick:()=>{s(e=>1===e?1:e-1)},disabled:1===t,children:"Previous"}),(0,r.jsx)("button",{onClick:()=>{s(e=>e+1)},children:"Next Page"})]})}},6358:e=>{e.exports={container:"Home_container__UZ9hw",title:"Home_title__A_ZDL"}}},e=>{var a=a=>e(e.s=a);e.O(0,[149,491,441,517,358],()=>a(8615)),_N_E=e.O()}]);