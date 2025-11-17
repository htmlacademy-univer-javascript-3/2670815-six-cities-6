import{j as m}from"./jsx-runtime-BWGDkCCf.js";import{r as o,g as xe}from"./iframe-D-hs6Jaj.js";import{g as we}from"./utils-BCb4fT2D.js";import{O as M}from"./offers-Bgi407HD.js";import"./preload-helper-C1FmrZbK.js";/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}var _;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_||(_={}));const J="popstate";function qe(e){e===void 0&&(e={});function t(a,r){let{pathname:u,search:i,hash:c}=a.location;return z("",{pathname:u,search:i,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:E(r)}return je(t,n,null,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _e(){return Math.random().toString(36).substr(2,8)}function $(e,t){return{usr:e.state,key:e.key,idx:t}}function z(e,t,n,a){return n===void 0&&(n=null),j({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:n,key:t&&t.key||a||_e()})}function E(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function O(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function je(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:u=!1}=a,i=r.history,c=_.Pop,l=null,s=d();s==null&&(s=0,i.replaceState(j({},i.state,{idx:s}),""));function d(){return(i.state||{idx:null}).idx}function g(){c=_.Pop;let p=d(),h=p==null?null:p-s;s=p,l&&l({action:c,location:f.location,delta:h})}function y(p,h){c=_.Push;let v=z(f.location,p,h);s=d()+1;let w=$(v,s),q=f.createHref(v);try{i.pushState(w,"",q)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;r.location.assign(q)}u&&l&&l({action:c,location:f.location,delta:1})}function x(p,h){c=_.Replace;let v=z(f.location,p,h);s=d();let w=$(v,s),q=f.createHref(v);i.replaceState(w,"",q),u&&l&&l({action:c,location:f.location,delta:0})}function k(p){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:E(p);return b(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let f={get action(){return c},get location(){return e(r,i)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(J,g),l=p,()=>{r.removeEventListener(J,g),l=null}},createHref(p){return t(r,p)},createURL:k,encodeLocation(p){let h=k(p);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:y,replace:x,go(p){return i.go(p)}};return f}var K;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(K||(K={}));function le(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Pe(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?O(e):e;return{pathname:n?n.startsWith("/")?n:Ne(n,t):t,search:Se(a),hash:Re(r)}}function Ne(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function T(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oe(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ce(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=O(e):(r=j({},e),b(!r.pathname||!r.pathname.includes("?"),T("?","pathname","search",r)),b(!r.pathname||!r.pathname.includes("#"),T("#","pathname","hash",r)),b(!r.search||!r.search.includes("#"),T("#","search","hash",r)));let u=e===""||r.pathname==="",i=u?"/":r.pathname,c;if(a||i==null)c=n;else{let g=t.length-1;if(i.startsWith("..")){let y=i.split("/");for(;y[0]==="..";)y.shift(),g-=1;r.pathname=y.join("/")}c=g>=0?t[g]:"/"}let l=Pe(r,c),s=i&&i!=="/"&&i.endsWith("/"),d=(u||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(s||d)&&(l.pathname+="/"),l}const me=e=>e.join("/").replace(/\/\/+/g,"/"),Se=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Re=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,de=["post","put","patch","delete"];new Set(de);const Ce=["get",...de];new Set(Ce);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(this,arguments)}const pe=o.createContext(null),P=o.createContext(null),W=o.createContext(null),L=o.createContext({outlet:null,matches:[],isDataRoute:!1});function Ee(e,t){let{relative:n}=t===void 0?{}:t;I()||b(!1);let{basename:a,navigator:r}=o.useContext(P),{hash:u,pathname:i,search:c}=he(e,{relative:n}),l=i;return a!=="/"&&(l=i==="/"?a:me([a,i])),r.createHref({pathname:l,search:c,hash:u})}function I(){return o.useContext(W)!=null}function V(){return I()||b(!1),o.useContext(W).location}function ge(e){o.useContext(P).static||o.useLayoutEffect(e)}function Oe(){let{isDataRoute:e}=o.useContext(L);return e?ze():Le()}function Le(){I()||b(!1);let e=o.useContext(pe),{basename:t,navigator:n}=o.useContext(P),{matches:a}=o.useContext(L),{pathname:r}=V(),u=JSON.stringify(oe(a).map(l=>l.pathnameBase)),i=o.useRef(!1);return ge(()=>{i.current=!0}),o.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){n.go(l);return}let d=ce(l,JSON.parse(u),r,s.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:me([t,d.pathname])),(s.replace?n.replace:n.push)(d,s.state,s)},[t,n,u,r,e])}function he(e,t){let{relative:n}=t===void 0?{}:t,{matches:a}=o.useContext(L),{pathname:r}=V(),u=JSON.stringify(oe(a).map(i=>i.pathnameBase));return o.useMemo(()=>ce(e,JSON.parse(u),r,n==="path"),[e,u,r,n])}var fe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fe||{}),ve=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ve||{});function Ie(e){let t=o.useContext(pe);return t||b(!1),t}function Ue(e){let t=o.useContext(L);return t||b(!1),t}function Te(e){let t=Ue(),n=t.matches[t.matches.length-1];return n.route.id||b(!1),n.route.id}function ze(){let{router:e}=Ie(fe.UseNavigateStable),t=Te(ve.UseNavigateStable),n=o.useRef(!1);return ge(()=>{n.current=!0}),o.useCallback(function(r,u){u===void 0&&(u={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,F({fromRouteId:t},u)))},[e,t])}function Fe(e){let{basename:t="/",children:n=null,location:a,navigationType:r=_.Pop,navigator:u,static:i=!1}=e;I()&&b(!1);let c=t.replace(/^\/*/,"/"),l=o.useMemo(()=>({basename:c,navigator:u,static:i}),[c,u,i]);typeof a=="string"&&(a=O(a));let{pathname:s="/",search:d="",hash:g="",state:y=null,key:x="default"}=a,k=o.useMemo(()=>{let f=le(s,c);return f==null?null:{location:{pathname:f,search:d,hash:g,state:y,key:x},navigationType:r}},[c,s,d,g,y,x,r]);return k==null?null:o.createElement(P.Provider,{value:l},o.createElement(W.Provider,{children:n,value:k}))}new Promise(()=>{});/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}function Be(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,u;for(u=0;u<a.length;u++)r=a[u],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Me(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function We(e,t){return e.button===0&&(!t||t==="_self")&&!Me(e)}const Ve=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Je="startTransition",A=xe[Je];function $e(e){let{basename:t,children:n,future:a,window:r}=e,u=o.useRef();u.current==null&&(u.current=qe({window:r,v5Compat:!0}));let i=u.current,[c,l]=o.useState({action:i.action,location:i.location}),{v7_startTransition:s}=a||{},d=o.useCallback(g=>{s&&A?A(()=>l(g)):l(g)},[l,s]);return o.useLayoutEffect(()=>i.listen(d),[i,d]),o.createElement(Fe,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:i})}const Ke=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ae=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=o.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:u,replace:i,state:c,target:l,to:s,preventScrollReset:d}=t,g=Be(t,Ve),{basename:y}=o.useContext(P),x,k=!1;if(typeof s=="string"&&Ae.test(s)&&(x=s,Ke))try{let v=new URL(window.location.href),w=s.startsWith("//")?new URL(v.protocol+s):new URL(s),q=le(w.pathname,y);w.origin===v.origin&&q!=null?s=q+w.search+w.hash:k=!0}catch{}let f=Ee(s,{relative:r}),p=De(s,{replace:i,state:c,target:l,preventScrollReset:d,relative:r});function h(v){a&&a(v),v.defaultPrevented||p(v)}return o.createElement("a",B({},g,{href:x||f,onClick:k||u?a:h,ref:n,target:l}))});var H;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(H||(H={}));var G;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(G||(G={}));function De(e,t){let{target:n,replace:a,state:r,preventScrollReset:u,relative:i}=t===void 0?{}:t,c=Oe(),l=V(),s=he(e,{relative:i});return o.useCallback(d=>{if(We(d,n)){d.preventDefault();let g=a!==void 0?a:E(l)===E(s);c(e,{replace:g,state:r,preventScrollReset:u,relative:i})}},[l,c,s,a,r,n,e,u,i])}const ye=({offer:e,title:t,type:n,price:a,rating:r,isPremium:u=!1,isBookmarked:i=!1,imageSrc:c,imageWidth:l=260,imageHeight:s=200})=>{const d=(e==null?void 0:e.title)??t??"",g=(e==null?void 0:e.type)??n??"",y=(e==null?void 0:e.price)??a??0,x=(e==null?void 0:e.rating)??r??0,k=(e==null?void 0:e.isPremium)??u,f=(e==null?void 0:e.isFavorite)??i,p=(e==null?void 0:e.previewImage)??c??"",h=e!=null&&e.id?`/offer/${e.id}`:"#";return m.jsxs("article",{className:"cities__card place-card",children:[k&&m.jsx("div",{className:"place-card__mark",children:m.jsx("span",{children:"Premium"})}),m.jsx("div",{className:"cities__image-wrapper place-card__image-wrapper",children:m.jsx(D,{to:h,children:m.jsx("img",{className:"place-card__image",src:p,width:l,height:s,alt:d})})}),m.jsxs("div",{className:"place-card__info",children:[m.jsxs("div",{className:"place-card__price-wrapper",children:[m.jsxs("div",{className:"place-card__price",children:[m.jsxs("b",{className:"place-card__price-value",children:["€",y]}),m.jsx("span",{className:"place-card__price-text",children:"/ night"})]}),m.jsxs("button",{className:`place-card__bookmark-button button${f?" place-card__bookmark-button--active":""}`,type:"button",children:[m.jsx("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:m.jsx("use",{xlinkHref:"#icon-bookmark"})}),m.jsx("span",{className:"visually-hidden",children:f?"In bookmarks":"To bookmarks"})]})]}),m.jsx("div",{className:"place-card__rating rating",children:m.jsxs("div",{className:"place-card__stars rating__stars",children:[m.jsx("span",{style:{width:we(x)}}),m.jsx("span",{className:"visually-hidden",children:"Rating"})]})}),m.jsx("h2",{className:"place-card__name",children:m.jsx(D,{to:h,children:d})}),m.jsx("p",{className:"place-card__type",children:g})]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"PlaceCard",props:{offer:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"city",value:{name:"signature",type:"object",raw:`{
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"location",value:{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
  zoom: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}},{key:"location",value:{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
  zoom: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}},{key:"isFavorite",value:{name:"boolean",required:!0}},{key:"isPremium",value:{name:"boolean",required:!0}},{key:"rating",value:{name:"number",required:!0}},{key:"previewImage",value:{name:"string",required:!0}}]}},description:""},title:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},price:{required:!1,tsType:{name:"number"},description:""},rating:{required:!1,tsType:{name:"number"},description:""},isPremium:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isBookmarked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:""},imageWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"260",computed:!1}},imageHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};const be=({offers:e,className:t="cities__places-list places__list tabs__content",imageWidth:n=260,imageHeight:a=200,onActiveOfferChange:r})=>{const[u,i]=o.useState(null),c=o.useCallback(s=>{i(s),r==null||r(s)},[r]),l=o.useCallback(()=>{i(null),r==null||r(null)},[r]);return m.jsx("div",{className:t,"data-active-offer-id":u??"",children:e.map(s=>m.jsx("div",{onMouseEnter:()=>c(s.id),onMouseLeave:l,children:m.jsx(ye,{offer:s,imageWidth:n,imageHeight:a})},s.id))})};be.__docgenInfo={description:"",methods:[],displayName:"OffersList",props:{offers:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"city",value:{name:"signature",type:"object",raw:`{
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"location",value:{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
  zoom: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}},{key:"location",value:{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
  zoom: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}},{key:"isFavorite",value:{name:"boolean",required:!0}},{key:"isPremium",value:{name:"boolean",required:!0}},{key:"rating",value:{name:"number",required:!0}},{key:"previewImage",value:{name:"string",required:!0}}]}}],raw:"Offer[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cities__places-list places__list tabs__content'",computed:!1}},imageWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"260",computed:!1}},imageHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},onActiveOfferChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeOfferId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"activeOfferId"}],return:{name:"void"}}},description:""}}};const ke=({offers:e})=>m.jsx(be,{offers:e,className:"near-places__list places__list",imageWidth:260,imageHeight:200});ke.__docgenInfo={description:"",methods:[],displayName:"NearbyOffers",props:{offers:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"city",value:{name:"signature",type:"object",raw:`{
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"location",value:{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
  zoom: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}},{key:"location",value:{name:"signature",type:"object",raw:`{
  latitude: number;
  longitude: number;
  zoom: number;
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}},{key:"isFavorite",value:{name:"boolean",required:!0}},{key:"isPremium",value:{name:"boolean",required:!0}},{key:"rating",value:{name:"number",required:!0}},{key:"previewImage",value:{name:"string",required:!0}}]}}],raw:"Offer[]"},description:""}}};const Ze={title:"Components/NearbyOffers",component:ke,parameters:{layout:"padded"},tags:["autodocs"],decorators:[e=>m.jsx($e,{children:m.jsx(e,{})})]},N={args:{offers:M.slice(0,3)}},S={args:{offers:[M[0]]}},R={args:{offers:M}},C={args:{offers:[]}};var X,Q,Y;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    offers: OFFERS.slice(0, 3)
  }
}`,...(Y=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    offers: [OFFERS[0]]
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,ae;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    offers: OFFERS
  }
}`,...(ae=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ie,se,ue;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    offers: []
  }
}`,...(ue=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};const et=["Default","SingleOffer","AllOffers","Empty"];export{R as AllOffers,N as Default,C as Empty,S as SingleOffer,et as __namedExportsOrder,Ze as default};
