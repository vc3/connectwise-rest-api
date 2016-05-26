///<reference path="../../typings/index.d.ts"/>
/* tslint:disable */

'use strict';

import * as querystring from 'querystring';
import * as fetch from 'isomorphic-fetch';
import {assign} from './assign';


export interface AgreementReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ClassificationReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CompanyReference {
    "id"?: number;
    "identifier"?: string;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Count {
    "value"?: number;
}

export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}

export interface ExpenseEntry {
    "id"?: number;
    "company"?: CompanyReference;
    "chargeToId"?: number;
    "chargeToType"?: ChargeToTypeEnum;
    "type": ExpenseTypeReference;
    "member"?: MemberReference;
    "paymentMethod"?: PaymentMethodReference;
    "classification"?: ClassificationReference;
    "amount": number;
    "billableOption": BillableOptionEnum;
    "date": Date;
    "locationId"?: number;
    "businessUnitId"?: number;
    "notes"?: string;
    "agreement"?: AgreementReference;
    "invoiceAmount"?: number;
    "taxes"?: Array<ExpenseTax>;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum ChargeToTypeEnum {
    ServiceTicket = <any> 'ServiceTicket',
    ProjectTicket = <any> 'ProjectTicket',
    ChargeCode = <any> 'ChargeCode',
    Activity = <any> 'Activity'
}

export enum BillableOptionEnum {
    Billable = <any> 'Billable',
    DoNotBill = <any> 'DoNotBill',
    NoCharge = <any> 'NoCharge',
    NoDefault = <any> 'NoDefault'
}
export interface ExpenseTax {
    "id"?: number;
    "amount"?: number;
    "type"?: ExpenseTaxTypeReference;
}

export interface ExpenseTaxTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ExpenseType {
    "id"?: number;
    "name": string;
    "amountCaption": string;
    "reimbursementRate"?: number;
    "billExpenses": BillExpensesEnum;
    "invoiceMarkupOption": InvoiceMarkupOptionEnum;
    "invoiceMarkupAmount"?: number;
    "advancedAmountFlag"?: boolean;
    "mileageFlag"?: boolean;
    "quantityFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "maxAmount"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum BillExpensesEnum {
    Billable = <any> 'Billable',
    DoNotBill = <any> 'DoNotBill',
    NoCharge = <any> 'NoCharge'
}

export enum InvoiceMarkupOptionEnum {
    Percent = <any> 'Percent',
    Amount = <any> 'Amount',
    Mile = <any> 'Mile'
}
export interface ExpenseTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface MemberReference {
    "id"?: number;
    "identifier"?: string;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

/**
 * Metadata of the entity
 */
export interface Metadata {
}

export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}

export interface PaymentMethodReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}


//export namespace  {
    'use strict';

    export class ExpenseEntriesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Expense Entries Count
         * @param conditions
         */
        public expenseEntriesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/expense/entries/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Get Expense Entries
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public expenseEntriesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ExpenseEntry>> {
            const localVarPath = this.basePath + '/expense/entries';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            if (params.orderBy !== undefined) {
                queryParameters['orderBy'] = params.orderBy;
            }

            if (params.page !== undefined) {
                queryParameters['page'] = params.page;
            }

            if (params.pageSize !== undefined) {
                queryParameters['pageSize'] = params.pageSize;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Delete Expense Entry By Id
         * @param id
         */
        public expenseEntriesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/expense/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseEntriesIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Get Expense Entry By Id
         * @param id
         */
        public expenseEntriesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseEntry> {
            const localVarPath = this.basePath + '/expense/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseEntriesIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Update Expense Entry
         * @param id
         * @param operations
         */
        public expenseEntriesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseEntry> {
            const localVarPath = this.basePath + '/expense/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseEntriesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling expenseEntriesIdPatch');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Replace Expense Entry
         * @param id
         * @param expenseEntry
         */
        public expenseEntriesIdPut (params: {  id: number; expenseEntry: ExpenseEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseEntry> {
            const localVarPath = this.basePath + '/expense/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseEntriesIdPut');
            }
            // verify required parameter 'expenseEntry' is set
            if (params.expenseEntry == null) {
                throw new Error('Missing required parameter expenseEntry when calling expenseEntriesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.expenseEntry),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Expense Entry
         * @param expenseEntry
         */
        public expenseEntriesPost (params: {  expenseEntry: ExpenseEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseEntry> {
            const localVarPath = this.basePath + '/expense/entries';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'expenseEntry' is set
            if (params.expenseEntry == null) {
                throw new Error('Missing required parameter expenseEntry when calling expenseEntriesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.expenseEntry),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ExpenseTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Expense Types Count
         * @param conditions
         */
        public expenseTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/expense/types/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Get Expense Types
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public expenseTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ExpenseType>> {
            const localVarPath = this.basePath + '/expense/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            if (params.orderBy !== undefined) {
                queryParameters['orderBy'] = params.orderBy;
            }

            if (params.page !== undefined) {
                queryParameters['page'] = params.page;
            }

            if (params.pageSize !== undefined) {
                queryParameters['pageSize'] = params.pageSize;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Delete Expense Type By Id
         * @param id
         */
        public expenseTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/expense/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseTypesIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Get Expense Type By Id
         * @param id
         */
        public expenseTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseType> {
            const localVarPath = this.basePath + '/expense/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseTypesIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Update Expense Type
         * @param id
         * @param operations
         */
        public expenseTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseType> {
            const localVarPath = this.basePath + '/expense/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling expenseTypesIdPatch');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Replace Expense Type
         * @param id
         * @param expenseType
         */
        public expenseTypesIdPut (params: {  id: number; expenseType: ExpenseType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseType> {
            const localVarPath = this.basePath + '/expense/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling expenseTypesIdPut');
            }
            // verify required parameter 'expenseType' is set
            if (params.expenseType == null) {
                throw new Error('Missing required parameter expenseType when calling expenseTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.expenseType),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Expense Type
         * @param expenseType
         */
        public expenseTypesPost (params: {  expenseType: ExpenseType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExpenseType> {
            const localVarPath = this.basePath + '/expense/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'expenseType' is set
            if (params.expenseType == null) {
                throw new Error('Missing required parameter expenseType when calling expenseTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.expenseType),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
