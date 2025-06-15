"use strict";(self.webpackChunk_docsearch_website=self.webpackChunk_docsearch_website||[]).push([[3970],{1980:(e,a,l)=>{l.r(a),l.d(a,{default:()=>q});var r=l(7283),i=l(7210),t=l(6540),s=l(4561),o=l.n(s),n=l(2318),c=l(2167),u=l(7495);const d={root:n.AH`
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  `,grainy:e=>n.AH`
    --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='10' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='0.2'  filter='url(%23noiseFilter)' /%3E%3C/svg%3E");

    background-size: 220px 220px, 100% 100%;
    background-blend-mode: ${"dark"===e?"color-burn":"luminosity"};

    ${"light"===e&&n.AH`
        background-image: var(--noise),
          linear-gradient(${u.UE}, ${u.Qi});
      `}
    ${"dark"===e&&n.AH`
        border-top: 1px solid rgba(255, 255, 255, 0.24);
        background-image: var(--noise),
          linear-gradient(180deg, ${u._m}, ${u.dW});
      `}
    ${"blue"===e&&n.AH`
        background-image: var(--noise),
          radial-gradient(
            circle at 50% 0,
            ${u.Kh},
            ${u.BS}
          );
      `}
    ${"green"===e&&n.AH`
        background-image: var(--noise),
          radial-gradient(
            circle at 50% 0,
            ${u.kE},
            ${u.oJ}
          );
      `}
      ${"grey"===e&&n.AH`
          background: ${u._m} var(--noise);
        `}
  `,light:n.AH`
    background-image: linear-gradient(${u.UE}, ${u.Qi});
  `,dark:n.AH`
    background-image: linear-gradient(
      180deg,
      ${u._m},
      ${u.dW}
    );
    border-top: 1px solid rgba(255, 255, 255, 0.24);
  `,blue:n.AH`
    background-image: radial-gradient(
      circle at 50% 0,
      ${u.Kh},
      ${u.BS}
    );
  `,nebula:n.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${u.h2} 0%,
      ${u.Kh} 100%
    );
  `,darkNebula:n.AH`
    background: ${u.BS};
  `,green:n.AH`
    background-image: radial-gradient(
      circle at 50% 0,
      ${u.kE},
      ${u.oJ}
    );
  `,elevation:n.AH`
    &:hover,
    &:focus {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px 0 rgba(45, 35, 66, 0.4),
        0 4px 18px 0 rgba(45, 35, 66, 0.3);
    }
  `,largeElevation:n.AH`
    &:hover,
    &:focus {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px 0 rgba(45, 35, 66, 0.4),
        0 8px 16px 0 rgba(45, 35, 66, 0.3);
    }
  `,badge:n.AH`
    @media (min-width: ${c.SM}) {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  `},p={0:"uil-bdr-0",2:"uil-bdr-2",4:"uil-bdr-4",6:"uil-bdr-6",8:"uil-bdr-8",20:"uil-bdr-20"},m={0:"uil-bdtlr-0",2:"uil-bdtlr-2",4:"uil-bdtlr-4",6:"uil-bdtlr-6",8:"uil-bdtlr-8",20:"uil-bdtlr-20"},h={0:"uil-bdtrr-0",2:"uil-bdtrr-2",4:"uil-bdtrr-4",6:"uil-bdtrr-6",8:"uil-bdtrr-8",20:"uil-bdtrr-20"},g=e=>{switch(e){case"small":return"uil-p-8";case"normal":return"uil-p-24";case"large":return"uil-p-48";case"none":return!1}},b={light:d.light,dark:d.dark,grey:d.dark,blue:d.blue,green:d.green,nebula:d.nebula,"dark-nebula":d.darkNebula},x=({badge:e,background:a="light",borderRadius:l=6,boxShadow:r="normal",children:i,elevation:s=!1,grainy:c,image:u,imageProps:y={},padding:f="normal",tag:v="div",videoProps:w={},...j})=>{const A=j.href?"a":v,{className:k,tag:N,...$}=y,S=N||"img",{className:F,css:H,...q}=j;return(0,n.Y)(A,Object.assign({},q,{css:[d.root,s&&("large"===r?d.largeElevation:d.elevation),c&&d.grainy(a),!c&&b[a],H],className:o()("uil-ff-poppins",p[l],"normal"===r&&"uil-bxs-default","large"===r&&"uil-bxs-large",e&&"uil-pos-relative",u?"uil-d-flex uil-fxd-column":g(f),F)}),e&&(C=e,(0,n.Y)("div",{className:"uil-ta-center uil-mb-20 sm:uil-mb-0"},(0,n.Y)(x,{css:d.badge,className:"uil-fsz-10 uil-ws-nowrap uil-tt-upper uil-lsp-big uil-lh-small uil-fw-bold uil-color-grey-700 uil-td-none hover:uil-td-none sm:uil-pos-absolute sm:uil-top-0 uil-ff-poppins",padding:"small",tag:"span"},C))),u?(0,n.Y)(t.Fragment,null,(0,n.Y)(S,Object.assign({},$,{className:o()("uil-obf-cover uil-obp-center uil-w-100p uil-h-200",m[l],h[l],k),src:u})),(0,n.Y)("div",{className:o()(g(f),"uil-fxg-1")},i)):i);var C};x.displayName="Card";const y=x;var f=l(7785),v=l(6669);const w={blue:"uil-color-nebula-500",green:"uil-color-green-700",grey:"uil-color-grey-200","light-grey":"uil-color-grey-100",pink:"uil-color-pink-600",white:"uil-color-white"},j=({children:e,color:a="blue",tag:l="a",...r})=>{const{className:i,...t}=r;return(0,n.Y)(l,Object.assign({},t,{className:o()("uil-td-none hover:uil-td-none",w[a],i)}),e)};var A=l(9069);const k={root:n.AH`
    &:active,
    &:focus {
      border-color: ${u.Kh};
    }
    &::placeholder {
      color: ${u.hm};
    }
  `},N=({disabled:e=!1,placeholder:a,tag:l="input",type:r="text",value:i,...t})=>{const{className:s,css:c,...u}=t;return(0,n.Y)(l,Object.assign({},u,{css:[k.root,c],className:o()("uil-app-none uil-color-grey-500 uil-pv-8 uil-ph-12 uil-w-100p uil-ff-poppins uil-fsz-16 uil-fw-normal uil-bdr-4 uil-bdw-1 uil-bds-solid uil-bdc-grey-200",e?"uil-bgc-grey-100 uil-op-50p uil-cursor-not-allowed":"uil-bgc-white",s),disabled:e,placeholder:a,type:r,value:i}))};var $=l(5755),S=l(9030),F=l(4848);const H=function(){const{withBaseUrl:e}=(0,S.hH)(),[a,l]=(0,t.useState)({status:"stalled",message:""}),[r,i]=(0,t.useState)(""),[s,o]=(0,t.useState)(""),[n,c]=(0,t.useState)("");return"succeed"===a.status&&a.message?(0,F.jsx)(y,{className:"uil-m-auto uil-ta-center apply-form",children:a.message.startsWith("Your DocSearch")?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f.A,{className:"apply-text",children:"URL Already Submitted!"}),(0,F.jsx)("br",{}),(0,F.jsx)(v.A,{className:"uil-pv-8 uil-d-block apply-text","aria-label":"Request has already been processed",children:a.message})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f.A,{className:"apply-text",children:"Thank You!"}),(0,F.jsx)("br",{}),(0,F.jsxs)(v.A,{className:"uil-pv-8 uil-d-block apply-text","aria-label":"Request will be processed",children:[a.message," We'll get back to you at ",(0,F.jsx)("strong",{children:s})," with the snippet you'll need to integrate into ",(0,F.jsx)(j,{href:r,children:r}),"."]}),(0,F.jsxs)(v.A,{"aria-label":"recommendations",className:"apply-text",children:["Please be patient, in the meantime, you can implement"," ",(0,F.jsx)(j,{href:e("docs/tips"),children:"our recommendations for building a great DocSearch experience."})]})]})}):(0,F.jsx)(y,{className:"uil-m-auto apply-form uil-pb-24",children:(0,F.jsxs)("form",{id:"form-apply-docsearch",method:"POST",action:"https://docsearch-hub.herokuapp.com/form/inbound",onSubmit:e=>{if(e.preventDefault(),"loading"===a.status)return;l({status:"loading"});const r=e.target,i=r.getAttribute("method"),t=r.getAttribute("action"),s=new FormData(r),o={};s.forEach((function(e,a){o[a]=e})),o.repoURL||(o.repoURL="https://www.github.com/algolia/docsearch");const n=JSON.stringify(o);fetch(t,{method:i,headers:{"Content-Type":"application/json"},body:n}).then((e=>e.json())).then((e=>{let{success:a,message:r}=e;return l(a?{status:"succeed",message:r}:{status:"failed",message:"Unable to submit your request."})})).catch((()=>l({status:"failed",message:"Unable to submit your request."})))},children:[(0,F.jsxs)(A.A,{tag:"label",htmlFor:"url",className:"apply-text",children:["Documentation or Blog URL",(0,F.jsx)(N,{required:!0,id:"url",type:"url",name:"url","aria-label":"URL of the open-source blog or documentation website",value:r,placeholder:"https://project.org/docs",onChange:e=>{i(e.target.value)}})]},"url"),(0,F.jsx)(v.A,{small:!0,className:"uil-pv-8 uil-d-block apply-text",children:"We'll scrape pages at this address and index the content on Algolia."}),(0,F.jsxs)(A.A,{tag:"label",htmlFor:"email",className:"apply-text",children:["Email",(0,F.jsx)(N,{required:!0,id:"email",type:"email",name:"email","aria-label":"Email address of the owner of this website",value:s,placeholder:"you@project.org",onChange:e=>{o(e.target.value)}})]},"email"),(0,F.jsx)(v.A,{small:!0,className:"uil-pv-8 uil-d-block apply-text",children:"We'll send you the snippet you'll have to integrate into your website and grant access to your Algolia application."}),(0,F.jsxs)(A.A,{tag:"label",htmlFor:"repoURL",className:"apply-text",children:["Repository URL (Optional)",(0,F.jsx)(N,{required:!1,id:"repoURL",type:"url",name:"repoURL","aria-label":"(Optional) The URL of your project repository",value:n,placeholder:"https://github.com/algolia/docsearch, https://gitlab.com/gitlab-org/gitlab, etc...",onChange:e=>{c(e.target.value)}})]},"repoURL"),(0,F.jsxs)("div",{className:"uil-ph-32 uil-d-flex uil-fxd-column",children:[(0,F.jsxs)(A.A,{className:"uil-pt-12 apply-text",tag:"label",htmlFor:"public",children:[(0,F.jsx)("input",{required:!0,id:"public",name:"public","aria-label":"Confirm my website is a publicly available developer documentation or a technical blog.",type:"checkbox",className:"uil-mr-8"}),"My website is a publicly available developer documentation or a technical blog."]},"public"),(0,F.jsxs)(A.A,{className:"uil-pt-12 apply-text",tag:"label",htmlFor:"owner",children:[(0,F.jsx)("input",{required:!0,id:"owner",name:"owner","aria-label":"Confirm I am the owner of the website, or otherwise have obtained and continue to maintain any required consents necessary to use DocSearch on the requested domain. And I have read the checklist.",type:"checkbox",className:"uil-mr-8"}),"I am the owner of the website, or otherwise have obtained and continue to maintain any required consents necessary to use DocSearch on the requested domain. And I have"," ",(0,F.jsx)(j,{href:e("docs/who-can-apply"),children:"read the checklist."})]},"owner"),(0,F.jsxs)(A.A,{className:"uil-pt-12 apply-text",tag:"label",htmlFor:"opensource",children:[(0,F.jsx)("input",{required:!0,id:"opensource",name:"opensource","aria-label":"Confirm I understand that this is a Free Service as described in Algolia's Terms of Service and Algolia's Special Free Service Terms",type:"checkbox",className:"uil-mr-8"}),"I understand that this is a Free Service as described in Algolia's"," ",(0,F.jsx)(j,{href:"https://www.algolia.com/policies/terms/",children:"Terms of Service"})," and Algolia's"," ",(0,F.jsx)(j,{href:"https://www.algolia.com/policies/free-services-terms/",children:"Special Free Services Terms"}),"."]},"opensource"),(0,F.jsx)($.A,{primary:!0,disabled:"loading"===a.status,className:"uil-mt-16 uil-mb-16",tag:"button",type:"submit",id:"joinButton",children:"Join the program"})]}),(0,F.jsx)(v.A,{small:!0,className:"uil-ta-center",children:(0,F.jsx)(j,{href:"https://www.algolia.com/policies/privacy/",children:"Refer to Algolia's Privacy Policy for more information on how we use and protect your data"})}),(0,F.jsxs)(v.A,{small:!0,className:"uil-ta-center",children:[(0,F.jsxs)("strong",{children:["For support requests, make sure to first"," ",(0,F.jsx)(j,{href:"/docs/docsearch-program#support",children:"read our policy"}),"."]})," "]})]})})};const q=function(){return(0,F.jsx)(i.A,{title:"Open Data Portal",description:"Port Datbase",children:(0,F.jsxs)("div",{className:"uil-pb-24",children:[(0,F.jsx)(r.A,{id:"hero-apply",title:(0,F.jsx)("img",{src:"/img/logo.png",alt:"Logo",style:{maxWidth:"300px",margin:"0 auto",display:"block"}}),background:"curves"}),(0,F.jsx)(H,{})]})})}}}]);