import{r as n,c as d,a as e,w as u,v as r,F as c,s as m,g,o as v,u as w}from"./index-BB47N3pf.js";const x={__name:"SignIn",setup(f){const o=n(""),s=n(""),p=w(),i=()=>{m(g(),o.value,s.value).then(t=>{console.log("Successfully logged in!"),p.push("/3t-pwa/")}).catch(t=>{console.log(t.code),alert(t.message)})};return(t,l)=>(v(),d(c,null,[l[2]||(l[2]=e("h1",null,"Login to Your Account",-1)),e("p",null,[u(e("input",{type:"text",placeholder:"Email","onUpdate:modelValue":l[0]||(l[0]=a=>o.value=a)},null,512),[[r,o.value]])]),e("p",null,[u(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":l[1]||(l[1]=a=>s.value=a)},null,512),[[r,s.value]])]),e("p",null,[e("button",{onClick:i},"Submit")])],64))}};export{x as default};
