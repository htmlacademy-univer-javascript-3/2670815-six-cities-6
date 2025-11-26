import{j as e}from"./jsx-runtime-BWGDkCCf.js";import{g as s}from"./utils-BCb4fT2D.js";const n=({review:r})=>{const a=new Date(r.date).toLocaleString("en-US",{month:"long",year:"numeric"});return e.jsxs("li",{className:"reviews__item",children:[e.jsxs("div",{className:r.user.isPro?"reviews__user user user--pro":"reviews__user user",children:[e.jsx("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:e.jsx("img",{className:"reviews__avatar user__avatar",src:r.user.avatarUrl,width:54,height:54,alt:"Reviews avatar"})}),e.jsx("span",{className:"reviews__user-name",children:r.user.name})]}),e.jsxs("div",{className:"reviews__info",children:[e.jsx("div",{className:"reviews__rating rating",children:e.jsxs("div",{className:"reviews__stars rating__stars",children:[e.jsx("span",{style:{width:s(r.rating)}}),e.jsx("span",{className:"visually-hidden",children:"Rating"})]})}),e.jsx("p",{className:"reviews__text",children:r.comment}),e.jsx("time",{className:"reviews__time",dateTime:r.date,children:a})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Review",props:{review:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatarUrl",value:{name:"string",required:!0}},{key:"isPro",value:{name:"boolean",required:!0}}]},required:!0}},{key:"comment",value:{name:"string",required:!0}},{key:"rating",value:{name:"number",required:!0}}]}},description:""}}};export{n as R};
