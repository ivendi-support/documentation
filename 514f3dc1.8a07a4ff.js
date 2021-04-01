(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(h,c(c({ref:t},u),{},{components:n})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(116)),o={id:"GettingStartedQuoteware",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},c={unversionedId:"GettingStartedQuoteware",id:"GettingStartedQuoteware",isDocsHomePage:!1,title:"Getting Started",description:"The website solutions of iVendi's finance suite consists of several easy-to-integrate website widgets which enable a customer to complete their vehicle finance journey online. These widgets produce quotes using our Quoteware service.",source:"@site/docs/GettingStartedQuoteware.md",slug:"/",permalink:"/documentation/docs/",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/GettingStartedQuoteware.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Widget",permalink:"/documentation/docs/Widget"}},s=[{value:"Quoteware",id:"quoteware",children:[]},{value:"Payment Search",id:"payment-search",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The website solutions of iVendi's finance suite consists of several easy-to-integrate website widgets which enable a customer to complete their vehicle finance journey online. These widgets produce quotes using our Quoteware service."),Object(i.b)("h3",{id:"quoteware"},"Quoteware"),Object(i.b)("p",null,"Quoteware is the engine that generates the quotes used in our products. It has multiple variable parameters that can be heavily customised to pull back different types of quotes depending on what you have specified in the request. "),Object(i.b)("p",null,"The main endpoint generates all information needed to display a 'Full Quote' which is to say that it can be quite bloated. This is due to the fact it powers our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"Widget"}),"Finance Comparator Widget"),". The widget is here is the typical integration we would expect to see on car dealer website's full page adverts."),Object(i.b)("h3",{id:"payment-search"},"Payment Search"),Object(i.b)("p",null,"Payment search is a filter that can be applied to a selection of vehicles on a dealer website that allows the\nuser to narrow a choice of vehicles to those falling within a specific payment range. This is often used on a stock listing page on a website or to provide headline finance figures elsewhere.\nThe payment range itself is a product of the vehicle price; the vehicle itself; customer deposit; loan term;\nanticipated annual mileage; recorded mileage, and the sellout rate at which the dealer has set for motor\nfinance products being quoted, notably Hire Purchase (HP), Conditional Sale (CS), Personal Contact\nPurchase (PCP) and Lease Purchase (LP)."),Object(i.b)("p",null,"You can think of payment search as Quoteware Lite."))}l.isMDXComponent=!0}}]);