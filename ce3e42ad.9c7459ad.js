(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?o.a.createElement(b,i(i({ref:t},p),{},{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"Highlight",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(106));const a={id:"mdx",title:"Powered by MDX"},c={unversionedId:"mdx",id:"mdx",isDocsHomePage:!1,title:"Powered by MDX",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/docs/mdx.md",slug:"/mdx",permalink:"/documentation/docs/mdx",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/mdx.md",version:"current",sidebar:"someSidebar",previous:{title:"Finance Calculator",permalink:"/documentation/docs/FinanceCalculator"},next:{title:"Powered by MDX",permalink:"/documentation/docs/mdx"}},i=[],u=({children:e,color:t})=>Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:i,Highlight:u};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(o.b)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(o.b)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(o.b)("p",null,"I can write ",Object(o.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(o.b)("em",{parentName:"p"},"JSX"),"!"))}l.isMDXComponent=!0}}]);