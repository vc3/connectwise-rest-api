export interface ActivityReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface AgreementReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Board {
    "id"?: number;
    "name": string;
    "locationId": number;
    "businessUnitId": number;
    "inactive"?: boolean;
    "signOffTemplate"?: ServiceSignoffReference;
    "sendToContact"?: boolean;
    "contactTemplateId"?: number;
    "sendToResource"?: boolean;
    "resourceTemplateId"?: number;
    "projectFlag"?: boolean;
    /**
     * This field only shows if it is Project Board.
     */
    "showDependenciesFlag"?: boolean;
    /**
     * This field only shows if it is Project Board.
     */
    "showEstimatesFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface BoardReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Code {
    "id"?: number;
    "name": string;
    "description": string;
    "boardId"?: number;
    "locationId"?: number;
    "businessUnitId"?: number;
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
export interface ConfigurationReference {
    "id"?: number;
    "deviceIdentifier"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ContactReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Count {
    "count"?: number;
}
export interface CountryReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
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
export interface DocumentReference {
    "id"?: number;
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
export interface ExcludedMember {
    "id"?: number;
    "memberId": number;
    "boardId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface FilterValues {
    "conditions"?: string;
    "orderBy"?: string;
}
export interface GenericIdIdentifierReference {
    "id"?: number;
    "identifier"?: string;
}
export interface Item {
    "id"?: number;
    "name": string;
    "inactive"?: boolean;
    "typeAssociations"?: Array<TypeAssociations>;
    "addAllSubTypes"?: boolean;
    "removeAllSubTypes"?: boolean;
    "typeId"?: number;
    "boardId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface KnowledgeBaseArticle {
    "id"?: number;
    "title": string;
    "issue": string;
    "resolution": string;
    "locationId"?: number;
    "businessUnitId"?: number;
    "boardId"?: number;
    "categoryId"?: number;
    "subCategoryId"?: number;
    "dateCreated"?: string;
    "createdBy"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Location {
    "id"?: number;
    "name": string;
    "where": WhereEnum;
    "defaultFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum WhereEnum {
    OnSite,
    Remote,
    InHouse,
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
export interface OpportunityReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}
export interface Priority {
    "id"?: number;
    "name": string;
    "color": string;
    "sortOrder"?: number;
    "defaultFlag"?: boolean;
    "imageLink"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface PriorityReference {
    "id"?: number;
    "name"?: string;
    "sort"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProductReference {
    "id"?: number;
    "description"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectPhaseReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ProjectReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ScheduleEntryReference {
    "id"?: number;
    "description"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceCodeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceItemReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceLocationReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceNote {
    "id"?: number;
    "ticketId"?: number;
    "text"?: string;
    "detailDescriptionFlag"?: boolean;
    "internalAnalysisFlag"?: boolean;
    "resolutionFlag"?: boolean;
    "member"?: MemberReference;
    "contact"?: ContactReference;
    "customerUpdatedFlag"?: boolean;
    "processNotifications"?: boolean;
    "dateCreated"?: string;
    "createdBy"?: string;
    "internalFlag"?: boolean;
    "externalFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceSignoffReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceSourceReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceSubTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceTeamReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ServiceTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface SiteReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Source {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "enteredBy"?: string;
    "dateEntered"?: Date;
}
export interface Status {
    "id"?: number;
    "name": string;
    "boardId"?: number;
    "sortOrder"?: number;
    "displayOnBoard"?: boolean;
    "inactive"?: boolean;
    "closedStatus"?: boolean;
    "timeEntryNotAllowed"?: boolean;
    "defaultFlag"?: boolean;
    "escalationStatus"?: EscalationStatusEnum;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum EscalationStatusEnum {
    NotResponded,
    Responded,
    ResolutionPlan,
    Resolved,
    NoEscalation,
}
export interface SubType {
    "id"?: number;
    "name": string;
    "inactive"?: boolean;
    "typeAssociationIds"?: Array<number>;
    "addAllTypes"?: boolean;
    "removeAllTypes"?: boolean;
    "boardId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Survey {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;
    "headerIncludeLogoFlag"?: boolean;
    "headerText"?: string;
    "headerTextVisibleFlag"?: boolean;
    "footerText"?: string;
    "footerTextVisibleFlag"?: boolean;
    "thankYouText"?: string;
    "notifyWho"?: GenericIdIdentifierReference;
    "notifyWhoVisibleFlag"?: boolean;
    "notifyMember"?: MemberReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface SurveyQuestion {
    "id"?: number;
    "sequenceNumber"?: number;
    "type": TypeEnum;
    "question": string;
    "options"?: Array<SurveyQuestionOption>;
    "includeFlag"?: boolean;
    "requiredFlag"?: boolean;
    "noAnswerPoints"?: number;
    "surveyId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum TypeEnum {
    OpenEnded,
    Selection,
}
export interface SurveyQuestionOption {
    "includeFlag"?: boolean;
    "caption": string;
    "points"?: number;
}
export interface SurveyResult {
    "id"?: number;
    "ticketId": number;
    "emailAddress"?: string;
    "footerResponse"?: string;
    "contactMeFlag"?: boolean;
    "contact"?: ContactReference;
    "results"?: Array<SurveyResultDetail>;
    "totalPoints"?: number;
    "company"?: CompanyReference;
    "surveyId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface SurveyResultDetail {
    "questionId": number;
    /**
     * If question type is Selection, this should be the option array index
     */
    "answer"?: string;
}
export interface Task {
    "id"?: number;
    "ticketId"?: number;
    "notes"?: string;
    "closedFlag"?: boolean;
    "priority"?: number;
    "schedule"?: ScheduleEntryReference;
    "code"?: ServiceCodeReference;
    "resolution"?: string;
    "childScheduleAction"?: ChildScheduleActionEnum;
    "childTicketId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum ChildScheduleActionEnum {
    Transfer,
    Delete,
    Done,
}
export interface Team {
    "id"?: number;
    "name": string;
    "teamLeader": MemberReference;
    "members"?: Array<number>;
    "defaultFlag"?: boolean;
    "notifyOnTicketDelete"?: boolean;
    "boardId"?: number;
    "locationId"?: number;
    "businessUnitId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Ticket {
    "id"?: number;
    "summary": string;
    "recordType"?: RecordTypeEnum;
    "board"?: BoardReference;
    "status"?: ServiceStatusReference;
    "project"?: ProjectReference;
    "phase"?: ProjectPhaseReference;
    "wbsCode"?: string;
    "company": CompanyReference;
    "site"?: SiteReference;
    "siteName"?: string;
    "addressLine1"?: string;
    "addressLine2"?: string;
    "city"?: string;
    "stateIdentifier"?: string;
    "zip"?: string;
    "country"?: CountryReference;
    "contact"?: ContactReference;
    "contactPhoneNumber"?: string;
    "contactPhoneExtension"?: string;
    "contactEmailAddress"?: string;
    "type"?: ServiceTypeReference;
    "subType"?: ServiceSubTypeReference;
    "item"?: ServiceItemReference;
    "team"?: ServiceTeamReference;
    "owner"?: MemberReference;
    "priority"?: PriorityReference;
    "serviceLocation"?: ServiceLocationReference;
    "source"?: ServiceSourceReference;
    "requiredDate"?: Date;
    "budgetHours"?: number;
    "opportunity"?: OpportunityReference;
    "agreement"?: AgreementReference;
    "severity"?: SeverityEnum;
    "impact"?: ImpactEnum;
    "externalXRef"?: string;
    "poNumber"?: string;
    "knowledgeBaseCategoryId"?: number;
    "knowledgeBaseSubCategoryId"?: number;
    "allowAllClientsPortalView"?: boolean;
    "customerUpdatedFlag"?: boolean;
    "automaticEmailContactFlag"?: boolean;
    "automaticEmailResourceFlag"?: boolean;
    "automaticEmailCcFlag"?: boolean;
    "automaticEmailCc"?: string;
    "initialDescription"?: string;
    "initialInternalAnalysis"?: string;
    "initialResolution"?: string;
    "contactEmailLookup"?: string;
    "processNotifications"?: boolean;
    "skipCallback"?: boolean;
    "closedDate"?: string;
    "closedBy"?: string;
    "closedFlag"?: boolean;
    "dateEntered"?: string;
    "enteredBy"?: string;
    "actualHours"?: number;
    "approved"?: boolean;
    "subBillingMethod"?: SubBillingMethodEnum;
    "subBillingAmount"?: number;
    "subDateAccepted"?: string;
    "dateResolved"?: string;
    "dateResplan"?: string;
    "dateResponded"?: string;
    "resolveMinutes"?: number;
    "resPlanMinutes"?: number;
    "respondMinutes"?: number;
    "isInSla"?: boolean;
    "knowledgeBaseLinkId"?: number;
    "resources"?: string;
    "parentTicketId"?: number;
    "hasChildTicket"?: boolean;
    "knowledgeBaseLinkType"?: KnowledgeBaseLinkTypeEnum;
    "billTime"?: BillTimeEnum;
    "billExpenses"?: BillExpensesEnum;
    "billProducts"?: BillProductsEnum;
    "predecessorType"?: PredecessorTypeEnum;
    "predecessorId"?: number;
    "predecessorClosedFlag"?: boolean;
    "lagDays"?: number;
    "lagNonworkingDaysFlag"?: boolean;
    "estimatedStartDate"?: Date;
    "duration"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}
export declare enum RecordTypeEnum {
    ServiceTicket,
    ProjectTicket,
    ProjectIssue,
}
export declare enum SeverityEnum {
    Low,
    Medium,
    High,
}
export declare enum ImpactEnum {
    Low,
    Medium,
    High,
}
export declare enum SubBillingMethodEnum {
    ActualRates,
    FixedFee,
    NotToExceed,
    OverrideRate,
}
export declare enum KnowledgeBaseLinkTypeEnum {
    ServiceTicket,
    ProjectTicket,
    ProjectIssue,
    KnowledgeBaseArticle,
    Time,
    Activity,
}
export declare enum BillTimeEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillExpensesEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillProductsEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum PredecessorTypeEnum {
    Ticket,
    Phase,
}
export interface TimeEntryReference {
    "id"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Type {
    "id"?: number;
    "name": string;
    "category"?: CategoryEnum;
    "defaultFlag"?: boolean;
    "inactive"?: boolean;
    "requestForChange"?: boolean;
    "boardId"?: number;
    "locationId"?: number;
    "businessUnitId"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum CategoryEnum {
    Reactive,
    Proactive,
}
export interface TypeAssociations {
    "typeId"?: number;
    "subTypeAssociationIds"?: Array<number>;
}
export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}
export declare class BoardExcludedMembersApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Excluded Members Count
     * @param id
     * @param conditions
     */
    serviceBoardsIdExcludedMembersCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Delete Excluded Member By Id
     * @param id
     * @param excludedMemberId
     */
    serviceBoardsIdExcludedMembersExcludedMemberIdDelete(params: {
        id: number;
        excludedMemberId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Excluded Member By Id
     * @param id
     * @param excludedMemberId
     */
    serviceBoardsIdExcludedMembersExcludedMemberIdGet(params: {
        id: number;
        excludedMemberId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExcludedMember>;
    /**
     *
     * Get Excluded Members
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceBoardsIdExcludedMembersGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ExcludedMember>>;
    /**
     *
     * Create Excluded Member
     * @param id
     * @param excludedMember
     */
    serviceBoardsIdExcludedMembersPost(params: {
        id: number;
        excludedMember: ExcludedMember;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ExcludedMember>;
}
export declare class BoardItemsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Items Count
     * @param id
     * @param conditions
     */
    serviceBoardsIdItemsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Items
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceBoardsIdItemsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Item>>;
    /**
     *
     * Delete Item By Id
     * @param id
     * @param itemId
     */
    serviceBoardsIdItemsItemIdDelete(params: {
        id: number;
        itemId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Item By Id
     * @param id
     * @param itemId
     */
    serviceBoardsIdItemsItemIdGet(params: {
        id: number;
        itemId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Item>;
    /**
     *
     * Update Item
     * @param id
     * @param itemId
     * @param operations
     */
    serviceBoardsIdItemsItemIdPatch(params: {
        id: number;
        itemId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Item>;
    /**
     *
     * Replace Item
     * @param id
     * @param itemId
     * @param item
     */
    serviceBoardsIdItemsItemIdPut(params: {
        id: number;
        itemId: number;
        item: Item;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Item>;
    /**
     *
     * Create Item
     * @param id
     * @param item
     */
    serviceBoardsIdItemsPost(params: {
        id: number;
        item: Item;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Item>;
}
export declare class BoardStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Statuses Count
     * @param id
     * @param conditions
     */
    serviceBoardsIdStatusesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Statuses
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceBoardsIdStatusesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Status>>;
    /**
     *
     * Create Statuses
     * @param id
     * @param status
     */
    serviceBoardsIdStatusesPost(params: {
        id: number;
        status: Status;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Status>;
    /**
     *
     * Delete Status By Id
     * @param id
     * @param statusId
     */
    serviceBoardsIdStatusesStatusIdDelete(params: {
        id: number;
        statusId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Status By Id
     * @param id
     * @param statusId
     */
    serviceBoardsIdStatusesStatusIdGet(params: {
        id: number;
        statusId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Status>;
    /**
     *
     * Update Status
     * @param id
     * @param statusId
     * @param operations
     */
    serviceBoardsIdStatusesStatusIdPatch(params: {
        id: number;
        statusId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Status>;
    /**
     *
     * Replace Statuses
     * @param id
     * @param statusId
     * @param status
     */
    serviceBoardsIdStatusesStatusIdPut(params: {
        id: number;
        statusId: number;
        status: Status;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Status>;
}
export declare class BoardSubTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Subtypes Count
     * @param id
     * @param conditions
     */
    serviceBoardsIdSubtypesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Subtypes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceBoardsIdSubtypesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<SubType>>;
    /**
     *
     * Create Subtype
     * @param id
     * @param subtype
     */
    serviceBoardsIdSubtypesPost(params: {
        id: number;
        subtype: SubType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubType>;
    /**
     *
     * Delete Subtype By Id
     * @param id
     * @param subtypeId
     */
    serviceBoardsIdSubtypesSubtypeIdDelete(params: {
        id: number;
        subtypeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Subtype By Id
     * @param id
     * @param subtypeId
     */
    serviceBoardsIdSubtypesSubtypeIdGet(params: {
        id: number;
        subtypeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubType>;
    /**
     *
     * Update Subtype
     * @param id
     * @param subtypeId
     * @param operations
     */
    serviceBoardsIdSubtypesSubtypeIdPatch(params: {
        id: number;
        subtypeId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubType>;
    /**
     *
     * Replace Subtype
     * @param id
     * @param subtypeId
     * @param subtype
     */
    serviceBoardsIdSubtypesSubtypeIdPut(params: {
        id: number;
        subtypeId: number;
        subtype: SubType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SubType>;
}
export declare class BoardTeamsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Teams Count
     * @param id
     * @param conditions
     */
    serviceBoardsIdTeamsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Teams
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceBoardsIdTeamsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Team>>;
    /**
     *
     * Create Team
     * @param id
     * @param team
     */
    serviceBoardsIdTeamsPost(params: {
        id: number;
        team: Team;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
    /**
     *
     * Delete Team By Id
     * @param id
     * @param teamId
     */
    serviceBoardsIdTeamsTeamIdDelete(params: {
        id: number;
        teamId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Team By Id
     * @param id
     * @param teamId
     */
    serviceBoardsIdTeamsTeamIdGet(params: {
        id: number;
        teamId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
    /**
     *
     * Update Team
     * @param id
     * @param teamId
     * @param operations
     */
    serviceBoardsIdTeamsTeamIdPatch(params: {
        id: number;
        teamId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
    /**
     *
     * Replace Team
     * @param id
     * @param teamId
     * @param team
     */
    serviceBoardsIdTeamsTeamIdPut(params: {
        id: number;
        teamId: number;
        team: Team;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
}
export declare class BoardTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Types Count
     * @param id
     * @param conditions
     */
    serviceBoardsIdTypesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Types
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceBoardsIdTypesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Type>>;
    /**
     *
     * Create Type
     * @param id
     * @param type
     */
    serviceBoardsIdTypesPost(params: {
        id: number;
        type: Type;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Type>;
    /**
     *
     * Delete Type By Id
     * @param id
     * @param typeId
     */
    serviceBoardsIdTypesTypeIdDelete(params: {
        id: number;
        typeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Type By Id
     * @param id
     * @param typeId
     */
    serviceBoardsIdTypesTypeIdGet(params: {
        id: number;
        typeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Type>;
    /**
     *
     * Update Types
     * @param id
     * @param typeId
     * @param operations
     */
    serviceBoardsIdTypesTypeIdPatch(params: {
        id: number;
        typeId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Type>;
    /**
     *
     * Replace Types
     * @param id
     * @param typeId
     * @param type
     */
    serviceBoardsIdTypesTypeIdPut(params: {
        id: number;
        typeId: number;
        type: Type;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Type>;
    /**
     *
     * Get Sub Type Association
     * @param id
     * @param typeId
     */
    serviceBoardsIdTypesTypeIdSubTypeAssociationGet(params: {
        id: number;
        typeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<number>;
}
export declare class BoardsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Boards Count
     * @param conditions
     */
    serviceBoardsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Boards
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceBoardsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Board>>;
    /**
     *
     * Delete Board By Id
     * @param id
     */
    serviceBoardsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Board By Id
     * @param id
     */
    serviceBoardsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Board>;
    /**
     *
     * Update Board
     * @param id
     * @param operations
     */
    serviceBoardsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Board>;
    /**
     *
     * Replace Board
     * @param id
     * @param board
     */
    serviceBoardsIdPut(params: {
        id: number;
        board: Board;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Board>;
    /**
     *
     * Create Board
     * @param board
     */
    serviceBoardsPost(params: {
        board: Board;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Board>;
}
export declare class CodesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Create Codes Count
     * @param conditions
     */
    serviceCodesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Codes
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceCodesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Code>>;
    /**
     *
     * Delete Code By Id
     * @param id
     */
    serviceCodesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Code By Id
     * @param id
     */
    serviceCodesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Code>;
    /**
     *
     * Update Code
     * @param id
     * @param operations
     */
    serviceCodesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Code>;
    /**
     *
     * Replace Code
     * @param id
     * @param code
     */
    serviceCodesIdPut(params: {
        id: number;
        code: Code;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Code>;
    /**
     *
     * Create Codes
     * @param code
     */
    serviceCodesPost(params: {
        code: Code;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Code>;
}
export declare class KnowledgeBaseArticlesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Knowledge Base Articles Count
     * @param conditions
     */
    serviceKnowledgeBaseArticlesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Knowledge Base Articles
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceKnowledgeBaseArticlesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<KnowledgeBaseArticle>>;
    /**
     *
     * Delete Knowledge Base Article By Id
     * @param id
     */
    serviceKnowledgeBaseArticlesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Knowledge Base Article By Id
     * @param id
     */
    serviceKnowledgeBaseArticlesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<KnowledgeBaseArticle>;
    /**
     *
     * Update Knowledge Base Article
     * @param id
     * @param operations
     */
    serviceKnowledgeBaseArticlesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<KnowledgeBaseArticle>;
    /**
     *
     * Replace Knowledge Base Article
     * @param id
     * @param knowledgeBaseArticle
     */
    serviceKnowledgeBaseArticlesIdPut(params: {
        id: number;
        knowledgeBaseArticle: KnowledgeBaseArticle;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<KnowledgeBaseArticle>;
    /**
     *
     * Create Knowledge Base Article
     * @param knowledgeBaseArticle
     */
    serviceKnowledgeBaseArticlesPost(params: {
        knowledgeBaseArticle: KnowledgeBaseArticle;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<KnowledgeBaseArticle>;
}
export declare class LocationsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Create Locations Count
     * @param conditions
     */
    serviceLocationsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Locations
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceLocationsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Location>>;
    /**
     *
     * Delete Location By Id
     * @param id
     */
    serviceLocationsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Location By Id
     * @param id
     */
    serviceLocationsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Location>;
    /**
     *
     * Update Location
     * @param id
     * @param operations
     */
    serviceLocationsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Location>;
    /**
     *
     * Replace Location
     * @param id
     * @param location
     */
    serviceLocationsIdPut(params: {
        id: number;
        location: Location;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Location>;
    /**
     *
     * Create Location
     * @param location
     */
    serviceLocationsPost(params: {
        location: Location;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Location>;
}
export declare class PrioritiesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Create Priorities Count
     * @param conditions
     */
    servicePrioritiesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Priorities
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    servicePrioritiesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Priority>>;
    /**
     *
     * Delete Priority By Id
     * @param id
     */
    servicePrioritiesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Priority By Id
     * @param id
     */
    servicePrioritiesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Priority>;
    /**
     *
     * Get Priority Image
     * @param id
     * @param useDefaultFlag
     * @param lastModified
     */
    servicePrioritiesIdImageGet(params: {
        id: number;
        useDefaultFlag?: boolean;
        lastModified?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Update Priority
     * @param id
     * @param operations
     */
    servicePrioritiesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Priority>;
    /**
     *
     * Replace Priority
     * @param id
     * @param priority
     */
    servicePrioritiesIdPut(params: {
        id: number;
        priority: Priority;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Priority>;
    /**
     *
     * Create Priority
     * @param priority
     */
    servicePrioritiesPost(params: {
        priority: Priority;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Priority>;
}
export declare class SourcesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Create Sources Count
     * @param conditions
     */
    serviceSourcesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Sources
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceSourcesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Source>>;
    /**
     *
     * Delete Source By Id
     * @param id
     */
    serviceSourcesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Source By Id
     * @param id
     */
    serviceSourcesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Source>;
    /**
     *
     * Update Source
     * @param id
     * @param operations
     */
    serviceSourcesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Source>;
    /**
     *
     * Replace Source
     * @param id
     * @param source
     */
    serviceSourcesIdPut(params: {
        id: number;
        source: Source;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Source>;
    /**
     *
     * Create Source
     * @param source
     */
    serviceSourcesPost(params: {
        source: Source;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Source>;
}
export declare class SurveyQuestionsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Survey Questions Count
     * @param id
     * @param conditions
     */
    serviceSurveysIdQuestionsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Survey Questions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceSurveysIdQuestionsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<SurveyQuestion>>;
    /**
     *
     * Create Survey Question
     * @param id
     * @param surveyQuestion
     */
    serviceSurveysIdQuestionsPost(params: {
        id: number;
        surveyQuestion: SurveyQuestion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyQuestion>;
    /**
     *
     * Delete Survey Question By Id
     * @param id
     * @param questionId
     */
    serviceSurveysIdQuestionsQuestionIdDelete(params: {
        id: number;
        questionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Survey Question By Id
     * @param id
     * @param questionId
     */
    serviceSurveysIdQuestionsQuestionIdGet(params: {
        id: number;
        questionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyQuestion>;
    /**
     *
     * Update Survey Question
     * @param id
     * @param questionId
     * @param operations
     */
    serviceSurveysIdQuestionsQuestionIdPatch(params: {
        id: number;
        questionId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyQuestion>;
    /**
     *
     * Replace Survey Question
     * @param id
     * @param questionId
     * @param surveyQuestion
     */
    serviceSurveysIdQuestionsQuestionIdPut(params: {
        id: number;
        questionId: number;
        surveyQuestion: SurveyQuestion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyQuestion>;
}
export declare class SurveyResultsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Survey Results Count
     * @param id
     * @param conditions
     */
    serviceSurveysIdResultsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Survey Results
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceSurveysIdResultsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<SurveyResult>>;
    /**
     *
     * Create Survey Result
     * @param id
     * @param surveyResult
     */
    serviceSurveysIdResultsPost(params: {
        id: number;
        surveyResult: SurveyResult;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyResult>;
    /**
     *
     * Delete Survey Result By Id
     * @param id
     * @param resultId
     */
    serviceSurveysIdResultsResultIdDelete(params: {
        id: number;
        resultId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Survey Result By Id
     * @param id
     * @param resultId
     */
    serviceSurveysIdResultsResultIdGet(params: {
        id: number;
        resultId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyResult>;
    /**
     *
     * Update Survey Result
     * @param id
     * @param resultId
     * @param operations
     */
    serviceSurveysIdResultsResultIdPatch(params: {
        id: number;
        resultId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyResult>;
    /**
     *
     * Replace Survey Result
     * @param id
     * @param resultId
     * @param surveyResult
     */
    serviceSurveysIdResultsResultIdPut(params: {
        id: number;
        resultId: number;
        surveyResult: SurveyResult;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SurveyResult>;
}
export declare class SurveysApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Surveys Count
     * @param conditions
     */
    serviceSurveysCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Surveys
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceSurveysGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Survey>>;
    /**
     *
     * Delete Survey By Id
     * @param id
     */
    serviceSurveysIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Survey By Id
     * @param id
     */
    serviceSurveysIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Survey>;
    /**
     *
     * Update Survey
     * @param id
     * @param operations
     */
    serviceSurveysIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Survey>;
    /**
     *
     * Replace Survey
     * @param id
     * @param survey
     */
    serviceSurveysIdPut(params: {
        id: number;
        survey: Survey;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Survey>;
    /**
     *
     * Create Survey
     * @param survey
     */
    serviceSurveysPost(params: {
        survey: Survey;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Survey>;
}
export declare class TicketNotesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Service Notes Count
     * @param id
     * @param conditions
     */
    serviceTicketsIdNotesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Service Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceTicketsIdNotesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ServiceNote>>;
    /**
     *
     * Delete Service Note By Id
     * @param id
     * @param noteId
     */
    serviceTicketsIdNotesNoteIdDelete(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Service Note By Id
     * @param id
     * @param noteId
     */
    serviceTicketsIdNotesNoteIdGet(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ServiceNote>;
    /**
     *
     * Update Service Note
     * @param id
     * @param noteId
     * @param operations
     */
    serviceTicketsIdNotesNoteIdPatch(params: {
        id: number;
        noteId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ServiceNote>;
    /**
     *
     * Replace Service Note
     * @param id
     * @param noteId
     * @param serviceNote
     */
    serviceTicketsIdNotesNoteIdPut(params: {
        id: number;
        noteId: number;
        serviceNote: ServiceNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ServiceNote>;
    /**
     *
     * Create Service Note
     * @param id
     * @param serviceNote
     */
    serviceTicketsIdNotesPost(params: {
        id: number;
        serviceNote: ServiceNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ServiceNote>;
}
export declare class TicketTasksApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Tasks Count
     * @param id
     * @param conditions
     */
    serviceTicketsIdTasksCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Tasks
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceTicketsIdTasksGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Task>>;
    /**
     *
     * Create Task
     * @param id
     * @param task
     */
    serviceTicketsIdTasksPost(params: {
        id: number;
        task: Task;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Task>;
    /**
     *
     * Delete Task By Id
     * @param id
     * @param taskId
     */
    serviceTicketsIdTasksTaskIdDelete(params: {
        id: number;
        taskId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Task By Id
     * @param id
     * @param taskId
     */
    serviceTicketsIdTasksTaskIdGet(params: {
        id: number;
        taskId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Task>;
    /**
     *
     * Update Task
     * @param id
     * @param taskId
     * @param operations
     */
    serviceTicketsIdTasksTaskIdPatch(params: {
        id: number;
        taskId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Task>;
    /**
     *
     * Replace Task
     * @param id
     * @param taskId
     * @param task
     */
    serviceTicketsIdTasksTaskIdPut(params: {
        id: number;
        taskId: number;
        task: Task;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Task>;
}
export declare class TicketsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Tickets Count
     * @param conditions
     */
    serviceTicketsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Tickets
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    serviceTicketsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Ticket>>;
    /**
     *
     * Get Ticket Activities Count
     * @param id
     */
    serviceTicketsIdActivitiesCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Ticket Activities
     * @param id
     * @param page
     * @param pageSize
     */
    serviceTicketsIdActivitiesGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ActivityReference>>;
    /**
     *
     * Delete Configuration Association
     * @param id
     * @param configId
     */
    serviceTicketsIdConfigurationsConfigIdDelete(params: {
        id: number;
        configId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Configuration Association
     * @param id
     * @param configId
     */
    serviceTicketsIdConfigurationsConfigIdGet(params: {
        id: number;
        configId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationReference>;
    /**
     *
     * Get Ticket Configurations Count
     * @param id
     */
    serviceTicketsIdConfigurationsCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Ticket Configurations
     * @param id
     * @param page
     * @param pageSize
     */
    serviceTicketsIdConfigurationsGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ConfigurationReference>>;
    /**
     *
     * Create Configuration Association
     * @param id
     * @param configuration
     */
    serviceTicketsIdConfigurationsPost(params: {
        id: number;
        configuration: ConfigurationReference;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationReference>;
    /**
     *
     * Delete Ticket By Id
     * @param id
     */
    serviceTicketsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Ticket Documents Count
     * @param id
     */
    serviceTicketsIdDocumentsCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Ticket Documents
     * @param id
     * @param page
     * @param pageSize
     */
    serviceTicketsIdDocumentsGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<DocumentReference>>;
    /**
     *
     * Get Ticket By Id
     * @param id
     */
    serviceTicketsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Ticket>;
    /**
     *
     * Update Ticket
     * @param id
     * @param operations
     */
    serviceTicketsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Ticket>;
    /**
     *
     * Get Ticket Products Count
     * @param id
     */
    serviceTicketsIdProductsCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Ticket Products
     * @param id
     * @param page
     * @param pageSize
     */
    serviceTicketsIdProductsGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ProductReference>>;
    /**
     *
     * Replace Ticket
     * @param id
     * @param ticket
     */
    serviceTicketsIdPut(params: {
        id: number;
        ticket: Ticket;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Ticket>;
    /**
     *
     * Get Ticket Schedule Entries Count
     * @param id
     */
    serviceTicketsIdScheduleentriesCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Ticket Schedule Entries
     * @param id
     * @param page
     * @param pageSize
     */
    serviceTicketsIdScheduleentriesGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ScheduleEntryReference>>;
    /**
     *
     * Get Ticket Time Entries Count
     * @param id
     */
    serviceTicketsIdTimeentriesCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Ticket Time Entries
     * @param id
     * @param page
     * @param pageSize
     */
    serviceTicketsIdTimeentriesGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<TimeEntryReference>>;
    /**
     *
     * Create Ticket
     * @param ticket
     */
    serviceTicketsPost(params: {
        ticket: Ticket;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Ticket>;
    /**
     *
     * Ticket Search
     * @param filterValues
     * @param page
     * @param pageSize
     */
    serviceTicketsSearchPost(params: {
        filterValues: FilterValues;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Ticket>>;
}
