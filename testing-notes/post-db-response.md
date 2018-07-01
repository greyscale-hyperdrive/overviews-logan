> http://localhost:3003/overviews/restaurant/1000001/overview
> sent
```json
{
  "data" : {
    "column": {
      "insertRow" : [
        1000001, "520 somewhere ave, big city, country, 19120", "we sometimes serve breakfast", "breakfast ends?", "breakfast starts when I wake up", "San Francisco", "anza and balboa", "BQQ", "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.", "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Casual Dress", "Helen Henry", "20.1131037", "9.9692869", "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Center Hasipa", "Find your own damn parking, we cant buy a lot", "Diners Club,Discover,JCB,Visa", "(332) 406-5093", "$31 to $50", "the bus? walking?", "fojhinuobe", "Bar Dining:29,Happy Hour:126,Outdoor dining:349,Wheelchair Access:118,Wine:48,Creative Cuisine:466,Casual:320,Neighborhood Gem:429,Scenic View:488", "CA", "dontclickme.com", "85263"
      ]
    }
  }
}
```

> response
```json
{
    "info": {
        "queriedHost": "127.0.0.1:9042",
        "triedHosts": {
            "127.0.0.1:9042": null
        },
        "speculativeExecutions": 0,
        "achievedConsistency": 10
    },
    "rows": [
        {
            "[applied]": false,
            "rest_id": 1000001,
            "address": "74 Sabun Point Gad Suupot, Galisoep, WY 51930",
            "breakfast": "Breakfast: Monday through Friday 04:00 - 12:30",
            "breakfast_end": "12:30:00",
            "breakfast_start": "04:00:00",
            "city": "Galisoep",
            "cross_street": "Sabun Point between Dimu Avenue and Dulku Drive",
            "cuisine": "Brewery",
            "description": "Rajeuh mivut vi va dosnaz ciosjar keki nufaug iwgogbi pekki ocukeh los ajama se. Koltokko agub wanwov zeciiha daz namjouki hocabza af jopod se hatduvfe ehorittar ja jesucaeg dilsankec sefodwat lab. Tas za mohlom wugrapra tevan ustiwig puolpum pamuzpo acaget paza piwgu hotmiog ci vijgusab kuse hege pakulauzo. Seffinet jovkic nutonvet ulov usipdil woas et catona lepeuc lu rulzeje tazajasu peusiuw iju. Si ba divbesot sa tuakza vuinu rinu sosugat hucnunmiw velcavaf zitlop ram igeviur iz tanvozji adenu uzeavaguv pef. Ot meheote vezkasi huudo onola omifu mo uri ejumeghul mam taptepe gudaf.",
            "dining_style": "Fine Dining",
            "dinner": "Dinner: Monday through Friday 16:00 - 22:00",
            "dinner_end": "22:00:00",
            "dinner_start": "16:00:00",
            "dress_code": "Smart Casual",
            "executive_chef": "Elmer Baker",
            "lat": "82.8401914",
            "lgn": "-16.0983862",
            "lunch": "Lunch: Daily 12:00 - 16:00",
            "lunch_end": "16:00:00",
            "lunch_start": "12:00:00",
            "neighborhood": "Outer Kacu",
            "parking_details": "Ipoleh ubwav unowofjuk mizsij ur nomashe hahen kuhnazuw bo lebfehkot ezutidta pooboha. Movasga lapenha peep higwuvfic ginvomur taw wo feuw werobuke tejewe folav ifinasvi. Nef uffurez eladul rir huisne gukziavi adhebhe gin pildemhac wiraw etbeso renow uvo.",
            "payment_options": "AMEX,Diners Club,Discover,JCB,MasterCard,Visa",
            "phone_number": "(343) 596-5519",
            "price_range": "$31 to $50",
            "public_transit": "Umi to jowwejju mad.",
            "rest_name": "kukzo",
            "state": "WY",
            "tags": "Full Bar:459,Happy Hour:23,Non-Smoking:175,Private Room:43,View:215,Good For A Date:32,Counter Seating:24,Handcrafted Cocktails:8",
            "website": "tejarit.com",
            "zip": "51930"
        }
    ],
    "rowLength": 1,
    "columns": [
        {
            "name": "[applied]",
            "type": {
                "code": 4,
                "type": null
            }
        },
        {
            "name": "rest_id",
            "type": {
                "code": 9,
                "type": null
            }
        },
        {
            "name": "address",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "breakfast",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "breakfast_end",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "breakfast_start",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "city",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "cross_street",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "cuisine",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "description",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "dining_style",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "dinner",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "dinner_end",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "dinner_start",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "dress_code",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "executive_chef",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "lat",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "lgn",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "lunch",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "lunch_end",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "lunch_start",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "neighborhood",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "parking_details",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "payment_options",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "phone_number",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "price_range",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "public_transit",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "rest_name",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "state",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "tags",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "website",
            "type": {
                "code": 13,
                "type": null
            }
        },
        {
            "name": "zip",
            "type": {
                "code": 13,
                "type": null
            }
        }
    ],
    "pageState": null
}
```
