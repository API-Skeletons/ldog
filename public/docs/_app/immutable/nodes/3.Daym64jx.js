import{e as k}from"../chunks/index._MQb75DK.js";import{p as y,f as C}from"../chunks/pages.DeDWtYFY.js";import{s as S,b as u,h as j,d as m,c as d,l as _}from"../chunks/scheduler.Eaj42bxH.js";import{S as q,i as M,c as $,a as h,m as b,t as v,b as w,d as P}from"../chunks/index.CMSEJhCx.js";import{C as O,P as z}from"../chunks/PreviousNextPage.CMvgMdJM.js";const B=y.length>0,E=({url:n})=>{const t=C(n.pathname);if(!t)throw k(404,"Could not find the page you are looking for");return{page:t}},I=Object.freeze(Object.defineProperty({__proto__:null,load:E,prerender:B},Symbol.toStringTag,{value:"Module"}));function H(n){var c;let t,i,a,s,r,p;return document.title=t=`
    `+((c=n[0].page)!=null&&c.section?`${n[0].page.section} - `:"")+n[0].page.title+`
  `,a=new O({props:{source:n[0].page.content}}),r=new z({props:{page:n[0].page}}),{c(){i=u(),$(a.$$.fragment),s=u(),$(r.$$.fragment)},l(e){j("svelte-sbhnqj",document.head).forEach(m),i=d(e),h(a.$$.fragment,e),s=d(e),h(r.$$.fragment,e)},m(e,o){_(e,i,o),b(a,e,o),_(e,s,o),b(r,e,o),p=!0},p(e,[o]){var l;(!p||o&1)&&t!==(t=`
    `+((l=e[0].page)!=null&&l.section?`${e[0].page.section} - `:"")+e[0].page.title+`
  `)&&(document.title=t);const f={};o&1&&(f.source=e[0].page.content),a.$set(f);const g={};o&1&&(g.page=e[0].page),r.$set(g)},i(e){p||(v(a.$$.fragment,e),v(r.$$.fragment,e),p=!0)},o(e){w(a.$$.fragment,e),w(r.$$.fragment,e),p=!1},d(e){e&&(m(i),m(s)),P(a,e),P(r,e)}}}function N(n,t,i){let{data:a}=t;return n.$$set=s=>{"data"in s&&i(0,a=s.data)},[a]}class J extends q{constructor(t){super(),M(this,t,N,H,S,{data:0})}}export{J as component,I as universal};
