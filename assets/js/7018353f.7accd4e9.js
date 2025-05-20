"use strict";(self.webpackChunk_docsearch_website=self.webpackChunk_docsearch_website||[]).push([[970],{1980:(e,a,l)=>{l.r(a),l.d(a,{default:()=>H});var r=l(7283),i=l(7210),t=l(6540),s=l(4561),o=l.n(s),c=l(2318),n=l(2167),u=l(7495);const d={root:c.AH`
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  `,grainy:e=>c.AH`
    --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='10' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='0.2'  filter='url(%23noiseFilter)' /%3E%3C/svg%3E");

    background-size: 220px 220px, 100% 100%;
    background-blend-mode: ${"dark"===e?"color-burn":"luminosity"};

    ${"light"===e&&c.AH`
        background-image: var(--noise),
          linear-gradient(${u.UE}, ${u.Qi});
      `}
    ${"dark"===e&&c.AH`
        border-top: 1px solid rgba(255, 255, 255, 0.24);
        background-image: var(--noise),
          linear-gradient(180deg, ${u._m}, ${u.dW});
      `}
    ${"blue"===e&&c.AH`
        background-image: var(--noise),
          radial-gradient(
            circle at 50% 0,
            ${u.Kh},
            ${u.BS}
          );
      `}
    ${"green"===e&&c.AH`
        background-image: var(--noise),
          radial-gradient(
            circle at 50% 0,
            ${u.kE},
            ${u.oJ}
          );
      `}
      ${"grey"===e&&c.AH`
          background: ${u._m} var(--noise);
        `}
  `,light:c.AH`
    background-image: linear-gradient(${u.UE}, ${u.Qi});
  `,dark:c.AH`
    background-image: linear-gradient(
      180deg,
      ${u._m},
      ${u.dW}
    );
    border-top: 1px solid rgba(255, 255, 255, 0.24);
  `,blue:c.AH`
    background-image: radial-gradient(
      circle at 50% 0,
      ${u.Kh},
      ${u.BS}
    );
  `,nebula:c.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${u.h2} 0%,
      ${u.Kh} 100%
    );
  `,darkNebula:c.AH`
    background: ${u.BS};
  `,green:c.AH`
    background-image: radial-gradient(
      circle at 50% 0,
      ${u.kE},
      ${u.oJ}
    );
  `,elevation:c.AH`
    &:hover,
    &:focus {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px 0 rgba(45, 35, 66, 0.4),
        0 4px 18px 0 rgba(45, 35, 66, 0.3);
    }
  `,largeElevation:c.AH`
    &:hover,
    &:focus {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px 0 rgba(45, 35, 66, 0.4),
        0 8px 16px 0 rgba(45, 35, 66, 0.3);
    }
  `,badge:c.AH`
    @media (min-width: ${n.SM}) {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  `},h={0:"uil-bdr-0",2:"uil-bdr-2",4:"uil-bdr-4",6:"uil-bdr-6",8:"uil-bdr-8",20:"uil-bdr-20"},p={0:"uil-bdtlr-0",2:"uil-bdtlr-2",4:"uil-bdtlr-4",6:"uil-bdtlr-6",8:"uil-bdtlr-8",20:"uil-bdtlr-20"},m={0:"uil-bdtrr-0",2:"uil-bdtrr-2",4:"uil-bdtrr-4",6:"uil-bdtrr-6",8:"uil-bdtrr-8",20:"uil-bdtrr-20"},g=e=>{switch(e){case"small":return"uil-p-8";case"normal":return"uil-p-24";case"large":return"uil-p-48";case"none":return!1}},b={light:d.light,dark:d.dark,grey:d.dark,blue:d.blue,green:d.green,nebula:d.nebula,"dark-nebula":d.darkNebula},v=({badge:e,background:a="light",borderRadius:l=6,boxShadow:r="normal",children:i,elevation:s=!1,grainy:n,image:u,imageProps:x={},padding:y="normal",tag:f="div",videoProps:w={},...j})=>{const A=j.href?"a":f,{className:k,tag:N,...$}=x,S=N||"img",{className:z,css:F,...M}=j;return(0,c.Y)(A,Object.assign({},M,{css:[d.root,s&&("large"===r?d.largeElevation:d.elevation),n&&d.grainy(a),!n&&b[a],F],className:o()("uil-ff-poppins",h[l],"normal"===r&&"uil-bxs-default","large"===r&&"uil-bxs-large",e&&"uil-pos-relative",u?"uil-d-flex uil-fxd-column":g(y),z)}),e&&(H=e,(0,c.Y)("div",{className:"uil-ta-center uil-mb-20 sm:uil-mb-0"},(0,c.Y)(v,{css:d.badge,className:"uil-fsz-10 uil-ws-nowrap uil-tt-upper uil-lsp-big uil-lh-small uil-fw-bold uil-color-grey-700 uil-td-none hover:uil-td-none sm:uil-pos-absolute sm:uil-top-0 uil-ff-poppins",padding:"small",tag:"span"},H))),u?(0,c.Y)(t.Fragment,null,(0,c.Y)(S,Object.assign({},$,{className:o()("uil-obf-cover uil-obp-center uil-w-100p uil-h-200",p[l],m[l],k),src:u})),(0,c.Y)("div",{className:o()(g(y),"uil-fxg-1")},i)):i);var H};v.displayName="Card";const x=v;var y=l(7785),f=l(6669);const w={blue:"uil-color-nebula-500",green:"uil-color-green-700",grey:"uil-color-grey-200","light-grey":"uil-color-grey-100",pink:"uil-color-pink-600",white:"uil-color-white"},j=({children:e,color:a="blue",tag:l="a",...r})=>{const{className:i,...t}=r;return(0,c.Y)(l,Object.assign({},t,{className:o()("uil-td-none hover:uil-td-none",w[a],i)}),e)};var A=l(9069);const k={root:c.AH`
    &:active,
    &:focus {
      border-color: ${u.Kh};
    }
    &::placeholder {
      color: ${u.hm};
    }
  `},N=({disabled:e=!1,placeholder:a,tag:l="input",type:r="text",value:i,...t})=>{const{className:s,css:n,...u}=t;return(0,c.Y)(l,Object.assign({},u,{css:[k.root,n],className:o()("uil-app-none uil-color-grey-500 uil-pv-8 uil-ph-12 uil-w-100p uil-ff-poppins uil-fsz-16 uil-fw-normal uil-bdr-4 uil-bdw-1 uil-bds-solid uil-bdc-grey-200",e?"uil-bgc-grey-100 uil-op-50p uil-cursor-not-allowed":"uil-bgc-white",s),disabled:e,placeholder:a,type:r,value:i}))};var $=l(5755),S=l(9030),z=l(4848);const F=function(){const{withBaseUrl:e}=(0,S.hH)(),[a,l]=(0,t.useState)({status:"stalled",message:""}),[r,i]=(0,t.useState)(""),[s,o]=(0,t.useState)(""),[c,n]=(0,t.useState)("");return"succeed"===a.status&&a.message?(0,z.jsx)(x,{className:"uil-m-auto uil-ta-center apply-form",children:a.message.startsWith("Your DocSearch")?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(y.A,{className:"apply-text",children:"URL Already Submitted!"}),(0,z.jsx)("br",{}),(0,z.jsx)(f.A,{className:"uil-pv-8 uil-d-block apply-text","aria-label":"Request has already been processed",children:a.message})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(y.A,{className:"apply-text",children:"Thank You!"}),(0,z.jsx)("br",{}),(0,z.jsxs)(f.A,{className:"uil-pv-8 uil-d-block apply-text","aria-label":"Request will be processed",children:[a.message," We'll get back to you at ",(0,z.jsx)("strong",{children:s})," with the snippet you'll need to integrate into ",(0,z.jsx)(j,{href:r,children:r}),"."]}),(0,z.jsxs)(f.A,{"aria-label":"recommendations",className:"apply-text",children:["Please be patient, in the meantime, you can implement"," ",(0,z.jsx)(j,{href:e("docs/tips"),children:"our recommendations for building a great DocSearch experience."})]})]})}):(0,z.jsx)(x,{className:"uil-m-auto apply-form uil-pb-24",children:(0,z.jsxs)("form",{id:"form-apply-docsearch",method:"POST",action:"https://docsearch-hub.herokuapp.com/form/inbound",onSubmit:e=>{if(e.preventDefault(),"loading"===a.status)return;l({status:"loading"});const r=e.target,i=r.getAttribute("method"),t=r.getAttribute("action"),s=new FormData(r),o={};s.forEach((function(e,a){o[a]=e})),o.repoURL||(o.repoURL="https://www.github.com/algolia/docsearch");const c=JSON.stringify(o);fetch(t,{method:i,headers:{"Content-Type":"application/json"},body:c}).then((e=>e.json())).then((e=>{let{success:a,message:r}=e;return l(a?{status:"succeed",message:r}:{status:"failed",message:"Unable to submit your request."})})).catch((()=>l({status:"failed",message:"Unable to submit your request."})))},children:[(0,z.jsxs)(A.A,{tag:"label",htmlFor:"url",className:"apply-text",children:["Documentation or Blog URL",(0,z.jsx)(N,{required:!0,id:"url",type:"url",name:"url","aria-label":"URL of the open-source blog or documentation website",value:r,placeholder:"https://project.org/docs",onChange:e=>{i(e.target.value)}})]},"url"),(0,z.jsx)(f.A,{small:!0,className:"uil-pv-8 uil-d-block apply-text",children:"We'll scrape pages at this address and index the content on Algolia."}),(0,z.jsxs)(A.A,{tag:"label",htmlFor:"email",className:"apply-text",children:["Email",(0,z.jsx)(N,{required:!0,id:"email",type:"email",name:"email","aria-label":"Email address of the owner of this website",value:s,placeholder:"you@project.org",onChange:e=>{o(e.target.value)}})]},"email"),(0,z.jsx)(f.A,{small:!0,className:"uil-pv-8 uil-d-block apply-text",children:"We'll send you the snippet you'll have to integrate into your website and grant access to your Algolia application."}),(0,z.jsxs)(A.A,{tag:"label",htmlFor:"repoURL",className:"apply-text",children:["Repository URL (Optional)",(0,z.jsx)(N,{required:!1,id:"repoURL",type:"url",name:"repoURL","aria-label":"(Optional) The URL of your project repository",value:c,placeholder:"https://github.com/algolia/docsearch, https://gitlab.com/gitlab-org/gitlab, etc...",onChange:e=>{n(e.target.value)}})]},"repoURL"),(0,z.jsxs)("div",{className:"uil-ph-32 uil-d-flex uil-fxd-column",children:[(0,z.jsxs)(A.A,{className:"uil-pt-12 apply-text",tag:"label",htmlFor:"public",children:[(0,z.jsx)("input",{required:!0,id:"public",name:"public","aria-label":"Confirm my website is a publicly available developer documentation or a technical blog.",type:"checkbox",className:"uil-mr-8"}),"My website is a publicly available developer documentation or a technical blog."]},"public"),(0,z.jsxs)(A.A,{className:"uil-pt-12 apply-text",tag:"label",htmlFor:"owner",children:[(0,z.jsx)("input",{required:!0,id:"owner",name:"owner","aria-label":"Confirm I am the owner of the website, or otherwise have obtained and continue to maintain any required consents necessary to use DocSearch on the requested domain. And I have read the checklist.",type:"checkbox",className:"uil-mr-8"}),"I am the owner of the website, or otherwise have obtained and continue to maintain any required consents necessary to use DocSearch on the requested domain. And I have"," ",(0,z.jsx)(j,{href:e("docs/who-can-apply"),children:"read the checklist."})]},"owner"),(0,z.jsxs)(A.A,{className:"uil-pt-12 apply-text",tag:"label",htmlFor:"opensource",children:[(0,z.jsx)("input",{required:!0,id:"opensource",name:"opensource","aria-label":"Confirm I understand that this is a Free Service as described in Algolia's Terms of Service and Algolia's Special Free Service Terms",type:"checkbox",className:"uil-mr-8"}),"I understand that this is a Free Service as described in Algolia's"," ",(0,z.jsx)(j,{href:"https://www.algolia.com/policies/terms/",children:"Terms of Service"})," and Algolia's"," ",(0,z.jsx)(j,{href:"https://www.algolia.com/policies/free-services-terms/",children:"Special Free Services Terms"}),"."]},"opensource"),(0,z.jsx)($.A,{primary:!0,disabled:"loading"===a.status,className:"uil-mt-16 uil-mb-16",tag:"button",type:"submit",id:"joinButton",children:"Join the program"})]}),(0,z.jsx)(f.A,{small:!0,className:"uil-ta-center",children:(0,z.jsx)(j,{href:"https://www.algolia.com/policies/privacy/",children:"Refer to Algolia's Privacy Policy for more information on how we use and protect your data"})}),(0,z.jsxs)(f.A,{small:!0,className:"uil-ta-center",children:[(0,z.jsxs)("strong",{children:["For support requests, make sure to first"," ",(0,z.jsx)(j,{href:"/docs/docsearch-program#support",children:"read our policy"}),"."]})," "]})]})})};var M=l(8812);const H=function(){return(0,z.jsx)(i.A,{title:"DocSearch: Search made for documentation",description:"The easiest way to add search to your documentation - Powered by Algolia",children:(0,z.jsxs)("div",{className:"uil-pb-24",children:[(0,z.jsx)(r.A,{id:"hero-apply",title:(0,z.jsx)(M.A,{width:"100%"}),background:"curves"}),(0,z.jsx)(F,{})]})})}},8812:(e,a,l)=>{l.d(a,{A:()=>i});l(6540);var r=l(4848);const i=function(e){return(0,r.jsx)("svg",{...e,viewBox:"0 0 476 78",className:"docsearch-logo",children:(0,r.jsxs)("g",{fillRule:"nonzero",fill:"none",children:[(0,r.jsx)("path",{d:"M36.493 77.289h-33.419c-1.698 0-3.074-1.37-3.074-3.061h36.523c12.769.062 24.6-6.663 31.038-17.642 6.438-10.979 6.504-24.543.174-35.584-6.331-11.041-18.096-17.88-30.865-17.942h-36.87c0-1.69 1.376-3.061 3.074-3.061h33.796c10.31.01 20.193 4.1 27.472 11.369 7.28 7.268 11.36 17.12 11.341 27.384-.059 21.366-17.741 38.536-39.191 38.536z",fill:"#5468FF"}),(0,r.jsx)("path",{d:"M0 69.045h23.711c2.932.01 5.761-1.071 7.933-3.031h-31.644v3.031zM0 60.801h36.374c.734-.987 1.418-1.975 2.053-3.071h-38.427v3.071zM0 52.546h41.025c.407-.987.773-1.975 1.091-3.061h-42.116v3.061zM0 44.302h43.306c.149-.987.268-2.034.337-3.061h-43.643v3.061zM0 36.058h43.633c-.069-1.037-.188-2.064-.337-3.071h-43.296v3.071zM0 27.804h42.116c-.317-1.037-.684-2.064-1.091-3.061h-41.025v3.061zM0 19.559h38.427c-.631-1.055-1.316-2.076-2.053-3.061h-36.374v3.061zM0 8.244v3.071h31.674c-2.171-1.962-5.001-3.043-7.933-3.031l-23.741-.039zM135.68 50.078c-1.822 3.303-4.582 5.999-7.933 7.751-3.767 1.931-7.962 2.888-12.197 2.784h-16.581v-43.69h16.571c4.239-.11 8.44.826 12.227 2.725 3.351 1.711 6.114 4.379 7.933 7.662 1.892 3.487 2.846 7.402 2.767 11.364.07 3.976-.889 7.904-2.787 11.404zm-11.414-2.192c2.294-2.179 3.441-5.249 3.441-9.212s-1.147-7.03-3.441-9.202c-2.301-2.185-5.52-3.278-9.659-3.278h-5.018v24.96h5.018c4.145 0 7.365-1.089 9.659-3.268zM175.456 19.125c3.323 1.888 6.066 4.643 7.933 7.968 1.975 3.518 2.981 7.493 2.916 11.522.053 4.045-.973 8.032-2.975 11.552-1.891 3.344-4.661 6.112-8.013 8.007-6.972 3.83-15.43 3.83-22.402 0-3.351-1.893-6.118-4.662-8.003-8.007-2.008-3.518-3.035-7.506-2.975-11.552-.061-4.036.967-8.015 2.975-11.522 1.894-3.328 4.66-6.082 8.003-7.968 6.996-3.831 15.475-3.831 22.471 0h.069zm-19.556 10.318c-2.043 2.245-3.068 5.302-3.074 9.172-.007 3.87 1.018 6.918 3.074 9.143 4.576 4.529 11.965 4.529 16.541 0 2.056-2.258 3.084-5.305 3.084-9.143 0-3.837-1.025-6.885-3.074-9.143-4.595-4.511-11.976-4.511-16.571 0l.02-.03zM225.108 20.882c3.7 2.991 6.218 7.187 7.11 11.848h-11.226c-.762-1.928-2.093-3.58-3.818-4.739-1.812-1.184-3.942-1.79-6.109-1.738-2.895-.102-5.673 1.143-7.517 3.367-1.904 2.258-2.856 5.286-2.856 9.084s.952 6.813 2.856 9.044c1.846 2.222 4.623 3.465 7.517 3.367 2.161.068 4.292-.521 6.109-1.688 1.714-1.149 3.044-2.782 3.818-4.69h11.236c-.901 4.657-3.418 8.851-7.11 11.848-3.656 2.942-8.284 4.417-13.883 4.423-3.928.086-7.807-.887-11.226-2.814-3.21-1.857-5.81-4.601-7.487-7.899-1.805-3.582-2.71-7.546-2.638-11.552-.073-4.01.832-7.977 2.638-11.562 1.677-3.298 4.277-6.042 7.487-7.899 3.419-1.915 7.294-2.877 11.216-2.784 5.606 0 10.234 1.461 13.883 4.384zM267.006 54.679c-1.26 2.01-3.069 3.62-5.216 4.641-2.61 1.216-5.469 1.808-8.35 1.728-4.919 0-8.971-1.195-12.158-3.584-3.182-2.37-5.103-6.057-5.216-10.012h11.295c.082 1.47.712 2.857 1.765 3.89 1.055.962 2.448 1.473 3.877 1.422 1.182.068 2.343-.329 3.233-1.106.794-.779 1.222-1.853 1.18-2.962.027-1.033-.366-2.034-1.091-2.774-.769-.78-1.686-1.401-2.697-1.827-1.071-.474-2.568-.987-4.472-1.698-2.324-.765-4.593-1.686-6.793-2.755-1.81-.931-3.366-2.286-4.532-3.949-1.339-2.022-2.002-4.413-1.894-6.832-.062-2.396.631-4.751 1.983-6.734 1.381-1.944 3.29-3.454 5.504-4.354 2.545-1.048 5.279-1.563 8.032-1.511 4.879 0 8.756 1.152 11.632 3.456 2.898 2.349 4.669 5.803 4.879 9.518h-11.483c-.138-1.287-.695-2.494-1.587-3.436-.925-.872-2.169-1.328-3.441-1.264-1.078-.036-2.134.314-2.975.987-.799.748-1.218 1.814-1.14 2.903-.032.972.325 1.916.992 2.626.731.757 1.608 1.358 2.578 1.767 1.031.454 2.519 1.03 4.463 1.728 2.366.761 4.67 1.702 6.892 2.814 1.83.97 3.403 2.357 4.591 4.048 1.36 2.043 2.033 4.463 1.924 6.911.015 2.243-.599 4.445-1.775 6.358zM285.263 25.325v9.153h14.875v7.978h-14.875v9.706h16.69v8.462h-27.261v-43.7h27.301v8.402zM335.015 52.645h-16.442l-2.737 7.968h-11.166l16.075-43.374h12.227l16.095 43.374h-11.315l-2.737-7.968zm-2.727-8.037l-5.464-16.064-5.524 16.064h10.988zM374.85 60.613l-9.5-16.498h-2.4v16.498h-10.611v-43.69h18.128c3.042-.08 6.061.549 8.816 1.836 2.258 1.069 4.141 2.789 5.405 4.937 1.223 2.179 1.842 4.643 1.795 7.138.088 2.921-.844 5.783-2.638 8.096-1.967 2.326-4.67 3.917-7.666 4.512l10.432 17.18-11.761-.01zm-11.9-23.696h6.585c1.672.149 3.339-.342 4.661-1.372 1.058-1.098 1.598-2.59 1.488-4.107.084-1.51-.465-2.987-1.517-4.078-1.284-1.081-2.945-1.613-4.621-1.481h-6.595v11.038zM424.81 20.882c3.703 2.988 6.222 7.186 7.11 11.848h-11.236c-.755-1.937-2.087-3.598-3.818-4.759-1.811-1.185-3.942-1.791-6.109-1.738-2.896-.1-5.673 1.153-7.507 3.387-1.904 2.258-2.856 5.286-2.856 9.084s.952 6.813 2.856 9.044c1.841 2.223 4.615 3.467 7.507 3.367 2.165.057 4.297-.546 6.109-1.728 1.717-1.146 3.047-2.78 3.818-4.69h11.236c-.897 4.659-3.415 8.854-7.11 11.848-3.656 2.942-8.284 4.417-13.883 4.423-3.931.087-7.814-.885-11.236-2.814-3.209-1.855-5.807-4.599-7.477-7.899-1.808-3.58-2.713-7.545-2.638-11.552-.077-4.01.828-7.978 2.638-11.562 1.67-3.299 4.268-6.044 7.477-7.899 3.423-1.926 7.305-2.894 11.236-2.804 5.6.039 10.227 1.521 13.883 4.443zM475.167 16.923v43.69h-10.68v-18.226h-16.63v18.226h-10.611v-43.69h10.611v16.933h16.63v-16.933z",fill:"currentColor"})]})})}}}]);