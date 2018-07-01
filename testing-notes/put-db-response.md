> http://localhost:3003/overviews/restaurant/1000000/overview
> sent
```json
{
    "data" : {
        "column": {
            "colName" : "rest_name",
            "colNew" : "McDonalds"
        }
    }
}
```

> response
```json
{
    "response": {
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
                "[applied]": true
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
            }
        ],
        "pageState": null
    }
}
```
