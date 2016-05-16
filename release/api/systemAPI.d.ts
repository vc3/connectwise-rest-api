export interface AuditTrailEntry {
    "text"?: string;
    "enteredDate"?: string;
    "enteredBy"?: string;
    "auditType"?: string;
    "auditSource"?: string;
}
export interface AuditTrailEntryInsertRequest {
    "text": string;
    "objects"?: Array<AuditTrailObjects>;
}
export interface AuditTrailObjects {
    "type": TypeEnum;
    "ids": Array<string>;
}
export declare enum TypeEnum {
    Ticket,
    Configuration,
}
export interface CallbackEntry {
    "id"?: number;
    "url": string;
    "objectId": number;
    "type": string;
    "level": string;
    "memberId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ConnectWiseHostedSetup {
    "id"?: number;
    /**
     * Can be obtained via ConnectWiseHostedApiScreen report
     */
    "screenId": number;
    "description": string;
    "origin"?: string;
    "url": string;
    "podHeight"?: number;
    "type": TypeEnum;
    "disabledFlag"?: boolean;
    "createdBy"?: string;
    "dateCreated"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum TypeEnum {
    Tab,
    Pod,
}
export interface Count {
    "count"?: number;
}
export interface DocumentInfo {
    "id"?: number;
    "title"?: string;
    "fileName"?: string;
    "serverFileName"?: string;
    "owner"?: string;
    "linkFlag"?: boolean;
    "imageFlag"?: boolean;
    "publicFlag"?: boolean;
    "readOnlyFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}
export interface Info {
    "version"?: string;
    "isCloud"?: boolean;
    "serverTimeZone"?: string;
}
export interface IntegrationRequest {
    "url": string;
    "actionName": string;
    "token"?: string;
    "helpUrl"?: string;
    "disabledFlag"?: boolean;
}
export interface JObject {
}
export interface Link {
    "id"?: number;
    "name": string;
    "tableReferenceId": number;
    "url"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Member {
    "id"?: number;
    "identifier"?: string;
    "emailAddress"?: string;
    "name"?: string;
    "calendarId"?: number;
    "inactiveFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface MenuEntry {
    "id"?: number;
    "menuLocation": MenuLocationReference;
    "caption": string;
    "link": string;
    "newWindowFlag": boolean;
    "locationIds"?: Array<number>;
    "origin"?: string;
    "addAllLocations"?: boolean;
    "removeAllLocations"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface MenuLocationReference {
    "id"?: number;
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
export interface Report {
    "name"?: string;
}
export interface ReportDataResponse {
    "columnDefinitions"?: Array<JObject>;
    "rowValues"?: Array<JObject>;
}
export interface Token {
    "publicKey"?: string;
    "privateKey"?: string;
    "expiration"?: string;
}
export interface UserDefinedField {
    /**
     * ID of the custom user defined field
     */
    "id"?: number;
    /**
     * Id of the Pod where the custom field will be placed
     */
    "podId": number;
    /**
     * Field caption
     */
    "caption": string;
    /**
     * Must be between 1 and 50.  This defines the order in which the custom fields will appear
     */
    "sequenceNumber": number;
    /**
     * Help text to accompany the custom field
     */
    "helpText"?: string;
    "fieldTypeIdentifier": FieldTypeIdentifierEnum;
    /**
     * Only valid for Number or percent
     */
    "numberDecimals"?: number;
    "entryTypeIdentifier"?: EntryTypeIdentifierEnum;
    "requiredFlag"?: boolean;
    "displayOnScreenFlag"?: boolean;
    "readOnlyFlag"?: boolean;
    /**
     * Denotes that this custom field is included on a list view
     */
    "listViewFlag"?: boolean;
    /**
     * Only available with Button Field Type. Required when entryTypeIdentifier is button
     */
    "buttonUrl"?: string;
    "options"?: Array<UserDefinedFieldOption>;
    /**
     * Date in UTC the custom field was created
     */
    "dateCreated"?: Date;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum FieldTypeIdentifierEnum {
    Text,
    Button,
    Date,
    Hyperlink,
    Checkbox,
    Number,
    Percent,
    TextArea,
}
export declare enum EntryTypeIdentifierEnum {
    EntryField,
    List,
    Option,
}
export interface UserDefinedFieldOption {
    "id"?: number;
    "optionValue": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "sortOrder"?: number;
}
export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}
export declare class AuditTrailApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Members Count
     * @param type
     * @param id
     * @param deviceIdentifier
     */
    systemAudittrailCountGet(params: {
        type?: string;
        id?: number;
        deviceIdentifier?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Audit Trail
     * @param type
     * @param id
     * @param deviceIdentifier
     * @param page
     * @param pageSize
     */
    systemAudittrailGet(params: {
        type?: string;
        id?: number;
        deviceIdentifier?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<AuditTrailEntry>>;
    /**
     *
     * Insert Audit Trail Entries
     * @param insertRequest
     */
    systemAudittrailPost(params: {
        insertRequest: AuditTrailEntryInsertRequest;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
}
export declare class CallbackEntriesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Callback Entries Count
     * @param conditions
     */
    systemCallbacksCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Callback Entries
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    systemCallbacksGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CallbackEntry>>;
    /**
     *
     * Delete Callback Entry By Id
     * @param id
     */
    systemCallbacksIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Callback Entry By Id
     * @param id
     */
    systemCallbacksIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CallbackEntry>;
    /**
     *
     * Update Callback Entry
     * @param id
     * @param operations
     */
    systemCallbacksIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CallbackEntry>;
    /**
     *
     * Replace Callback Entry
     * @param id
     * @param callbackEntry
     */
    systemCallbacksIdPut(params: {
        id: number;
        callbackEntry: CallbackEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CallbackEntry>;
    /**
     *
     * Create Callback Entry
     * @param callbackEntry
     */
    systemCallbacksPost(params: {
        callbackEntry: CallbackEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CallbackEntry>;
}
export declare class ConnectWiseHostedSetupsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Connect Wise Hosted Setups Count
     * @param conditions
     */
    systemConnectwisehostedsetupsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Connect Wise Hosted Setups
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    systemConnectwisehostedsetupsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ConnectWiseHostedSetup>>;
    /**
     *
     * Delete Connect Wise Hosted Setup By Id
     * @param id
     */
    systemConnectwisehostedsetupsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Connect Wise Hosted Setup By Id
     * @param id
     */
    systemConnectwisehostedsetupsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConnectWiseHostedSetup>;
    /**
     *
     * Update Connect Wise Hosted Setup
     * @param id
     * @param operations
     */
    systemConnectwisehostedsetupsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConnectWiseHostedSetup>;
    /**
     *
     * Replace Connect Wise Hosted Setup
     * @param id
     * @param connectWiseHostedSetup
     */
    systemConnectwisehostedsetupsIdPut(params: {
        id: number;
        connectWiseHostedSetup: ConnectWiseHostedSetup;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConnectWiseHostedSetup>;
    /**
     *
     * Create Connect Wise Hosted Setup
     * @param connectWiseHostedSetup
     */
    systemConnectwisehostedsetupsPost(params: {
        connectWiseHostedSetup: ConnectWiseHostedSetup;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConnectWiseHostedSetup>;
}
export declare class DocumentsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Documents Info Count
     * @param recordType
     * @param recordId
     */
    systemDocumentsCountGet(params: {
        recordType?: string;
        recordId?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Documents Info
     * @param recordType
     * @param recordId
     * @param page
     * @param pageSize
     */
    systemDocumentsGet(params: {
        recordType?: string;
        recordId?: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<DocumentInfo>>;
    /**
     *
     * Delete Document Info By Id
     * @param id
     */
    systemDocumentsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Download Document
     * @param id
     * @param lastModified
     */
    systemDocumentsIdDownloadGet(params: {
        id: number;
        lastModified?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Document Info By Id
     * @param id
     */
    systemDocumentsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<DocumentInfo>;
    /**
     *
     * Update Document By Id
     * @param id
     * @param recordId Entity id
     * @param recordType Entity type
     * @param title Document title
     * @param url Document url
     * @param file File to upload
     * @param privateFlag Indicates if document is private
     * @param readOnlyFlag Indicates if document is readonly
     */
    systemDocumentsIdPost(params: {
        id: number;
        recordId: number;
        recordType: string;
        title: string;
        url: string;
        file?: any;
        privateFlag?: boolean;
        readOnlyFlag?: boolean;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<DocumentInfo>;
    /**
     *
     * Insert Document
     * @param recordId Entity id
     * @param recordType Entity type
     * @param title Document title
     * @param url Document url
     * @param file File to upload
     * @param privateFlag Indicates if document is private
     * @param readOnlyFlag Indicates if document is readonly
     */
    systemDocumentsPost(params: {
        recordId: number;
        recordType: string;
        title: string;
        url: string;
        file?: any;
        privateFlag?: boolean;
        readOnlyFlag?: boolean;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<DocumentInfo>;
    /**
     *
     * Get Upload Sample Page
     */
    systemDocumentsUploadsampleGet(params: {}, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
}
export declare class InfoApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Infos
     */
    systemInfoGet(params: {}, extraQueryParams?: any, extraFetchParams?: any): Promise<Info>;
}
export declare class IntegrationsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Add Or Update Integration
     * @param integrator
     * @param request
     * @param type
     */
    systemIntegrationsIntegratorPost(params: {
        integrator: string;
        request: IntegrationRequest;
        type?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
}
export declare class LinksApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Links Count
     * @param conditions
     */
    systemLinksCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Links
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    systemLinksGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Link>>;
    /**
     *
     * Delete Link By Id
     * @param id
     */
    systemLinksIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Link By Id
     * @param id
     */
    systemLinksIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Link>;
    /**
     *
     * Update Link
     * @param id
     * @param operations
     */
    systemLinksIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Link>;
    /**
     *
     * Replace Link
     * @param id
     * @param link
     */
    systemLinksIdPut(params: {
        id: number;
        link: Link;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Link>;
    /**
     *
     * Create Link
     * @param link
     */
    systemLinksPost(params: {
        link: Link;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Link>;
}
export declare class MembersApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Members Count
     * @param conditions
     */
    systemMembersCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Members
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    systemMembersGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Member>>;
    /**
     *
     * Get Member By Id
     * @param memberIdentifier
     */
    systemMembersMemberIdentifierGet(params: {
        memberIdentifier: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Member>;
    /**
     *
     * Get Member Image
     * @param memberIdentifier
     * @param useDefaultFlag
     * @param lastmodified
     */
    systemMembersMemberIdentifierImageGet(params: {
        memberIdentifier: string;
        useDefaultFlag?: boolean;
        lastmodified?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Create Token By Member Identifier
     * @param memberIdentifier
     */
    systemMembersMemberIdentifierTokensPost(params: {
        memberIdentifier: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Token>;
}
export declare class MenuEntriesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Menu Entries Count
     * @param conditions
     */
    systemMenuentriesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Menu Entries
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    systemMenuentriesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<MenuEntry>>;
    /**
     *
     * Delete Menu Entry By Id
     * @param id
     */
    systemMenuentriesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Menu Entry By Id
     * @param id
     */
    systemMenuentriesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MenuEntry>;
    /**
     *
     * Get Menu Entry Image
     * @param id
     * @param lastmodified
     * @param largeFlag
     */
    systemMenuentriesIdImageGet(params: {
        id: number;
        lastmodified?: string;
        largeFlag?: boolean;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Upload Menu Entry Image
     * @param id
     */
    systemMenuentriesIdImagePost(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Update Menu Entry
     * @param id
     * @param operations
     */
    systemMenuentriesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MenuEntry>;
    /**
     *
     * Replace Menu Entry
     * @param id
     * @param menuEntry
     */
    systemMenuentriesIdPut(params: {
        id: number;
        menuEntry: MenuEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MenuEntry>;
    /**
     *
     * Create Menu Entry
     * @param menuEntry
     */
    systemMenuentriesPost(params: {
        menuEntry: MenuEntry;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MenuEntry>;
}
export declare class ReportsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Reports
     * @param conditions
     * @param orderBy
     */
    systemReportsGet(params: {
        conditions?: string;
        orderBy?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Report>>;
    /**
     *
     * Get Column Definitions
     * @param reportName
     */
    systemReportsReportNameColumnsGet(params: {
        reportName: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<JObject>>;
    /**
     *
     * Get Report Results Count
     * @param reportName
     * @param conditions
     */
    systemReportsReportNameCountGet(params: {
        reportName: string;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Report Results
     * @param reportName
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     * @param columns
     */
    systemReportsReportNameGet(params: {
        reportName: string;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
        columns?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ReportDataResponse>;
}
export declare class UserDefinedFieldsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get User Defined Fields Count
     * @param conditions
     */
    systemUserDefinedFieldsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get User Defined Fields
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    systemUserDefinedFieldsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<UserDefinedField>>;
    /**
     *
     * Delete User Defined Field By Id
     * @param id
     */
    systemUserDefinedFieldsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get User Defined Field By Id
     * @param id
     */
    systemUserDefinedFieldsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<UserDefinedField>;
    /**
     *
     * Update User Defined Field
     * @param id
     * @param operations
     */
    systemUserDefinedFieldsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<UserDefinedField>;
    /**
     *
     * Replace User Defined Field
     * @param id
     * @param userDefinedField
     */
    systemUserDefinedFieldsIdPut(params: {
        id: number;
        userDefinedField: UserDefinedField;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<UserDefinedField>;
    /**
     *
     * Create User Defined Field
     * @param userDefinedField
     */
    systemUserDefinedFieldsPost(params: {
        userDefinedField: UserDefinedField;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<UserDefinedField>;
}
