
## DELETE REQUEST:
> success response when deleting an existing row
```
{
  ResultSet: {
    info:
     { queriedHost: '127.0.0.1:9042',
       triedHosts: { '127.0.0.1:9042': null },
       speculativeExecutions: 0,
       achievedConsistency: 10,
       traceId: undefined,
       warnings: undefined,
       customPayload: undefined },
    rows: [ Row { '[applied]': true } ],
    rowLength: 1,
    columns: [ { name: '[applied]', type: [Object] } ],
    pageState: null,
    nextPage: undefined }
}
```
> response when deleting a non-existing row
```
DELETE REQUEST:
ResultSet {
  info:
   { queriedHost: '127.0.0.1:9042',
     triedHosts: { '127.0.0.1:9042': null },
     speculativeExecutions: 0,
     achievedConsistency: 10,
     traceId: undefined,
     warnings: undefined,
     customPayload: undefined },
  rows: [ Row { '[applied]': false } ],
  rowLength: 1,
  columns: [ { name: '[applied]', type: [Object] } ],
  pageState: null,
  nextPage: undefined }
```