import{d as v,g as m,u as h,r as g,o as w,c as f,a as e,b as r,w as c,a1 as n,a5 as d,f as p,p as x,e as y,_ as V}from"./index-cfd983c4.js";const o=l=>(x("data-v-8a029e55"),l=l(),y(),l),k={class:"container"},R={class:"auth-form"},b=o(()=>e("i",{class:"cs-left-arrow"},null,-1)),C={class:"form-wrapper"},I=o(()=>e("div",{class:"heading"},[e("h1",null," Hi there! "),e("span",{class:"sub-title"}," Welcome to Cosmo Nav. ")],-1)),N={class:"input-wrapper"},S=o(()=>e("i",{class:"cs-user"},null,-1)),U={class:"input-wrapper"},A=o(()=>e("i",{class:"cs-password"},null,-1)),B={class:"input-wrapper"},L=o(()=>e("i",{class:"cs-location"},null,-1)),E={class:"input-wrapper"},T=o(()=>e("i",{class:"cs-calendar"},null,-1)),D={class:"register-label"},H=v({__name:"Register",setup(l){const s=m({email:"",password:"",age:"",address:""}),u=h(),_=async()=>{u.dispatch("register",s.value)};return(M,t)=>{const i=g("RouterLink");return w(),f("div",k,[e("div",R,[r(i,{to:"/",class:"go-back"},{default:c(()=>[b]),_:1}),e("div",C,[I,e("div",N,[S,n(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=a=>s.value.email=a),placeholder:"Email"},null,512),[[d,s.value.email]])]),e("div",U,[A,n(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=a=>s.value.password=a),placeholder:"Password"},null,512),[[d,s.value.password]])]),e("div",B,[L,n(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>s.value.address=a),placeholder:"Address"},null,512),[[d,s.value.address]])]),e("div",E,[T,n(e("input",{type:"input","onUpdate:modelValue":t[3]||(t[3]=a=>s.value.age=a),placeholder:"Age"},null,512),[[d,s.value.age]])]),e("span",D,[p(" Already have an account? "),r(i,{to:{name:"login"}},{default:c(()=>[p(" Login ")]),_:1})]),e("button",{onClick:_},"Register")])])])}}});const W=V(H,[["__scopeId","data-v-8a029e55"]]);export{W as default};
