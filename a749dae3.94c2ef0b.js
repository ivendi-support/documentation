(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(121));const i={id:"CreditTiers",title:"Credit Tiers",sidebar_label:"Credit Tiers",slug:"/CreditTiers"},o={unversionedId:"Quoteware/CreditTiers",id:"Quoteware/CreditTiers",isDocsHomePage:!1,title:"Credit Tiers",description:"Both Quoteware and Payment Search have a field available called CreditTiers.",source:"@site/docs/Quoteware/CreditTiers.mdx",slug:"/CreditTiers",permalink:"/documentation/docs/CreditTiers",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/Quoteware/CreditTiers.mdx",version:"current",sidebar_label:"Credit Tiers",sidebar:"someSidebar",previous:{title:"Payment Search",permalink:"/documentation/docs/PaymentSearch"},next:{title:"Widget",permalink:"/documentation/docs/Widget"}},c=[{value:"Credit Tier: Quoteware Request",id:"credit-tier-quoteware-request",children:[]},{value:"Credit Tier: Payment Search",id:"credit-tier-payment-search",children:[]}],l={toc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Both ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/documentation/docs/"}),"Quoteware")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/documentation/docs/PaymentSearch"}),"Payment Search")," have a field available called ",Object(a.b)("inlineCode",{parentName:"p"},"CreditTiers"),".\nThis field is used if the dealer is set up to have Risk Based Pricing (RBP).\nUsing this field, you can request just the specific tier of credit that you would like in your response. This can be handy, if for example you want to show the cheapest quote,\nas this will always be the lowest credit tier. You can also use this to match up the quotes from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/documentation/docs/Widget"}),"Calculator")," if they have credit tiers enabled."),Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:r(264).default,title:"Credit tiers on the widget"})),Object(a.b)("h6",{id:"credittier-selector-as-displayed-on-the-calculator"},"CreditTier selector as displayed on the calculator"),Object(a.b)("h2",{id:"credit-tier-quoteware-request"},"Credit Tier: Quoteware Request"),Object(a.b)("p",null,"In a standard ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/documentation/docs/"}),"quoteware")," request, to specify a credit tier, the field should be placed above the ",Object(a.b)("inlineCode",{parentName:"p"},"Figures")," field and should be titled ",Object(a.b)("inlineCode",{parentName:"p"},"CreditTier"),". This will accept a string value of the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"1, which maps to the excellent tier"),Object(a.b)("li",{parentName:"ul"},"2, which maps to the very good tier"),Object(a.b)("li",{parentName:"ul"},"3, which maps to the good tier"),Object(a.b)("li",{parentName:"ul"},"4, which maps to the fair tier"),Object(a.b)("li",{parentName:"ul"},"5, which maps to the below average tier")),Object(a.b)("p",null,"The below is an extract of the quoteware request, showing the placement of the ",Object(a.b)("inlineCode",{parentName:"p"},"CreditTier")," field."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'{2} title="application/json"',"{2}":!0,title:'"application/json"'}),'...\n            "CreditTier": "",\n            "Figures": {\n                "CashPrice": 7000,\n                "CashDeposit": 1000,\n                "Asset": {\n                    "ManualResidualValue": 0,\n                    "ResidualValueYear": 0,\n                    "ResidualValueMonth": 0,\n                    "AnnualDistance": 10000,\n                    "PartExchange": 0,\n                    "OutstandingSettlement": 0,\n                    "VATIncluded": "None",\n                    "VATQualifying": "None",\n                    "Extras": null\n                }\n            },\n...\n')),Object(a.b)("h2",{id:"credit-tier-payment-search"},"Credit Tier: Payment Search"),Object(a.b)("p",null,"Similarly to quoteware, a ",Object(a.b)("inlineCode",{parentName:"p"},"CreditTier")," can be specified for the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/documentation/docs/PaymentSearch"}),"Payment Search")," endpoint. The ",Object(a.b)("inlineCode",{parentName:"p"},"CreditTier")," field follows the same mappings in relation to the widget. See the below request for an example and the placement of the ",Object(a.b)("inlineCode",{parentName:"p"},"CreditTier")),Object(a.b)("p",null,"Unlike the quoteware endpoint, the ",Object(a.b)("inlineCode",{parentName:"p"},"CreditTier")," in payment search will accept an array of different credit tiers."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'{6} title="application/json"',"{6}":!0,title:'"application/json"'}),'...\n Parameters: {\n        Terms: [12, 24, 36, 42, 52, 60],\n        AnnualMileages: [10000, 11000, 12000],\n        Deposits: [500, 1000, 1500],\n        CreditTiers: [""],\n      },\n...\n')))}s.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},264:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/CreditTierWidget-560f9ed502045ef5371391c1e58ce4f0.png"}}]);