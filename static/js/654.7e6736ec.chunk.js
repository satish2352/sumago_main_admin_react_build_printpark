"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[654],{9885:(e,i,r)=>{r.r(i),r.d(i,{default:()=>W});var t=r(9950),n=r(9254),o=r(9808),s=r(6491),a=r(8429),l=r(8060),d=r(3239),c=r(5333),h=r(2257),p=r(2074),x=r(264),u=r(7239),m=r(2766),g=r(4195),j=r(3563),b=r(226),A=r(5111);const f=r.p+"static/media/user-1.479b494978354b339dab.jpg";var y=r(4414);const w=()=>{const[e,i]=(0,t.useState)(null);return(0,y.jsxs)(s.A,{children:[(0,y.jsx)(c.A,{size:"large","aria-label":"show 11 new notifications",color:"inherit","aria-controls":"msgs-menu","aria-haspopup":"true",sx:{..."object"===typeof e&&{color:"primary.main"}},onClick:e=>{i(e.currentTarget)},children:(0,y.jsx)(x.A,{src:f,alt:f,sx:{width:35,height:35}})}),(0,y.jsxs)(u.A,{id:"msgs-menu",anchorEl:e,keepMounted:!0,open:Boolean(e),onClose:()=>{i(null)},anchorOrigin:{horizontal:"right",vertical:"bottom"},transformOrigin:{horizontal:"right",vertical:"top"},sx:{"& .MuiMenu-paper":{width:"200px"}},children:[(0,y.jsxs)(m.A,{children:[(0,y.jsx)(g.A,{children:(0,y.jsx)(A.vg7,{width:20})}),(0,y.jsx)(j.A,{children:"My Profile"})]}),(0,y.jsxs)(m.A,{children:[(0,y.jsx)(g.A,{children:(0,y.jsx)(A.jQL,{width:20})}),(0,y.jsx)(j.A,{children:"My Account"})]}),(0,y.jsxs)(m.A,{children:[(0,y.jsx)(g.A,{children:(0,y.jsx)(A.oJu,{width:20})}),(0,y.jsx)(j.A,{children:"My Tasks"})]}),(0,y.jsx)(s.A,{mt:1,py:1,px:2,children:(0,y.jsx)(b.A,{to:"/auth/login",variant:"outlined",color:"primary",component:p.N_,fullWidth:!0,children:"Logout"})})]})]})},v=e=>{const i=(0,n.Ay)(l.A)((e=>{let{theme:i}=e;return{boxShadow:"none",background:i.palette.background.paper,justifyContent:"center",backdropFilter:"blur(4px)",[i.breakpoints.up("lg")]:{minHeight:"70px"}}})),r=(0,n.Ay)(d.A)((e=>{let{theme:i}=e;return{width:"100%",color:i.palette.text.secondary}}));return(0,y.jsx)(i,{position:"sticky",color:"default",children:(0,y.jsxs)(r,{children:[(0,y.jsx)(c.A,{color:"inherit","aria-label":"menu",onClick:e.toggleMobileSidebar,sx:{display:{lg:"none",xs:"inline"}},children:(0,y.jsx)(A.dd8,{width:"20",height:"20"})}),(0,y.jsx)(c.A,{size:"large","aria-label":"show 11 new notifications",color:"inherit","aria-controls":"msgs-menu","aria-haspopup":"true",sx:{..."object"===typeof anchorEl2&&{color:"primary.main"}}}),(0,y.jsx)(s.A,{flexGrow:1}),(0,y.jsx)(h.A,{spacing:1,direction:"row",alignItems:"center",children:(0,y.jsx)(w,{})})]})})};var k=r(6589),C=r(9694),S=r(3544),M=r(1397);const z=[{navlabel:!0,subheader:"Home"},{id:(0,M.uniqueId)(),title:"Quotes Form",icon:A.sTs,href:"/quotes"},{id:(0,M.uniqueId)(),title:"Valuable Clients",icon:A.sTs,href:"/clients"},{navlabel:!0,subheader:"Contact"},{id:(0,M.uniqueId)(),title:"Office Location",icon:A.sTs,href:"/office-location"},{id:(0,M.uniqueId)(),title:"Contact Form",icon:A.sTs,href:"/contactform"},{navlabel:!0,subheader:"Auth"},{id:(0,M.uniqueId)(),title:"Login",icon:A.bHv,href:"/auth/login"},{id:(0,M.uniqueId)(),title:"Register",icon:A.nmS,href:"/auth/register"}];var T=r(249),I=r(4857),q=r(4446);const O=e=>{let{item:i,level:r,pathDirect:t,onClick:o}=e;const s=i.icon,a=(0,I.A)(),l=(0,y.jsx)(s,{stroke:1.5,size:"1.3rem"}),d=(0,n.Ay)(q.Ay)((()=>({whiteSpace:"nowrap",marginBottom:"2px",padding:"8px 10px",borderRadius:"8px",backgroundColor:r>1?"transparent !important":"inherit",color:a.palette.text.secondary,paddingLeft:"10px","&:hover":{backgroundColor:a.palette.primary.light,color:a.palette.primary.main},"&.Mui-selected":{color:"white",backgroundColor:a.palette.primary.main,"&:hover":{backgroundColor:a.palette.primary.main,color:"white"}}})));return(0,y.jsx)(T.A,{component:"li",disablePadding:!0,children:(0,y.jsxs)(d,{button:!0,component:i.external?"a":p.k2,to:i.href,href:i.external?i.href:"",disabled:i.disabled,selected:t===i.href,target:i.external?"_blank":"",onClick:o,children:[(0,y.jsx)(g.A,{sx:{minWidth:"36px",p:"3px 0",color:"inherit"},children:l}),(0,y.jsx)(j.A,{children:(0,y.jsx)(y.Fragment,{children:i.title})})]})},i.id)};var H=r(4479);const N=e=>{let{item:i}=e;const r=(0,n.Ay)((e=>(0,y.jsx)(H.A,{disableSticky:!0,...e})))((e=>{let{theme:i}=e;return{...i.typography.overline,fontWeight:"700",marginTop:i.spacing(3),marginBottom:i.spacing(0),color:i.palette.text.primary,lineHeight:"26px",padding:"3px 12px"}}));return(0,y.jsx)(r,{children:i.subheader})},P=()=>{const{pathname:e}=(0,a.zy)(),i=e;return(0,y.jsx)(s.A,{sx:{px:3},children:(0,y.jsx)(T.A,{sx:{pt:0},className:"sidebarNav",children:z.map((e=>e.subheader?(0,y.jsx)(N,{item:e},e.subheader):(0,y.jsx)(O,{item:e,pathDirect:i},e.id)))})})},L=(r.p,e=>{const i="270px";return(0,k.A)((e=>e.breakpoints.up("lg")))?(0,y.jsx)(s.A,{sx:{width:i,flexShrink:0},children:(0,y.jsx)(C.Ay,{anchor:"left",open:e.isSidebarOpen,variant:"permanent",PaperProps:{sx:{width:i,boxSizing:"border-box"}},children:(0,y.jsxs)(s.A,{sx:{height:"100%"},children:[(0,y.jsx)(s.A,{px:3,children:(0,y.jsx)(S.A,{})}),(0,y.jsx)(s.A,{children:(0,y.jsx)(P,{})})]})})}):(0,y.jsxs)(C.Ay,{anchor:"left",open:e.isMobileSidebarOpen,onClose:e.onSidebarClose,variant:"temporary",PaperProps:{sx:{width:i,boxShadow:e=>e.shadows[8]}},children:[(0,y.jsx)(s.A,{px:2,children:(0,y.jsx)(S.A,{})}),(0,y.jsx)(P,{})]})}),B=(0,n.Ay)("div")((()=>({display:"flex",minHeight:"100vh",width:"100%"}))),F=(0,n.Ay)("div")((()=>({display:"flex",flexGrow:1,paddingBottom:"60px",flexDirection:"column",zIndex:1,backgroundColor:"transparent"}))),W=()=>{const[e,i]=(0,t.useState)(!0),[r,n]=(0,t.useState)(!1);return(0,y.jsxs)(B,{className:"mainwrapper",children:[(0,y.jsx)(L,{isSidebarOpen:e,isMobileSidebarOpen:r,onSidebarClose:()=>n(!1)}),(0,y.jsxs)(F,{className:"page-wrapper",children:[(0,y.jsx)(v,{toggleSidebar:()=>i(!e),toggleMobileSidebar:()=>n(!0)}),(0,y.jsx)(o.A,{sx:{paddingTop:"20px",maxWidth:"1200px"},children:(0,y.jsx)(s.A,{sx:{minHeight:"calc(100vh - 170px)"},children:(0,y.jsx)(a.sv,{})})})]})]})}},3544:(e,i,r)=>{r.d(i,{A:()=>l});var t=r(2074);r(9950);r.p;var n=r(9254),o=r(6834),s=r(4414);const a=(0,n.Ay)(t.N_)((()=>({height:"70px",width:"180px",overflow:"hidden",display:"block"}))),l=()=>(0,s.jsx)(a,{to:"/",children:(0,s.jsx)("img",{src:o,alt:"logo",style:{width:"11rem",marginTop:"2.5rem"}})})},6834:(e,i,r)=>{e.exports=r.p+"static/media/sumagologo.bd27e557adf1d3fcaf02.png"}}]);