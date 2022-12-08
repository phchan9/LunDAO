"use strict";(self.webpackChunklun_dao=self.webpackChunklun_dao||[]).push([[1922],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},894:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={title:"Hardhat \u7c21\u4ecb",description:"Hardhat \u662f\u4e00\u5957\u958b\u767c\u667a\u80fd\u5408\u7d04\u7528\u7684\u958b\u767c\u5de5\u5177\uff0c\u672c\u7bc7\u6587\u7ae0\u6703\u4ecb\u7d39 Hardhat \u7684\u57fa\u790e\u4f7f\u7528\u65b9\u5f0f\u3002",slug:"hardhat-intro",tags:["hardhat","ethereum","solidity"],image:"./hardhat-cli-init.png",authors:"yurenju"},l=void 0,c={permalink:"/blog/hardhat-intro",editUrl:"https://github.com/lun-dao/LunDAO/tree/main/blog/2022-04-24-hardhat-intro/index.md",source:"@site/blog/2022-04-24-hardhat-intro/index.md",title:"Hardhat \u7c21\u4ecb",description:"Hardhat \u662f\u4e00\u5957\u958b\u767c\u667a\u80fd\u5408\u7d04\u7528\u7684\u958b\u767c\u5de5\u5177\uff0c\u672c\u7bc7\u6587\u7ae0\u6703\u4ecb\u7d39 Hardhat \u7684\u57fa\u790e\u4f7f\u7528\u65b9\u5f0f\u3002",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"hardhat",permalink:"/blog/tags/hardhat"},{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"solidity",permalink:"/blog/tags/solidity"}],readingTime:13.17,truncated:!0,authors:[{name:"Yuren Ju",title:"Individual Researcher",url:"https://yurenju.medium.com/",imageURL:"https://github.com/yurenju.png",key:"yurenju"}],prevItem:{title:"Hardhat tracer",permalink:"/blog/hardhat-tracer"},nextItem:{title:"Diamond 101 (1)",permalink:"/blog/diamond101"}},p={image:r(7198).Z,authorsImageUrls:[void 0]},d=[],s={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u64b0\u5beb\u4e00\u822c\u7a0b\u5f0f\u8a9e\u8a00\u5982 node.js \u6642\uff0c\u901a\u5e38\u53ea\u8981\u6e96\u5099\u57f7\u884c\u74b0\u5883\u8207\u7de8\u8f2f\u5668\u5c31\u53ef\u4ee5\u958b\u59cb\u9032\u884c\u958b\u767c\u4e86\u3002\u800c\u958b\u767c Solidity \u5247\u6709\u4e9b\u8a31\u4e0d\u540c\uff0c\u7531\u65bc\u7a0b\u5f0f\u6703\u9700\u8981\u8dd1\u5728\u5340\u584a\u93c8\u7db2\u8def\u4e0a\uff0c\u6240\u4ee5\u9019\u500b\u57f7\u884c\u74b0\u5883\u6703\u6bd4\u8f03\u8907\u96dc\uff0c\u6703\u9700\u8981\u900f\u904e RPC \u9023\u63a5\u4e26\u4e14\u4f48\u7f72\u5230\u5340\u584a\u93c8\u7db2\u8def\u4e0a\u9762\u4e26\u4e14\u57f7\u884c\u3001\u9664\u932f\u8207\u6e2c\u8a66\u3002"),(0,o.kt)("p",null,"Hardhat \u5c31\u662f\u958b\u767c Solidity \u667a\u80fd\u5408\u7d04\u6642\u6240\u9700\u8981\u7684\u958b\u767c\u5de5\u5177\uff0c\u9664\u4e86\u5167\u5efa\u4e00\u500b\u958b\u767c\u7528\u7684\u672c\u5730\u5340\u584a\u93c8\u7db2\u8def Hardhat Network \u5916\u9084\u6253\u9020\u4e86\u4e00\u5957 plugin \u7cfb\u7d71\u8b93\u8a31\u591a\u8ddf\u5340\u584a\u93c8\u76f8\u95dc\u7684\u5de5\u5177\u53ef\u4ee5\u6574\u5408\u5230 hardhat \u8b93\u958b\u767c\u8005\u53ef\u4ee5\u66f4\u5bb9\u6613\u9032\u884c\u958b\u767c\u3001\u9664\u932f\u3001\u6e2c\u8a66\u7b49\uff0c\u540c\u6642 Hardhat \u91dd\u5c0d TypeScript \u7684\u652f\u63f4\u6bd4\u8d77\u5176\u4ed6\u985e\u4f3c\u5de5\u5177\u9084\u8981\u512a\u826f\uff0c\u9019\u5728\u64b0\u5beb\u6e2c\u8a66\u6642\u6703\u6709\u5f88\u5927\u7684\u5e6b\u52a9\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u5c07\u6703\u7c21\u4ecb hardhat \u7684\u7528\u6cd5\u8207\u8ddf\u5176\u4ed6\u5de5\u5177\u6bd4\u8f03\u7684\u512a\u52e2\u3002"))}m.isMDXComponent=!0},7198:function(e,t,r){t.Z=r.p+"assets/images/hardhat-cli-init-16a3575d919c0ffa4f6ab950ce1a0e24.png"}}]);