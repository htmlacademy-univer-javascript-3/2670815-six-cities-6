import{j as e}from"./jsx-runtime-C7I7cVpi.js";import{g as G,R as J,b as j,s as K,c as Q,d as X,u as Y,l as Z,L as N,A as d,e as l,B as h,f as p}from"./selectors-D5ckLfbL.js";import{r as u}from"./iframe-DGvzZREh.js";import"./index-PTUro9fC.js";import"./preload-helper-C1FmrZbK.js";function ee(){const t=G();let n=null,a=null;return{clear(){n=null,a=null},notify(){t(()=>{let s=n;for(;s;)s.callback(),s=s.next})},get(){let s=[],o=n;for(;o;)s.push(o),o=o.next;return s},subscribe(s){let o=!0,r=a={callback:s,next:null,prev:a};return r.prev?r.prev.next=r:n=r,function(){!o||n===null||(o=!1,r.next?r.next.prev=r.prev:a=r.prev,r.prev?r.prev.next=r.next:n=r.next)}}}}const P={notify(){},get:()=>[]};function re(t,n){let a,s=P,o=0,r=!1;function c(W){y();const $=s.subscribe(W);let w=!1;return()=>{w||(w=!0,$(),A())}}function f(){s.notify()}function S(){b.onStateChange&&b.onStateChange()}function i(){return r}function y(){o++,a||(a=t.subscribe(S),s=ee())}function A(){o--,a&&o===0&&(a(),a=void 0,s.clear(),s=P)}function q(){r||(r=!0,y())}function T(){r&&(r=!1,A())}const b={addNestedSub:c,notifyNestedSubs:f,handleChangeWrapper:S,isSubscribed:i,trySubscribe:q,tryUnsubscribe:T,getListeners:()=>s};return b}const te=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",se=te?u.useLayoutEffect:u.useEffect;function m({store:t,context:n,children:a,serverState:s,stabilityCheck:o="once",noopCheck:r="once"}){const c=u.useMemo(()=>{const i=re(t);return{store:t,subscription:i,getServerState:s?()=>s:void 0,stabilityCheck:o,noopCheck:r}},[t,s,o,r]),f=u.useMemo(()=>t.getState(),[t]);se(()=>{const{subscription:i}=c;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),f!==t.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[c,f]);const S=n||J;return u.createElement(S.Provider,{value:c},a)}const I=({isMainPage:t=!1})=>{const n=j(K),a=j(Q),s=j(X),o=Y(),r=u.useCallback(()=>{o(Z())},[o]);return e.jsx("header",{className:"header",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"header__wrapper",children:[e.jsx("div",{className:"header__left",children:e.jsx(N,{className:`header__logo-link ${t?"header__logo-link--active":""}`,to:"/",children:e.jsx("img",{className:"header__logo",src:"markup/img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})}),e.jsx("nav",{className:"header__nav",children:e.jsx("ul",{className:"header__nav-list",children:n===d.Auth?e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"header__nav-item user",children:e.jsxs(N,{className:"header__nav-link header__nav-link--profile",to:"/favorites",children:[e.jsx("div",{className:"header__avatar-wrapper user__avatar-wrapper",children:(a==null?void 0:a.avatarUrl)&&e.jsx("img",{src:a.avatarUrl,alt:"User avatar",style:{borderRadius:"50%",width:"100%",height:"100%"}})}),e.jsx("span",{className:"header__user-name user__name",children:a==null?void 0:a.email}),e.jsx("span",{className:"header__favorite-count",children:s.length})]})}),e.jsx("li",{className:"header__nav-item",children:e.jsx("button",{className:"header__nav-link",onClick:r,style:{border:"none",background:"none",cursor:"pointer",padding:0},children:e.jsx("span",{className:"header__signout",children:"Sign out"})})})]}):e.jsx("li",{className:"header__nav-item user",children:e.jsxs(N,{className:"header__nav-link header__nav-link--profile",to:"/login",children:[e.jsx("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),e.jsx("span",{className:"header__login",children:"Sign in"})]})})})})]})})})},O=u.memo(I);O.displayName="Header";I.__docgenInfo={description:"",methods:[],displayName:"Header",props:{isMainPage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const V={id:"1",email:"user@example.com",token:"test-token",avatarUrl:"https://14.design.htmlacademy.pro/static/avatar/1.jpg"},ce={title:"Components/Header",component:O,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[t=>{const n=l({reducer:{user:p}});return e.jsx(m,{store:n,children:e.jsx(h,{children:e.jsx(t,{})})})}]},g={decorators:[t=>{const n=l({reducer:{user:p},preloadedState:{user:{authorizationStatus:d.NoAuth,user:null}}});return e.jsx(m,{store:n,children:e.jsx(h,{children:e.jsx(t,{})})})}]},x={decorators:[t=>{const n=l({reducer:{user:p},preloadedState:{user:{authorizationStatus:d.Auth,user:V}}});return e.jsx(m,{store:n,children:e.jsx(h,{children:e.jsx(t,{})})})}]},v={args:{isMainPage:!0},decorators:[t=>{const n=l({reducer:{user:p},preloadedState:{user:{authorizationStatus:d.NoAuth,user:null}}});return e.jsx(m,{store:n,children:e.jsx(h,{children:e.jsx(t,{})})})}]},_={args:{isMainPage:!0},decorators:[t=>{const n=l({reducer:{user:p},preloadedState:{user:{authorizationStatus:d.Auth,user:V}}});return e.jsx(m,{store:n,children:e.jsx(h,{children:e.jsx(t,{})})})}]};var R,k,z;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [Story => {
    const store = configureStore({
      reducer: {
        user: userReducer
      },
      preloadedState: {
        user: {
          authorizationStatus: AuthorizationStatus.NoAuth,
          user: null
        }
      }
    });
    return <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>;
  }]
}`,...(z=(k=g.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var M,U,B;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [Story => {
    const store = configureStore({
      reducer: {
        user: userReducer
      },
      preloadedState: {
        user: {
          authorizationStatus: AuthorizationStatus.Auth,
          user: mockUser
        }
      }
    });
    return <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>;
  }]
}`,...(B=(U=x.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var C,L,E;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isMainPage: true
  },
  decorators: [Story => {
    const store = configureStore({
      reducer: {
        user: userReducer
      },
      preloadedState: {
        user: {
          authorizationStatus: AuthorizationStatus.NoAuth,
          user: null
        }
      }
    });
    return <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>;
  }]
}`,...(E=(L=v.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var H,D,F;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isMainPage: true
  },
  decorators: [Story => {
    const store = configureStore({
      reducer: {
        user: userReducer
      },
      preloadedState: {
        user: {
          authorizationStatus: AuthorizationStatus.Auth,
          user: mockUser
        }
      }
    });
    return <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>;
  }]
}`,...(F=(D=_.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const de=["NotAuthenticated","Authenticated","MainPageNotAuthenticated","MainPageAuthenticated"];export{x as Authenticated,_ as MainPageAuthenticated,v as MainPageNotAuthenticated,g as NotAuthenticated,de as __namedExportsOrder,ce as default};
