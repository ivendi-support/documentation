(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,b=u["".concat(r,".").concat(h)]||u[h]||p[h]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),o=(n(0),n(116)),r={id:"NewVehicles",title:"New Vehicles",sidebar_label:"New Vehicles",slug:"/NewVehicles"},c={unversionedId:"Quoteware/NewVehicles",id:"Quoteware/NewVehicles",isDocsHomePage:!1,title:"New Vehicles",description:"The documentation thus far has had a focus on quoting for used vehicles. However, it is possible to quote new vehicles if certain conditions are met.",source:"@site/docs/Quoteware/NewVehicle.mdx",slug:"/NewVehicles",permalink:"/documentation/docs/NewVehicles",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/Quoteware/NewVehicle.mdx",version:"current",sidebar_label:"New Vehicles",sidebar:"someSidebar",previous:{title:"Credit Tiers",permalink:"/documentation/docs/CreditTiers"},next:{title:"Open Api Specification",permalink:"/documentation/docs/OpenApi"}},l=[{value:"New Vehicle Quoting: Widget",id:"new-vehicle-quoting-widget",children:[]},{value:"New Vehicle Quoting: Quoteware",id:"new-vehicle-quoting-quoteware",children:[]},{value:"New Vehicle Quoting: Payment Search",id:"new-vehicle-quoting-payment-search",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The documentation thus far has had a focus on quoting for used vehicles. However, it is possible to quote new vehicles if certain conditions are met."),Object(o.b)("h2",{id:"new-vehicle-quoting-widget"},"New Vehicle Quoting: Widget"),Object(o.b)("p",null,"To quote a new vehicle in our ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"Widget"}),"widget"),", the following criteria will need to be adhered to. A ",Object(o.b)("inlineCode",{parentName:"p"},"vrm"),' must be set to the value "NEW". Since there is no VRM for us to do a lookup on,\nyou must provide your own ',Object(o.b)("inlineCode",{parentName:"p"},"capId"),", as this will identify the vehicle so that a quote can be generated. Similarly, since the vehicle won't have a registration date, the ",Object(o.b)("inlineCode",{parentName:"p"},"registrationDate")," needs to be set to today's date, rolling."),Object(o.b)("p",null,"For example, if the date is 09/03/2021, then the ",Object(o.b)("inlineCode",{parentName:"p"},"registrationDate")," should also be 09/03/2021."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"condition")," needs to be set to new and the ",Object(o.b)("inlineCode",{parentName:"p"},"currentOdometerReading")," needs to be 0. The below example demonstrates the quoting of a new vehicle in the widget."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The iframe is being used here for demonstration. In your integration please ensure you are using the ",Object(o.b)("inlineCode",{parentName:"p"},"<script>")," tag"))),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'function widget() {\n  function todaysDate() {\n    let date = new Date(Date.now()).toLocaleString("en-GB"); //Get Today\'s Date\n    let dateFormat = date.split(","); // Format it\n    let justDate = dateFormat[0]; // Return just the date portion of the string\n    return justDate;\n  }\n  function buildUrl() {\n    return (\n      "https://newvehicle.com/widgets/lib/finance-comparator-beta/?username=www.ivendimotors.com&quoteeUid=268E8202-338E-4B26-A6FE-74BCDAB0A357&class=Car&condition=new&vrm=NEW&registrationDate=" +\n      todaysDate() +\n      "&capCode=&capId=96096&cashPrice=30000&vatIncluded=true&vatQualifying=false&currentOdometerReading=0&vehicleImageUrl=https%3A%2F%2Fmedia-psa.groupe-psa.com%2Fmedias%2Fdomain1%2Fmedia11848%2F2009228-r00lv2pybs-preview.jpg&cashDepositType=flatRate&cashDeposit=1000&term=48&annualDistance=10000&dateOnForecourt=" +\n      todaysDate() +\n      "&usePersistedOptions=false&origin=https%3A%2F%2Fsales-widget-demo.ivendi.co%2F&widgetId=iv-finance-widget"\n    );\n  }\n\n  return (\n    <>\n      <iframe\n        width={770 + "px"}\n        height={1000 + "px"}\n        src={buildUrl()}\n        id="iv-finance-widget"\n        name="iv-finance-widget"\n      ></iframe>\n    </>\n  );\n}\n')),Object(o.b)("h2",{id:"new-vehicle-quoting-quoteware"},"New Vehicle Quoting: Quoteware"),Object(o.b)("p",null,"Since the widget relies on Quoteware to generate its quotes, it is therefore possible to use new vehicles with Quoteware. Similar to the above, the matching fields in the request asset object need to be filled out as below."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="application/json"',title:'"application/json"'}),'...\n"Asset": {\n                "CurrentOdometerReading": 0,\n                "RegistrationDate": todaysDate(),\n                "RegistrationMark": "NEW",\n                "Condition": "new",\n                "Source": "Default",\n                "Identity": "96096", // This is the capId\n                "IdentityType": "RVC", //RVC tells quoteware we\'re using the capId to identify the vehicle\n                "StockIdentity": "",\n                "StockingDate": null,\n                "StockLocation": null,\n                "Class": "Car",\n                "CubicCentimetres": 0,\n                "EntityType": "None"\n            },\n...\n')),Object(o.b)("h2",{id:"new-vehicle-quoting-payment-search"},"New Vehicle Quoting: Payment Search"),Object(o.b)("p",null,"Since payment search is a subset of Quoteware, you can also use this for new vehicles. Similarly to the widget and Quoteware, there are fields that need to be set specifically for new vehicles.\n",Object(o.b)("inlineCode",{parentName:"p"},"Identifier")," needs to be set to the capId of the vehicle along with ",Object(o.b)("inlineCode",{parentName:"p"},"IdentifierType")," being set to RVC. The ",Object(o.b)("inlineCode",{parentName:"p"},"IsNew")," flag needs to be set to true. As with the above the ",Object(o.b)("inlineCode",{parentName:"p"},"RegistrationNumber")," should be set to NEW and the ",Object(o.b)("inlineCode",{parentName:"p"},"CurrentMileage")," should be 0.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"RegistrationDate")," should also be today's date, rolling. See the below example Vehicle object extract of a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"PaymentSearch"}),"payment search")," request for an example."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json",metastring:'title="application/json"',title:'"application/json"'}),'...\nVehicle: {\n            CashPrice: 30000, //The Cash Price of the Vehicle\n            IsNew: true, //Set to true\n            Identifier: "96096", //The CAP ID of the requested vehicle\n            IdentifierType: "RVC", //Default to RVC, meaning that CAP data will be used to dictate the calculation.\n            Type: "car", //The class of vehicle requested - (  Car  //  Motorbike  //  LCV  )\n            StockId: null,\n            RegistrationNumber: "NEW", //The Vehicle Registration Number.\n            CurrentMileage: 0, //The Mileage of the Vehicle\n            RegistrationDate: todaysDate(), //The current date, rolling\n            ProductUid: null,\n          },\n...\n')))}d.isMDXComponent=!0}}]);