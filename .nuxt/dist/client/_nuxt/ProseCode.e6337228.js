import{d as y,r as l,aj as k,ak as w,x,b as a,c as p,e as m,g as v,w as S,X as _,J as f,T as $,n as C,a8 as b,p as I,i as P,k as h,t as z,f as N,Z as T}from"./entry.19040e7f.js";const V=e=>(I("data-v-4a003820"),e=e(),P(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=l(),{copy:t}=k();w(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=x(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(u=>{console.warn("Couldn't copy to clipboard!",u)})};return(B,u)=>{const r=b;return a(),p("button",{ref_key:"copyButtonRef",ref:s,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[v($,{name:"fade"},{default:S(()=>{var d,i;return[o.value==="copied"?(a(),_(r,{key:0,name:(d=f(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),_(r,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-4a003820"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(s,t)=>{const c=j;return a(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),p("span",D,z(e.filename),1)):N("",!0),T(s.$slots,"default",{},void 0,!0),v(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const O=h(E,[["__scopeId","data-v-c164ce0a"]]);export{O as default};
