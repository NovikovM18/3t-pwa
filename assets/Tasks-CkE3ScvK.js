import{n as o,c as n,a as s,t as r,w as d,v as i,o as u}from"./index-_MLnkYMd.js";const p={class:"container tasks"},v={__name:"Tasks",props:{model:{required:!1,type:String},modelModifiers:{}},emits:["update:model"],setup(a){const t=o(a,"model");return(m,e)=>(u(),n("div",p,[e[1]||(e[1]=s("h1",null,"tasks",-1)),s("p",null,r(t.value),1),d(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l)},null,512),[[i,t.value]])]))}};export{v as default};
