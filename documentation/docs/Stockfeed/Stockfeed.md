---
id: Stockfeed
title: Stock Feed
sidebar_label: Stock Feed
slug: /Stockfeed
---

iVendi are able to accept stock feed exports containing stock information for car dealerships. These stock feed files are used in two main ways:

-	To include dealer stock in a car locator solution 
-	To include stock within a customer-facing showroom platform, used to promote motor finance products 

### Use and Limitations 

The iVendi feed should be formatted using PIPE separated and UTF-8 (without BOM) encoding symbol (e.g. Feed_ID|Vehicle_ID) as this reduces the likelihood of dealer-entered text causing a row to be corrupted. 
Invariably the feed may be provided from the dealer’s DMS and in turn they shall use a field selection interface to compile the export file. Please raise a call with Client Services for a specific file type request. 
Date formats for items like stock date or date of registration, should be in the DD/MM/YYYY format. CAP ID’s are used within iVendi Systems to identify the exact vehicle and trim level. 
iVendi enriches supplied content with CAP data. Please supply CAP IDs if you have the appropriate licenses to avoid the occasional errors that can be returned from VRM lookup services. 

### Formats and Layout

All feeds require a header row and the following fields.

| Field Name              | Type    | Note                                                        | Mandatory               |
|-------------------------|---------|-------------------------------------------------------------|-------------------------|
| Feed_ID                 | string  | Dealership Id (unique per dealer)                           | Y                       |
| Vehicle_ID              | string  | Unique ID for the vehicle                                   | Y                       |
| VRM                     | string  | Vehicle registration number (without spaces)                | Y                       |
| VRMYear                 | int     | VRM Year (eg 2018)                                          | N                       |
| VIN                     | string  | Vehicle Identification Number (if available)                | N                       |
| Date First Registered   | date    | UK dateformat as per V5 document dd/mm/yyyy (eg 01/05/2017) | N                       |
| MOT Expiry Date         | date    | UK dateformat dd/mm/yyyy (eg 01/05/2017)                    | N                       |
| Make                    | string  | eg Tesla                                                    | Y                       |
| Model                   | string  | eg Fiesta                                                   | Y                       |
| Variant                 | string  | Also known as Trim (eg 2.0 XS CRDI)                         | N                       |
| VehicleType             | string  | car, lcv or motorcycle                                      | Y                       |
| Mileage                 | int     | Odometer reading                                            | Y                       |
| BodyType                | string  | eg Hatchback/Coupe/Estate                                   | Y                       |
| Doors                   | int     | eg 5                                                        | N                       |
| Colour                  | string  |                                                             | N                       |
| FuelType                | string  |                                                             | N                       |
| Engine Size             | int     | In CC (eg 1991)                                             | N                       |
| Power Output            | int     | In BHP                                                      | N                       |
| CO2 (g/km)              | int     | As per V5 document (eg 120)                                 | N                       |
| Transmission            | string  | Manual/Automatic/SemiAutomatic etc                          | N                       |
| Previous Owners         | int     |                                                             | N                       |
| Price                   | decimal | eg 1999.99. Whole numbers (1999) will be treated as 1999.00 | Y                       |
| Price Includes Vat      | bool    | true/false                                                  | Y                       |
| TradePrice              | decimal |                                                             | N                       |
| TradePrice Includes Vat | bool    | true/false                                                  | Y if TradePrice is true |
| PurchaseCondition       | string  | eg New/Used                                                 | Y                       |
| Website                 | string  | URL of car on dealership's website                          | N                       |
| Origin                  | string  | Country of origin (UK/Import) as per V5                     | N                       |
| V5                      | bool    | true/false                                                  | N                       |
| ExDemo                  | bool    | true/false                                                  | N                       |
| Franchise Approved      | bool    | true/false                                                  | N                       |
| PictureUrls             | string  | Comma separated list of URLs to dealership's stock images   | Y                       |
| Service History         | string  | (FullDealer/Full/Partial). Empty will be taken as none      | N                       |
| Four Wheel Drive        | bool    | true/false                                                  | N                       |
| Attention Grabbger      | string  | Standout key selling points. 50 characters max              | N                       |
| Options                 | string  | Comma separated list of options (eg ABS/Airbags)            | Y                       |
| Description             | string  | Humanised description of vehicle (eg £1500 worth of extras) | Y                       |
| CapId                   | string  | Cap ID or Cap Code                                          | N                       |
| GlassID                 | string  | Glass data ID if available                                  | N                       |

### Timings and File Transfer 
A dedicated SFTP account shall be set up for the transfer of files to iVendi. Access credentials will be shared ahead of the initial transfer for connections to stockftp.ivendi.com:26222 and a static IP Address will be required to upload from. Currently iVendi will process up to two feeds per day from each media company but please do discuss with us in the setup process if you require anything different. There is no need to append the file name with a date and timestamp and zipping is best reserved for feeds greater than 5mb in size. The chosen file format needs to be highlighted to iVendi’s Product Support team during initial setup. 

### Support 
In the first instance please contact our Product Support team at support@ivendi.com or by calling 0345 226 0503 

### Appendix 
Below is the format we would expect to see for the CSV headers:

Feed_ID|Vehicle_ID|VRM|VRMYear|VIN|DateFirstRegistered|MOTExpiryDate|Make|Model|Vari ant|VehicleType|Mileage|BodyType|Doors|Colour|FuelType|EngineSize|Poweroutput|CO2|Tra nsmission|PreviousOwners|Price|PriceIncludesVat|TradePrice|TradePriceIncludesVat|PurchaseC ondition|WebSite|Origin|V5|ExDemo|FranchiseApproved|PictureUrls|ServiceHistory|FourWheel Drive|Attention Grabber|Options|Description|CapId|GlassID 

