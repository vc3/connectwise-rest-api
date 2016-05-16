export interface ActivityReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Campaign {
    "id"?: number;
    "name": string;
    "type": CampaignTypeReference;
    "subType": CampaignSubTypeReference;
    "status"?: CampaignStatusReference;
    "startDate": Date;
    "endDate"?: Date;
    "locationId"?: number;
    "member"?: MemberReference;
    "inactive"?: boolean;
    "inactiveDaysAfterEnd"?: number;
    "notes"?: string;
    "defaultGroup"?: GroupReference;
    "marketingManagerDefaultTrackId"?: number;
    "opportunityDefaultTrackId"?: number;
    "impressions"?: number;
    "budgetRevenue"?: number;
    "budgetCost"?: number;
    "actualCost"?: number;
    "budgetGrossMargin"?: number;
    "budgetROI"?: number;
    "actualRevenue"?: number;
    "actualGrossMargin"?: number;
    "actualROI"?: number;
    "emailsSent"?: number;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CampaignAudit {
    "id"?: number;
    "emailsSent": number;
    "emailsUnsent"?: number;
    "documentsCreated"?: number;
    "emailSubject"?: string;
    "group"?: GroupReference;
    "campaignId"?: number;
    "createdBy"?: string;
    "dateCreated"?: string;
}
export interface CampaignStatus {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CampaignStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CampaignSubType {
    "id"?: number;
    "typeId"?: number;
    "name": string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CampaignSubTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CampaignType {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CampaignTypeReference {
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
export interface EmailOpened {
    "id"?: number;
    "campaignId"?: number;
    "contactId": number;
    "dateOpened"?: Date;
}
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}
export interface FormSubmitted {
    "id"?: number;
    "campaignId"?: number;
    "contactId": number;
    "dateSubmitted"?: Date;
    "url": string;
    "queryString"?: string;
    "pageType"?: string;
    "pageSubType"?: string;
    "topic"?: string;
    "version"?: string;
    "status"?: string;
}
export interface Group {
    "id"?: number;
    "name": string;
    "publicDescription"?: string;
    "publicFlag"?: boolean;
    "inactiveFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface GroupReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface LinkClicked {
    "id"?: number;
    "campaignId"?: number;
    "contactId": number;
    "dateClicked"?: Date;
    "url": string;
    "queryString"?: string;
}
export interface MarketingCompany {
    "id": number;
    "groupId"?: number;
    "defaultContactFlag"?: boolean;
    "allContactsFlag"?: boolean;
    "unsubscribeFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface MarketingContact {
    "id": number;
    "groupId"?: number;
    "note"?: string;
    "unsubscribeFlag"?: boolean;
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
export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}
export declare class CampaignAuditsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Campaign Audit By Id
     * @param id
     * @param auditId
     */
    marketingCampaignsIdAuditsAuditIdDelete(params: {
        id: number;
        auditId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Campaign Audit By Id
     * @param id
     * @param auditId
     */
    marketingCampaignsIdAuditsAuditIdGet(params: {
        id: number;
        auditId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignAudit>;
    /**
     *
     * Update Campaign Audit
     * @param id
     * @param auditId
     * @param operations
     */
    marketingCampaignsIdAuditsAuditIdPatch(params: {
        id: number;
        auditId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignAudit>;
    /**
     *
     * Replace Campaign Audit
     * @param id
     * @param auditId
     * @param campaignAudit
     */
    marketingCampaignsIdAuditsAuditIdPut(params: {
        id: number;
        auditId: number;
        campaignAudit: CampaignAudit;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignAudit>;
    /**
     *
     * Get Campaign Audits Count
     * @param id
     * @param conditions
     */
    marketingCampaignsIdAuditsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Campaign Audits
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsIdAuditsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CampaignAudit>>;
    /**
     *
     * Create Campaign Audit
     * @param id
     * @param campaignAudit
     */
    marketingCampaignsIdAuditsPost(params: {
        id: number;
        campaignAudit: CampaignAudit;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignAudit>;
}
export declare class CampaignEmailsOpenedApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Emails Opened Count
     * @param id
     * @param conditions
     */
    marketingCampaignsIdEmailsOpenedCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Delete Email Opened By Id
     * @param id
     * @param emailOpenedId
     */
    marketingCampaignsIdEmailsOpenedEmailOpenedIdDelete(params: {
        id: number;
        emailOpenedId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Email Opened By Id
     * @param id
     * @param emailOpenedId
     */
    marketingCampaignsIdEmailsOpenedEmailOpenedIdGet(params: {
        id: number;
        emailOpenedId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<EmailOpened>;
    /**
     *
     * Update Email Opened
     * @param id
     * @param emailOpenedId
     * @param operations
     */
    marketingCampaignsIdEmailsOpenedEmailOpenedIdPatch(params: {
        id: number;
        emailOpenedId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<EmailOpened>;
    /**
     *
     * Replace Email Opened
     * @param id
     * @param emailOpenedId
     * @param emailOpened
     */
    marketingCampaignsIdEmailsOpenedEmailOpenedIdPut(params: {
        id: number;
        emailOpenedId: number;
        emailOpened: EmailOpened;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<EmailOpened>;
    /**
     *
     * Get Emails Opened
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsIdEmailsOpenedGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<EmailOpened>>;
    /**
     *
     * Create Email Opened
     * @param id
     * @param emailOpened
     */
    marketingCampaignsIdEmailsOpenedPost(params: {
        id: number;
        emailOpened: EmailOpened;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<EmailOpened>;
}
export declare class CampaignFormsSubmittedApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Forms Submitted Count
     * @param id
     * @param conditions
     */
    marketingCampaignsIdFormsSubmittedCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Delete Form Submitted By Id
     * @param id
     * @param formSubmittedId
     */
    marketingCampaignsIdFormsSubmittedFormSubmittedIdDelete(params: {
        id: number;
        formSubmittedId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Form Submitted By Id
     * @param id
     * @param formSubmittedId
     */
    marketingCampaignsIdFormsSubmittedFormSubmittedIdGet(params: {
        id: number;
        formSubmittedId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<FormSubmitted>;
    /**
     *
     * Update Form Submitted
     * @param id
     * @param formSubmittedId
     * @param operations
     */
    marketingCampaignsIdFormsSubmittedFormSubmittedIdPatch(params: {
        id: number;
        formSubmittedId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<FormSubmitted>;
    /**
     *
     * Replace Form Submitted
     * @param id
     * @param formSubmittedId
     * @param formSubmitted
     */
    marketingCampaignsIdFormsSubmittedFormSubmittedIdPut(params: {
        id: number;
        formSubmittedId: number;
        formSubmitted: FormSubmitted;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<FormSubmitted>;
    /**
     *
     * Get Forms Submitted
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsIdFormsSubmittedGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<FormSubmitted>>;
    /**
     *
     * Create Form Submitted
     * @param id
     * @param formSubmitted
     */
    marketingCampaignsIdFormsSubmittedPost(params: {
        id: number;
        formSubmitted: FormSubmitted;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<FormSubmitted>;
}
export declare class CampaignLinksClickedApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Links Clicked Count
     * @param id
     * @param conditions
     */
    marketingCampaignsIdLinksClickedCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Links Clicked
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsIdLinksClickedGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<LinkClicked>>;
    /**
     *
     * Delete Link Clicked By Id
     * @param id
     * @param linkClickedId
     */
    marketingCampaignsIdLinksClickedLinkClickedIdDelete(params: {
        id: number;
        linkClickedId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Link Clicked By Id
     * @param id
     * @param linkClickedId
     */
    marketingCampaignsIdLinksClickedLinkClickedIdGet(params: {
        id: number;
        linkClickedId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<LinkClicked>;
    /**
     *
     * Update Link Clicked
     * @param id
     * @param linkClickedId
     * @param operations
     */
    marketingCampaignsIdLinksClickedLinkClickedIdPatch(params: {
        id: number;
        linkClickedId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<LinkClicked>;
    /**
     *
     * Replace Link Clicked
     * @param id
     * @param linkClickedId
     * @param linkClicked
     */
    marketingCampaignsIdLinksClickedLinkClickedIdPut(params: {
        id: number;
        linkClickedId: number;
        linkClicked: LinkClicked;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<LinkClicked>;
    /**
     *
     * Create Link Clicked
     * @param id
     * @param linkClicked
     */
    marketingCampaignsIdLinksClickedPost(params: {
        id: number;
        linkClicked: LinkClicked;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<LinkClicked>;
}
export declare class CampaignStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Campaign Statuses Count
     * @param conditions
     */
    marketingCampaignsStatusesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Campaign Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsStatusesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CampaignStatus>>;
    /**
     *
     * Delete Campaign Status By Id
     * @param id
     */
    marketingCampaignsStatusesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Campaign Status By Id
     * @param id
     */
    marketingCampaignsStatusesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignStatus>;
    /**
     *
     * Update Campaign Status
     * @param id
     * @param operations
     */
    marketingCampaignsStatusesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignStatus>;
    /**
     *
     * Replace Campaign Status
     * @param id
     * @param campaignStatus
     */
    marketingCampaignsStatusesIdPut(params: {
        id: number;
        campaignStatus: CampaignStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignStatus>;
    /**
     *
     * Create Campaign Status
     * @param campaignStatus
     */
    marketingCampaignsStatusesPost(params: {
        campaignStatus: CampaignStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignStatus>;
}
export declare class CampaignSubTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Campaign Sub Types Count
     * @param id
     * @param conditions
     */
    marketingCampaignsTypesIdSubTypesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Campaign Sub Types
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsTypesIdSubTypesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CampaignSubType>>;
    /**
     *
     * Create Campaign Sub Type
     * @param id
     * @param campaignSubType
     */
    marketingCampaignsTypesIdSubTypesPost(params: {
        id: number;
        campaignSubType: CampaignSubType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignSubType>;
    /**
     *
     * Delete Campaign Sub Type By Id
     * @param id
     * @param subTypeId
     */
    marketingCampaignsTypesIdSubTypesSubTypeIdDelete(params: {
        id: number;
        subTypeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Campaign Sub Type By Id
     * @param id
     * @param subTypeId
     */
    marketingCampaignsTypesIdSubTypesSubTypeIdGet(params: {
        id: number;
        subTypeId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignSubType>;
    /**
     *
     * Update Campaign Sub Type
     * @param id
     * @param subTypeId
     * @param operations
     */
    marketingCampaignsTypesIdSubTypesSubTypeIdPatch(params: {
        id: number;
        subTypeId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignSubType>;
    /**
     *
     * Replace Campaign Sub Type
     * @param id
     * @param subTypeId
     * @param campaignSubType
     */
    marketingCampaignsTypesIdSubTypesSubTypeIdPut(params: {
        id: number;
        subTypeId: number;
        campaignSubType: CampaignSubType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignSubType>;
}
export declare class CampaignTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Campaign Types Count
     * @param conditions
     */
    marketingCampaignsTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Campaign Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CampaignType>>;
    /**
     *
     * Delete Campaign Type By Id
     * @param id
     */
    marketingCampaignsTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Campaign Type By Id
     * @param id
     */
    marketingCampaignsTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignType>;
    /**
     *
     * Update Campaign Type
     * @param id
     * @param operations
     */
    marketingCampaignsTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignType>;
    /**
     *
     * Replace Campaign Type
     * @param id
     * @param campaignType
     */
    marketingCampaignsTypesIdPut(params: {
        id: number;
        campaignType: CampaignType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignType>;
    /**
     *
     * Create Campaign Type
     * @param campaignType
     */
    marketingCampaignsTypesPost(params: {
        campaignType: CampaignType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CampaignType>;
}
export declare class CampaignsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Campaigns Count
     * @param conditions
     */
    marketingCampaignsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Campaigns
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingCampaignsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Campaign>>;
    /**
     *
     * Get Campaign Activities Count
     * @param id
     */
    marketingCampaignsIdActivitiesCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Campaign Activities
     * @param id
     * @param page
     * @param pageSize
     */
    marketingCampaignsIdActivitiesGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ActivityReference>>;
    /**
     *
     * Delete Campaign By Id
     * @param id
     */
    marketingCampaignsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Campaign By Id
     * @param id
     */
    marketingCampaignsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Campaign>;
    /**
     *
     * Get Campaign Opportunities Count
     * @param id
     */
    marketingCampaignsIdOpportunitiesCountGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Campaign Opportunities
     * @param id
     * @param page
     * @param pageSize
     */
    marketingCampaignsIdOpportunitiesGet(params: {
        id: number;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OpportunityReference>>;
    /**
     *
     * Update Campaign
     * @param id
     * @param operations
     */
    marketingCampaignsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Campaign>;
    /**
     *
     * Replace Campaign
     * @param id
     * @param campaign
     */
    marketingCampaignsIdPut(params: {
        id: number;
        campaign: Campaign;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Campaign>;
    /**
     *
     * Create Campaign
     * @param campaign
     */
    marketingCampaignsPost(params: {
        campaign: Campaign;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Campaign>;
}
export declare class GroupCompaniesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Marketing Company By Id
     * @param id
     * @param companyId
     */
    marketingGroupsIdCompaniesCompanyIdDelete(params: {
        id: number;
        companyId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Marketing Company By Id
     * @param id
     * @param companyId
     */
    marketingGroupsIdCompaniesCompanyIdGet(params: {
        id: number;
        companyId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingCompany>;
    /**
     *
     * Update Marketing Company
     * @param id
     * @param companyId
     * @param operations
     */
    marketingGroupsIdCompaniesCompanyIdPatch(params: {
        id: number;
        companyId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingCompany>;
    /**
     *
     * Replace Marketing Company
     * @param id
     * @param companyId
     * @param marketingCompany
     */
    marketingGroupsIdCompaniesCompanyIdPut(params: {
        id: number;
        companyId: number;
        marketingCompany: MarketingCompany;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingCompany>;
    /**
     *
     * Get Marketing Companys Count
     * @param id
     * @param conditions
     */
    marketingGroupsIdCompaniesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Marketing Companys
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingGroupsIdCompaniesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<MarketingCompany>>;
    /**
     *
     * Create Marketing Company
     * @param id
     * @param marketingCompany
     */
    marketingGroupsIdCompaniesPost(params: {
        id: number;
        marketingCompany: MarketingCompany;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingCompany>;
}
export declare class GroupContactsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Marketing Contact By Id
     * @param id
     * @param contactId
     */
    marketingGroupsIdContactsContactIdDelete(params: {
        id: number;
        contactId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Marketing Contact By Id
     * @param id
     * @param contactId
     */
    marketingGroupsIdContactsContactIdGet(params: {
        id: number;
        contactId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingContact>;
    /**
     *
     * Update Marketing Contact
     * @param id
     * @param contactId
     * @param operations
     */
    marketingGroupsIdContactsContactIdPatch(params: {
        id: number;
        contactId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingContact>;
    /**
     *
     * Replace Marketing Contact
     * @param id
     * @param contactId
     * @param marketingContact
     */
    marketingGroupsIdContactsContactIdPut(params: {
        id: number;
        contactId: number;
        marketingContact: MarketingContact;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingContact>;
    /**
     *
     * Get Marketing Contacts Count
     * @param id
     * @param conditions
     */
    marketingGroupsIdContactsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Marketing Contacts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingGroupsIdContactsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<MarketingContact>>;
    /**
     *
     * Create Marketing Contact
     * @param id
     * @param marketingContact
     */
    marketingGroupsIdContactsPost(params: {
        id: number;
        marketingContact: MarketingContact;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<MarketingContact>;
}
export declare class GroupsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Groups Count
     * @param conditions
     */
    marketingGroupsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Groups
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    marketingGroupsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Group>>;
    /**
     *
     * Delete Group By Id
     * @param id
     */
    marketingGroupsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Group By Id
     * @param id
     */
    marketingGroupsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Group>;
    /**
     *
     * Update Group
     * @param id
     * @param operations
     */
    marketingGroupsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Group>;
    /**
     *
     * Replace Group
     * @param id
     * @param group
     */
    marketingGroupsIdPut(params: {
        id: number;
        group: Group;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Group>;
    /**
     *
     * Create Group
     * @param group
     */
    marketingGroupsPost(params: {
        group: Group;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Group>;
}
