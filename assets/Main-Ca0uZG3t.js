import{_,r as c,i as v,j as m,c as p,a as e,b as o,d as n,k as f,l as k,t as x,e as l,o as i,f as N}from"./index-Bh_XxzHd.js";const S={class:"main"},A={class:"nav"},B={class:"content"},C={__name:"Main",setup(g){const s=c("default text"),r=v(()=>N().isLogin);return m(()=>{}),(I,t)=>{const a=l("RouterLink"),u=l("router-view");return i(),p("div",S,[e("nav",A,[o(a,{class:"nav_item",activeClass:"nav_item--active",to:"/dashboard"},{default:n(()=>t[1]||(t[1]=[e("p",null,"DASHBOARD",-1)])),_:1}),o(a,{class:"nav_item",activeClass:"nav_item--active",to:"/tasks"},{default:n(()=>t[2]||(t[2]=[e("p",null,"TASKS",-1)])),_:1}),r.value?k("",!0):(i(),f(a,{key:0,class:"nav_item",to:"/auth/signin"},{default:n(()=>t[3]||(t[3]=[e("p",null,"SIGNIN",-1)])),_:1}))]),e("div",B,[e("h1",null,"MAIN == "+x(s.value),1),o(u,{model:s.value,"onUpdate:model":t[0]||(t[0]=d=>s.value=d)},null,8,["model"])])])}}},M=_(C,[["__scopeId","data-v-516d8883"]]);export{M as default};
