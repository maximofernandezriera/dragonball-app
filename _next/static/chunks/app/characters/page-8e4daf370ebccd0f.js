(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{6464:(e,a,r)=>{Promise.resolve().then(r.bind(r,9499))},9499:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>_});var t=r(5155),n=r(2115),s=r(6793),i=r.n(s),c=r(2651);let l=async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;try{let r=await c.A.get("".concat("https://dragonball-api.com/api/characters","?limit=").concat(a,"&offset=").concat((e-1)*a));if(console.log("API Response:",r.data),!Array.isArray(r.data.items))return console.log("Respuesta de la API no es un array:",r.data),[];return r.data.items.map(e=>({id:e.id,name:e.name,race:e.race,ki:e.ki,maxKi:e.maxKi,imageUrl:e.image}))}catch(e){return console.error("Error fetching characters:",e),[]}},o=e=>{let{character:a}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:a.imageUrl,alt:a.name}),(0,t.jsx)("h2",{children:a.name}),(0,t.jsxs)("p",{children:["Race: ",a.race]}),(0,t.jsxs)("p",{children:["Ki: ",a.ki]}),(0,t.jsxs)("p",{children:["MaxKi: ",a.maxKi]})]})};var h=r(6358),u=r.n(h),m=r(9956);let _=()=>{let[e,a]=(0,n.useState)([]),[r,s]=(0,n.useState)(1),[c,h]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{(async()=>{h(!0);let e=await l(r);console.log("Data from getCharacters:",e),a(e),h(!1)})()},[r]),(0,t.jsxs)("div",{className:u().container,children:[(0,t.jsx)(i(),{children:(0,t.jsx)("title",{children:"Dragon Ball Characters"})}),(0,t.jsxs)("main",{className:u().main,children:[(0,t.jsx)("h1",{className:u().title,children:"Dragon Ball Characters"}),(0,t.jsx)(m.A,{}),c?(0,t.jsx)("p",{children:"Loading..."}):e.map(e=>(0,t.jsx)(o,{character:e},e.id)),(0,t.jsx)("button",{onClick:()=>{s(e=>Math.max(e-1,1))},disabled:1===r,children:"Previous Page"}),(0,t.jsx)("button",{onClick:()=>{s(e=>e+1)},children:"Next Page"})]})]})}},9956:(e,a,r)=>{"use strict";r.d(a,{A:()=>o});var t=r(5155),n=r(2115),s=r(8173),i=r.n(s),c=r(3129),l=r.n(c);let o=()=>{let[e,a]=(0,n.useState)(!1);return(0,t.jsxs)("div",{className:l().hamburgerMenu,children:[(0,t.jsx)("button",{className:l().hamburgerButton,onClick:()=>{a(!e)},children:"☰"}),e&&(0,t.jsx)("nav",{className:l().navMenu,children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/characters",children:"Characters"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/about",children:"About"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/favorites",children:"Favorites"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/contact",children:"Contact"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/faq",children:"FAQ"})})]})})]})}},3129:e=>{e.exports={hamburgerMenu:"HamburgerMenu_hamburgerMenu__tZFf9",hamburgerButton:"HamburgerMenu_hamburgerButton__phDe4",navMenu:"HamburgerMenu_navMenu__rQylo",main:"HamburgerMenu_main__NBdum"}},6358:e=>{e.exports={container:"Home_container__UZ9hw",main:"Home_main__IuyWW",footer:"Home_footer__SeeoX",title:"Home_title__A_ZDL",description:"Home_description__6Rag2",code:"Home_code__y56Hm",hero:"Home_hero__CxmOJ",subtitle:"Home_subtitle__dVuyg",banner:"Home_banner__MGEqu",features:"Home_features__gv0_a",feature:"Home_feature___8TGm"}}},e=>{var a=a=>e(e.s=a);e.O(0,[924,909,651,441,517,358],()=>a(6464)),_N_E=e.O()}]);