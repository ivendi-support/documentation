---
id: PaymentSearch
title: Payment Search
sidebar_label: Payment Search
slug: /PaymentSearch
---
The Payment Search Service allows you to specify a matrix of terms, deposits and annual mileages for a vehicle or many vehicles are receive a monthly payment figure back(without the full quote information), which you may display on the site for a given vehicle. This can be handy if for instance you want to create a label on a vehicle listing displaying the cheapest quote. 


## Parameters

Field Name | Format |Description |
| --- | --- | --- |
|Debug|boolean||
|Credentials|object|object containing the credentials used to access iVendi Services|
|Username|string|Username you have been given to access iVendi Services|
|Mode|integer||
|Parameters|object| object containing the quote parameters|
|Terms|integer|An array of integers for the term lengths to search for|
|Annual Mileages|integer|An array of mileages to search for|
|Deposits|integer|An array of deposits to search|
|Credit Tiers|string|An array of string values that map to the credit tier products available.For more information on credit tiers please see [credit tiers](CreditTiers.md)|
|VehicleRequests|array|This is header contains an array of vehicle request objects to enable you to generate quotes for multiple vehicles in the same request|
|Id|||
|Dealer|string|Your quoteeUID used to access iVendi services|
|Vehicle|object|The object containing the vehicle details|
|CashPrice|integer|The cash price of the vehicle|
|IsNew|boolean|Specifies whether the vehicle is new or used|
|Identifier|string|The capID/capCode/registration number. The value used here will depend on the IdentifierType|
|IdentifierType|string|Either RVC or VRM. RVC will use the provided cap data, vrm will do a VRM lookup if your account supports it to get the cap data|
|Type|string|The class of vehicle. car/lcv/motorbike|
|StockId|||
|RegistrationNumber|string|The vehicle registration number|
|CurrentMileage|integer|The mileage of the vehicle|
|RegistrationDate|string|The registration date of the vehicle|
|ProductUid|||

## Request 

Please see the example request below. 


`application/json`
```json title="POST https://quoteware3.ivendi.com/paymentsearch/"
{
	"Debug": false,
	"Credentials": {
		"Username": "www.ivendimotors.com",
		"Mode": 0
	},
	"Parameters": {
		"Terms": [12],
		"AnnualMileages": [10000],
		"Deposits": [500],
    "CreditTiers": [""]
	},
	"VehicleRequests": [{
		"Id": null,
		"Dealer": "268E8202-338E-4B26-A6FE-74BCDAB0A357",
		"Vehicle": {
			"CashPrice": 6999,
			"IsNew": false,
			"Identifier": "14970",
			"IdentifierType": "RVC",
			"Type": "Motorbike",
			"StockId": null,
			"RegistrationNumber": "HF67VKK",
			"CurrentMileage": 274,
			"RegistrationDate": "01-09-2017",
			"ProductUid": null
		}
	}]
}


```

## Response 

The below is the response you would get if you were to run the above request. 

```json title="HTTP 200"
{
	"VehicleResults": [{
		"Id": "0",
		"FinanceProductResults": [{
			"Term": 12,
			"AnnualMileage": 10000,
			"Deposits": 500,
			"ProductResults": [{
				"Key": "HP",
				"Payment": 569.79
			}]
		}]
	}]
}
```

## Demo

```jsx live



```