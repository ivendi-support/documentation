(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(120));const a={id:"AdditionalFinanceProducts",title:"Additional Finance Products",sidebar_label:"Additional Finance Products",slug:"/AdditionalFinanceProducts"},i={unversionedId:"Engage/AdditionalFinanceProducts",id:"Engage/AdditionalFinanceProducts",isDocsHomePage:!1,title:"Additional Finance Products",description:"If you would like to offer additional product types that are supported, such as conditional sale, a flag can be passed into the Engage widget bootstrapper as follows:",source:"@site/docs/Engage/AdditionalFinanceProducts.mdx",slug:"/AdditionalFinanceProducts",permalink:"/documentation/docs/AdditionalFinanceProducts",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/Engage/AdditionalFinanceProducts.mdx",version:"current",sidebar_label:"Additional Finance Products",sidebar:"someSidebar",previous:{title:"Predefined Data",permalink:"/documentation/docs/PredefinedData"}},c=[],d={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you would like to offer additional product types that are supported, such as conditional sale, a flag can be passed into the Engage widget bootstrapper as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var engage = new lib.Webshop({\n  ...hasCsFinance: true,\n});\n")),Object(o.b)("p",null,"This flag will enable the \u2018CS\u2019 finance button to appear within the budget section of your Engage widget filters. CS will also be included within the \u2018ANY\u2019 filter."))}l.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||p[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);