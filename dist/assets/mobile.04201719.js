import{_ as C,d as E,r as b,a as F,t as x,b as S,o as r,c as _,w,v as D,e as s,f as c,g as n,h as B,u as p,F as $,i as I,p as A,k as L,E as N,j as T,n as V,l}from"./index.5b3e9fdc.js";import{S as z,_ as j}from"./stage.b59a79f4.js";const q=a=>(A("data-v-95b1f8ea"),a=a(),L(),a),M={class:"container"},O={class:"welcome"},R=q(()=>s("img",{class:"title-img",src:j},null,-1)),W=l("\u5F00\u59CB\u6E38\u620F"),G={class:"score"},H={class:"stage"},J=["onClick"],K={class:"change-btn-group"},P=l("\u7ED3\u675F\u6E38\u620F"),Q=l("\u6253\u4E71"),U=l("\u7F29\u653E"),X=E({name:"mobile",setup(a){const u=b(!0);let h=document.documentElement.clientWidth;const t=F(new z(5,5,(h-20)/5)),{data:m,score:d}=x(t),v=()=>{u.value=!1,t.gameLoop(!0)},f=i=>{t.click(i)},y=()=>{N.alert(`\u5F53\u524D\u6210\u7EE9\uFF1A${d.value}\u5206`,"\u96EA\u7CD5\u6D88\u6D88\u5927\u4F5C\u6218",{confirmButtonText:"\u786E\u5B9A",callback:i=>{u.value=!0}})},g=()=>{t.reset()},k=()=>{t.scale()};return(i,Y)=>{const o=S("el-button");return r(),_("div",M,[w(s("div",O,[R,c(o,{class:"change-btn",type:"primary",onClick:v},{default:n(()=>[W]),_:1})],512),[[D,u.value]]),s("div",G,B(p(d))+"\u5206",1),s("div",H,[(r(!0),_($,null,I(p(m),e=>(r(),_("div",{key:e.key,onClick:Z=>f(e),class:T(["square",`type${e.type}`,`scale${e.scale}`,{active:e.active}]),style:V({left:`${e.positionLeft}px`,top:`${e.positionTop}px`})},null,14,J))),128))]),s("div",K,[c(o,{type:"primary",onClick:y},{default:n(()=>[P]),_:1}),c(o,{type:"primary",onClick:g},{default:n(()=>[Q]),_:1}),c(o,{type:"primary",onClick:k},{default:n(()=>[U]),_:1})])])}}});var se=C(X,[["__scopeId","data-v-95b1f8ea"]]);export{se as default};
