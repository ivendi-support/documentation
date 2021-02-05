(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},y=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),y=r,m=u["".concat(o,".").concat(y)]||u[y]||d[y]||a;return t?i.a.createElement(m,s(s({ref:n},l),{},{components:t})):i.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),i=(t(0),t(119));const a={id:"OpenApi",title:"Open Api Specification",sidebar_label:"Open Api Specification",slug:"/OpenApi"},o={unversionedId:"Quoteware/OpenApi",id:"Quoteware/OpenApi",isDocsHomePage:!1,title:"Open Api Specification",description:"The OAS defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OAS, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OAS removes guesswork in calling a service.",source:"@site/docs/Quoteware/OpenApi.mdx",slug:"/OpenApi",permalink:"/documentation/docs/OpenApi",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/Quoteware/OpenApi.mdx",version:"current",sidebar_label:"Open Api Specification",sidebar:"someSidebar",previous:{title:"Credit Tiers",permalink:"/documentation/docs/CreditTiers"},next:{title:"Widget",permalink:"/documentation/docs/Widget"}},s=[],p={toc:s};function l({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The OAS defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OAS, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OAS removes guesswork in calling a service."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'openapi: 3.0.1\ninfo:\n  title: defaultTitle\n  description: defaultDescription\n  version: \'0.1\'\nservers:\n  - url: \'https://quoteware3.ivendi.com\'\npaths:\n  /paymentsearch/:\n    post:\n      description: The payment search API enpoint the generates a lighter version of a full quote\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                Parameters:\n                  type: object\n                  properties:\n                    AnnualMileages:\n                      type: array\n                      items:\n                        type: integer\n                    Deposits:\n                      type: array\n                      items:\n                        type: integer\n                    Terms:\n                      type: array\n                      items:\n                        type: integer\n                    CreditTiers:\n                      type: array\n                      items:\n                        type: string\n                VehicleRequests:\n                  type: array\n                  items:\n                    type: object\n                    properties:\n                      Vehicle:\n                        type: object\n                        properties:\n                          Type:\n                            type: string\n                          Identifier:\n                            type: string\n                          StockId: {}\n                          RegistrationDate:\n                            type: string\n                          CurrentMileage:\n                            type: integer\n                          CashPrice:\n                            type: integer\n                          RegistrationNumber:\n                            type: string\n                          IsNew:\n                            type: boolean\n                          IdentifierType:\n                            type: string\n                          ProductUid: {}\n                      Id: {}\n                      Dealer:\n                        type: string\n                Debug:\n                  type: boolean\n                Credentials:\n                  type: object\n                  properties:\n                    Username:\n                      type: string\n                    Mode:\n                      type: integer\n            examples:\n              \'0\':\n                value: "{\\r\\n\\t\\"Debug\\": false,\\r\\n\\t\\"Credentials\\": {\\r\\n\\t\\t\\"Username\\": \\"www.ivendimotors.com\\",\\r\\n\\t\\t\\"Mode\\": 0\\r\\n\\t},\\r\\n\\t\\"Parameters\\": {\\r\\n\\t\\t\\"Terms\\": [12, 24, 36, 42, 52, 60],\\r\\n\\t\\t\\"AnnualMileages\\": [10000, 11000, 12000],\\r\\n\\t\\t\\"Deposits\\": [500, 1000, 1500],\\r\\n    \\"CreditTiers\\": [\\"\\"]\\r\\n\\t},\\r\\n\\t\\"VehicleRequests\\": [{\\r\\n\\t\\t\\"Id\\": null,\\r\\n\\t\\t\\"Dealer\\": \\"268E8202-338E-4B26-A6FE-74BCDAB0A357\\",\\r\\n\\t\\t\\"Vehicle\\": {\\r\\n\\t\\t\\t\\"CashPrice\\": 6999,\\r\\n\\t\\t\\t\\"IsNew\\": false,\\r\\n\\t\\t\\t\\"Identifier\\": \\"14970\\",\\r\\n\\t\\t\\t\\"IdentifierType\\": \\"RVC\\",\\r\\n\\t\\t\\t\\"Type\\": \\"Motorbike\\",\\r\\n\\t\\t\\t\\"StockId\\": null,\\r\\n\\t\\t\\t\\"RegistrationNumber\\": \\"HF67VKK\\",\\r\\n\\t\\t\\t\\"CurrentMileage\\": 274,\\r\\n\\t\\t\\t\\"RegistrationDate\\": \\"01-09-2017\\",\\r\\n\\t\\t\\t\\"ProductUid\\": null\\r\\n\\t\\t}\\r\\n\\t}]\\r\\n}"\n      responses:\n        \'200\':\n          description: A json response with the available quotes for specified vehicle\n      servers:\n        - url: \'https://quoteware3.ivendi.com\'\n    servers:\n      - url: \'https://quoteware3.ivendi.com\'\n  /quotes/:\n    post:\n      description: The endpoint to hit to generate a full quote response\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                PlatformMeta: {}\n                HtmlOptions:\n                  type: object\n                  properties:\n                    EncryptedVrm: {}\n                    RegDate: {}\n                    Channel: {}\n                    Model: {}\n                    Derivative: {}\n                    DealerId: {}\n                    VehicleMileage: {}\n                    ImageUrl:\n                      type: string\n                    ReturnUrl: {}\n                    Make: {}\n                    IncludeOptions:\n                      type: boolean\n                    AsHtml:\n                      type: boolean\n                DealershipEnrichment:\n                  type: object\n                  properties:\n                    TraceRequest:\n                      type: boolean\n                    Email: {}\n                    SearchMeta:\n                      type: string\n                    UserAgent: {}\n                    IpAddress:\n                      type: string\n                    PersistRequestResponse:\n                      type: boolean\n                    Postcode:\n                      type: string\n                    UserGenerated:\n                      type: boolean\n                Credentials:\n                  type: object\n                  properties:\n                    Username:\n                      type: string\n                    Mode:\n                      type: integer\n                QuoteRequests:\n                  type: array\n                  items:\n                    type: object\n                    properties:\n                      QuoteeUID:\n                        type: string\n                      GlobalRequestParameters:\n                        type: object\n                        properties:\n                          CommissionType:\n                            type: string\n                          ComputationPath:\n                            type: string\n                          RegularPayment:\n                            type: integer\n                          Rate:\n                            type: integer\n                          PaymentRangeFrom:\n                            type: integer\n                          Commission:\n                            type: integer\n                          TermUnit:\n                            type: string\n                          PaymentRangeTo:\n                            type: integer\n                          Term:\n                            type: integer\n                          RateType:\n                            type: string\n                      GlobalRequestSettings: {}\n                      IsPlatformProductRequest:\n                        type: boolean\n                      ProductRequestUID: {}\n                      Requests:\n                        type: array\n                        items:\n                          type: object\n                          properties:\n                            RequestSettings: {}\n                            Asset:\n                              type: object\n                              properties:\n                                Condition:\n                                  type: string\n                                RegistrationMark:\n                                  type: string\n                                IdentityType:\n                                  type: string\n                                RegistrationDate:\n                                  type: string\n                                StockLocation: {}\n                                CurrentOdometerReading:\n                                  type: integer\n                                Source:\n                                  type: string\n                                StockingDate: {}\n                                EntityType:\n                                  type: string\n                                StockIdentity:\n                                  type: string\n                                Class:\n                                  type: string\n                                Identity:\n                                  type: string\n                                CubicCentimetres:\n                                  type: integer\n                            Figures:\n                              type: object\n                              properties:\n                                Asset:\n                                  type: object\n                                  properties:\n                                    PartExchange:\n                                      type: integer\n                                    AnnualDistance:\n                                      type: integer\n                                    ManualResidualValue:\n                                      type: integer\n                                    ResidualValueMonth:\n                                      type: integer\n                                    ResidualValueYear:\n                                      type: integer\n                                    VATIncluded:\n                                      type: string\n                                    Extras: {}\n                                    OutstandingSettlement:\n                                      type: integer\n                                    VATQualifying:\n                                      type: string\n                                CashPrice:\n                                  type: integer\n                                CashDeposit:\n                                  type: integer\n                            RequestParameters: {}\n            examples:\n              \'0\':\n                value: "{\\r\\n   \\"HtmlOptions\\":{\\r\\n      \\"IncludeOptions\\":false,\\r\\n      \\"AsHtml\\":false,\\r\\n      \\"ImageUrl\\":\\"https://sampleimageforthecaronsale.png \\",\\r\\n      \\"ReturnUrl\\":null,\\r\\n      \\"Make\\":null,\\r\\n      \\"Model\\":null,\\r\\n      \\"Derivative\\":null,\\r\\n      \\"Channel\\":null,\\r\\n      \\"RegDate\\":null,\\r\\n      \\"DealerId\\":null,\\r\\n      \\"VehicleMileage\\":null,\\r\\n      \\"EncryptedVrm\\":null\\r\\n   },\\r\\n   \\"Credentials\\":{\\r\\n      \\"Username\\":\\"www.ivendimotors.com\\",\\r\\n      \\"Mode\\":0\\r\\n   },\\r\\n   \\"DealershipEnrichment\\":{\\r\\n      \\"IpAddress\\":\\"188.29.164.138\\",\\r\\n      \\"Email\\":null,\\r\\n      \\"Postcode\\":\\"BL40PJ\\",\\r\\n      \\"SearchMeta\\":\\"{\\\\\\"IsPaymentSearch\\\\\\":\\\\\\"True\\\\\\",\\\\\\"MinPrice\\\\\\": \\\\\\"-1\\\\\\",\\\\\\"MaxPrice\\\\\\":\\\\\\"-1\\\\\\" ,\\\\\\"MinPaymentMonthlyCost\\\\\\":\\\\\\"-1\\\\\\",\\\\\\"MaxPaymentMonthlyCost\\\\\\":\\\\\\"-1\\\\\\"}\\",\\r\\n      \\"UserAgent\\":null,\\r\\n      \\"UserGenerated\\":true,\\r\\n      \\"TraceRequest\\":false,\\r\\n      \\"PersistRequestResponse\\":true\\r\\n   },\\r\\n   \\"QuoteRequests\\":[\\r\\n      {\\r\\n         \\"ProductRequestUID\\":null,\\r\\n         \\"IsPlatformProductRequest\\":false,\\r\\n         \\"QuoteeUID\\":\\"268E8202-338E-4B26-A6FE-74BCDAB0A357\\",\\r\\n         \\"GlobalRequestSettings\\":null,\\r\\n         \\"GlobalRequestParameters\\":{\\r\\n            \\"Rate\\":0,\\r\\n            \\"RateType\\":\\"Default\\",\\r\\n            \\"Commission\\":0,\\r\\n            \\"CommissionType\\":\\"Default\\",\\r\\n            \\"ComputationPath\\":\\"Default\\",\\r\\n            \\"Term\\":54,\\r\\n            \\"TermUnit\\":\\"Default\\",\\r\\n            \\"PaymentRangeFrom\\":0,\\r\\n            \\"PaymentRangeTo\\":0,\\r\\n            \\"RegularPayment\\":0\\r\\n         },\\r\\n         \\"Requests\\":[\\r\\n            {\\r\\n               \\"Figures\\":{\\r\\n                  \\"CashPrice\\":7000,\\r\\n                  \\"CashDeposit\\":1000,\\r\\n                  \\"Asset\\":{\\r\\n                     \\"ManualResidualValue\\":0,\\r\\n                     \\"ResidualValueYear\\":0,\\r\\n                     \\"ResidualValueMonth\\":0,\\r\\n                     \\"AnnualDistance\\":10000,\\r\\n                     \\"PartExchange\\":0,\\r\\n                     \\"OutstandingSettlement\\":0,\\r\\n                     \\"VATIncluded\\":\\"None\\",\\r\\n                     \\"VATQualifying\\":\\"None\\",\\r\\n                     \\"Extras\\":null\\r\\n                  }\\r\\n               },\\r\\n               \\"Asset\\":{\\r\\n                  \\"CurrentOdometerReading\\":1300,\\r\\n                  \\"RegistrationDate\\":\\"04/06/2017\\",\\r\\n                  \\"RegistrationMark\\":\\"CX17HHA\\",\\r\\n                  \\"Condition\\":\\"Default\\",\\r\\n                  \\"Source\\":\\"Default\\",\\r\\n                  \\"Identity\\":\\"CX17HHA\\",\\r\\n                  \\"IdentityType\\":\\"VRM\\",\\r\\n                  \\"StockIdentity\\":\\"39736298\\",\\r\\n                  \\"StockingDate\\":null,\\r\\n                  \\"StockLocation\\":null,\\r\\n                  \\"Class\\":\\"Car\\",\\r\\n                  \\"CubicCentimetres\\":0,\\r\\n                  \\"EntityType\\":\\"None\\"\\r\\n               },\\r\\n               \\"RequestSettings\\":null,\\r\\n               \\"RequestParameters\\":null\\r\\n            }\\r\\n         ]\\r\\n      }\\r\\n   ],\\r\\n   \\"PlatformMeta\\":null\\r\\n}"\n      responses:\n        \'200\':\n          description: Json response with a full quote containing all the information required.\n      servers:\n        - url: \'https://quoteware3.ivendi.com\'\n    servers:\n      - url: \'https://quoteware3.ivendi.com\'\n\n')))}l.isMDXComponent=!0}}]);