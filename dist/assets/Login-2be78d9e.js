import{g as u,u as g,r as m,o as h,O as v,w as n,a0 as w,a as s,b as c,a1 as r,a5 as d,f as t}from"./index-4ce2c086.js";const f={class:"container"},b={class:"auth-form"},k=s("i",{class:"cs-left-arrow"},null,-1),x={class:"form-wrapper"},y=s("div",{class:"heading"},[s("h1",null," Let's sign you in. "),s("span",{class:"sub-title"},[t(" Welcome back. "),s("br"),t(" You've been missed! ")])],-1),L={class:"input-wrapper"},G=s("i",{class:"cs-user"},null,-1),V={class:"input-wrapper"},C=s("i",{class:"cs-password"},null,-1),B={class:"register-label"},N=s("div",{class:"google-icon-wrapper"},[s("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})],-1),R=s("p",{class:"btn-text"},[s("b",null,"Sign in with Google")],-1),S=[N,R],U={__name:"Login",setup(T){const o=u({email:"",password:""}),l=g(),_=async()=>{l.dispatch("login",o.value)},p=async()=>{l.dispatch("loginWithGoogle")};return(W,e)=>{const i=m("RouterLink");return h(),v(w,null,{default:n(()=>[s("div",f,[s("div",b,[c(i,{to:"/",class:"go-back"},{default:n(()=>[k]),_:1}),s("div",x,[y,s("div",L,[G,r(s("input",{type:"text",placeholder:"E-mail",name:"username","onUpdate:modelValue":e[0]||(e[0]=a=>o.value.email=a)},null,512),[[d,o.value.email]])]),s("div",V,[C,r(s("input",{type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":e[1]||(e[1]=a=>o.value.password=a)},null,512),[[d,o.value.password]])]),s("span",B,[t(" Don't have an account? "),c(i,{to:{name:"register"}},{default:n(()=>[t(" Register ")]),_:1})]),s("button",{onClick:_},"Sign In"),s("div",{class:"google-btn",onClick:p},S)])])])]),_:1})}}};export{U as default};
