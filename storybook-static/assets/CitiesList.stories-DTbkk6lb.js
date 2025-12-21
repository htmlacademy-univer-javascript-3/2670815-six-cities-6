import{j as e}from"./jsx-runtime-C7I7cVpi.js";import"./iframe-DGvzZREh.js";import"./preload-helper-C1FmrZbK.js";const D=({cities:H,currentCity:N,onCityChange:P})=>e.jsx("section",{className:"locations container",children:e.jsx("ul",{className:"locations__list tabs__list",children:H.map(r=>e.jsx("li",{className:"locations__item",children:e.jsx("button",{type:"button",className:`locations__item-link tabs__item ${r===N?"tabs__item--active":""}`,onClick:()=>P(r),children:e.jsx("span",{children:r})})},r))})});D.__docgenInfo={description:"",methods:[],displayName:"CitiesList",props:{cities:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},currentCity:{required:!0,tsType:{name:"string"},description:""},onCityChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(city: string) => void",signature:{arguments:[{type:{name:"string"},name:"city"}],return:{name:"void"}}},description:""}}};const T={title:"Components/CitiesList",component:D,parameters:{layout:"padded"},tags:["autodocs"],args:{cities:["Paris","Cologne","Brussels","Amsterdam","Hamburg","Dusseldorf"],onCityChange:()=>{}}},s={args:{currentCity:"Paris"}},t={args:{currentCity:"Amsterdam"}},a={args:{currentCity:"Cologne"}},n={args:{currentCity:"Brussels"}},o={args:{currentCity:"Hamburg"}},c={args:{currentCity:"Dusseldorf"}};var i,m,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    currentCity: 'Paris'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentCity: 'Amsterdam'
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,C,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    currentCity: 'Cologne'
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,_,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    currentCity: 'Brussels'
  }
}`,...(b=(_=n.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentCity: 'Hamburg'
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,A,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    currentCity: 'Dusseldorf'
  }
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const k=["ParisSelected","AmsterdamSelected","CologneSelected","BrusselsSelected","HamburgSelected","DusseldorfSelected"];export{t as AmsterdamSelected,n as BrusselsSelected,a as CologneSelected,c as DusseldorfSelected,o as HamburgSelected,s as ParisSelected,k as __namedExportsOrder,T as default};
