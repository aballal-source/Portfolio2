(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1314:function(e,t,a){Promise.resolve().then(a.bind(a,8787))},8787:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var i=a(7437),s=a(2265),n=a(8614),r=a(521),l=a(9079),o=a(9114),c=a(1466),d=a(3991);function m(){let e=(0,s.useCallback)(async e=>{await (0,d.S)(e)},[]);return(0,i.jsx)("div",{className:"fixed inset-0 w-full h-full",children:(0,i.jsx)(c.Z,{id:"tsparticles",init:e,className:"absolute inset-0 w-full h-full",options:{fullScreen:{enable:!1},background:{color:"transparent"},fpsLimit:120,interactivity:{events:{onHover:{enable:!0,mode:"repulse"}},modes:{grab:{distance:140,links:{opacity:.3}}}},particles:{color:{value:"#00D2BE"},links:{color:"#00D2BE",distance:150,enable:!0,opacity:.25,width:1},move:{direction:"none",enable:!0,outModes:{default:"out"},random:!1,speed:.8,straight:!1},number:{density:{enable:!0,area:800},value:70},opacity:{value:.15},shape:{type:"circle"},size:{value:{min:1,max:2.5}}},detectRetina:!0}})})}var x=a(3145),p={src:"/_next/static/media/ProfileImage.7960b272.jpg",height:800,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKQNf//EAB0QAAECBwAAAAAAAAAAAAAAAAIBAwAEBRIhMpH/2gAIAQEAAT8ACjPiLcwpBhrW5eR//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACA//aAAgBAgEBPwBzqT//xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPwBb/9k=",blurWidth:8,blurHeight:8},h=a(7996),u=a(4154);function g(){return(0,i.jsxs)("div",{className:"relative h-[300px] overflow-hidden flex flex-col justify-start",children:[(0,i.jsx)(x.default,{src:p,alt:"Ahmed Ballal",fill:!0,className:"object-cover object-center transform group-hover:scale-105 transition-transform duration-300 opacity-90 filter brightness-75 contrast-125"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-darkLight via-darkLight/95 to-transparent z-10"})]})}function y(){return(0,i.jsxs)("div",{className:"p-5 bg-darkLight/90",children:[(0,i.jsx)("h1",{className:"text-3xl font-bold text-primary mb-2 drop-shadow-lg",children:"Ahmed Ballal"}),(0,i.jsx)("p",{className:"text-lg text-text-primary font-medium drop-shadow-md",children:"Software Engineer"})]})}function f(){let e=[{icon:(0,i.jsx)(h.uOf,{size:22}),href:"https://github.com/aballal-source"},{icon:(0,i.jsx)(h.qOw,{size:22}),href:"https://linkedin.com/in/aballal"},{icon:(0,i.jsx)(u.cy8,{size:22}),href:"https://x.com/9ballal"},{icon:(0,i.jsx)(h.JID,{size:22}),href:"https://instagram.com/ahmed_ballal"}];return(0,i.jsx)("div",{className:"flex justify-center gap-6 p-4 border-t border-primary/10",children:e.map((e,t)=>(0,i.jsx)(r.E.a,{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-text-secondary hover:text-primary transition-colors duration-300",whileHover:{y:-2},children:e.icon},t))})}function j(e){let{isScrolled:t}=e;return(0,i.jsx)(r.E.div,{initial:{opacity:0,x:-100},animate:{opacity:t?0:1,x:t?-100:0,scale:t?.95:1,pointerEvents:t?"none":"auto"},transition:{duration:.3},className:"fixed left-8 top-24 z-50 w-[380px] xl:w-[420px] hidden lg:block",children:(0,i.jsxs)("div",{className:"relative group",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/20 to-primaryLight/20 rounded-lg blur-xl transition-all duration-300 group-hover:blur-2xl"}),(0,i.jsxs)("div",{className:"relative bg-darkLight/90 border border-primary/20 rounded-lg backdrop-blur-xl shadow-2xl overflow-hidden",children:[(0,i.jsx)(y,{}),(0,i.jsx)(g,{}),(0,i.jsx)(f,{})]})]})})}function b(e){let{activeSection:t,onSectionChange:a,isScrolled:s,isLandingVisible:n}=e,l=e=>{if("about"===e)window.scrollTo({top:0,behavior:"smooth"});else{a(e);let t=document.getElementById(e);null==t||t.scrollIntoView({behavior:"smooth"})}};return(0,i.jsx)(r.E.nav,{initial:{opacity:0,y:-20},animate:{opacity:s?0:1,y:s?-20:0,pointerEvents:s?"none":"auto"},transition:{duration:.2},className:"fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block",children:(0,i.jsx)("div",{className:"flex items-center justify-center gap-16 p-4 rounded-full bg-darkLight/80 backdrop-blur-sm border border-primary/10",children:["about","projects","contact"].map(e=>(0,i.jsxs)(r.E.button,{onClick:()=>l(e),className:"relative px-1 py-2 group",whileHover:{y:-2},children:[(0,i.jsx)("span",{className:"relative text-sm font-medium tracking-wide transition-all duration-300 ".concat("about"===e&&n||t===e?"text-primary":"text-text-secondary group-hover:text-white"),children:e.charAt(0).toUpperCase()+e.slice(1)}),(0,i.jsx)(r.E.div,{className:"absolute -bottom-1 left-0 right-0 h-[1px] bg-primary",initial:!1,animate:{scaleX:"about"===e&&n||t===e?1:0,opacity:"about"===e&&n||t===e?1:0},transition:{duration:.2}})]},e))})})}let A={colors:{primary:"#00D2BE",primaryLight:"#27F4D2",secondary:"#C4C4C4",dark:"#0B1221",darkLight:"#1A2332",background:{from:"#0B1221",via:"#131B2E",to:"#0B1221"},text:{primary:"#FFFFFF",secondary:"#94A3B8",accent:"#00D2BE",muted:"#6B7280"},accent:{primary:"#00D2BE",secondary:"#27F4D2"},gradient:{primary:"linear-gradient(to right, #00D2BE, #27F4D2)",secondary:"linear-gradient(135deg, #00D2BE 0%, #27F4D2 100%)"},glass:{background:"rgba(11, 18, 33, 0.7)",border:"rgba(0, 210, 190, 0.2)"}}},v=e=>{let{activeSection:t,onSectionChange:a,isLandingVisible:s}=e,n=e=>{if("about"===e)window.scrollTo({top:0,behavior:"smooth"});else{a(e);let t=document.getElementById(e);null==t||t.scrollIntoView({behavior:"smooth"})}};return(0,i.jsx)(r.E.div,{className:"fixed right-8 top-1/2 -translate-y-1/2 flex items-center gap-4 z-50 lg:hidden",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.3},children:(0,i.jsx)("div",{className:"flex flex-col gap-8",children:["about","projects","contact"].map(e=>(0,i.jsx)(r.E.button,{onClick:()=>n(e),className:"\n              text-xs uppercase tracking-wider transition-all duration-300\n              ".concat(s&&"about"===e||t===e?"text-[".concat(A.colors.primary,"]"):"text-[".concat(A.colors.text.secondary,"]/50 hover:text-[").concat(A.colors.primary,"]/80"),"\n            "),whileHover:{x:-2},whileTap:{scale:.95},children:e.charAt(0).toUpperCase()+e.slice(1)},e))})})};var N=a(2909);let w=[{name:"React",icon:"SiReact",color:"#61DAFB"},{name:"TypeScript",icon:"SiTypescript",color:"#3178C6"},{name:"Next.js",icon:"SiNextdotjs",color:"#000000"},{name:"Node.js",icon:"SiNodedotjs",color:"#339933"},{name:"Python",icon:"SiPython",color:"#3776AB"},{name:"JavaScript",icon:"SiJavascript",color:"#F7DF1E"},{name:"TailwindCSS",icon:"SiTailwindcss",color:"#06B6D4"},{name:"MongoDB",icon:"SiMongodb",color:"#47A248"},{name:"PostgreSQL",icon:"SiPostgresql",color:"#4169E1"},{name:"Docker",icon:"SiDocker",color:"#2496ED"},{name:"Git",icon:"SiGit",color:"#F05032"},{name:"AWS",icon:"SiAmazonwebservices",color:"#232F3E"}],E=[{title:"Project Nexus",description:"AI-powered data visualization platform",tech:["React","Python","TensorFlow"],image:"https://via.placeholder.com/400x300",link:"#"},{title:"Cloud Analytics",description:"Real-time cloud infrastructure monitoring",tech:["AWS","Node.js","GraphQL"],image:"https://via.placeholder.com/400x300",link:"#"},{title:"DevOps Pipeline",description:"Automated CI/CD workflow system",tech:["Docker","Jenkins","Kubernetes"],image:"https://via.placeholder.com/400x300",link:"#"},{title:"Smart Portfolio",description:"Dynamic investment tracking system",tech:["React","TypeScript","Firebase"],image:"https://via.placeholder.com/400x300",link:"#"},{title:"Data Forge",description:"Big data processing engine",tech:["Python","Spark","MongoDB"],image:"https://via.placeholder.com/400x300",link:"#"},{title:"Neural Net Lab",description:"Machine learning experiment platform",tech:["PyTorch","FastAPI","Redis"],image:"https://via.placeholder.com/400x300",link:"#"}];function B(){return console.log("Available icons:",Object.keys(N)),console.log("Technologies:",w),(0,i.jsx)(r.E.div,{className:"mt-16 relative w-full max-w-3xl mx-auto h-[300px]",style:{perspective:"2000px"},children:(0,i.jsx)(r.E.div,{style:{rotateX:20,transformStyle:"preserve-3d"},className:"relative w-full h-full",children:(0,i.jsx)(r.E.div,{style:{position:"absolute",width:"100%",height:"100%",transformStyle:"preserve-3d"},animate:{rotateY:360},transition:{duration:20,repeat:1/0,ease:"linear"},children:w.map((e,t)=>{let a;try{if(!(a=N[e.icon]))return console.error("Icon not found: ".concat(e.icon)),null}catch(t){return console.error("Error loading icon ".concat(e.icon,":"),t),null}let s=t/w.length*Math.PI*2;return(0,i.jsxs)(r.E.div,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%) rotateY(".concat(180*s/Math.PI,"deg) translateZ(").concat(200,"px)")},className:"flex flex-col items-center gap-2",children:[(0,i.jsx)(a,{className:"w-8 h-8 opacity-50",style:{color:A.colors.text.secondary}}),(0,i.jsx)("span",{className:"text-sm",style:{color:A.colors.text.secondary},children:e.name})]},e.name)})})})})}var D=a(5182),k=a.n(D);function S(){return(0,i.jsx)("section",{id:"about",className:"min-h-screen relative flex flex-col justify-center py-24",children:(0,i.jsx)("div",{className:"max-w-6xl mx-auto px-4 md:px-8",children:(0,i.jsxs)(r.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"space-y-8",children:[(0,i.jsxs)("div",{className:"space-y-4 py-6 text-left lg:ml-[150px]",children:[(0,i.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold",children:["Hi, I'm"," ",(0,i.jsx)("span",{className:"bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] bg-clip-text text-transparent",children:"Ahmed Ballal"})]}),(0,i.jsxs)("div",{className:"text-lg md:text-xl text-zinc-400 space-y-4",children:[(0,i.jsxs)(r.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:["I'm a(n)"," ",(0,i.jsxs)("span",{className:"text-white font-semibold relative",children:[(0,i.jsx)(k(),{text:["Full Stack Developer","Open Source Contributor","Tech Enthusiast","Aspiring Software Architect"],speed:100,eraseSpeed:50,typingDelay:500,eraseDelay:3e3,cursorRenderer:e=>(0,i.jsx)("span",{children:e}),displayTextRenderer:e=>(0,i.jsx)("span",{children:e})}),(0,i.jsx)(r.E.span,{className:"absolute -bottom-1 left-0 w-full h-[2px] bg-[#00D2BE]",initial:{scaleX:0},animate:{scaleX:1},transition:{delay:.5,duration:.5}})]})," ","with a passion for building"," ",(0,i.jsx)("span",{className:"text-[#00D2BE] font-medium",children:"innovative"})," web applications."]}),(0,i.jsxs)(r.E.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.4},className:"leading-relaxed",children:["I specialize in crafting"," ",(0,i.jsxs)("span",{className:"relative inline-block group",children:[(0,i.jsx)("span",{className:"absolute -inset-1 bg-gradient-to-r from-[#00D2BE]/20 to-[#27F4D2]/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"}),(0,i.jsx)("span",{className:"relative text-white",children:"seamless experiences"})]})," ","using modern technologies and best practices."]}),(0,i.jsxs)(r.E.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.6},children:["Currently focused on"," ",(0,i.jsx)("span",{className:"font-mono text-[#27F4D2] bg-[#0B1221] px-2 py-1 rounded",children:"React"})," ","and"," ",(0,i.jsx)("span",{className:"font-mono text-[#27F4D2] bg-[#0B1221] px-2 py-1 rounded",children:"TypeScript"})," ","development. In my free time, I enjoy"," ",(0,i.jsx)("span",{className:"text-[#00D2BE] font-medium",children:"gaming"}),", ",(0,i.jsx)("span",{className:"text-[#00D2BE] font-medium",children:"reading"}),", ",(0,i.jsx)("span",{className:"text-[#00D2BE] font-medium",children:"traveling"})," ","and exploring new technologies."]})]})]}),(0,i.jsxs)("div",{className:"pt-12",children:[(0,i.jsx)(r.E.h3,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},className:"text-2xl lg:ml-[150px] font-semibold mb-8 text-white",children:"Technologies I Work With"}),(0,i.jsx)(B,{})]})]})})})}function C(e){let{project:t,index:a}=e;return(0,i.jsxs)(r.E.div,{variants:{hidden:{opacity:0,y:20},show:{opacity:1,y:0}},className:"group relative bg-darkLight rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300",children:[(0,i.jsxs)("div",{className:"relative h-48 overflow-hidden",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-dark/80 z-10"}),(0,i.jsx)(r.E.img,{src:t.image,alt:t.title,className:"w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"})]}),(0,i.jsxs)("div",{className:"p-6 space-y-4",children:[(0,i.jsx)("h3",{className:"text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300",children:t.title}),(0,i.jsx)("p",{className:"text-zinc-400 text-sm line-clamp-2",children:t.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:t.tech.map((e,t)=>(0,i.jsx)("span",{className:"text-xs px-2 py-1 rounded-full bg-primary/10 text-primary",children:e},t))}),(0,i.jsxs)(r.E.a,{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-sm text-primary hover:text-primaryLight transition-colors duration-300",whileHover:{x:5},children:["View Project",(0,i.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]}),(0,i.jsx)(r.E.div,{className:"absolute inset-0 bg-gradient-to-r from-primary/0 to-primaryLight/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300",initial:!1})]})}function F(){let[e,t]=(0,s.useState)(0),a=Math.ceil(E.length/3),n=E.slice(3*e,(e+1)*3);return(0,i.jsx)("section",{id:"projects",className:"min-h-screen py-24",children:(0,i.jsx)("div",{className:"max-w-6xl mx-auto px-4 md:px-8",children:(0,i.jsxs)(r.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"space-y-12",children:[(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold",children:["Featured"," ",(0,i.jsx)("span",{className:"bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] bg-clip-text text-transparent",children:"Projects"})]}),(0,i.jsx)("p",{className:"text-lg text-zinc-400",children:"A collection of projects that showcase my expertise"})]}),(0,i.jsxs)("div",{className:"relative px-12",children:[(0,i.jsxs)("div",{className:"hidden lg:block",children:[(0,i.jsx)("button",{onClick:()=>{t(e=>(e-1+a)%a)},className:"absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1221]/50 text-[#00D2BE] hover:bg-[#00D2BE]/10 transition-colors",children:(0,i.jsx)(h.YFh,{size:24})}),(0,i.jsx)("button",{onClick:()=>{t(e=>(e+1)%a)},className:"absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1221]/50 text-[#00D2BE] hover:bg-[#00D2BE]/10 transition-colors",children:(0,i.jsx)(h.Tfp,{size:24})})]}),(0,i.jsxs)(r.E.div,{className:"w-full",children:[(0,i.jsx)("div",{className:"hidden lg:grid lg:grid-cols-3 gap-8",children:n.map((e,t)=>(0,i.jsx)(C,{project:e,index:t},e.title))}),(0,i.jsx)("div",{className:"grid lg:hidden grid-cols-1 md:grid-cols-2 gap-6",children:E.map((e,t)=>(0,i.jsx)(C,{project:e,index:t},e.title))})]}),(0,i.jsx)("div",{className:"hidden lg:flex justify-center mt-8 space-x-2",children:Array.from({length:a}).map((a,s)=>(0,i.jsx)("button",{onClick:()=>t(s),className:"w-2 h-2 rounded-full transition-all duration-300 ".concat(e===s?"w-8 bg-[#00D2BE]":"bg-[#00D2BE]/20 hover:bg-[#00D2BE]/40")},s))})]})]})})})}function I(){let{formData:e,formErrors:t,formStatus:a,handleSubmit:l,handleInputChange:o}=function(){let[e,t]=(0,s.useState)({name:"",email:"",message:""}),[a,i]=(0,s.useState)({name:"",email:"",message:""}),[n,r]=(0,s.useState)("idle"),l=()=>{let t={name:"",email:"",message:""};return e.name.trim()||(t.name="Name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email="Invalid email format"):t.email="Email is required",e.message.trim()||(t.message="Message is required"),i(t),!Object.values(t).some(e=>""!==e)};return{formData:e,formErrors:a,formStatus:n,handleSubmit:async e=>{if(e.preventDefault(),l()){r("loading");try{await new Promise(e=>setTimeout(e,1e3)),r("success"),t({name:"",email:"",message:""}),setTimeout(()=>r("idle"),3e3)}catch(e){r("error"),setTimeout(()=>r("idle"),3e3)}}},handleInputChange:e=>{let{name:s,value:n}=e.target;t(e=>({...e,[s]:n})),a[s]&&i(e=>({...e,[s]:""}))}}}();return(0,i.jsxs)(r.E.form,{onSubmit:l,className:"space-y-6",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:[(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsx)("label",{htmlFor:"name",className:"text-sm text-zinc-400",children:"Name"}),(0,i.jsx)(r.E.input,{type:"text",id:"name",name:"name",value:e.name,onChange:o,className:"w-full px-4 py-3 rounded-lg bg-[#0B1221]/50 border \n            ".concat(t.name?"border-red-500":"border-[#00D2BE]/20","\n            text-white placeholder-[#4A5568] focus:outline-none focus:border-[#00D2BE]\n            transition-colors duration-200"),placeholder:"Your name",whileFocus:{scale:1.01}}),(0,i.jsx)(n.M,{children:t.name&&(0,i.jsx)(r.E.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"text-red-500 text-sm",children:t.name})})]}),(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsx)("label",{htmlFor:"email",className:"text-sm text-zinc-400",children:"Email"}),(0,i.jsx)(r.E.input,{type:"email",id:"email",name:"email",value:e.email,onChange:o,className:"w-full px-4 py-3 rounded-lg bg-[#0B1221]/50 border \n            ".concat(t.email?"border-red-500":"border-[#00D2BE]/20","\n            text-white placeholder-[#4A5568] focus:outline-none focus:border-[#00D2BE]\n            transition-colors duration-200"),placeholder:"Your email",whileFocus:{scale:1.01}}),(0,i.jsx)(n.M,{children:t.email&&(0,i.jsx)(r.E.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"text-red-500 text-sm",children:t.email})})]}),(0,i.jsxs)("div",{className:"space-y-2",children:[(0,i.jsx)("label",{htmlFor:"message",className:"text-sm text-zinc-400",children:"Message"}),(0,i.jsx)(r.E.textarea,{id:"message",name:"message",value:e.message,onChange:o,rows:5,className:"w-full px-4 py-3 rounded-lg bg-[#0B1221]/50 border \n            ".concat(t.message?"border-red-500":"border-[#00D2BE]/20","\n            text-white placeholder-[#4A5568] focus:outline-none focus:border-[#00D2BE]\n            transition-colors duration-200 resize-none"),placeholder:"Your message",whileFocus:{scale:1.01}}),(0,i.jsx)(n.M,{children:t.message&&(0,i.jsx)(r.E.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"text-red-500 text-sm",children:t.message})})]}),(0,i.jsx)(r.E.button,{type:"submit",disabled:"loading"===a,className:"w-full py-3 rounded-lg font-medium transition-all duration-200\n          ".concat("loading"===a?"bg-gray-500 cursor-not-allowed":"bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] text-black hover:shadow-lg hover:shadow-[#00D2BE]/20"),whileHover:{scale:"loading"===a?1:1.02},whileTap:{scale:"loading"===a?1:.98},children:"loading"===a?"Sending...":"Send Message"}),(0,i.jsxs)(n.M,{mode:"wait",children:["success"===a&&(0,i.jsx)(r.E.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"text-center text-green-400 mt-4",children:"Message sent successfully!"}),"error"===a&&(0,i.jsx)(r.E.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"text-center text-red-400 mt-4",children:"Failed to send message. Please try again."})]})]})}function z(){let e=[{icon:(0,i.jsx)(h.uOf,{size:22}),href:"https://github.com/aballal-source"},{icon:(0,i.jsx)(h.qOw,{size:22}),href:"https://linkedin.com/in/aballal"},{icon:(0,i.jsx)(u.cy8,{size:22}),href:"https://x.com/9ballal"},{icon:(0,i.jsx)(h.JID,{size:22}),href:"https://instagram.com/ahmed_ballal"}];return(0,i.jsx)("div",{className:"flex justify-center gap-6 p-4",children:e.map((e,t)=>(0,i.jsx)(r.E.a,{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-text-secondary hover:text-primary transition-colors duration-300",whileHover:{y:-2},children:e.icon},t))})}function L(){return(0,i.jsx)("section",{id:"contact",className:"min-h-screen py-24",children:(0,i.jsx)("div",{className:"max-w-4xl mx-auto px-4 md:px-8",children:(0,i.jsxs)(r.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},className:"space-y-12",children:[(0,i.jsxs)("div",{className:"text-center space-y-4",children:[(0,i.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold",children:["Let's"," ",(0,i.jsx)("span",{className:"bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] bg-clip-text text-transparent",children:"Connect"})]}),(0,i.jsx)("p",{className:"text-lg text-zinc-400 max-w-2xl mx-auto",children:"Have a project in mind or just want to chat? Feel free to reach out!"})]}),(0,i.jsxs)("div",{className:"grid md:grid-cols-5 gap-12",children:[(0,i.jsx)("div",{className:"md:col-span-3",children:(0,i.jsx)(I,{})}),(0,i.jsx)("div",{className:"md:col-span-2 space-y-8",children:(0,i.jsx)(z,{})})]})]})})})}function P(){let e=(0,s.useRef)(null),{isLoading:t}=(0,l.R)(),{activeSection:a,isScrolled:c}=function(){let[e,t]=(0,s.useState)("about"),[a,i]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{let e=window.scrollY,a=window.innerHeight;i(e>.3*a);let s="about";for(let e of["about","projects","contact"]){let t=document.getElementById(e);t&&t.getBoundingClientRect().top<=.4*a&&(s=e)}t(s);let n=document.getElementById("projects");if(n){let e=n.getBoundingClientRect();r(e.top<=300&&e.bottom>=.3*a)}};return e(),window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),{activeSection:e,isScrolled:a,projectsHeaderVisible:n}}();!function(e){let[t,a]=(0,s.useState)({x:0,y:0});(0,s.useEffect)(()=>{let t=t=>{let i=e.current;if(i){let e=i.getBoundingClientRect();a({x:t.clientX-e.left,y:t.clientY-e.top})}};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[e])}(e);let d=e=>{let t=document.getElementById(e);null==t||t.scrollIntoView({behavior:"smooth"})};return(0,i.jsx)(n.M,{mode:"wait",children:t?(0,i.jsx)(o.LoadingScreen,{}):(0,i.jsxs)("main",{className:"relative min-h-screen",children:[(0,i.jsx)(m,{}),(0,i.jsx)(j,{isScrolled:c}),(0,i.jsx)(b,{activeSection:a,onSectionChange:d,isScrolled:c,isLandingVisible:!c}),(0,i.jsx)(r.E.div,{className:"lg:hidden",children:(0,i.jsx)(v,{activeSection:a,onSectionChange:d,isLandingVisible:!c})}),(0,i.jsxs)("div",{className:"relative z-10",children:[(0,i.jsx)(S,{}),(0,i.jsx)(F,{}),(0,i.jsx)(L,{})]})]})})}},9114:function(e,t,a){"use strict";a.d(t,{LoadingScreen:function(){return r}});var i=a(7437),s=a(521),n=a(9079);function r(){let{isLoading:e,loadingProgress:t}=(0,n.R)();return e?(0,i.jsx)(s.E.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.5,delay:1},className:"fixed inset-0 z-50 flex items-center justify-center bg-[#0B1221]",children:(0,i.jsxs)("div",{className:"relative w-24 h-24",children:[(0,i.jsx)(s.E.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.5},className:"absolute inset-0 border-4 border-[#00D2BE] rounded-full"}),(0,i.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:[0,1,0]},transition:{duration:1.5,repeat:1/0},className:"absolute inset-0 border-t-4 border-[#27F4D2] rounded-full"}),(0,i.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,i.jsxs)("span",{className:"text-[#00D2BE] font-medium",children:[t,"%"]})})]})}):null}},9079:function(e,t,a){"use strict";a.d(t,{R:function(){return s}});var i=a(2265);let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,[a,s]=(0,i.useState)(!0),[n,r]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let a=setTimeout(()=>{let e=0,a=setInterval(()=>{r(e+=1),e>=100&&(clearInterval(a),s(!1))},t);return()=>clearInterval(a)},e);return()=>clearTimeout(a)},[e,t]),{isLoading:a,loadingProgress:n}}}},function(e){e.O(0,[957,522,956,521,912,971,117,744],function(){return e(e.s=1314)}),_N_E=e.O()}]);