import{r as g,u as h,a3 as m,o as v,L as w,h as i,Z as b,b as s,g as c,$ as d,a4 as u,e as a,a5 as f,a6 as k,a7 as x}from"./index-bd023971.js";const y={class:"container"},L={class:"auth-form"},G=s("i",{class:"cs-left-arrow"},null,-1),V={class:"form-wrapper"},C=s("div",{class:"heading"},[s("h1",null," Let's sign you in. "),s("span",{class:"sub-title"},[a(" Welcome back. "),s("br"),a(" You've been missed! ")])],-1),B={class:"input-wrapper"},N=s("i",{class:"cs-user"},null,-1),P={class:"input-wrapper"},R=s("i",{class:"cs-password"},null,-1),S={class:"register-label"},T=s("div",{class:"google-icon-wrapper"},[s("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})],-1),W=s("p",{class:"btn-text"},[s("b",null,"Sign in with Google")],-1),A=[T,W],I={__name:"Login",setup(D){const e=g({email:"",password:""}),l=h(),_=async()=>{l.dispatch("login",e.value)},p=async()=>{const r=f();try{const o=new k,t=(await x(r,o)).user;l.dispatch("login",t)}catch(o){console.error("Error signing in with Google:",o)}};return(r,o)=>{const n=m("RouterLink");return v(),w(b,null,{default:i(()=>[s("div",y,[s("div",L,[c(n,{to:"/",class:"go-back"},{default:i(()=>[G]),_:1}),s("div",V,[C,s("div",B,[N,d(s("input",{type:"text",placeholder:"E-mail",name:"username","onUpdate:modelValue":o[0]||(o[0]=t=>e.value.email=t)},null,512),[[u,e.value.email]])]),s("div",P,[R,d(s("input",{type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":o[1]||(o[1]=t=>e.value.password=t)},null,512),[[u,e.value.password]])]),s("span",S,[a(" Don't have an account? "),c(n,{to:{name:"register"}},{default:i(()=>[a(" Register ")]),_:1})]),s("button",{onClick:_},"Sign In"),s("div",{class:"google-btn",onClick:p},A)])])])]),_:1})}}};export{I as default};
