import{r as u,c as v,a as t,w as i,v as r,b as d,d as p,e as f,o as w,f as m,u as x,s as h,g as k,h as V}from"./index-_MLnkYMd.js";const A={class:"container signin"},S={__name:"SignIn",setup(I){const s=u(""),n=u(""),c=x(),g=()=>{h(k(),s.value,n.value).then(o=>{V().login(o.user),c.push("/")}).catch(o=>{console.log(o.code),alert(o.message)})};return(o,e)=>{const l=f("RouterLink");return w(),v("div",A,[e[4]||(e[4]=t("h1",{class:"title"},"Login to Your Account",-1)),t("p",null,[i(t("input",{type:"text",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=a=>s.value=a)},null,512),[[r,s.value]])]),t("p",null,[i(t("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a)},null,512),[[r,n.value]])]),t("button",{onClick:g},"Submit"),d(l,{to:"/auth/signup"},{default:p(()=>e[2]||(e[2]=[m(" SIGNUP ")])),_:1}),d(l,{to:"/"},{default:p(()=>e[3]||(e[3]=[m(" main ")])),_:1})])}}};export{S as default};
