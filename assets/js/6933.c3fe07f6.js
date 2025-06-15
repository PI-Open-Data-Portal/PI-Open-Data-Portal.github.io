/*! For license information please see 6933.c3fe07f6.js.LICENSE.txt */
(self.webpackChunk_docsearch_website=self.webpackChunk_docsearch_website||[]).push([[6933],{2167:(e,r,t)=>{"use strict";t.d(r,{LG:()=>l,MD:()=>o,SM:()=>n,XS:()=>i});const a=t(6782),i=a.breakpoints.xs,n=a.breakpoints.sm,o=a.breakpoints.md,l=a.breakpoints.lg;a.breakpoints.xl,a.breakpoints.xxl},2318:(e,r,t)=>{"use strict";t.d(r,{AH:()=>ze,Y:()=>Se});var a=t(6540),i=t.t(a,2);var n=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.insertionPoint?r.insertionPoint.nextSibling:r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{t.insertRule(e,t.cssRules.length)}catch(a){}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){var r;return null==(r=e.parentNode)?void 0:r.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,l=String.fromCharCode,s=Object.assign;function c(e){return e.trim()}function u(e,r,t){return e.replace(r,t)}function d(e,r){return e.indexOf(r)}function p(e,r){return 0|e.charCodeAt(r)}function g(e,r,t){return e.slice(r,t)}function m(e){return e.length}function h(e){return e.length}function f(e,r){return r.push(e),e}var b=1,v=1,x=0,w=0,y=0,k="";function A(e,r,t,a,i,n,o){return{value:e,root:r,parent:t,type:a,props:i,children:n,line:b,column:v,length:o,return:""}}function $(e,r){return s(A("",null,null,"",null,null,0),e,{length:-e.length},r)}function N(){return y=w>0?p(k,--w):0,v--,10===y&&(v=1,b--),y}function E(){return y=w<x?p(k,w++):0,v++,10===y&&(v=1,b++),y}function C(){return p(k,w)}function F(){return w}function O(e,r){return g(k,e,r)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return b=v=1,x=m(k=e),w=0,[]}function j(e){return k="",e}function S(e){return c(O(w-1,L(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(y=C())&&y<33;)E();return Y(e)>2||Y(y)>3?"":" "}function P(e,r){for(;--r&&E()&&!(y<48||y>102||y>57&&y<65||y>70&&y<97););return O(e,F()+(r<6&&32==C()&&32==E()))}function L(e){for(;E();)switch(y){case e:return w;case 34:case 39:34!==e&&39!==e&&L(y);break;case 40:41===e&&L(e);break;case 92:E()}return w}function B(e,r){for(;E()&&e+y!==57&&(e+y!==84||47!==C()););return"/*"+O(r,w-1)+"*"+l(47===e?e:E())}function D(e){for(;!Y(C());)E();return O(e,w)}var G="-ms-",_="-moz-",M="-webkit-",T="comm",R="rule",I="decl",X="@keyframes";function W(e,r){for(var t="",a=h(e),i=0;i<a;i++)t+=r(e[i],i,e,r)||"";return t}function U(e,r,t,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case I:return e.return=e.return||e.value;case T:return"";case X:return e.return=e.value+"{"+W(e.children,a)+"}";case R:e.value=e.props.join(",")}return m(t=W(e.children,a))?e.return=e.value+"{"+t+"}":""}function q(e){return j(K("",null,null,null,[""],e=H(e),0,[0],e))}function K(e,r,t,a,i,n,o,s,c){for(var g=0,h=0,b=o,v=0,x=0,w=0,y=1,k=1,A=1,$=0,O="",Y=i,H=n,j=a,L=O;k;)switch(w=$,$=E()){case 40:if(108!=w&&58==p(L,b-1)){-1!=d(L+=u(S($),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:L+=S($);break;case 9:case 10:case 13:case 32:L+=z(w);break;case 92:L+=P(F()-1,7);continue;case 47:switch(C()){case 42:case 47:f(V(B(E(),F()),r,t),c);break;default:L+="/"}break;case 123*y:s[g++]=m(L)*A;case 125*y:case 59:case 0:switch($){case 0:case 125:k=0;case 59+h:-1==A&&(L=u(L,/\f/g,"")),x>0&&m(L)-b&&f(x>32?Z(L+";",a,t,b-1):Z(u(L," ","")+";",a,t,b-2),c);break;case 59:L+=";";default:if(f(j=J(L,r,t,g,h,i,s,O,Y=[],H=[],b),n),123===$)if(0===h)K(L,r,j,j,Y,n,b,s,H);else switch(99===v&&110===p(L,3)?100:v){case 100:case 108:case 109:case 115:K(e,j,j,a&&f(J(e,j,j,0,0,i,s,O,i,Y=[],b),H),i,H,b,s,a?Y:H);break;default:K(L,j,j,j,[""],H,0,s,H)}}g=h=x=0,y=A=1,O=L="",b=o;break;case 58:b=1+m(L),x=w;default:if(y<1)if(123==$)--y;else if(125==$&&0==y++&&125==N())continue;switch(L+=l($),$*y){case 38:A=h>0?1:(L+="\f",-1);break;case 44:s[g++]=(m(L)-1)*A,A=1;break;case 64:45===C()&&(L+=S(E())),v=C(),h=b=m(O=L+=D(F())),$++;break;case 45:45===w&&2==m(L)&&(y=0)}}return n}function J(e,r,t,a,i,n,l,s,d,p,m){for(var f=i-1,b=0===i?n:[""],v=h(b),x=0,w=0,y=0;x<a;++x)for(var k=0,$=g(e,f+1,f=o(w=l[x])),N=e;k<v;++k)(N=c(w>0?b[k]+" "+$:u($,/&\f/g,b[k])))&&(d[y++]=N);return A(e,r,t,0===i?R:s,d,p,m)}function V(e,r,t){return A(e,r,t,T,l(y),g(e,2,-2),0)}function Z(e,r,t,a){return A(e,r,t,I,g(e,0,a),g(e,a+1,-1),a)}var Q=function(e,r,t){for(var a=0,i=0;a=i,i=C(),38===a&&12===i&&(r[t]=1),!Y(i);)E();return O(e,w)},ee=function(e,r){return j(function(e,r){var t=-1,a=44;do{switch(Y(a)){case 0:38===a&&12===C()&&(r[t]=1),e[t]+=Q(w-1,r,t);break;case 2:e[t]+=S(a);break;case 4:if(44===a){e[++t]=58===C()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=l(a)}}while(a=E());return e}(H(e),r))},re=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,a=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||re.get(t))&&!a){re.set(e,!0);for(var i=[],n=ee(r,i),o=t.props,l=0,s=0;l<n.length;l++)for(var c=0;c<o.length;c++,s++)e.props[s]=i[l]?n[l].replace(/&\f/g,o[c]):o[c]+" "+n[l]}}},ae=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}};function ie(e,r){switch(function(e,r){return 45^p(e,0)?(((r<<2^p(e,0))<<2^p(e,1))<<2^p(e,2))<<2^p(e,3):0}(e,r)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+_+e+G+e+e;case 6828:case 4268:return M+e+G+e+e;case 6165:return M+e+G+"flex-"+e+e;case 5187:return M+e+u(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return M+e+G+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return M+e+G+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+G+u(e,"shrink","negative")+e;case 5292:return M+e+G+u(e,"basis","preferred-size")+e;case 6060:return M+"box-"+u(e,"-grow","")+M+e+G+u(e,"grow","positive")+e;case 4554:return M+u(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-r>6)switch(p(e,r+1)){case 109:if(45!==p(e,r+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+_+(108==p(e,r+3)?"$3":"$2-$3"))+e;case 115:return~d(e,"stretch")?ie(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==p(e,r+1))break;case 6444:switch(p(e,m(e)-3-(~d(e,"!important")&&10))){case 107:return u(e,":",":"+M)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(45===p(e,14)?"inline-":"")+"box$3$1"+M+"$2$3$1"+G+"$2box$3")+e}break;case 5936:switch(p(e,r+11)){case 114:return M+e+G+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+G+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+G+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+G+e+e}return e}var ne=[function(e,r,t,a){if(e.length>-1&&!e.return)switch(e.type){case I:e.return=ie(e.value,e.length);break;case X:return W([$(e,{value:u(e.value,"@","@"+M)})],a);case R:if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(function(e,r){return(e=r.exec(e))?e[0]:e}(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([$(e,{props:[u(r,/:(read-\w+)/,":-moz-$1")]})],a);case"::placeholder":return W([$(e,{props:[u(r,/:(plac\w+)/,":"+M+"input-$1")]}),$(e,{props:[u(r,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[u(r,/:(plac\w+)/,G+"input-$1")]})],a)}return""}))}}],oe=function(e){var r=e.key;if("css"===r){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,i,o=e.stylisPlugins||ne,l={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var r=e.getAttribute("data-emotion").split(" "),t=1;t<r.length;t++)l[r[t]]=!0;s.push(e)}));var c,u,d,p,g=[U,(p=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],m=(u=[te,ae].concat(o,g),d=h(u),function(e,r,t,a){for(var i="",n=0;n<d;n++)i+=u[n](e,r,t,a)||"";return i});i=function(e,r,t,a){c=t,W(q(e?e+"{"+r.styles+"}":r.styles),m),a&&(f.inserted[r.name]=!0)};var f={key:r,sheet:new n({key:r,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:i};return f.sheet.hydrate(s),f};var le=function(e,r,t){var a=e.key+"-"+r.name;!1===t&&void 0===e.registered[a]&&(e.registered[a]=r.styles)};var se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ce(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}var ue=!1,de=/[A-Z]|^ms/g,pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ge=function(e){return 45===e.charCodeAt(1)},me=function(e){return null!=e&&"boolean"!=typeof e},he=ce((function(e){return ge(e)?e:e.replace(de,"-$&").toLowerCase()})),fe=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(pe,(function(e,r,t){return xe={name:r,styles:t,next:xe},r}))}return 1===se[e]||ge(e)||"number"!=typeof r||0===r?r:r+"px"},be="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ve(e,r,t){if(null==t)return"";var a=t;if(void 0!==a.__emotion_styles)return a;switch(typeof t){case"boolean":return"";case"object":var i=t;if(1===i.anim)return xe={name:i.name,styles:i.styles,next:xe},i.name;var n=t;if(void 0!==n.styles){var o=n.next;if(void 0!==o)for(;void 0!==o;)xe={name:o.name,styles:o.styles,next:xe},o=o.next;return n.styles+";"}return function(e,r,t){var a="";if(Array.isArray(t))for(var i=0;i<t.length;i++)a+=ve(e,r,t[i])+";";else for(var n in t){var o=t[n];if("object"!=typeof o){var l=o;null!=r&&void 0!==r[l]?a+=n+"{"+r[l]+"}":me(l)&&(a+=he(n)+":"+fe(n,l)+";")}else{if("NO_COMPONENT_SELECTOR"===n&&ue)throw new Error(be);if(!Array.isArray(o)||"string"!=typeof o[0]||null!=r&&void 0!==r[o[0]]){var s=ve(e,r,o);switch(n){case"animation":case"animationName":a+=he(n)+":"+s+";";break;default:a+=n+"{"+s+"}"}}else for(var c=0;c<o.length;c++)me(o[c])&&(a+=he(n)+":"+fe(n,o[c])+";")}}return a}(e,r,t);case"function":if(void 0!==e){var l=xe,s=t(e);return xe=l,ve(e,r,s)}}var c=t;if(null==r)return c;var u=r[c];return void 0!==u?u:c}var xe,we=/label:\s*([^\s;{]+)\s*(;|$)/g;function ye(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,i="";xe=void 0;var n=e[0];null==n||void 0===n.raw?(a=!1,i+=ve(t,r,n)):i+=n[0];for(var o=1;o<e.length;o++){if(i+=ve(t,r,e[o]),a)i+=n[o]}we.lastIndex=0;for(var l,s="";null!==(l=we.exec(i));)s+="-"+l[1];var c=function(e){for(var r,t=0,a=0,i=e.length;i>=4;++a,i-=4)r=1540483477*(65535&(r=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(i){case 3:t^=(255&e.charCodeAt(a+2))<<16;case 2:t^=(255&e.charCodeAt(a+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(a)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)}(i)+s;return{name:c,styles:i,next:xe}}var ke=!!i.useInsertionEffect&&i.useInsertionEffect,Ae=ke||function(e){return e()},$e=(ke||a.useLayoutEffect,a.createContext("undefined"!=typeof HTMLElement?oe({key:"css"}):null)),Ne=($e.Provider,function(e){return(0,a.forwardRef)((function(r,t){var i=(0,a.useContext)($e);return e(r,i,t)}))}),Ee=a.createContext({});var Ce,Fe,Oe={}.hasOwnProperty,Ye="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",He=function(e){var r=e.cache,t=e.serialized,a=e.isStringTag;return le(r,t,a),Ae((function(){return function(e,r,t){le(e,r,t);var a=e.key+"-"+r.name;if(void 0===e.inserted[r.name]){var i=r;do{e.insert(r===i?"."+a:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(r,t,a)})),null},je=Ne((function(e,r,t){var i=e.css;"string"==typeof i&&void 0!==r.registered[i]&&(i=r.registered[i]);var n=e[Ye],o=[i],l="";"string"==typeof e.className?l=function(e,r,t){var a="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]+";"):t&&(a+=t+" ")})),a}(r.registered,o,e.className):null!=e.className&&(l=e.className+" ");var s=ye(o,void 0,a.useContext(Ee));l+=r.key+"-"+s.name;var c={};for(var u in e)Oe.call(e,u)&&"css"!==u&&u!==Ye&&(c[u]=e[u]);return c.className=l,t&&(c.ref=t),a.createElement(a.Fragment,null,a.createElement(He,{cache:r,serialized:s,isStringTag:"string"==typeof n}),a.createElement(n,c))})),Se=(t(4146),function(e,r){var t=arguments;if(null==r||!Oe.call(r,"css"))return a.createElement.apply(void 0,t);var i=t.length,n=new Array(i);n[0]=je,n[1]=function(e,r){var t={};for(var a in r)Oe.call(r,a)&&(t[a]=r[a]);return t[Ye]=e,t}(e,r);for(var o=2;o<i;o++)n[o]=t[o];return a.createElement.apply(null,n)});Ce=Se||(Se={}),Fe||(Fe=Ce.JSX||(Ce.JSX={}));function ze(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return ye(r)}},4561:(e,r)=>{var t;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=o(e,n(t)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)a.call(e,t)&&e[t]&&(r=o(r,t));return r}function o(e,r){return r?e?e+" "+r:e+r:e}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(r,[]))||(e.exports=t)}()},5755:(e,r,t)=>{"use strict";t.d(r,{A:()=>h});var a=t(6540),i=t(4561),n=t.n(i),o=t(2318),l=t(2167),s=t(7495);const c=(e,r=!0)=>o.AH`
    ${r&&o.AH`
        box-shadow: 0px 2px 4px rgba(45, 35, 66, 0.4),
          0px 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0px -3px 0px ${e};
      `}
    &:hover {
      box-shadow: 0px 4px 8px rgba(45, 35, 66, 0.4),
        0px 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0px -3px 0px ${e};
      transform: translateY(-2px);
    }
    &:focus {
      box-shadow: inset 0 0 0 1.5px ${e}, 0px 2px 4px rgba(45, 35, 66, 0.4),
        0px 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0px -3px 0px ${e};
    }
    &:active {
      box-shadow: inset 0px 3px 7px ${e};
      transform: translateY(2px);
    }
  `,u={root:o.AH`
    height: 42px;
    transition: box-shadow 0.15s ease, transform 0.15s ease;
    will-change: box-shadow, transform;

    @media (min-width: ${l.LG}) {
      height: 48px;
    }
  `,text:o.AH`
    top: -2px;
  `,disabled:o.AH`
    transform: none !important;
  `,blue:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.h2} 0%,
      ${s.Kh} 100%
    );
    box-shadow: 0px 2px 4px rgba(45, 35, 66, 0.4),
      0px 7px 13px -3px rgba(45, 35, 66, 0.3),
      inset 0px -3px 0px rgba(58, 65, 111, 0.5);
    ${c(s.DO,!1)}
  `,pink:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.hn} 0%,
      ${s.UZ} 100%
    );
    ${c(s.Bz)}
  `,white:o.AH`
    background: ${s.kJ};
    ${c(s.T6)}
  `,orange:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.d5} 0%,
      ${s.D1} 100%
    );
    ${c(s.y6)}
  `,green:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.I3} 0%,
      ${s.kE} 100%
    );
    ${c(s.lX)}
  `,purple:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.A3} 0%,
      ${s.DG} 100%
    );
    ${c("rgb(0 0 0 / 20%)")}
  `,red:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.KU} 0%,
      ${s.D7} 100%
    );
    ${c("rgb(0 0 0 / 20%)")}
  `,dark:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.ml} 0%,
      ${s._m} 100%
    );
    ${c(s.iF)}
  `,answers:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.A3} 0%,
      ${s.DG} 100%
    );
    ${c("rgba(54, 57, 90, 0.2)")}
  `,search:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.h2} 0%,
      ${s.Kh} 100%
    );
    ${c("rgba(54, 57, 90, 0.2)")}
  `,recommend:o.AH`
    background: radial-gradient(
      100% 100% at 100% 0%,
      ${s.KU} 0%,
      ${s.D7} 100%
    );
    ${c("rgba(54, 57, 90, 0.2)")}
  `,round:o.AH`
    width: 42px;
    @media (min-width: ${l.LG}) {
      width: 48px;
    }
  `,shine:e=>o.AH`
    ${!e&&o.AH`
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
      `}
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: var(--size);
      height: var(--size);
      background: radial-gradient(
        circle closest-side,
        var(--shineColor),
        transparent
      );
      transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)));
      transition: height 0.2s ease;
      will-change: width, height, transform;
    }
  `,shineIcon:o.AH`
    filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.4));
  `},d={grey:"uil-color-grey-800",white:"uil-color-white"},p=e=>`\n \n  &:hover {\n    background: ${e};\n    transition: background .3s;\n  }\n  &:focus {\n    background: ${e};\n    transition: background .3s;\n  }\n  `,g=e=>{let r="uil-color-white uil-bdc-white";return"blue"===e&&(r="uil-color-nebula-500 uil-bdc-nebula-500"),"dark"===e&&(r="uil-color-grey-800 uil-bdc-grey-200"),"uil-bgc-transparent uil-bdw-2 uil-bds-solid "+r},m=({background:e="white",children:r,color:t="grey",disabled:i,fontSize:l="normal",ghost:s=!1,icon:c,iconPosition:m="after",iconProps:h={},padding:f="normal",primary:b=!1,round:v,shine:x=!0,shineColor:w="rgba(255, 255, 255, 0.2)",tag:y="button",...k})=>{const A=k.href?"a":y,{className:$,css:N,style:E,...C}=k,[F,O]=(0,a.useState)(0),[Y,H]=(0,a.useState)(0),[j,S]=(0,a.useState)(0),z=t=>c&&((e,r,t,a,i,l,s)=>{const c=a,{className:d,css:p,...g}=i;return(0,o.Y)(c,Object.assign({},g,{className:n()("uil-pos-relative uil-z-2 uil-fxs-0 uil-pe-none",r?"uil-w-18 uil-h-18 lg:uil-w-24 lg:uil-h-24":"uil-w-14 uil-h-14 lg:uil-w-18 lg:uil-h-18",t,d),css:[s&&("white"!==e||l)&&u.shineIcon,p]}))})(e,"big"===l,n()(r&&t),c,h,b,x);return(0,o.Y)(A,Object.assign({},C,{onMouseMove:e=>{const r=e.target;O(e.clientX-r.getBoundingClientRect().left),H(e.clientY-r.getBoundingClientRect().top)},onMouseEnter:()=>S(v?50:250),onMouseLeave:()=>S(0),css:[u.root,!s&&u[b?"blue":e],s&&(e=>{if(s)switch(e){case"blue":return o.AH`
          ${i?"":p("rgba(84, 104, 255, 0.2)")}
        `;case"dark":return o.AH`
          ${i?"":p("rgba(33, 36, 61, 0.2)")}
        `;default:return o.AH`
          ${i?"":p("rgba(255, 255, 255, 0.3)")};
        `}})(e),v&&u.round,i&&u.disabled,x&&("white"!==e||b)&&u.shine(s),N],style:{"--x":`${F}px`,"--y":`${Y}px`,"--shineColor":w,"--size":`${j}px`,...E},className:n()("uil-app-none uil-bdw-0 uil-d-inline-flex uil-ai-center uil-jc-center uil-cursor-pointer uil-ff-jetbrains uil-td-none hover:uil-td-none",!s&&(b?d.white:d[t]),s?n()("uil-ph-16 uil-pv-16",{"sm:uil-ph-32":"small"!==f}):v?"uil-ph-0":"small"===f?"uil-ph-16":"uil-ph-24 lg:uil-ph-32",s&&g(e),v?"uil-bdr-max":"uil-bdr-4",x&&"uil-pos-relative uil-ov-hidden",i&&"uil-op-40p uil-cursor-not-allowed",$)}),c&&"before"===m&&z("uil-mr-8"),r&&(0,o.Y)("span",{className:n()("uil-pe-none uil-pos-relative uil-z-2","big"===l?"uil-fsz-18 lg:uil-fsz-24":"uil-fsz-14 lg:uil-fsz-18",i&&"uil-us-none"),css:!s&&u.text},r),c&&"after"===m&&z("uil-ml-8"))};m.displayName="Button";const h=m},6669:(e,r,t)=>{"use strict";t.d(r,{A:()=>c});var a=t(4561),i=t.n(a),n=t(2318);const o={grey:"uil-color-grey-700","light-grey":"uil-color-grey-300",white:"uil-color-white"},l={big:"uil-lh-big",bigger:"uil-lh-bigger",small:"uil-lh-small"},s=({children:e,color:r="grey",lineHeight:t="bigger",small:a=!1,tag:s="p",...c})=>{const{className:u,...d}=c;return(0,n.Y)(s,Object.assign({},d,{className:i()("uil-fw-normal uil-ff-poppins",a?"uil-fsz-14":"uil-fsz-16 lg:uil-fsz-18",l[t],o[r],u)}),e)};s.displayName="Text";const c=s},6782:e=>{"use strict";e.exports={options:{namespace:"uil",important:!1,separator:"\\:"},breakpoints:{xs:"500px",sm:"768px",md:"960px",lg:"1200px",xl:"1440px",xxl:"1920px"},colors:{transparent:"transparent",white:"#fff",black:"#000","grey-900":"#23263B","grey-800":"#36395A","grey-700":"#484C7A","grey-600":"#5A5E9A","grey-500":"#777AAF","grey-400":"#9698C3","grey-300":"#B6B7D5","grey-200":"#D6D6E7","grey-100":"#F5F5FA","grey-050":"#FCFCFD","grey-000":"#FFFFFF","pink-900":"#59063D","pink-800":"#88085C","pink-700":"#B80979","pink-600":"#E90A96","pink-500":"#F82CAA","pink-400":"#FB5ABC","pink-300":"#FD89CE","pink-200":"#FEB9E2","pink-100":"#FFEAF6","nebula-900":"#141D61","nebula-800":"#1E2B8F","nebula-700":"#2B3CBB","nebula-600":"#3C4FE0","nebula-500":"#5468FF","nebula-400":"#7C8AFF","nebula-300":"#A3ACFF","nebula-200":"#CACFFF","nebula-100":"#F2F3FF","cyan-900":"#00526C","cyan-800":"#00769B","cyan-700":"#009BCB","cyan-600":"#0DB7EB","cyan-500":"#2CC8F7","cyan-400":"#5ADAFF","cyan-300":"#89E5FF","cyan-200":"#B9EFFF","cyan-100":"#E8FAFF","green-900":"#005E36","green-800":"#028950","green-700":"#06B66C","green-600":"#0DE589","green-500":"#5FEB9E","green-400":"#88F0B3","green-300":"#AAF4C8","green-200":"#C9F8DE","green-100":"#E6FCF3","orange-900":"#963209","orange-800":"#BF470A","orange-700":"#E8600A","orange-600":"#F78125","orange-500":"#FAA04B","orange-400":"#FCBC73","orange-300":"#FED59A","orange-200":"#FFE9C3","orange-100":"#FFF9EC","red-900":"#83111E","red-800":"#AB1325","red-700":"#D4142A","red-600":"#EE243C","red-500":"#F4495D","red-400":"#F86E7E","red-300":"#FC95A1","red-200":"#FEBDC5","red-100":"#FFE6E9","color-predict":"#FFA724","color-answer":"#952AFF","color-recommend":"#FF2A6A"},spacing:{0:0,1:"1px",4:"4px",8:"8px",12:"12px",16:"16px",20:"20px",24:"24px",32:"32px",40:"40px",48:"48px",62:"62px",70:"70px",80:"80px",90:"90px",110:"110px",120:"120px",170:"170px","50p":"50%","80p":"80%"},sizes:{0:0,1:"1px",4:"4px",10:"10px",14:"14px",16:"16px",18:"18px",20:"20px",24:"24px",25:"25px",30:"30px",35:"35px",40:"40px",50:"50px",60:"60px",70:"70px",75:"75px",80:"80px",90:"90px",100:"100px",130:"130px",170:"170px",200:"200px",240:"240px",300:"300px",350:"350px",400:"400px",450:"450px",500:"500px",600:"600px",700:"700px",750:"750px",800:"800px",900:"900px",1300:"1300px","10p":"10%","20p":"20%","25p":"25%","30p":"30%","33p":"33.333333%","40p":"40%","50p":"50%","60p":"60%","66p":"66.666666%","70p":"70%","75p":"75%","80p":"80%","90p":"90%","100p":"100%","100vh":"100vh","100vw":"100vw"}}},7283:(e,r,t)=>{"use strict";t.d(r,{A:()=>X});var a=t(6540),i=t(4561),n=t.n(i),o=t(2318),l=t(961),s=t(5556),c=t.n(s);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}function d(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=(0,a.forwardRef)((function(e,r){var t=e.color,i=void 0===t?"currentColor":t,n=e.size,o=void 0===n?24:n,l=d(e,["color","size"]);return a.createElement("svg",u({ref:r,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}));p.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},p.displayName="X";const g=p;var m=t(2167);const h={content:o.AH`
    max-height: calc(100vh - 50px);
    @media (min-width: ${m.LG}) {
      max-height: calc(100vh - 70px);
    }
  `},f=({children:e,displayCloseIcon:r=!0,handleClose:t,isActive:i=!1,large:s=!1,targetEl:c=("undefined"!=typeof document?document.body:new Element),theme:u="light",...d})=>{const p=e=>{"Escape"!==e.key&&"Esc"!==e.key&&27!==e.keyCode||t(e)};(0,a.useEffect)((()=>("undefined"!=typeof document&&document.addEventListener("keydown",p),()=>{"undefined"!=typeof document&&document.removeEventListener("keydown",p)})),[]),(0,a.useEffect)((()=>{if("undefined"!=typeof document){const e=document.querySelector("body");e&&(i?e.classList.add("uil-ov-hidden"):e.classList.remove("uil-ov-hidden"))}}),[i]);const{className:m,...f}=d;return(0,l.createPortal)((0,o.Y)("div",Object.assign({},f,{className:n()(m,i?"uil-pos-fixed uil-top-0 uil-bot-0 uil-left-0 uil-right-0":"uil-d-none","uil-ov-hidden uil-z-max")}),(0,o.Y)("div",{className:n()("light"===u?"uil-bgc-grey-100":"uil-bgc-grey-900","uil-pos-fixed uil-top-0 uil-bot-0 uil-left-0 uil-right-0 uil-op-75p"),onClick:t}),(0,o.Y)("div",{className:"uil-pos-relative uil-ta-right uil-w-100p uil-ov-auto uil-h-100vh uil-d-flex uil-jc-center uil-ai-center"},(0,o.Y)("div",{className:n()("w-100p",s?"uil-maw-1440":"uil-maw-800")},r&&(0,o.Y)("div",{className:"uil-h-50 uil-ph-12 uil-d-flex uil-ai-center uil-jc-end lg:uil-h-70"},(0,o.Y)("button",{"aria-label":"Close modal",className:"uil-p-0 uil-app-none uil-bdw-0 uil-bgc-transparent uil-cursor-pointer",onClick:t},(0,o.Y)(g,{"aria-hidden":!0,strokeWidth:1,name:"cross",className:n()("lg:uil-w-30 lg:uil-h-30","light"===u?"uil-color-grey-900":"uil-color-grey-100")}))),(0,o.Y)("div",{className:n()("uil-ta-left uil-ph-12",!r&&"uil-mah-100vh"),css:r&&h.content},(0,o.Y)("div",{className:n()("uil-pb-12 lg:uil-pb-24",!r&&"uil-pt-12 lg:uil-pt-24")},e))))),c)},b=({className:e,text:r})=>a.createElement("div",{className:n()("uil-p-20 uil-d-flex uil-ff-mono uil-ta-center uil-color-white uil-bgc-red-600",e)},a.createElement("div",{className:"uil-m-auto"},a.createElement("h3",{className:"uil-mt-0 uil-fsz-20"},"Error!"),a.createElement("p",{className:"uil-mb-0 uil-fsz-16"},r)));class v extends a.Component{constructor(){super(...arguments),this.state={hasError:!1,errorMessage:""}}static getDerivedStateFromError(e){return{hasError:!0,errorMessage:e.message}}render(){const{className:e,children:r}=this.props,{hasError:t,errorMessage:i}=this.state;return t?a.createElement(b,{className:n()(e),text:i}):r}}const x=v,w={vidyard:o.AH`
    padding-bottom: 52.5%;
  `,vimeo:o.AH`
    padding-bottom: 56.25%;
  `,youtube:o.AH`
    padding-bottom: 56.25%;
  `},{colors:y}=t(6782),k="undefined"!=typeof window,A=e=>e.includes("play.vidyard.com")?"vidyard":e.includes("player.vimeo.com")?"vimeo":!!e.includes("www.youtube.com/embed")&&"youtube",$={small:"uil-bdw-6",medium:"uil-bdw-12",large:"uil-bdw-16"},N={dark:"uil-bdc-grey-900",light:"uil-bdc-grey-600"},E=({autoPlay:e,borderColor:r="dark",iframeProps:t={},link:i,url:l,...s})=>{const{className:c,...u}=t,{className:d,...p}=s,g=(0,a.useRef)(null),[m,h]=(0,a.useState)("small");(0,a.useEffect)((()=>{if(g&&g.current){const e=()=>{const e=g.current.getBoundingClientRect();e&&e.width&&(e.width<=800?h("small"):e.width>=800&&e.width<=1200?h("medium"):h("large"))};e(),window.addEventListener("resize",e)}}));let f=l||i;f.includes("/watch?v=")&&(f=f.replace("/watch?v=","/embed/"));const b=A(f);let v=null;if(b&&(v=w[b],e))if(f.indexOf("?")>-1){const e=f.split("?"),r=new URLSearchParams(e[1]);r.set("autoplay","1");const t=`?${r.toString()}`;f=e[0]+t}else f+="?autoplay=1";if(b)return(0,o.Y)("div",Object.assign({},p,{className:n()("uil-w-100p",d)}),(0,o.Y)("div",{css:v,className:n()("uil-bgc-black uil-bxs-diffuse uil-bdr-16 uil-pos-relative uil-h-0 uil-ov-hidden uil-pt-24 uil-w-100p uil-bds-solid",N[r],$[m]),ref:g},(0,o.Y)("iframe",Object.assign({},u,{className:n()("uil-bd-none uil-pos-absolute uil-left-0 uil-top-0 uil-w-100p uil-h-100p",c),src:f}))));throw new Error("Wrong video source, you can only use embeddable videos url from: Youtube, Vimeo or Vidyard")},C=({autoPlay:e,iframeProps:r={},link:t,url:a,...i})=>(0,o.Y)(x,null,(0,o.Y)(E,Object.assign({},i,{autoPlay:e,iframeProps:r,link:t,url:a})));var F=t(9069),O=t(7785);const Y={icon:o.AH`
    top: 4px;
    @media (min-width: ${m.LG}) {
      top: 6px;
    }
  `},H={grey:"uil-color-grey-800","light-grey":"uil-color-grey-300",white:"uil-color-white"},j={normal:"uil-fw-normal",semibold:"uil-fw-semibold"},S=({children:e,color:r="grey",fontWeight:t="normal",icon:a,iconProps:i={},tag:l="h3",...s})=>{const{className:c,css:u,...d}=i,{className:p,...g}=s;return(0,o.Y)(l,Object.assign({},g,{className:n()("uil-fsz-20 uil-fw-normal uil-ff-poppins uil-lh-big","lg:uil-fsz-28",a&&"uil-d-flex",H[r],j[t],p)}),a&&(0,o.Y)(a,Object.assign({},d,{css:[Y.icon,u],className:n()("uil-mr-8 uil-w-18 uil-h-18 uil-pos-relative uil-fxs-0","lg:uil-w-24 lg:uil-h-24",c)})),e)};var z=t(6669);function P(){return P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},P.apply(this,arguments)}function L(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var B=(0,a.forwardRef)((function(e,r){var t=e.color,i=void 0===t?"currentColor":t,n=e.size,o=void 0===n?24:n,l=L(e,["color","size"]);return a.createElement("svg",P({ref:r,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}))}));B.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},B.displayName="Play";const D=B,G={button:o.AH`
    transition: transform 0.2s ease-out;
    will-change: transform;
    [data-with-play-button]:hover &,
    [data-with-play-button]:focus & {
      transform: scale(1.1);
    }
  `,icon:o.AH`
    left: 2px;
  `},_=({className:e,tag:r="button",...t})=>{const a=r;return(0,o.Y)(a,Object.assign({},t,{className:n()("uil-cursor-pointer uil-app-none uil-bdw-0 uil-bgc-transparent",e)}),(0,o.Y)("span",{className:"uil-d-flex uil-ai-center uil-jc-center uil-color-white uil-bgc-red-500 uil-bdr-max uil-w-50 uil-h-50 lg:uil-w-80 lg:uil-h-80",css:G.button},(0,o.Y)(D,{"aria-hidden":!0,className:"uil-pos-relative uil-w-20 uil-h-20 uil-fill-white lg:uil-w-32 lg:uil-h-32",css:G.icon})))},M="v1657020250",T=`https://res.cloudinary.com/hilnmyskv/image/upload/${M}/ui-library`,R={button:o.AH`
    min-width: 200px;
  `,background:o.AH`
    background-size: 100% 100%;
  `,imageRight:o.AH`
    left: 50%;
    top: 50%;
    transform: translateX(120px) translateY(-50%);
    @media (min-width: ${m.LG}) {
      transform: translateX(280px) translateY(-50%);
    }
  `,imageLeft:o.AH`
    right: 50%;
    top: 50%;
    transform: translateX(-120px) translateY(-50%);
    @media (min-width: ${m.LG}) {
      transform: translateX(-280px) translateY(-50%);
    }
  `,video:o.AH`
    padding-bottom: 66%;
    @media (min-width: ${m.XS}) {
      padding-bottom: 46%;
    }
    @media (min-width: ${m.MD}) {
      padding-bottom: 66%;
    }
  `,videoTransform:o.AH`
    @media (min-width: ${m.MD}) {
      transform: translateY(-50%);
    }
  `,videoMaxHeight:o.AH`
    max-height: 300px;
  `,playButton:o.AH`
    transform: translate(-50%, -50%);
  `,athleticFields:o.AH`
    padding-bottom: 41%;
    background-image: url('${T}/hero/athletic-fields.svg');
    top: 50%;
    transform: translateY(-50%);
  `,bigCubes:o.AH`
    padding-bottom: 121.25%;
    background-image: url('${T}/hero/big-cubes.svg');
    bottom: calc(-45vw + 95px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-45vw + 135px);
    }
  `,bubbles:o.AH`
    padding-bottom: 35.06%;
    background-image: url('${T}/hero/bubbles.svg');
    bottom: calc(-18vw + 230px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-18vw + 300px);
    }
  `,circles:o.AH`
    padding-bottom: 67.74%;
    background-image: url('${T}/hero/circles.svg');
    bottom: calc(-17.7vw + 103px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-17.7vw + 147px);
    }
  `,cloudLines:o.AH`
    max-width: 650px;
    padding-bottom: 28%;
    background-image: url('${T}/hero/cloud-lines.svg');
    background-size: contain;
    background-repeat: no-repeat;
    top: 50%;
    transform: translateY(-50%);
  `,cubes:o.AH`
    padding-bottom: 36.75%;
    background-image: url('${T}/hero/cubes.svg');
    bottom: calc(-20vw + 140px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-20vw + 180px);
    }
  `,curves:o.AH`
    padding-bottom: 55.27%;
    background-image: url('${T}/hero/curves.svg');
    bottom: calc(-22.5vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-22.5vw + 142px);
    }
  `,docsearch:o.AH`
    padding-bottom: 16.92%;
    background-image: url('${T}/hero/docsearch.svg');
    bottom: calc(-22.5vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-22.5vw + 142px);
    }
  `,graph:o.AH`
    padding-bottom: 55.27%;
    background-image: url('${T}/hero/graph.svg');
    bottom: calc(-17vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-17vw + 142px);
    }
  `,graphBlueLine:o.AH`
    padding-bottom: 55.27%;
    background-image: url('${T}/hero/graph-blue-line.svg');
    bottom: calc(-17vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-17vw + 142px);
    }
  `,intersections:o.AH`
    top: 50%;
    padding-bottom: 115.49%;
    background-image: url('${T}/hero/intersections.svg');
    transform: translateY(-50%);
  `,map:o.AH`
    padding-bottom: 59.375%;
    background-image: url('${T}/hero/map.svg');
    bottom: calc(-37vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-37vw + 140px);
    }
  `,orangeSquare:o.AH`
    width: 954px;
    height: 500px;
    margin: auto;
    bottom: 100px;
    background-image: url('${T}/hero/orange-square.svg');
    @media (min-width: ${m.LG}) {
      width: 1336px;
      height: 700px;
      bottom: 140px;
    }
  `,orbit:o.AH`
    top: 50%;
    padding-bottom: 55.27%;
    background-image: url('${T}/hero/orbit.svg');
    transform: translateY(-50%);
  `,orbInside:o.AH`
    top: 50%;
    padding-bottom: 48.74%;
    background-image: url('${T}/hero/orb-inside.svg');
    transform: translateY(-50%);
  `,rectangles:o.AH`
    top: 50%;
    padding-bottom: 48.6%;
    background-image: url('${T}/hero/rectangles.svg');
    transform: translateY(-50%);
  `,rectangles2:o.AH`
    padding-bottom: 62.87%;
    background-image: url('${T}/hero/rectangle2.svg');
    top: 50%;
    transform: translateY(-50%);
  `,rounds:o.AH`
    top: 50%;
    padding-bottom: 38.5%;
    background-image: url('${T}/hero/rounds.svg');
    transform: translateY(-50%);
  `,spirals:o.AH`
    padding-bottom: 50%;
    background-image: url('${T}/hero/spirals.svg');
    top: 50%;
    transform: translateY(-50%);
  `,spotlights:o.AH`
    padding-bottom: 55.27%;
    background-image: url('${T}/hero/spotlights.svg');
    bottom: calc(-22.5vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-22.5vw + 142px);
    }
  `,triangles:o.AH`
    padding-bottom: 56.25%;
    background-image: url('${T}/hero/triangles.svg');
    top: 50%;
    transform: translateY(-50%);
  `,waves:o.AH`
    padding-bottom: 19.125%;
    background-image: url('${T}/hero/waves.svg');
    bottom: calc(-10vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-10vw + 160px);
    }
  `,whirl:o.AH`
    padding-bottom: 56.25%;
    background-image: url('${T}/hero/whirl.svg');
    bottom: calc(-25vw + 100px);
    @media (min-width: ${m.LG}) {
      bottom: calc(-25vw + 140px);
    }
  `},I=({modalOpen:e,setModalOpen:r,poster:t,video:i,videoProps:l={}})=>{const s=l.tag||"video",{className:c,tag:u,...d}=l;if(i&&!t)throw new Error("poster parameter must be set when using video and videoInModal parameters.");return(0,o.Y)(f,{theme:"dark",handleClose:()=>r(!1),isActive:e,hasVideo:!0},e&&(0,o.Y)(a.Fragment,null,A(i)?(0,o.Y)(C,Object.assign({autoPlay:!0,className:"uil-m-auto uil-w-70p md:uil-w-100p",url:i},d)):(0,o.Y)(s,Object.assign({},d,{autoPlay:!0,className:n()("uil-h-auto uil-m-auto uil-d-block uil-w-70p md:uil-w-100p",c),src:i}))))},X=({align:e,background:r,children:t,cta:i,text:l,textProps:s={},videoInModal:c,image:u,imageProps:d={},label:p,labelProps:g={},padding:m="normal",poster:h,subtitle:f,subtitleProps:b={},title:v,titleProps:w={},video:y,videoProps:A={},...$})=>{const[N,E]=(0,a.useState)(!1),{className:C,css:Y,tag:H,...j}=d,{className:P,css:L,tag:B,...D}=A,{className:G,...M}=w,{className:T,color:X,...W}=b,{className:U,...q}=s,{className:K,color:J,...V}=g,{className:Z,...Q}=$,ee=H||"img",re=A.tag||"video",te="left"===e||(u||y)&&"right"!==e,ae="right"===e;return(0,o.Y)("header",Object.assign({},Q,{className:n()("uil-ph-20 uil-ta-center uil-pos-relative",te&&"md:uil-ta-left",ae&&"md:uil-ta-right","small"===m?"uil-pv-32 lg:uil-pv-48":"uil-pv-80 lg:uil-pv-120",Z)}),k&&y&&c&&(0,o.Y)(x,null,(0,o.Y)(I,{modalOpen:N,setModalOpen:E,video:y,videoProps:A,poster:h})),r&&(0,o.Y)("div",{css:[R.background,R[r]],className:"uil-pos-absolute uil-bgp-center uil-left-0 uil-right-0 uil-d-none uil-m-auto md:uil-d-block"}),(0,o.Y)("div",{className:"uil-pos-relative uil-z-1 uil-maw-500 uil-m-auto md:uil-maw-1440"},t,p&&(0,o.Y)(F.A,Object.assign({},V,{big:!0,className:n()("uil-d-block uil-mt-0 uil-mb-8",K),color:J||"blue",tag:"p"}),p),(0,o.Y)(O.A,Object.assign({},M,{className:n()("uil-m-0 uil-maw-35ch uil-mr-auto",y?"md:uil-w-60p lg:uil-w-50p":"uil-ml-auto md:uil-w-60p lg:uil-w-70p",te&&"md:uil-ml-0",ae&&"md:uil-ml-auto md:uil-mr-0",G),tag:"h1"}),v),f&&(0,o.Y)(S,Object.assign({},W,{className:n()("uil-mt-8 uil-mb-0 uil-ml-auto uil-mr-auto uil-jc-center lg:uil-mt-20",te&&"md:uil-ml-0",ae&&"md:uil-mr-0",(te||ae)&&"md:uil-w-50p",T),color:X,tag:"p"}),f),l?(0,o.Y)(z.A,Object.assign({},q,{className:n()("uil-fw-bold",U)}),l):null,u&&(0,o.Y)("div",{className:"md:uil-d-none"},(0,o.Y)(ee,Object.assign({},j,{className:n()("uil-mt-32 uil-w-100p uil-h-auto",C),src:u,loading:"eager"}))),i&&(0,o.Y)("div",{className:n()("uil-mt-32 uil-mh-auto uil-d-flex uil-fxd-column uil-ai-center xs:uil-fxd-row xs:uil-jc-center lg:uil-mt-48",te&&"md:uil-jc-start",ae&&"md:uil-jc-end")},a.Children.map(i,((e,r)=>{const t=e.type;return t?(0,o.Y)(t,Object.assign({},e.props,{css:t.displayName&&"Button"===t.displayName&&R.button,className:n()(e.props.className,0!==r&&"uil-mt-16 xs:uil-mt-0 xs:uil-ml-24")})):(0,o.Y)("div",{className:n()(0!==r&&"uil-mt-16 xs:uil-mt-0 xs:uil-ml-24")},e)})))),u&&(0,o.Y)("div",{className:n()("uil-d-none","md:uil-d-block md:uil-pos-absolute md:uil-left-0 md:uil-top-0 md:uil-right-0 md:uil-bot-0 md:uil-ov-hidden")},(0,o.Y)(ee,Object.assign({},j,{css:[te&&R.imageRight,ae&&R.imageLeft,Y],className:n()("uil-pos-absolute uil-mah-100p",C),src:u}))),y&&(0,o.Y)("div",{css:R.videoTransform,className:n()("uil-z-1 uil-mh-auto uil-mt-32 md:uil-mt-auto md:uil-pos-absolute md:uil-top-50p md:uil-d-flex md:uil-ai-center",c?"md:uil-w-100p uil-maw-500":"uil-maw-700",te?"md:uil-left-50p":"md:uil-left-0 md:uil-right-50p md:uil-mr-0")},c?(0,o.Y)("button",{className:"uil-h-100p uil-pos-relative uil-bd-none uil-app-none uil-bgc-transparent uil-cursor-pointer uil-bgs-contain uil-bgp-center uil-bgr-no-repeat uil-w-100p xs:uil-w-70p md:uil-h-60p md:uil-fl-right lg:uil-bgs-cover lg:uil-w-100p",css:[R.video,o.AH`
                  background-image: url(${h});
                `],"data-with-play-button":!0,"aria-label":"Play video",onClick:()=>E(!0)},(0,o.Y)(_,{"aria-hidden":!0,className:"uil-pos-absolute uil-pe-none uil-top-50p uil-left-50p",css:R.playButton,tag:"span"})):(0,o.Y)("div",{className:"uil-pos-relative uil-m-auto xs:uil-w-60p md:uil-w-70p md:uil-fl-right lg:uil-w-100p"},(0,o.Y)(re,Object.assign({autoPlay:!0,muted:!0,loop:!0},D,{css:[L,R.videoMaxHeight],className:n()("uil-h-auto uil-m-auto uil-d-block uil-w-100p md:uil-w-70p lg:uil-w-80p",P),src:y})))))}},7495:(e,r,t)=>{"use strict";t.d(r,{A3:()=>w,BS:()=>x,Bz:()=>A,D1:()=>h,D7:()=>Y,DG:()=>O,DO:()=>v,I3:()=>N,KU:()=>g,Kh:()=>b,Qi:()=>o,T6:()=>l,UE:()=>i,UZ:()=>k,_m:()=>u,d5:()=>m,dW:()=>d,h2:()=>$,hm:()=>s,hn:()=>y,iF:()=>p,kE:()=>E,kJ:()=>n,lX:()=>C,ml:()=>c,oJ:()=>F,y6:()=>f});const a=t(6782),i=a.colors.white,n=(a.colors.transparent,a.colors["grey-050"]),o=a.colors["grey-100"],l=a.colors["grey-200"],s=(a.colors["grey-300"],a.colors["grey-400"]),c=a.colors["grey-500"],u=(a.colors["grey-600"],a.colors["grey-700"]),d=a.colors["grey-800"],p=a.colors["grey-900"],g=(a.colors["orange-100"],a.colors["orange-200"],a.colors["orange-300"],a.colors["orange-400"]),m=a.colors["orange-500"],h=(a.colors["orange-600"],a.colors["orange-700"]),f=a.colors["orange-800"],b=(a.colors["orange-900"],a.colors["nebula-100"],a.colors["nebula-200"],a.colors["nebula-300"],a.colors["nebula-400"],a.colors["nebula-500"]),v=a.colors["nebula-600"],x=(a.colors["nebula-700"],a.colors["nebula-800"]),w=(a.colors["nebula-900"],a.colors["pink-100"],a.colors["pink-200"]),y=a.colors["pink-300"],k=(a.colors["pink-400"],a.colors["pink-500"],a.colors["pink-600"]),A=a.colors["pink-700"],$=(a.colors["pink-800"],a.colors["pink-900"],a.colors["red-100"],a.colors["red-200"],a.colors["red-300"],a.colors["red-400"],a.colors["red-500"],a.colors["red-600"],a.colors["red-700"],a.colors["red-800"],a.colors["red-900"],a.colors["cyan-100"],a.colors["cyan-200"],a.colors["cyan-300"],a.colors["cyan-400"]),N=(a.colors["cyan-500"],a.colors["cyan-600"],a.colors["cyan-700"],a.colors["cyan-800"],a.colors["cyan-900"],a.colors["green-100"],a.colors["green-200"],a.colors["green-300"],a.colors["green-400"],a.colors["green-500"]),E=(a.colors["green-600"],a.colors["green-700"]),C=a.colors["green-800"],F=a.colors["green-900"],O=(a.colors["color-predict"],a.colors["color-answer"]),Y=a.colors["color-recommend"]},7785:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var a=t(4561),i=t.n(a),n=t(2318);const o={grey:"uil-color-grey-800","light-grey":"uil-color-grey-300",white:"uil-color-white"},l=({children:e,color:r="grey",tag:t="h1",...a})=>{const{className:l,...s}=a;return(0,n.Y)(t,Object.assign({},s,{className:i()("uil-fsz-36 uil-lsp-small uil-lh-small uil-fw-bold uil-ff-poppins","lg:uil-fsz-56",o[r],l)}),e)}},9069:(e,r,t)=>{"use strict";t.d(r,{A:()=>c});var a=t(6540),i=t(4561),n=t.n(i),o=t(2318);const l={blue:"uil-color-nebula-500","light-blue":"uil-color-nebula-400",green:"uil-color-green-700",grey:"uil-color-grey-800","light-grey":"uil-color-grey-300",orange:"uil-color-orange-600",pink:"uil-color-pink-600",red:"uil-color-red-600",white:"uil-color-white",recommend:"uil-color-color-recommend"},s=(e,r,t)=>a.Children.map(e,((e,i)=>(t||r)&&e&&void 0!==e&&0===i?(0,o.Y)(a.Fragment,null,e,(0,o.Y)("span",{className:"uil-ff-poppins uil-fw-semibold uil-ml-8 uil-lsp-normal uil-tt-lower uil-color-nova uil-d-inline-block uil-fsz-10 lg:uil-fsz-12"},(()=>{switch(!0){default:case r:return"(required)";case t:return"(optional)"}})())):e)),c=({big:e=!1,children:r,color:t="grey",icon:a,iconProps:i={},optional:c=!1,required:u=!1,tag:d="span",...p})=>{const g=p.href?"a":d,{className:m,...h}=i,{className:f,...b}=p;return(0,o.Y)(g,Object.assign({},b,{className:n()("uil-ff-jetbrains uil-fw-semibold uil-lsp-big",l[t],a&&"uil-d-flex uil-ai-center",e?"uil-fsz-14 lg:uil-fsz-16":"uil-fsz-12 lg:uil-fsz-14",f)}),a&&(0,o.Y)(a,Object.assign({},h,{className:n()("uil-mr-8 uil-w-18 uil-h-18 uil-fxs-0 lg:uil-w-24 lg:uil-h-24",m)})),s(r,u,c))}}}]);