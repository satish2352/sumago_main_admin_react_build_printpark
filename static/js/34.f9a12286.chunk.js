"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[34],{3366:(e,t,n)=>{n.d(t,{A:()=>s});n(9950);var i=n(9254),o=n(1239),a=n(4414);const s=(0,i.Ay)((e=>(0,a.jsx)(o.A,{...e})))((e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"0.8"},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.grey[200]}}}))},6034:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var i=n(9950),o=n(2074),a=n(6491),s=n(899),l=n(8089),r=n(2053),d=n(2257),c=n(2712),u=n(226),h=n(8429),x=n(8469),m=n(3366),p=n(4414);const g=e=>{let{title:t,subtitle:n,subtext:s}=e;const[l,c]=(0,i.useState)(""),[g,f]=(0,i.useState)(""),[A,j]=(0,i.useState)("");let b=(0,h.Zp)();return(0,p.jsxs)(p.Fragment,{children:[t?(0,p.jsx)(r.A,{fontWeight:"700",variant:"h2",mb:1,children:t}):null,s,(0,p.jsxs)(d.A,{children:[(0,p.jsxs)(a.A,{children:[(0,p.jsx)(r.A,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"email",mb:"5px",children:"Email Id"}),(0,p.jsx)(m.A,{id:"email",value:l,onChange:e=>c(e.target.value),variant:"outlined",fullWidth:!0})]}),(0,p.jsxs)(a.A,{mt:"25px",children:[(0,p.jsx)(r.A,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"password",mb:"5px",children:"Password"}),(0,p.jsx)(m.A,{id:"password",value:g,onChange:e=>f(e.target.value),type:"password",variant:"outlined",fullWidth:!0})]}),(0,p.jsx)(d.A,{justifyContent:"space-between",direction:"row",alignItems:"center",my:2,children:(0,p.jsx)(r.A,{component:o.N_,to:"/",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Forgot Password ?"})})]}),(0,p.jsx)(a.A,{children:(0,p.jsx)(u.A,{color:"primary",variant:"contained",size:"large",fullWidth:!0,component:o.N_,type:"button",onClick:async()=>{let e={email:l,password:g};x.A.post("/auth/login",e).then((e=>{var t;console.log("res",e.data.token),b("/quotes"),localStorage.setItem("token",null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.token),localStorage.setItem("login",!0)})).catch((e=>{console.log("err",e)}))},children:"Sign In"})}),n]})};var f=n(6834);const A=()=>(0,p.jsx)(c.A,{title:"Login",description:"this is Login page",children:(0,p.jsx)(a.A,{sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:(0,p.jsx)(s.Ay,{container:!0,spacing:0,justifyContent:"center",sx:{height:"100vh"},children:(0,p.jsx)(s.Ay,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:(0,p.jsxs)(l.A,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:[(0,p.jsx)(a.A,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,p.jsx)("img",{src:f,alt:"logo",style:{width:"100%"}})}),(0,p.jsx)(g,{subtext:(0,p.jsx)(r.A,{variant:"subtitle1",textAlign:"center",color:"textSecondary",mb:1}),subtitle:(0,p.jsxs)(d.A,{direction:"row",spacing:1,justifyContent:"center",mt:3,children:[(0,p.jsx)(r.A,{color:"textSecondary",variant:"h6",fontWeight:"500",children:"New here?"}),(0,p.jsx)(r.A,{component:o.N_,to:"/auth/register",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Create an account"})]})})]})})})})})},6491:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(8168),o=n(8587),a=n(9950),s=n(3817),l=n(116),r=n(505),d=n(237),c=n(7148),u=n(4414);const h=["className","component"];var x=n(1681),m=n(7775),p=n(7550);const g=(0,n(863).A)("MuiBox",["root"]),f=(0,m.A)(),A=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n,defaultClassName:x="MuiBox-root",generateClassName:m}=e,p=(0,l.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(r.A);return a.forwardRef((function(e,a){const l=(0,c.A)(n),r=(0,d.A)(e),{className:g,component:f="div"}=r,A=(0,o.A)(r,h);return(0,u.jsx)(p,(0,i.A)({as:f,ref:a,className:(0,s.A)(g,m?m(x):x),theme:t&&l[t]||l},A))}))}({themeId:p.A,defaultTheme:f,defaultClassName:g.root,generateClassName:x.A.generate}),j=A},6834:(e,t,n)=>{e.exports=n.p+"static/media/sumagologo.bd27e557adf1d3fcaf02.png"}}]);