import{j as r}from"./jsx-runtime-C7I7cVpi.js";import{u as G,a as J,b as K,s as Q,A as X,t as Y,L as w,B as Z}from"./selectors-D5ckLfbL.js";import{r as o}from"./iframe-DGvzZREh.js";import{g as C}from"./utils-BCb4fT2D.js";import"./index-PTUro9fC.js";import"./preload-helper-C1FmrZbK.js";const E=({offer:e,title:d,type:c,price:p,rating:a,isPremium:g=!1,isBookmarked:t=!1,imageSrc:y,imageWidth:b=260,imageHeight:n=200})=>{const k=G(),q=J(),_=K(Q),h=(e==null?void 0:e.title)??d??"",L=(e==null?void 0:e.type)??c??"",H=(e==null?void 0:e.price)??p??0,R=(e==null?void 0:e.rating)??a??0,W=(e==null?void 0:e.isPremium)??g,i=(e==null?void 0:e.isFavorite)??t,M=(e==null?void 0:e.previewImage)??y??"",j=e!=null&&e.id?`/offer/${e.id}`:"#",D=o.useCallback(()=>{if(_!==X.Auth){q("/login");return}if(e!=null&&e.id){const $=i?0:1;k(Y({offerId:e.id,status:$}))}},[_,q,e==null?void 0:e.id,i,k]);return r.jsxs("article",{className:"cities__card place-card",children:[W&&r.jsx("div",{className:"place-card__mark",children:r.jsx("span",{children:"Premium"})}),r.jsx("div",{className:"cities__image-wrapper place-card__image-wrapper",children:r.jsx(w,{to:j,children:r.jsx("img",{className:"place-card__image",src:M,width:b,height:n,alt:h})})}),r.jsxs("div",{className:"place-card__info",children:[r.jsxs("div",{className:"place-card__price-wrapper",children:[r.jsxs("div",{className:"place-card__price",children:[r.jsxs("b",{className:"place-card__price-value",children:["€",H]}),r.jsx("span",{className:"place-card__price-text",children:"/ night"})]}),r.jsxs("button",{className:`place-card__bookmark-button button${i?" place-card__bookmark-button--active":""}`,type:"button",onClick:D,children:[r.jsx("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:r.jsx("use",{xlinkHref:"#icon-bookmark"})}),r.jsx("span",{className:"visually-hidden",children:i?"In bookmarks":"To bookmarks"})]})]}),r.jsx("div",{className:"place-card__rating rating",children:r.jsxs("div",{className:"place-card__stars rating__stars",children:[r.jsx("span",{style:{width:C(R)}}),r.jsx("span",{className:"visually-hidden",children:"Rating"})]})}),r.jsx("h2",{className:"place-card__name",children:r.jsx(w,{to:j,children:h})}),r.jsx("p",{className:"place-card__type",children:L})]})]})};E.__docgenInfo={description:"",methods:[],displayName:"PlaceCard",props:{offer:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
  images?: string[];
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  maxAdults?: number;
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
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}},{key:"isFavorite",value:{name:"boolean",required:!0}},{key:"isPremium",value:{name:"boolean",required:!0}},{key:"rating",value:{name:"number",required:!0}},{key:"previewImage",value:{name:"string",required:!0}},{key:"images",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"bedrooms",value:{name:"number",required:!1}},{key:"goods",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"host",value:{name:"signature",type:"object",raw:`{
  name: string;
  avatarUrl: string;
  isPro: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatarUrl",value:{name:"string",required:!0}},{key:"isPro",value:{name:"boolean",required:!0}}]},required:!1}},{key:"maxAdults",value:{name:"number",required:!1}}]}},description:""},title:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},price:{required:!1,tsType:{name:"number"},description:""},rating:{required:!1,tsType:{name:"number"},description:""},isPremium:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isBookmarked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:""},imageWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"260",computed:!1}},imageHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};const V=({offers:e,className:d="cities__places-list places__list tabs__content",imageWidth:c=260,imageHeight:p=200,onActiveOfferChange:a})=>{const[g,t]=o.useState(null),y=o.useCallback(n=>{t(n),a==null||a(n)},[a]),b=o.useCallback(()=>{t(null),a==null||a(null)},[a]);return r.jsx("div",{className:d,"data-active-offer-id":g??"",children:e.map(n=>r.jsx("div",{onMouseEnter:()=>y(n.id),onMouseLeave:b,children:r.jsx(E,{offer:n,imageWidth:c,imageHeight:p})},n.id))})};V.__docgenInfo={description:"",methods:[],displayName:"OffersList",props:{offers:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  images?: string[];
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  maxAdults?: number;
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
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}},{key:"isFavorite",value:{name:"boolean",required:!0}},{key:"isPremium",value:{name:"boolean",required:!0}},{key:"rating",value:{name:"number",required:!0}},{key:"previewImage",value:{name:"string",required:!0}},{key:"images",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"bedrooms",value:{name:"number",required:!1}},{key:"goods",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"host",value:{name:"signature",type:"object",raw:`{
  name: string;
  avatarUrl: string;
  isPro: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatarUrl",value:{name:"string",required:!0}},{key:"isPro",value:{name:"boolean",required:!0}}]},required:!1}},{key:"maxAdults",value:{name:"number",required:!1}}]}}],raw:"Offer[]"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cities__places-list places__list tabs__content'",computed:!1}},imageWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"260",computed:!1}},imageHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},onActiveOfferChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeOfferId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"activeOfferId"}],return:{name:"void"}}},description:""}}};const B=({offers:e})=>r.jsx(V,{offers:e,className:"near-places__list places__list",imageWidth:260,imageHeight:200});B.__docgenInfo={description:"",methods:[],displayName:"NearbyOffers",props:{offers:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  images?: string[];
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  maxAdults?: number;
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
}`,signature:{properties:[{key:"latitude",value:{name:"number",required:!0}},{key:"longitude",value:{name:"number",required:!0}},{key:"zoom",value:{name:"number",required:!0}}]},required:!0}},{key:"isFavorite",value:{name:"boolean",required:!0}},{key:"isPremium",value:{name:"boolean",required:!0}},{key:"rating",value:{name:"number",required:!0}},{key:"previewImage",value:{name:"string",required:!0}},{key:"images",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"bedrooms",value:{name:"number",required:!1}},{key:"goods",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"host",value:{name:"signature",type:"object",raw:`{
  name: string;
  avatarUrl: string;
  isPro: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatarUrl",value:{name:"string",required:!0}},{key:"isPro",value:{name:"boolean",required:!0}}]},required:!1}},{key:"maxAdults",value:{name:"number",required:!1}}]}}],raw:"Offer[]"},description:""}}};const se={title:"Components/NearbyOffers",component:B,parameters:{layout:"padded"},tags:["autodocs"],decorators:[e=>r.jsx(Z,{children:r.jsx(e,{})})]},v=[{id:"1",title:"Beautiful & luxurious apartment",type:"Apartment",price:120,previewImage:"https://14.design.htmlacademy.pro/static/hotel/1.jpg",city:{name:"Amsterdam",location:{latitude:52.37454,longitude:4.897976,zoom:13}},location:{latitude:52.3909553943508,longitude:4.85309666406198,zoom:16},isFavorite:!1,isPremium:!0,rating:4.5},{id:"2",title:"Wood and stone place",type:"House",price:80,previewImage:"https://14.design.htmlacademy.pro/static/hotel/2.jpg",city:{name:"Amsterdam",location:{latitude:52.37454,longitude:4.897976,zoom:13}},location:{latitude:52.3609553943508,longitude:4.85309666406198,zoom:16},isFavorite:!0,isPremium:!1,rating:4},{id:"3",title:"Canal view prinsengracht",type:"Apartment",price:132,previewImage:"https://14.design.htmlacademy.pro/static/hotel/3.jpg",city:{name:"Amsterdam",location:{latitude:52.37454,longitude:4.897976,zoom:13}},location:{latitude:52.3909553943508,longitude:4.929309666406198,zoom:16},isFavorite:!1,isPremium:!1,rating:4.8}],s={args:{offers:v.slice(0,3)}},u={args:{offers:[v[0]]}},l={args:{offers:v}},m={args:{offers:[]}};var x,z,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    offers: mockOffers.slice(0, 3)
  }
}`,...(N=(z=s.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var P,I,f;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    offers: [mockOffers[0]]
  }
}`,...(f=(I=u.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var T,A,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    offers: mockOffers
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var F,O,U;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    offers: []
  }
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ue=["Default","SingleOffer","AllOffers","Empty"];export{l as AllOffers,s as Default,m as Empty,u as SingleOffer,ue as __namedExportsOrder,se as default};
