export interface AgreementReference {
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
export interface CustomFieldValue {
    "id"?: number;
    "caption"?: string;
    "type"?: TypeEnum;
    "entryMethod"?: EntryMethodEnum;
    "numberOfDecimals"?: number;
    "value"?: string;
}
export declare enum TypeEnum {
    Text,
    Button,
    Currency,
    Date,
    Hyperlink,
    IPAddress,
    Checkbox,
    Number,
    Percent,
    TextArea,
    Password,
}
export declare enum EntryMethodEnum {
    EntryField,
    List,
    Option,
}
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
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
export interface TimeEntry {
    "id"?: number;
    "company"?: CompanyReference;
    "chargeToId"?: number;
    "chargeToType"?: ChargeToTypeEnum;
    "member"?: MemberReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "workType"?: WorkTypeReference;
    "workRole"?: WorkRoleReference;
    "agreement"?: AgreementReference;
    "timeStart": Date;
    "timeEnd"?: Date;
    "hoursDeduct"?: number;
    "actualHours"?: number;
    "billableOption": BillableOptionEnum;
    "notes"?: string;
    "internalNotes"?: string;
    "addToDetailDescriptionFlag"?: boolean;
    "addToInternalAnalysisFlag"?: boolean;
    "addToResolutionFlag"?: boolean;
    "emailResourceFlag"?: boolean;
    "emailContactFlag"?: boolean;
    "emailCcFlag"?: boolean;
    "emailCc"?: string;
    "hoursBilled"?: number;
    "enteredBy"?: string;
    "dateEntered"?: Date;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
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
export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}
export interface WorkRoleReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface WorkTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare class TimeEntriesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Time Entries Count
     * @param conditions
     */
    timeEntriesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Time Entries
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    timeEntriesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<TimeEntry>>;
    /**
     *
     * Delete Time Entry By Id
     * @param id
     */
    timeEntriesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Time Entry By Id
     * @param id
     */
    timeEntriesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<TimeEntry>;
    /**
     *
     * Update Time Entry
     * @param id
     * @param operations
     */
    timeEntriesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<TimeEntry>;
    /**
     *
     * Replace Time Entry
     * @param id
     * @param timeEntry
     */
    timeEntriesIdPut(params: {
        id: number;
        timeEntry: TimeEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<TimeEntry>;
    /**
     *
     * Create Time Entry
     * @param timeEntry
     */
    timeEntriesPost(params: {
        timeEntry: TimeEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<TimeEntry>;
}
