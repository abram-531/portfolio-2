"use strict";(self.webpackChunktodo_fronted=self.webpackChunktodo_fronted||[]).push([[807],{3807:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(5043),s=a(6971),n=a(1318),o=a(4641),l=a(7122),i=a(1882),u=a(16),c=a(579);const d=()=>{const[e,t]=(0,r.useState)({file:null,path:`${u.UB}/avatar/default`}),a=(0,r.useRef)(),{auth:d}=(0,r.useContext)(l.c),{axios:p}=(0,r.useContext)(i.q),f=(0,s.Zp)();return(0,r.useEffect)((()=>{d&&f("/")}),[d]),(0,c.jsxs)("div",{className:"container w-full h-screen flex flex-col gap-4 justify-center items-center",children:[(0,c.jsx)("h1",{className:"text-5xl",children:"User Register"}),(0,c.jsx)("input",{ref:a,type:"file",onChange:()=>{if(!a.current.value)return;const e=a.current.files[0],r=new FileReader;r.onload=a=>{t({file:e,path:a.target.result})},r.readAsDataURL(e)},hidden:!0}),(0,c.jsx)("img",{src:e.path,alt:"",className:"w-[200px] rounded-full cursor-pointer",onClick:()=>a.current.click()}),(0,c.jsxs)("form",{onSubmit:t=>{t.preventDefault();const a=t.target[0].value.trim(),r=t.target[1].value.trim(),s=t.target[2].value,n=t.target[3].value;if(!a)return o.Ay.warning({message:"Input your Name!"}),t.target[0].value="",void t.target[0].focus();if(!r)return o.Ay.warning({message:"Input your Email!"}),t.target[1].value="",void t.target[1].focus();if(!s)return o.Ay.warning({message:"Input your Password!"}),void t.target[2].focus();if(!n)return o.Ay.warning({message:"Confirm your Password!"}),void t.target[3].focus();if(s!==n)return o.Ay.warning({message:"Confirm is incorrect!"}),void t.target[3].focus();const l=new FormData;l.append("avatar",e.file),l.append("name",a),l.append("email",r),l.append("password",s),l.append("confirm",n),p({method:"POST",url:u.H$.auth.register,data:l}).then((e=>{f("/login")}))},className:"flex flex-col gap-4 lg:w-1/3 md:w-1/2 sm:w-[70%] mt-8 w-[90%] transition-all",children:[(0,c.jsx)("input",{type:"text",className:"border p-2 outline-none",placeholder:"Name"}),(0,c.jsx)("input",{type:"text",className:"border p-2 outline-none",placeholder:"Email"}),(0,c.jsx)("input",{type:"password",className:"border p-2 outline-none",placeholder:"Password"}),(0,c.jsx)("input",{type:"password",className:"border p-2 outline-none",placeholder:"Confirm"}),(0,c.jsxs)("div",{className:"flex flex-col gap-4 justify-between sm:flex-row",children:[(0,c.jsx)("span",{children:"If you have your account?"}),(0,c.jsx)(n.N_,{to:"/login",className:"hover:text-blue-700",children:"Go Login..."})]}),(0,c.jsx)("button",{type:"submit",className:"bg-blue-600 text-white p-2",children:"Register"})]})]})}}}]);
//# sourceMappingURL=807.5cd7341c.chunk.js.map