(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(h,c(c({ref:t},u),{},{components:n})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(119)),i={id:"GettingStartedQuoteware",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},c={unversionedId:"GettingStartedQuoteware",id:"GettingStartedQuoteware",isDocsHomePage:!1,title:"Getting Started",description:"The iVendi Website Solutions - Finance Suite consists of several easy-to-integrate website widgets, which enables a customer to complete their vehicle finance journey online.",source:"@site/docs/GettingStartedQuoteware.md",slug:"/",permalink:"/documentation/docs/",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/GettingStartedQuoteware.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Quoteware Parameters",permalink:"/documentation/docs/QuotewareParameters"}},s=[{value:"Quoteware",id:"quoteware",children:[]},{value:"Payment Search",id:"payment-search",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The iVendi Website Solutions - Finance Suite consists of several easy-to-integrate website widgets, which enables a customer to complete their vehicle finance journey online."),Object(o.b)("p",null,"There are two main ways that you can use the qouteware"),Object(o.b)("h3",{id:"quoteware"},"Quoteware"),Object(o.b)("p",null,"Quoteware is the name of the engine that generates the quotes used in our products. It has multiple variable parameters that can be heavily customised to pull back different types of quotes depending on what you have specified in the request. "),Object(o.b)("p",null,"The main endpoint generates all information needed to display a 'Full Quote' which is to say that it can be quite bloated. This is due to the fact it powers our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Widget"}),"finance compartator widget"),"."),Object(o.b)("h3",{id:"payment-search"},"Payment Search"),Object(o.b)("p",null,"Payment search is a filter that can be applied to a selection of vehicles on a dealer website that allows the\nuser to narrow a choice of vehicles to those falling within a specific payment range.\nThe payment range itself is a product of the vehicle price; the vehicle itself; customer deposit; loan term;\nanticipated annual mileage; recorded mileage, and the sellout rate at which the dealer has set for motor\nfinance products being quoted, notably Hire Purchase (HP), Conditional Sales (CS), Personal Contact\nPurchase (PCP) and Lease Purchase (LP)."),Object(o.b)("p",null,"You can think of payment search as Quoteware Lite."))}l.isMDXComponent=!0}}]);