(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),c=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=c(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},P=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(t),P=a,m=d["".concat(s,".").concat(P)]||d[P]||p[P]||o;return t?r.a.createElement(m,u(u({ref:n},i),{},{components:t})):r.a.createElement(m,u({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=P;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}P.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(7),o=(t(0),t(121)),s={id:"ExampleQuotewareResponse",title:"Example Quoteware Response",sidebar_label:"Example Response",slug:"/ExampleQuotewareResponse"},u={unversionedId:"Quoteware/ExampleQuotewareResponse",id:"Quoteware/ExampleQuotewareResponse",isDocsHomePage:!1,title:"Example Quoteware Response",description:"application/json",source:"@site/docs/Quoteware/ExampleQuotewareResponse.mdx",slug:"/ExampleQuotewareResponse",permalink:"/documentation/docs/ExampleQuotewareResponse",editUrl:"https://github.com/ivendi-support/documentation-src/edit/master/documentation/docs/Quoteware/ExampleQuotewareResponse.mdx",version:"current",sidebar_label:"Example Response",sidebar:"someSidebar",previous:{title:"Quoteware Response Definitions",permalink:"/documentation/docs/ResponseDefinitions"},next:{title:"Payment Search",permalink:"/documentation/docs/PaymentSearch"}},l=[],i={toc:l};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"application/json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="HTTP 200"',title:'"HTTP','200"':!0}),'{\n  "hasQuoteResults": true,\n  "QuotedResultsUID": "d3d0350d-8ad5-477b-9408-2523d1bb42bd",\n  "QuoteResults": [\n    {\n      "hasResults": true,\n      "ProductRequestUID": "f9e788bc-dbe2-4718-b6cc-ef63cc83a193",\n      "QuotedResultUID": "a43f8b64-db2d-4388-b6bf-247e0a89c2c1",\n      "QuoteeUID": "268e8202-338e-4b26-a6fe-74bcdab0a357",\n      "QuoteRequest": null,\n      "Results": [\n        {\n          "Asset": {\n            "__type": "QuotewareV3.Core.ResultAssetMotorVehicle, QuotewareV3.Core",\n            "Age": 48,\n            "AgeIdentifier": "17",\n            "AgeUnit": "Months",\n            "Class": "Car",\n            "Condition": "Used",\n            "CurrentOdometerReading": 1300,\n            "EntityType": "None",\n            "Identity": "CX17HHA",\n            "IdentityType": "VRM",\n            "CapCodeOverridden": null,\n            "RegistrationDate": "/Date(1490313600000)/",\n            "RegistrationMark": "CX17HHA",\n            "RequestedAnnualDistance": 10000,\n            "RequestedDeposit": 1000,\n            "RequestedTerm": 54,\n            "RequestedTermUnit": "Default",\n            "Source": "RegionCurrent",\n            "StockIdentity": "39736298",\n            "StockingDays": 0,\n            "StockLocation": null,\n            "TermDistance": 46300,\n            "VrmEnabled": true\n          },\n          "hasProductGroup": true,\n          "hasProductGroupWithinPaymentRange": "False",\n          "ProductGroups": [\n            {\n              "FacilityType": "HP",\n              "hasProductQuote": true,\n              "hasProductQuoteWithinPaymentRange": "False",\n              "ProductGroupUID": "cc1c74e1-e24d-4b76-0a11-011eb60d5c1a",\n              "ProductQuotes": [\n                {\n                  "BaseCfcUrl": "https://carfinancechecker.com",\n                  "Commissions": [\n                    {\n                      "Amount": 0,\n                      "Method": "RRPDiscounting",\n                      "Type": "None",\n                      "Value": 0,\n                      "VolumeBonus": 0\n                    }\n                  ],\n                  "ExpiryDate": "/Date(1615939200000+0000)/",\n                  "FacilitatorCode": "BLA",\n                  "FacilityType": "HP",\n                  "Figures": {\n                    "AcceptanceFee": 0,\n                    "AcceptanceFeeSpread": false,\n                    "AdditionalDeposit": 0,\n                    "Advance": 6000,\n                    "AER": 9.85,\n                    "APR": 9.9,\n                    "Asset": {\n                      "__type": "QuotewareV3.Core.ProductQuoteAssetMotorVehicle, QuotewareV3.Core",\n                      "AdjustedDistance": false,\n                      "AdjustedTerm": false,\n                      "AnnualDistanceQuoted": 10000,\n                      "ChargePerOverDistanceUnit": 0,\n                      "Equity": 0,\n                      "FinanceDepositAllowance": 0,\n                      "FinanceDepositAllowances": null,\n                      "NegativeEquity": 0,\n                      "OutstandingSettlement": 0,\n                      "OutstandingSource": null,\n                      "PartExchange": 0,\n                      "RVDataSet": null,\n                      "RVDataSetMonth": 0,\n                      "RVDataSetYear": 0,\n                      "RVPercentageUsed": 0,\n                      "ValueAddedProducts": null,\n                      "VATQualifying": "None",\n                      "ExcludeVatAsDeposit": "None"\n                    },\n                    "Balloon": 0,\n                    "BalloonAtTerm": false,\n                    "BaseRate": 9.9,\n                    "CustomerRate": 9.9,\n                    "EarlySettlements": null,\n                    "FinalPayment": 136.92,\n                    "FirstPayment": 136.92,\n                    "FlatRate": 5.13,\n                    "FullFees": null,\n                    "InitialPause": 0,\n                    "InterestCharges": 1383.68,\n                    "InterestRate": 9.43,\n                    "InterestRateRateType": "Yield",\n                    "NumberOfRegularPayments": 52,\n                    "OptionFeeSpread": false,\n                    "OptionToPurchaseFee": 10,\n                    "PaymentSchedules": [\n                      {\n                        "Amount": 136.92,\n                        "Number": 54,\n                        "Period": 1\n                      }\n                    ],\n                    "ProductRateType": "APR",\n                    "RegularPayment": 136.92,\n                    "Repossession": 2797.89,\n                    "Subsidy": 0,\n                    "Term": 54,\n                    "Termination": 4196.84,\n                    "TermQuoted": 54,\n                    "TermUnit": "Default",\n                    "TotalCashPrice": 7000,\n                    "TotalCharges": 1393.68,\n                    "TotalDeposit": 1000,\n                    "TotalPayable": 8393.68,\n                    "ValueAddedTax": 0,\n                    "ValueAddedTaxAsDeposit": false\n                  },\n                  "FunderCode": "BLA",\n                  "FunderProductCode": "HP",\n                  "ParentQuoteUID": null,\n                  "ProductCode": "HP",\n                  "ProductName": "Blackhorse HP APR - Standard Rate",\n                  "ProductUID": "b644028d-c545-4a54-ba3a-004007009d3b",\n                  "CreditTier": "None",\n                  "QuotedDateTime": "/Date(1614772549066+0000)/",\n                  "QuoteeProductCode": "HP",\n                  "QuoteeUid": "268e8202-338e-4b26-a6fe-74bcdab0a357",\n                  "QuoteUID": "03031155-49f1-41f3-b332-5235d0263664",\n                  "WithinPaymentRange": "None",\n                  "Errors": null,\n                  "hasErrors": false,\n                  "hasWarnings": false,\n                  "Warnings": null\n                }\n              ],\n              "QuotedProductGroupUID": "0e08878c-f20a-4e5c-b09b-85ca2db39a4f",\n              "Errors": null,\n              "hasErrors": false,\n              "hasWarnings": false,\n              "Warnings": null\n            },\n            {\n              "FacilityType": "PCP",\n              "hasProductQuote": true,\n              "hasProductQuoteWithinPaymentRange": "False",\n              "ProductGroupUID": "d17cc875-b043-4d99-94e0-d56bbf556054",\n              "ProductQuotes": [\n                {\n                  "BaseCfcUrl": "https://carfinancechecker.com",\n                  "Commissions": [\n                    {\n                      "Amount": 0,\n                      "Method": "RRPDiscounting",\n                      "Type": "None",\n                      "Value": 0,\n                      "VolumeBonus": 0\n                    }\n                  ],\n                  "ExpiryDate": "/Date(1615939200000+0000)/",\n                  "FacilitatorCode": "BLA",\n                  "FacilityType": "PCP",\n                  "Figures": {\n                    "AcceptanceFee": 0,\n                    "AcceptanceFeeSpread": false,\n                    "AdditionalDeposit": 0,\n                    "Advance": 6000,\n                    "AER": 9.83,\n                    "APR": 9.9,\n                    "Asset": {\n                      "__type": "QuotewareV3.Core.ProductQuoteAssetMotorVehicle, QuotewareV3.Core",\n                      "AdjustedDistance": false,\n                      "AdjustedTerm": true,\n                      "AnnualDistanceQuoted": 10000,\n                      "ChargePerOverDistanceUnit": 0,\n                      "Equity": 0,\n                      "FinanceDepositAllowance": 0,\n                      "FinanceDepositAllowances": null,\n                      "NegativeEquity": 0,\n                      "OutstandingSettlement": 0,\n                      "OutstandingSource": null,\n                      "PartExchange": 0,\n                      "RVDataSet": "Blackhorse Base",\n                      "RVDataSetMonth": 3,\n                      "RVDataSetYear": 2017,\n                      "RVPercentageUsed": 100,\n                      "ValueAddedProducts": null,\n                      "VATQualifying": "None",\n                      "ExcludeVatAsDeposit": "None"\n                    },\n                    "Balloon": 2741,\n                    "BalloonAtTerm": true,\n                    "BaseRate": 9.9,\n                    "CustomerRate": 9.9,\n                    "EarlySettlements": null,\n                    "FinalPayment": 2751,\n                    "FirstPayment": 126.29,\n                    "FlatRate": 5.06,\n                    "FullFees": null,\n                    "InitialPause": 0,\n                    "InterestCharges": 1287.44,\n                    "InterestRate": 9.42,\n                    "InterestRateRateType": "Yield",\n                    "NumberOfRegularPayments": 35,\n                    "OptionFeeSpread": false,\n                    "OptionToPurchaseFee": 10,\n                    "PaymentSchedules": [\n                      {\n                        "Amount": 126.29,\n                        "Number": 36,\n                        "Period": 1\n                      },\n                      {\n                        "Amount": 2751,\n                        "Number": 1,\n                        "Period": 2\n                      }\n                    ],\n                    "ProductRateType": "APR",\n                    "RegularPayment": 126.29,\n                    "Repossession": 2765.81,\n                    "Subsidy": 0,\n                    "Term": 37,\n                    "Termination": 4148.72,\n                    "TermQuoted": 37,\n                    "TermUnit": "Default",\n                    "TotalCashPrice": 7000,\n                    "TotalCharges": 1297.44,\n                    "TotalDeposit": 1000,\n                    "TotalPayable": 8297.44,\n                    "ValueAddedTax": 0,\n                    "ValueAddedTaxAsDeposit": false\n                  },\n                  "FunderCode": "BLA",\n                  "FunderProductCode": "54",\n                  "ParentQuoteUID": null,\n                  "ProductCode": "54",\n                  "ProductName": "Blackhorse PCP APR - Standard Rate",\n                  "ProductUID": "113c7b7a-0491-44ed-b1b9-85524e9be316",\n                  "CreditTier": "None",\n                  "QuotedDateTime": "/Date(1614772549066+0000)/",\n                  "QuoteeProductCode": "54",\n                  "QuoteeUid": "268e8202-338e-4b26-a6fe-74bcdab0a357",\n                  "QuoteUID": "03031155-4954-46a4-9db5-2bc42f3cc2e8",\n                  "WithinPaymentRange": "None",\n                  "Errors": null,\n                  "hasErrors": false,\n                  "hasWarnings": false,\n                  "Warnings": null\n                },\n                {\n                  "BaseCfcUrl": "https://carfinancechecker.com",\n                  "Commissions": null,\n                  "ExpiryDate": "/Date(1614772549066+0000)/",\n                  "FacilitatorCode": "BLA",\n                  "FacilityType": "PCP",\n                  "Figures": null,\n                  "FunderCode": "BLA",\n                  "FunderProductCode": "54",\n                  "ParentQuoteUID": null,\n                  "ProductCode": "54",\n                  "ProductName": "Ducati PCP 11",\n                  "ProductUID": "c2a9e51d-4a7a-4c04-a8ec-e1eb24ee767a",\n                  "CreditTier": "None",\n                  "QuotedDateTime": "/Date(1614772549066+0000)/",\n                  "QuoteeProductCode": "54",\n                  "QuoteeUid": "268e8202-338e-4b26-a6fe-74bcdab0a357",\n                  "QuoteUID": "03031155-49cb-40df-bfa7-043ac9708dff",\n                  "WithinPaymentRange": "False",\n                  "Errors": {\n                    "hasPrivateErrors": false,\n                    "hasPublicErrors": true,\n                    "PublicErrors": [\n                      {\n                        "Message": "Motor Vehicle not allowed for product",\n                        "Number": 522\n                      },\n                      {\n                        "Message": "Motor Vehicle Class of Car not allowed",\n                        "Number": 516\n                      },\n                      {\n                        "Message": "Motor Vehicle Condition of Used not allowed",\n                        "Number": 517\n                      }\n                    ]\n                  },\n                  "hasErrors": true,\n                  "hasWarnings": false,\n                  "Warnings": null\n                },\n                {\n                  "BaseCfcUrl": "https://carfinancechecker.com",\n                  "Commissions": null,\n                  "ExpiryDate": "/Date(1614772549066+0000)/",\n                  "FacilitatorCode": "BLA",\n                  "FacilityType": "PCP",\n                  "Figures": null,\n                  "FunderCode": "BLA",\n                  "FunderProductCode": "54",\n                  "ParentQuoteUID": null,\n                  "ProductCode": "54",\n                  "ProductName": "Ducati PCP 1",\n                  "ProductUID": "967726b1-8e03-4524-91f4-5246699c4739",\n                  "CreditTier": "None",\n                  "QuotedDateTime": "/Date(1614772549066+0000)/",\n                  "QuoteeProductCode": "54",\n                  "QuoteeUid": "268e8202-338e-4b26-a6fe-74bcdab0a357",\n                  "QuoteUID": "03031155-4932-47a3-98d7-dd830585054c",\n                  "WithinPaymentRange": "False",\n                  "Errors": {\n                    "hasPrivateErrors": false,\n                    "hasPublicErrors": true,\n                    "PublicErrors": [\n                      {\n                        "Message": "Motor Vehicle not allowed for product",\n                        "Number": 522\n                      },\n                      {\n                        "Message": "Motor Vehicle Class of Car not allowed",\n                        "Number": 516\n                      },\n                      {\n                        "Message": "Motor Vehicle Condition of Used not allowed",\n                        "Number": 517\n                      }\n                    ]\n                  },\n                  "hasErrors": true,\n                  "hasWarnings": false,\n                  "Warnings": null\n                },\n                {\n                  "BaseCfcUrl": "https://carfinancechecker.com",\n                  "Commissions": null,\n                  "ExpiryDate": "/Date(1614772549066+0000)/",\n                  "FacilitatorCode": "NOR",\n                  "FacilityType": "PCP",\n                  "Figures": null,\n                  "FunderCode": "NOR",\n                  "FunderProductCode": "NORPCP01",\n                  "ParentQuoteUID": null,\n                  "ProductCode": "NORPCP01",\n                  "ProductName": "Northridge PCP",\n                  "ProductUID": "bf925f2c-75ca-47a0-8ee5-0fdce5a1b251",\n                  "CreditTier": "None",\n                  "QuotedDateTime": "/Date(1614772549066+0000)/",\n                  "QuoteeProductCode": "PCP: F Y CAR APR",\n                  "QuoteeUid": "268e8202-338e-4b26-a6fe-74bcdab0a357",\n                  "QuoteUID": "03031155-4913-40e7-97cb-935d724712e8",\n                  "WithinPaymentRange": "False",\n                  "Errors": {\n                    "hasPrivateErrors": true,\n                    "hasPublicErrors": false,\n                    "PrivateErrors": [\n                      {\n                        "Message": "Rate not found for RRP Discounting rate method",\n                        "Number": 523\n                      }\n                    ]\n                  },\n                  "hasErrors": true,\n                  "hasWarnings": false,\n                  "Warnings": null\n                }\n              ],\n              "QuotedProductGroupUID": "9adf6e0f-3b24-4e6a-8de6-834a7a5182e0",\n              "Errors": null,\n              "hasErrors": false,\n              "hasWarnings": false,\n              "Warnings": null\n            }\n          ],\n          "ProductPackageUID": "f9e788bc-dbe2-4718-b6cc-ef63cc83a193",\n          "QuotedProductPackageUID": "aabd0e4c-b172-42a1-bccf-59769ef1e1e3",\n          "Request": null,\n          "ResultUID": "d99d5ad3-ebc7-45e4-b7e9-48a2a05765c2",\n          "Errors": null,\n          "hasErrors": false,\n          "hasWarnings": false,\n          "Warnings": null\n        }\n      ],\n      "Errors": null,\n      "hasErrors": false,\n      "hasWarnings": false,\n      "Warnings": null\n    }\n  ],\n  "ResponseUID": "958ac3cc-5152-47ec-9db7-463eef976c75",\n  "Errors": null,\n  "hasErrors": false,\n  "hasWarnings": false,\n  "Warnings": null\n}\n')))}c.isMDXComponent=!0}}]);