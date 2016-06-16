# connectwise-rest-api

> nodejs module for interacting with Connectwise's REST API

## Install 

```
$ npm install --save connectwise-rest-api
```

## Typings

Typings are included in the package, however if you would like to install them seperatly you can.

```
$ typings install github:vc3/connectwise-rest-api/connectwise.d.ts -S --global
```


##Usage
---------

```ts
import { Connectwise } from 'connectwise-rest-api';

// The Connectwise is a wrapper class provides access to all the api endpoints and methods.
const connectwise: Connectwise = new Connectwise('connectwise url', 'company name', 'public api key', 'private api key');

// Check Connectwise's documentation for available conditions
const params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; } = { your params };

connectwise.CompaniesApi.companyCompaniesGet(params).then( response => {
    console.log(response[0].name);
})
```

You can also import types or a specific api class

```ts
import { Ticket, TicketsApi } from 'connectwise-rest-api/release/api/serviceAPI';

// Make sure you set your connectwise URL and Auth header

const authKey: string = new Buffer(`${company id}+${public api key}:${private api key}`).toString('base64');

const cwService: TicketsApi = new TicketsApi(`https://${connectwise url}/v4_6_release/apis/3.0`);

cwService.defaultHeaders = { 'Authorization': `Basic ${authKey}` };

cwService.serviceTicketsIdGet(12345).then( (response: Ticket) => {
    console.log(response);
});
```