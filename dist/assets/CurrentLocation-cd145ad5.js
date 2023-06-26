import{f as X,r as G,a as K}from"./utils-24d8e48a.js";import{d as Z,g as u,A as q,h as H,i as J,o as n,c as l,a as t,b as Q,w as W,j as Y,C as ee,F as S,t as d,k as te,D as oe,p as ae,e as se,_ as ne}from"./index-cfd983c4.js";const _=f=>(ae("data-v-c50458f6"),f=f(),se(),f),le={class:"container"},re=_(()=>t("div",{class:"heading"},[t("h1",null,"Detect Current Location"),t("span",{class:"sub-title"}," Please enable location detection on your device. ")],-1)),ce={class:"datepicker-container"},ie=_(()=>t("label",{for:"datepicker"},"Select Date:",-1)),ue=["value"],de={class:"table-wrapper"},_e=_(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Date"),t("th",null,"Dataset"),t("th",null,"Planet")])],-1)),fe={key:0,class:"zoom-buttons"},pe=_(()=>t("i",{class:"cs-zoom-in"},null,-1)),me=[pe],ve=_(()=>t("i",{class:"cs-zoom-out"},null,-1)),he=[ve],ge=["src"],ye={key:2,class:"loader"},ke={key:0,class:"error"},De={key:1},we=Z({__name:"CurrentLocation",setup(f){const c=u(null),s=u(null),y=u({}),p=u(!1),k=u(null);let r=u(null);const E=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{y.value=e;const o=X(new Date,700);r.value=o,P(y.value,o)},e=>{console.error("Error getting user location:",e)}):console.error("Geolocation is not supported by this browser.")},P=async(e,o)=>{try{c.value=null,s.value=null;const a=await K.get(`https://api.nasa.gov/planetary/earth/assets?lon=${e.coords.latitude}&lat=${e.coords.longitude}&dim=0.300&date=${o}&api_key=${window.nasa_api_key}`);s.value=a.data}catch(a){c.value=a.message,console.log(c.value),s.value=null}finally{if(c.value!=null)return;setTimeout(()=>{$.observe(k.value)},100)}},V={root:null,rootMargin:"0px",threshold:.1},$=new IntersectionObserver(e=>{e.forEach(o=>{if(o.isIntersecting){p.value=!1;const a=new Image;a.src=s.value.url,a.onload=()=>{console.log("loaded"),p.value=!0},$.unobserve(o.target)}})},V),D=q({transform:"scale(1) translate(0, 0)"});let w=!1,C=0,b=0,m=0,v=0,i=1;const x=e=>e instanceof MouseEvent?e.clientX:e.touches.length>0?e.touches[0].clientX:0,I=e=>e instanceof MouseEvent?e.clientY:e.touches.length>0?e.touches[0].clientY:0,z=e=>{w=!0,C=x(e),b=I(e)},B=e=>{if(w){const o=x(e)-C,a=I(e)-b;m+=o,v+=a,C=x(e),b=I(e),j()}},R=()=>{w=!1},L=(e,o=!0)=>{const a=e.shiftKey?-.3:.3,h=o?i+a:i-a;if(h>=.5&&h<=2){const g=k.value.getBoundingClientRect(),N=g.width/2,O=g.height/2,F=e.clientX-g.left,T=e.clientY-g.top,M=h/i,U=(1-M)*(F-N),A=(1-M)*(T-O);m+=U,v+=A,i=h,D.transform=`scale(${i}) translate(${m}px, ${v}px)`}},j=()=>{D.transform=`scale(${i}) translate(${m}px, ${v}px)`};return H(r,e=>{const o=X(e);r.value=o,P(y.value,o)}),J(()=>{E()}),(e,o)=>(n(),l("div",le,[re,t("div",ce,[ie,Q(Y(G),{format:Y(X),modelValue:Y(r),"onUpdate:modelValue":o[0]||(o[0]=a=>ee(r)?r.value=a:r=a),"max-date":new Date},{"dp-input":W(({value:a})=>[t("input",{type:"text",value:a},null,8,ue)]),_:1},8,["format","modelValue","max-date"])]),s.value?(n(),l(S,{key:0},[t("div",de,[t("table",null,[_e,t("tbody",null,[t("tr",null,[t("td",null,d(s.value.id),1),t("td",null,d(s.value.date),1),t("td",null,d(s.value.resource.dataset),1),t("td",null,d(s.value.resource.planet),1)])])])]),t("div",{ref_key:"imageContainer",ref:k,class:"image-container",onMousedown:z,onMousemove:B,onMouseup:R},[p.value?(n(),l("div",fe,[t("a",{href:"javascript:void(0);",onClick:o[1]||(o[1]=a=>L(a,!0))},me),t("a",{href:"javascript:void(0);",onClick:o[2]||(o[2]=a=>L(a,!1))},he)])):te("",!0),p.value?(n(),l("img",{key:1,src:s.value.url,style:oe(D)},null,12,ge)):(n(),l("div",ye,"Loading Image..."))],544)],64)):(n(),l(S,{key:1},[c.value?(n(),l("span",ke,d(c.value),1)):(n(),l("span",De," Loading... "))],64))]))}});const xe=ne(we,[["__scopeId","data-v-c50458f6"]]);export{xe as default};
