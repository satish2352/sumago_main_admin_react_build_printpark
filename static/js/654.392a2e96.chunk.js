"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[654],{9885:(e,r,i)=>{i.r(r),i.d(r,{default:()=>W});var t=i(9950),n=i(9254),o=i(9808),a=i(6491),s=i(8429),l=i(8060),c=i(3239),d=i(5333),p=i(2257),h=i(2074),x=i(264),m=i(7239),u=i(226);const g=i.p+"static/media/user-1.479b494978354b339dab.jpg";var b=i(4414);const j=()=>{const[e,r]=(0,t.useState)(null);return(0,b.jsxs)(a.A,{children:[(0,b.jsx)(d.A,{size:"large","aria-label":"show 11 new notifications",color:"inherit","aria-controls":"msgs-menu","aria-haspopup":"true",sx:{..."object"===typeof e&&{color:"primary.main"}},onClick:e=>{r(e.currentTarget)},children:(0,b.jsx)(x.A,{src:g,alt:g,sx:{width:35,height:35}})}),(0,b.jsx)(m.A,{id:"msgs-menu",anchorEl:e,keepMounted:!0,open:Boolean(e),onClose:()=>{r(null)},anchorOrigin:{horizontal:"right",vertical:"bottom"},transformOrigin:{horizontal:"right",vertical:"top"},sx:{"& .MuiMenu-paper":{width:"200px"}},children:(0,b.jsx)(a.A,{mt:1,py:1,px:2,children:(0,b.jsx)(u.A,{to:"/auth/login",variant:"outlined",color:"primary",onClick:()=>localStorage.clear(),component:h.N_,fullWidth:!0,children:"Logout"})})})]})};var A=i(5111);const f=e=>{const r=(0,n.Ay)(l.A)((e=>{let{theme:r}=e;return{boxShadow:"none",background:r.palette.background.paper,justifyContent:"center",backdropFilter:"blur(4px)",[r.breakpoints.up("lg")]:{minHeight:"70px"}}})),i=(0,n.Ay)(c.A)((e=>{let{theme:r}=e;return{width:"100%",color:r.palette.text.secondary}}));return(0,b.jsx)(r,{position:"sticky",color:"default",children:(0,b.jsxs)(i,{children:[(0,b.jsx)(d.A,{color:"inherit","aria-label":"menu",onClick:e.toggleMobileSidebar,sx:{display:{lg:"none",xs:"inline"}},children:(0,b.jsx)(A.dd8,{width:"20",height:"20"})}),(0,b.jsx)(d.A,{size:"large","aria-label":"show 11 new notifications",color:"inherit","aria-controls":"msgs-menu","aria-haspopup":"true",sx:{..."object"===typeof anchorEl2&&{color:"primary.main"}}}),(0,b.jsx)(a.A,{flexGrow:1}),(0,b.jsx)(p.A,{spacing:1,direction:"row",alignItems:"center",children:(0,b.jsx)(j,{})})]})})};var y=i(6589),w=i(9694),k=i(3544),v=i(1397);const C=[{navlabel:!0,subheader:"Home"},{id:(0,v.uniqueId)(),title:"Quotes Form",icon:A.sTs,href:"/quotes"},{id:(0,v.uniqueId)(),title:"Valuable Clients",icon:A.sTs,href:"/clients"},{navlabel:!0,subheader:"Contact"},{id:(0,v.uniqueId)(),title:"Office Location",icon:A.sTs,href:"/office-location"},{id:(0,v.uniqueId)(),title:"Contact Form",icon:A.sTs,href:"/contactform"}];var S=i(249),z=i(4857),M=i(4446),T=i(4195),O=i(3563);const I=e=>{let{item:r,level:i,pathDirect:t,onClick:o}=e;const a=r.icon,s=(0,z.A)(),l=(0,b.jsx)(a,{stroke:1.5,size:"1.3rem"}),c=(0,n.Ay)(M.Ay)((()=>({whiteSpace:"nowrap",marginBottom:"2px",padding:"8px 10px",borderRadius:"8px",backgroundColor:i>1?"transparent !important":"inherit",color:s.palette.text.secondary,paddingLeft:"10px","&:hover":{backgroundColor:s.palette.primary.light,color:s.palette.primary.main},"&.Mui-selected":{color:"white",backgroundColor:s.palette.primary.main,"&:hover":{backgroundColor:s.palette.primary.main,color:"white"}}})));return(0,b.jsx)(S.A,{component:"li",disablePadding:!0,children:(0,b.jsxs)(c,{button:!0,component:r.external?"a":h.k2,to:r.href,href:r.external?r.href:"",disabled:r.disabled,selected:t===r.href,target:r.external?"_blank":"",onClick:o,children:[(0,b.jsx)(T.A,{sx:{minWidth:"36px",p:"3px 0",color:"inherit"},children:l}),(0,b.jsx)(O.A,{children:(0,b.jsx)(b.Fragment,{children:r.title})})]})},r.id)};var N=i(4479);const q=e=>{let{item:r}=e;const i=(0,n.Ay)((e=>(0,b.jsx)(N.A,{disableSticky:!0,...e})))((e=>{let{theme:r}=e;return{...r.typography.overline,fontWeight:"700",marginTop:r.spacing(3),marginBottom:r.spacing(0),color:r.palette.text.primary,lineHeight:"26px",padding:"3px 12px"}}));return(0,b.jsx)(i,{children:r.subheader})},H=()=>{const{pathname:e}=(0,s.zy)(),r=e;return(0,b.jsx)(a.A,{sx:{px:3},children:(0,b.jsx)(S.A,{sx:{pt:0},className:"sidebarNav",children:C.map((e=>e.subheader?(0,b.jsx)(q,{item:e},e.subheader):(0,b.jsx)(I,{item:e,pathDirect:r},e.id)))})})},P=(i.p,e=>{const r="270px";return(0,y.A)((e=>e.breakpoints.up("lg")))?(0,b.jsx)(a.A,{sx:{width:r,flexShrink:0},children:(0,b.jsx)(w.Ay,{anchor:"left",open:e.isSidebarOpen,variant:"permanent",PaperProps:{sx:{width:r,boxSizing:"border-box"}},children:(0,b.jsxs)(a.A,{sx:{height:"100%"},children:[(0,b.jsx)(a.A,{px:3,children:(0,b.jsx)(k.A,{})}),(0,b.jsx)(a.A,{children:(0,b.jsx)(H,{})})]})})}):(0,b.jsxs)(w.Ay,{anchor:"left",open:e.isMobileSidebarOpen,onClose:e.onSidebarClose,variant:"temporary",PaperProps:{sx:{width:r,boxShadow:e=>e.shadows[8]}},children:[(0,b.jsx)(a.A,{px:2,children:(0,b.jsx)(k.A,{})}),(0,b.jsx)(H,{})]})}),B=(0,n.Ay)("div")((()=>({display:"flex",minHeight:"100vh",width:"100%"}))),F=(0,n.Ay)("div")((()=>({display:"flex",flexGrow:1,paddingBottom:"60px",flexDirection:"column",zIndex:1,backgroundColor:"transparent"}))),W=()=>{const[e,r]=(0,t.useState)(!0),[i,n]=(0,t.useState)(!1);return(0,b.jsxs)(B,{className:"mainwrapper",children:[(0,b.jsx)(P,{isSidebarOpen:e,isMobileSidebarOpen:i,onSidebarClose:()=>n(!1)}),(0,b.jsxs)(F,{className:"page-wrapper",children:[(0,b.jsx)(f,{toggleSidebar:()=>r(!e),toggleMobileSidebar:()=>n(!0)}),(0,b.jsx)(o.A,{sx:{paddingTop:"20px",maxWidth:"1200px"},children:(0,b.jsx)(a.A,{sx:{minHeight:"calc(100vh - 170px)"},children:(0,b.jsx)(s.sv,{})})})]})]})}},3544:(e,r,i)=>{i.d(r,{A:()=>l});var t=i(2074);i(9950);i.p;var n=i(9254),o=i(6834),a=i(4414);const s=(0,n.Ay)(t.N_)((()=>({height:"70px",width:"180px",overflow:"hidden",display:"block"}))),l=()=>(0,a.jsx)(s,{to:"/",children:(0,a.jsx)("img",{src:o,alt:"logo",style:{width:"11rem",marginTop:"2.5rem"}})})},6834:(e,r,i)=>{e.exports=i.p+"static/media/sumagologo.bd27e557adf1d3fcaf02.png"}}]);