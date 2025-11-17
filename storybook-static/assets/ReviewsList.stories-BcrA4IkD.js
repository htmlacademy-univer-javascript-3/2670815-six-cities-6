import{j as e}from"./jsx-runtime-BWGDkCCf.js";import{R as x}from"./review-Dt9-jpng.js";import"./iframe-D-hs6Jaj.js";import"./preload-helper-C1FmrZbK.js";import"./utils-BCb4fT2D.js";const R=({reviews:i,children:b})=>e.jsxs("section",{className:"offer__reviews reviews",children:[e.jsxs("h2",{className:"reviews__title",children:["Reviews · ",e.jsx("span",{className:"reviews__amount",children:i.length})]}),e.jsx("ul",{className:"reviews__list",children:i.map(o=>e.jsx(x,{review:o},o.id))}),b]});R.__docgenInfo={description:"",methods:[],displayName:"ReviewsList",props:{reviews:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"user",value:{name:"signature",type:"object",raw:`{
  name: string;
  avatarUrl: string;
  isPro: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatarUrl",value:{name:"string",required:!0}},{key:"isPro",value:{name:"boolean",required:!0}}]},required:!0}},{key:"comment",value:{name:"string",required:!0}},{key:"rating",value:{name:"number",required:!0}}]}}],raw:"ReviewType[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const S={title:"Components/ReviewsList",component:R,parameters:{layout:"padded"},tags:["autodocs"]},n=[{id:"1",date:"2024-10-15T12:00:00.000Z",user:{name:"Max",avatarUrl:"https://14.design.htmlacademy.pro/static/avatar/3.jpg",isPro:!1},comment:"A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",rating:4},{id:"2",date:"2024-11-01T15:30:00.000Z",user:{name:"Sarah Johnson",avatarUrl:"https://14.design.htmlacademy.pro/static/avatar/5.jpg",isPro:!0},comment:"Excellent location! The apartment was clean, modern, and well-equipped. The host was very responsive and helpful.",rating:5},{id:"3",date:"2024-09-20T09:15:00.000Z",user:{name:"John Doe",avatarUrl:"https://14.design.htmlacademy.pro/static/avatar/1.jpg",isPro:!1},comment:"The location was good but the apartment needs some renovation.",rating:2}],r={args:{reviews:n}},a={args:{reviews:[n[0]]}},s={args:{reviews:[]}},t={args:{reviews:n,children:e.jsx("div",{style:{padding:"20px",background:"#f0f0f0",borderRadius:"4px"},children:"Review form would be here"})}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    reviews: mockReviews
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    reviews: [mockReviews[0]]
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var v,g,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    reviews: []
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var h,y,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    reviews: mockReviews,
    children: <div style={{
      padding: '20px',
      background: '#f0f0f0',
      borderRadius: '4px'
    }}>
        Review form would be here
      </div>
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const N=["Default","SingleReview","Empty","WithForm"];export{r as Default,s as Empty,a as SingleReview,t as WithForm,N as __namedExportsOrder,S as default};
