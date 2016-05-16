/// <reference path="../../typings/main.d.ts" />
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
export declare enum ChargeToTypeEnum {
    ServiceTicket,
    ProjectTicket,
    ChargeCode,
    Activity,
}
export declare enum BillableOptionEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
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
export declare enum BillExpensesEnum {
    Billable,
    DoNotBill,
    NoCharge,
}
export declare enum InvoiceMarkupOptionEnum {
    Percent,
    Amount,
    Mile,
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
export declare class ExpenseEntriesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Expense Entries Count
     * @param conditions
     */
    expenseEntriesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Expense Entries
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    expenseEntriesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ExpenseEntry>>;
    /**
     *
     * Delete Expense Entry By Id
     * @param id
     */
    expenseEntriesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Expense Entry By Id
     * @param id
     */
    expenseEntriesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseEntry>;
    /**
     *
     * Update Expense Entry
     * @param id
     * @param operations
     */
    expenseEntriesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseEntry>;
    /**
     *
     * Replace Expense Entry
     * @param id
     * @param expenseEntry
     */
    expenseEntriesIdPut(params: {
        id: number;
        expenseEntry: ExpenseEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseEntry>;
    /**
     *
     * Create Expense Entry
     * @param expenseEntry
     */
    expenseEntriesPost(params: {
        expenseEntry: ExpenseEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseEntry>;
}
export declare class ExpenseTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Expense Types Count
     * @param conditions
     */
    expenseTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Expense Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    expenseTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ExpenseType>>;
    /**
     *
     * Delete Expense Type By Id
     * @param id
     */
    expenseTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Expense Type By Id
     * @param id
     */
    expenseTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseType>;
    /**
     *
     * Update Expense Type
     * @param id
     * @param operations
     */
    expenseTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseType>;
    /**
     *
     * Replace Expense Type
     * @param id
     * @param expenseType
     */
    expenseTypesIdPut(params: {
        id: number;
        expenseType: ExpenseType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseType>;
    /**
     *
     * Create Expense Type
     * @param expenseType
     */
    expenseTypesPost(params: {
        expenseType: ExpenseType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExpenseType>;
}
