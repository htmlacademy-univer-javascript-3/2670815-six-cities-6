import{j as r}from"./jsx-runtime-C7I7cVpi.js";import{r as k}from"./iframe-DGvzZREh.js";import"./preload-helper-C1FmrZbK.js";const C=["Popular","Price: low to high","Price: high to low","Top rated first"],O=({currentSorting:i,onSortingChange:v})=>{const[c,l]=k.useState(!1),p=()=>{l(!c)},g=e=>{v(e),l(!1)},j=(e,n)=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),g(n))},N=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),p())};return r.jsxs("form",{className:"places__sorting",action:"#",method:"get",children:[r.jsx("span",{className:"places__sorting-caption",children:"Sort by"}),r.jsxs("span",{className:"places__sorting-type",tabIndex:0,onClick:p,onKeyDown:N,children:[i,r.jsx("svg",{className:"places__sorting-arrow",width:"7",height:"4",children:r.jsx("use",{xlinkHref:"#icon-arrow-select"})})]}),r.jsx("ul",{className:`places__options places__options--custom ${c?"places__options--opened":""}`,children:C.map(e=>r.jsx("li",{className:`places__option ${e===i?"places__option--active":""}`,tabIndex:0,onClick:()=>g(e),onKeyDown:n=>j(n,e),children:e},e))})]})};O.__docgenInfo={description:"",methods:[],displayName:"SortingOptions",props:{currentSorting:{required:!0,tsType:{name:"union",raw:"'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first'",elements:[{name:"literal",value:"'Popular'"},{name:"literal",value:"'Price: low to high'"},{name:"literal",value:"'Price: high to low'"},{name:"literal",value:"'Top rated first'"}]},description:""},onSortingChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: SortingOption) => void",signature:{arguments:[{type:{name:"union",raw:"'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first'",elements:[{name:"literal",value:"'Popular'"},{name:"literal",value:"'Price: low to high'"},{name:"literal",value:"'Price: high to low'"},{name:"literal",value:"'Top rated first'"}]},name:"option"}],return:{name:"void"}}},description:""}}};const H={title:"Components/SortingOptions",component:O,parameters:{layout:"padded"},tags:["autodocs"],args:{onSortingChange:()=>{}}},o={args:{currentSorting:"Popular"}},t={args:{currentSorting:"Price: low to high"}},a={args:{currentSorting:"Price: high to low"}},s={args:{currentSorting:"Top rated first"}};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentSorting: 'Popular'
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,w,P;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    currentSorting: 'Price: low to high'
  }
}`,...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var _,S,f;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    currentSorting: 'Price: high to low'
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,y,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    currentSorting: 'Top rated first'
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const K=["Popular","PriceLowToHigh","PriceHighToLow","TopRatedFirst"];export{o as Popular,a as PriceHighToLow,t as PriceLowToHigh,s as TopRatedFirst,K as __namedExportsOrder,H as default};
