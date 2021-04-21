(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||i;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(120));const i={id:"DispatchableEvents",title:"Dispatchable Events",sidebar_label:"Dispatchable Events",slug:"/DispatchableEvents"},o={unversionedId:"Engage/DispatchableEvents",id:"Engage/DispatchableEvents",isDocsHomePage:!1,title:"Dispatchable Events",description:"The engage widget also listens for two events which the host can dispatch. We recommend waiting for the engage:init event to fire before dispatching these.",source:"@site/docs/Engage/DispatchableEvents.mdx",slug:"/DispatchableEvents",permalink:"/documentation/docs/DispatchableEvents",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/Engage/DispatchableEvents.mdx",version:"current",sidebar_label:"Dispatchable Events",sidebar:"someSidebar",previous:{title:"Custom Events",permalink:"/documentation/docs/CustomEvents"},next:{title:"Predefined Data",permalink:"/documentation/docs/PredefinedData"}},c=[{value:"Update Liked Vehicles",id:"update-liked-vehicles",children:[]},{value:"Changed Cookie Preferences",id:"changed-cookie-preferences",children:[]}],s={toc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The engage widget also listens for two events which the host can dispatch. We recommend waiting for the ",Object(r.b)("inlineCode",{parentName:"p"},"engage:init")," event to fire before dispatching these."),Object(r.b)("h3",{id:"update-liked-vehicles"},"Update Liked Vehicles"),Object(r.b)("p",null,"If the vehicle like functionality is enabled, you can update the engage widget with a list of vehicle IDs to indicate which vehicles are liked. This is useful if you have users which have liked vehicles prior to your use of Engage, or if users like vehicles outside the context of search, like on a full page advert. Simply pass in an array of vehicle IDs to a custom event and dispatch it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.dispatchEvent(new CustomEvent(\u2018engage:liked:vehicles:changed\u2019, \n  { detail: vehicleIDArray }\n));\n")),Object(r.b)("h3",{id:"changed-cookie-preferences"},"Changed Cookie Preferences"),Object(r.b)("p",null,"To be PECR and GDPR compliant, we disable some analytics and functionality by default. You can raise an event to indicate a users\u2019 cookie preferences. Set either functional or analytical cookies to 0 to indicate off, or 1 to indicate on."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.dispatchEvent(new CustomEvent(\u2018engage:cookie:preferences:changed\u2019,\n  { detail: { functional: 0 | 1, analytical: 0 | 1 }\n}));\n")))}l.isMDXComponent=!0}}]);